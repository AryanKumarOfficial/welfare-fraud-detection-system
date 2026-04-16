# 🧠 Welfare Fraud Detection System — UI Development Plan

## 🧩 Tech Stack

* Framework: Next.js (App Router)
* Styling: TailwindCSS (use tokens from globals.css)
* UI Library: shadcn/ui
* Animations: framer-motion
* Charts: Recharts
* Icons: lucide-react

---

# 📁 Project Structure

```
app/
  (public)/
    page.tsx
    schemes/
    analytics/

  (admin)/
    dashboard/
    applications/
    beneficiaries/
    schemes/

components/
  layout/
    navbar.tsx
    sidebar.tsx

  home/
    hero.tsx
    hero-analytics-preview.tsx
    stats.tsx
    scheme-grid.tsx
    scheme-card.tsx
    how-it-works.tsx
    risk-explanation.tsx
    cta.tsx

  admin/
    stats-cards.tsx
    fraud-table.tsx

  analytics/
    charts/
    graph-view.tsx
    anomaly-panel.tsx
```

---

# 🎨 Design Rules (STRICT)

* Use ONLY design tokens:

  * `bg-background`
  * `bg-card`
  * `text-foreground`
  * `text-muted-foreground`
  * `bg-primary`
  * `border-border`

* No:

  * gradients
  * pastel colors
  * hardcoded colors

* Radius:

  * `rounded-lg` only

* Shadows:

  * `shadow-sm` or `shadow`

---

# 🟢 PUBLIC ROUTES

## `/` → Landing Page

### Sections (in order)

---

## 1. Navbar

**Features:**

* Logo (left)
* Links:

  * Home
  * Schemes
  * Analytics
  * Admin
* Login Button

**Behavior:**

* Sticky
* Border bottom

---

## 2. Hero Section

**Layout:**

* Grid (2 columns desktop, 1 mobile)

**Left:**

* Heading:

  * “Detect Fraud. Protect Welfare.”
* Subtext:

  * AI-based fraud detection system
* Buttons:

  * Explore Schemes
  * View Analytics

**Right:**

* Analytics Preview Card:

  * Risk distribution bars
  * 2–3 stats

---

## 3. Stats Section

**Grid: 4 cards**

Cards:

* Total Beneficiaries
* Fraud Detected
* High Risk Users
* Active Schemes

---

## 4. Scheme Explorer

**Top:**

* Search Input
* Filters:

  * Scheme type
  * Risk level

**Grid:**

* Responsive (1 / 2 / 4 cols)

**Card Fields:**

* Title
* Description
* Risk Badge
* Button:

  * View Details

---

## 5. How It Works

**Steps:**

1. Data Collection
2. Data Preprocessing
3. ML Analysis
4. Risk Scoring
5. Fraud Detection
6. Admin Action

**Layout:**

* Horizontal (desktop)
* Vertical (mobile)

---

## 6. Risk Explanation

**Blocks:**

* Low Risk (green)
* Medium Risk (yellow)
* High Risk (red)

**Content:**

* Short explanation per level

---

## 7. CTA Section

* Title:

  * “Start Verifying Welfare Integrity”
* Buttons:

  * Check Eligibility
  * Go to Admin Dashboard

---

# 🟡 ADMIN ROUTES

## `/admin/dashboard`

### Layout

```
Sidebar | Main Content
```

---

## Components

### 1. Stats Cards

* Total Users
* High Risk Cases
* Fraud Detected
* Active Schemes

---

### 2. Risk Distribution Chart

* Pie / Bar chart
* Use:

  * chart-1 (green)
  * chart-2 (yellow)
  * chart-3 (red)

---

### 3. Recent Fraud Table

Columns:

* User
* Scheme
* Risk Score
* Status
* Action

Actions:

* Approve
* Reject

---

## `/admin/applications`

* Table with filters:

  * risk
  * scheme
* Row click → detail panel

---

## `/admin/beneficiaries`

* User Profile
* ML Scores:

  * income
  * caste
  * transaction
  * medical
* Overall Risk

---

## `/admin/schemes`

* Create / Edit scheme
* View enrollments
* Risk distribution

---

# 🔵 ANALYTICS ROUTES

## `/analytics`

### Sections

1. Risk Trend Chart (line)
2. Category Risk Breakdown
3. ML Explanation Panel

---

## `/analytics/graph`

* Fraud ring visualization
* Nodes = users
* Edges = relationships

---

## `/analytics/anomaly`

* Abnormal transactions
* Claim spikes
* Pattern detection

---

# 🟣 CONTROL ROOM (OPTIONAL)

## `/control-room`

* Assign investigation
* Mark fraud
* Export reports
* Logs

---

# ⚡ ANIMATION RULES

Use framer-motion:

* Fade-in:

```ts
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
```

* Stagger:

```ts
transition={{ staggerChildren: 0.1 }}
```

* Hover:

```ts
whileHover={{ scale: 1.02 }}
```

---

# 📱 RESPONSIVENESS

* Mobile-first
* Grid:

  * 1 col → mobile
  * 2 col → tablet
  * 4 col → desktop

---

# 🔥 BUILD ORDER (STRICT)

1. Navbar
2. Hero (with analytics preview)
3. Stats section
4. Scheme grid
5. Admin dashboard (basic)
6. Analytics (basic charts)

---

# 🧨 FINAL RULE

UI must show:

* system intelligence
* ML relevance
* decision-making capability

NOT:

* decorative design
* random UI components
