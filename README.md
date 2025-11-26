# 🍸 Automated UI Testing Suite – Cocktail Finder (Cypress E2E)

This project is a complete end-to-end (E2E) UI automation test suite for my **Cocktail Finder** web application, built using Cypress and designed to validate core user journeys in a fully automated and repeatable way.

It serves as both a **professional portfolio project** and a **realistic front-end regression suite** for the live deployed application.

---

## 🌐 Application Under Test

All tests target the deployed Cocktail Finder application:

```
https://heathergauthier2018.github.io/cocktail-finder2.0/
```

This URL is configured as the `baseUrl` in `cypress.config.js`, allowing each spec to simply call:

```js
cy.visit('/');
```

---

## ✨ What This Project Demonstrates

This E2E suite showcases job-ready UI automation skills, including:

### 🧪 Test Design & Coverage
- Verification of **four** core user journeys:
  - **Random cocktail flow** – Validates random drink generation & UI rendering.
  - **Search flow** – Validates the search experience + result accuracy.
  - **Favorites flow** – Validates persistent favorites via `localStorage`.
  - **Layout & Navigation Smoke Test (NEW)** – Verifies basic UI structure on desktop + mobile.
- Stable automation through **data-testid** selectors.
- Clean, readable custom commands and test patterns.
- Assertions against UI state AND application storage state.

### 🎯 Good Testing Practices
- Selector isolation using `data-testid`
- Arrange → Act → Assert flow
- Idempotent + environment-independent tests
- Real browser verification of user paths
- Complementary to the backend API tests in my Postman/Newman suite

### 🤖 CI-Ready Automation
- Fully configured **GitHub Actions** workflow for headless Cypress execution  
- Automatically runs on each push to the repository  
- CI output includes screenshots and videos on failure  

---

## 🧱 Tech Stack

- **Cypress 15**  
- **JavaScript**  
- **Node.js + npm**  
- **GitHub Actions**  

---

## 📂 Project Structure

```
cypress-tests-cocktail-finder/
├─ cypress/
│  ├─ e2e/
│  │  ├─ random.cy.js           # Random cocktail flow
│  │  ├─ search.cy.js           # Search flow
│  │  ├─ favorites.cy.js        # Favorites + localStorage flow
│  │  └─ layout.smoke.cy.js     # NEW – UI smoke test (desktop + mobile)
│  ├─ fixtures/                 # Optional sample data (future expansion)
│  └─ support/
│     ├─ commands.js            # Custom commands (visitApp, searchFor, addFavorite)
│     └─ e2e.js
├─ .github/
│  └─ workflows/
│     └─ cypress.yml            # GitHub Actions workflow
├─ cypress.config.js
├─ package.json
└─ README.md
```

---

# 🧪 Test Coverage

This suite validates the full end-to-end user experience—rendering, navigation, searching, and persistent favorites.

---

## 1️⃣ Layout & Navigation Smoke Test — `layout.smoke.cy.js` (NEW)

**Goal:** Quickly verify that the key UI structure loads in both desktop and mobile layouts.

### What It Checks
- Desktop viewport (1280×720)
- Mobile viewport (375×667)
- Main heading + buttons visible
- Random cocktail card renders:
  - Name
  - Image
  - Instructions
- Navigation and interactive elements present  

This test ensures the UI is fundamentally working before deeper flows run.

---

## 2️⃣ Random Cocktail Flow — `random.cy.js`

**Goal:** Validate random cocktail loading and rendering.

### Scenario
1. Visit homepage  
2. Click **“New Drink”**  
3. Assert:
   - Name is visible  
   - Image loads  
   - Instructions are non-empty  

### Highlights
- Verifies real API → UI flow  
- Uses stable `data-testid` selectors  

---

## 3️⃣ Search Flow — `search.cy.js`

**Goal:** Validate cocktail search behavior.

### Scenario
1. Enter a term like `"margarita"`  
2. Submit search  
3. Assert:
   - At least one result  
   - Results contain correct name & details  
   - UI cards render consistently  

### Highlights
- Case-insensitive validation  
- Partial-match support  
- Uses `data-testid="drink-card"`  

---

## 4️⃣ Favorites Flow — `favorites.cy.js`

**Goal:** Validate favorites functionality and persistence.

### Scenario
1. Perform a search  
2. Add a drink to favorites  
3. Go to favorites  
4. Validate it appears  
5. Remove it  
6. Validate it disappears  
7. Validate `localStorage` reflects changes  

### Highlights
- Full UI → localStorage → UI loop validation  
- Scroll + visibility handling  
- Scoped element targeting  

---

# ▶️ Running Tests Locally

### 1. Install dependencies
```
npm install
```

### 2. Open Cypress GUI
```
npm run cy:open
```

### 3. Run headless (CI-style)
```
npm test
```

---

# 🤖 GitHub Actions CI

Workflow file:  
```
.github/workflows/cypress.yml
```

### CI Pipeline Steps
1. Install Node  
2. Install npm dependencies  
3. Run headless Cypress tests  
4. Upload failure artifacts (screenshots & videos)  

### View CI Runs  
https://github.com/heathergauthier2018/cypress-tests-cocktail-finder/actions

CI ensures full UI regression checks on every commit.

---

# 🔗 Related Projects

### **Cocktail Finder Front-End Application**  
The UI under test:  
https://heathergauthier2018.github.io/cocktail-finder2.0/

### **Companion API Test Suite (Postman + Newman)**  
Backend API contract testing for the same app:  
https://github.com/heathergauthier2018/api-testing-postman-newman

---

## 👩‍💻 Author

**Heather Gauthier**  
Software Engineering Student • QA Automation • UI Testing  
GitHub: https://github.com/heathergauthier2018
