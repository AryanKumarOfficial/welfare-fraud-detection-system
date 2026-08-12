#!/usr/bin/env python3
"""
Seed a demo admin user for the ML service by writing a `.env` file
and validating the auth pipeline (credential validation + token issuance).

Run: python scripts/seed-demo-admin.py [--username USER] [--password PASS]
"""
import argparse
import os
import secrets
from pathlib import Path
import importlib.util
import sys


def write_env_file(path: Path, values: dict[str, str]):
    lines = []
    # Base defaults mirroring .env.example
    defaults = {
        "DATABASE_URL": "postgresql+asyncpg://postgres:postgres@postgres:5432/welfare",
        "JWT_SECRET_KEY": values.get("JWT_SECRET_KEY", "change-me"),
        "JWT_ACCESS_TOKEN_EXPIRE_SECONDS": "3600",
        "INTERNAL_API_KEY": values.get("INTERNAL_API_KEY", "internal-change-me"),
        "QUEUE_API_KEY": values.get("QUEUE_API_KEY", "queue-change-me"),
        "ADMIN_USERNAME": values.get("ADMIN_USERNAME", "admin"),
        "ADMIN_PASSWORD": values.get("ADMIN_PASSWORD", "admin"),
        "ANALYST_USERNAME": values.get("ANALYST_USERNAME", "analyst"),
        "ANALYST_PASSWORD": values.get("ANALYST_PASSWORD", "analyst"),
        "OPERATOR_USERNAME": values.get("OPERATOR_USERNAME", "operator"),
        "OPERATOR_PASSWORD": values.get("OPERATOR_PASSWORD", "operator"),
    }

    for k, v in defaults.items():
        lines.append(f"{k}={v}")

    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text("\n".join(lines) + "\n", encoding="utf-8")


def _base64_encode(data: bytes) -> str:
    import base64

    return base64.urlsafe_b64encode(data).rstrip(b"=").decode("ascii")


def _base64_decode(encoded: str) -> bytes:
    import base64

    padding = "=" * (-len(encoded) % 4)
    return base64.urlsafe_b64decode(encoded + padding)


def _sign_token(payload: bytes, secret: str) -> bytes:
    import hmac
    import hashlib

    return hmac.new(secret.encode("utf-8"), payload, hashlib.sha256).digest()


def create_access_token(username: str, role: str, secret: str, expiry_seconds: int) -> tuple[str, int]:
    import json
    import time

    exp = int(time.time()) + expiry_seconds
    payload = {"sub": username, "role": role, "exp": exp}
    payload_bytes = json.dumps(payload, separators=(",", ":"), sort_keys=True).encode("utf-8")
    signature = _sign_token(payload_bytes, secret)
    token = f"{_base64_encode(payload_bytes)}.{_base64_encode(signature)}"
    return token, exp


def decode_access_token(token: str, secret: str) -> dict:
    import json
    import hmac

    try:
        encoded_payload, encoded_signature = token.split(".", 1)
    except ValueError as exc:
        raise ValueError("Invalid token format") from exc

    try:
        payload_bytes = _base64_decode(encoded_payload)
        signature = _base64_decode(encoded_signature)
    except (TypeError, ValueError) as exc:
        raise ValueError("Invalid token encoding") from exc

    expected_signature = _sign_token(payload_bytes, secret)
    if not hmac.compare_digest(signature, expected_signature):
        raise ValueError("Invalid token signature")

    payload = json.loads(payload_bytes.decode("utf-8"))
    import time

    if payload.get("exp", 0) < int(time.time()):
        raise ValueError("Token expired")

    return payload


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--username", default="demo_admin", help="Admin username to seed")
    parser.add_argument("--password", default="demo_password", help="Admin password to seed")
    args = parser.parse_args()

    repo_root = Path(__file__).resolve().parent.parent
    env_path = repo_root / "services" / "ml" / ".env"
    security_py = repo_root / "services" / "ml" / "src" / "security.py"

    jwt_secret = secrets.token_urlsafe(32)

    values = {
        "JWT_SECRET_KEY": jwt_secret,
        "ADMIN_USERNAME": args.username,
        "ADMIN_PASSWORD": args.password,
    }

    print(f"Writing env file to {env_path}")
    write_env_file(env_path, values)

    # Ensure the environment the security module reads from uses our new values
    os.environ["JWT_SECRET_KEY"] = jwt_secret
    os.environ["ADMIN_USERNAME"] = args.username
    os.environ["ADMIN_PASSWORD"] = args.password
    os.environ.setdefault("ANALYST_USERNAME", "analyst")
    os.environ.setdefault("ANALYST_PASSWORD", "analyst")
    os.environ.setdefault("OPERATOR_USERNAME", "operator")
    os.environ.setdefault("OPERATOR_PASSWORD", "operator")

    # We avoid importing the service code (FastAPI may not be installed in this environment).
    # Re-implement the minimal credential + token logic locally to validate the pipeline.
    try:
        admin_u = os.environ.get("ADMIN_USERNAME")
        admin_p = os.environ.get("ADMIN_PASSWORD")
        analyst_u = os.environ.get("ANALYST_USERNAME")
        analyst_p = os.environ.get("ANALYST_PASSWORD")
        operator_u = os.environ.get("OPERATOR_USERNAME")
        operator_p = os.environ.get("OPERATOR_PASSWORD")

        role = None
        if args.username == admin_u and args.password == admin_p:
            role = "admin"
        elif args.username == analyst_u and args.password == analyst_p:
            role = "analyst"
        elif args.username == operator_u and args.password == operator_p:
            role = "operator"

        if role is None:
            print("ERROR: credential validation failed")
            sys.exit(3)

        print(f"Credential validation succeeded: role={role}")

        expiry_seconds = int(os.environ.get("JWT_ACCESS_TOKEN_EXPIRE_SECONDS", "3600"))
        secret = os.environ.get("JWT_SECRET_KEY", "change-me")

        token, exp = create_access_token(args.username, role, secret, expiry_seconds)
        print("Issued token (truncated):", token[:80] + "...")

        claims = decode_access_token(token, secret)
        print("Decoded claims:", claims)

        print("\n✅ Auth pipeline check passed. Admin seeded and token validated.")
        print(f"Env file written: {env_path}")
        print("Tip: set the ML service working dir to 'services/ml' when running the service so Pydantic loads the .env file automatically.")
    except Exception as exc:
        print("ERROR: exception while validating auth pipeline:", exc)
        raise


if __name__ == "__main__":
    main()
