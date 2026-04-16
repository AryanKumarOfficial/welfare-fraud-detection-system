import joblib

income_scaler = joblib.load("models/income_scaler.pkl")
caste_scaler = joblib.load("models/caste_scaler.pkl")
caste_encoder = joblib.load("models/caste_encoder.pkl")
transaction_scaler = joblib.load("models/transaction_scaler.pkl")
medical_scaler = joblib.load("models/medical_scaler.pkl")

# INCOME PREPROCESS

def preprocess_income(data: dict):

    features = [
        data["income_in_rs"],
        data["land_owned_acres"],
        data["vehicles_owned"],
        data["electricity_consumption"],
        data["pending_loans"],
        data["business_ownership"]
    ]

    return income_scaler.transform([features])

# CASTE PREPROCESS

def preprocess_caste(data: dict):

    cat_input = [[data["caste"], data["father_caste"]]]
    cat_encoded = caste_encoder.transform(cat_input).toarray()

    num_features = [
        data["avg_caste_population_per"],
        data["officer_approvals_per_day"]
    ]

    final_features = list(num_features) + list(cat_encoded[0])

    return caste_scaler.transform([final_features])

# TRANSACTION PREPROCESS

def preprocess_transaction(data: dict):
    
    features = [
        data["weekly_spending"],
        data["monthly_spending"],
        data["transaction_count"],
        data["avg_transaction_value"],
        data["luxury_items_bought"],
        data["weekend_spending_ratio"]
    ]

    return transaction_scaler.transform([features])

# MEDICAL PREPROCESS

def preprocess_medical(data: dict):
 
    features = [
        data["hospital_visits_per_year"],
        data["claim_frequency"],
        data["medical_claim_amount"],
        data["avg_claim_amount"],
        data["chronic_disease"]
    ]

    return medical_scaler.transform([features])