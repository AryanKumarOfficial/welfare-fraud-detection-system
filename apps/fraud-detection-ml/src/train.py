import pandas as pd
import numpy as np
import joblib
import os


from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.ensemble import IsolationForest

os.makedirs("models", exist_ok=True)

# INCOME MODEL

def train_income():
    df = pd.read_csv("data/income.csv")
    
    X = df.drop(columns=["user_id"])
    
    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(X)
    
    model = IsolationForest(
        n_estimators=100,
        contamination=0.05,
        random_state=42
    )
    
    model.fit(X_scaled)
    income_scores = model.decision_function(X_scaled)
    income_min = income_scores.min()
    income_max = income_scores.max()
    
    joblib.dump((income_min, income_max), "models/income_minmax.pkl")
    joblib.dump(model, "models/income_model.pkl")
    joblib.dump(scaler, "models/income_scaler.pkl")
    
    print("Income model trained and saved")

# CASTE MODEL

def train_caste():
    df = pd.read_csv("data/caste.csv")
    
    df = df.drop(columns=["user_id", "district", "state"])
    
    cat_cols = ["caste", "father_caste"]
    
    encoder = OneHotEncoder(handle_unknown="ignore")
    encoded = encoder.fit_transform(df[cat_cols])
    
    encoded_df = pd.DataFrame(
        encoded.toarray(),
        columns=encoder.get_feature_names_out(cat_cols),
        index=df.index
    )
    
    df = pd.concat([df.drop(columns=cat_cols), encoded_df], axis=1)
    
    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(df)
    
    model = IsolationForest(
        n_estimators=100,
        contamination=0.04,
        random_state=42
    )
    
    model.fit(X_scaled)
    
    caste_scores = model.decision_function(X_scaled)

    caste_min = caste_scores.min()
    caste_max = caste_scores.max()

    joblib.dump((caste_min, caste_max), "models/caste_minmax.pkl")
    
    joblib.dump(model, "models/caste_model.pkl")
    joblib.dump(scaler, "models/caste_scaler.pkl")
    joblib.dump(encoder, "models/caste_encoder.pkl")
    
    print("Caste model trained and saved")

# TRANSACTION MODEL

def train_transaction():
    df = pd.read_csv("data/transaction.csv")
    
    X = df.drop(columns=["user_id"])
    
    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(X)
    
    model = IsolationForest(
        n_estimators=100,
        contamination=0.036,
        random_state=42
    )
    
    model.fit(X_scaled)
    
    transaction_scores = model.decision_function(X_scaled)

    txn_min = transaction_scores.min()
    txn_max = transaction_scores.max()

    joblib.dump((txn_min, txn_max), "models/transaction_minmax.pkl")
    
    joblib.dump(model, "models/transaction_model.pkl")
    joblib.dump(scaler, "models/transaction_scaler.pkl")
    
    print("Transaction model trained and saved")

# MEDICAL MODEL

def train_medical():
    df = pd.read_csv("data/medical.csv")
    
    X = df.drop(columns=["user_id", "hospital_type"])
    
    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(X)
    
    model = IsolationForest(
        n_estimators=100,
        contamination=0.036,
        random_state=42
    )
    
    model.fit(X_scaled)
    
    medical_scores = model.decision_function(X_scaled)

    med_min = medical_scores.min()
    med_max = medical_scores.max()
    
    joblib.dump((med_min, med_max), "models/medical_minmax.pkl")
    
    joblib.dump(model, "models/medical_model.pkl")
    joblib.dump(scaler, "models/medical_scaler.pkl")
    
    print("Medical model trained and saved")

# MAIN FUNCTION

if __name__ == "__main__":
    train_income()
    train_caste()
    train_transaction()
    train_medical()
    
    print("\n All models trained successfully!")