# Welfare Fraud Detection ML

## Overview

This project implements a machine learning system to detect fraudulent welfare claims. The model analyzes applicant data and predicts whether a claim is genuine or fraudulent. The goal is to assist in reducing misuse of welfare resources.

---

## Features

* Data preprocessing and cleaning
* Machine learning model training
* Fraud prediction for new data
* Structured and modular codebase

---

## Project Structure

```
fraud-detection-ml/
│── src/
│   ├── train.py        # Model training
│   ├── predict.py      # Prediction script
│   ├── preprocess.py   # Data preprocessing
│   ├── app.py          # Main entry point
│
│── data/               # Dataset
│── models/             # Trained model files
│
│── requirements.txt
│── README.md
│── .gitignore
```

---

## Dataset

The dataset used for training and testing is available in the `data/` directory.

---

## Model

Trained model files are stored in the `models/` directory and are used during prediction.

---

## Installation and Setup

### 1. Clone the repository

```
git clone <repo-url>
cd apps/fraud-detection-ml
```

### 2. Create a virtual environment

```
python -m venv .venv
source .venv/bin/activate   # Linux/Mac
.venv\Scripts\activate      # Windows
```

### 3. Install dependencies

```
pip install -r requirements.txt
```

---

## Training the Model

To train the model, run:

```
python src/train.py
```

This will:

* Load the dataset from the `data/` directory
* Train the machine learning model
* Save the trained model in the `models/` directory

---

## Making Predictions

To make predictions, run:

```
python src/predict.py
```

Ensure that the trained model exists in the `models/` directory before running this step.

---

## Common Issues

### Model not found

If the model file is missing, run:

```
python src/train.py
```

### Dataset not found

Ensure the dataset is present inside the `data/` directory.

---

## Tech Stack

* Python
* Pandas
* NumPy
* Scikit-learn

---

## Author

Veer Singh Chauhan
