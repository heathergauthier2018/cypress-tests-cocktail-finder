# 🍸 Automated UI Testing Suite – Cocktail Finder (Cypress E2E)

This project is a complete end-to-end (E2E) UI automation test suite for my **Cocktail Finder** web application, built using Cypress and designed to validate core user journeys in a fully automated and repeatable way.

It serves as both a professional portfolio project and a realistic front-end regression suite for the live deployed application.

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

This E2E suite showcases professional UI automation skills, including:

### 🧪 Test Design & Coverage
- Verification of three core user journeys:
  - **Random cocktail flow** – Validate random drink generation and content rendering.
  - **Search flow** – Validate searching by name, displaying accurate results, and verifying UI content.
  - **Favorites flow** – Validate adding/removing favorites using a localStorage-backed state.
- Page-flow-driven test structuring
- Clean and readable Cypress commands & assertions
- Stable automation through **data-testid** selectors
- Automated failure-resistant interactions (scrolling, force-clicking, element targeting)

### 🎯 Good Testing Practices
- Selector isolation using `data-testid` for stability  
- Clear arrange → act → assert structure  
- User-driven testing approach  
- Assertions based on visible UI elements and stored application state  
- Idempotent tests ensuring the UI returns to a clean state every run  

### 🤖 CI-Ready Automation
- GitHub Actions workflow prepared for headless Cypress execution  
- Ideal for automated regression testing and portfolio demonstration  

---

## 🧱 Tech Stack

- **Cypress 15** – End-to-end browser automation framework  
- **JavaScript** – Test language  
- **Node.js + npm** – Dependency management  
- **GitHub Actions** – Continuous integration  

---

## 📂 Project Structure

```
cypress-tests-cocktail-finder/
├─ cypress/
│  ├─ e2e/
│  │  ├─ favorites.cy.js      # Favorites flow test
│  │  ├─ random.cy.js         # Random cocktail test
│  │  └─ search.cy.js         # Search flow test
│  └─ support/
│     ├─ commands.js
│     └─ e2e.js
├─ .github/
│  └─ workflows/
│     └─ cypress.yml          # GitHub Actions workflow for headless runs
├─ cypress.config.js          # Cypress configuration (baseUrl, spec pattern)
├─ package.json               # Scripts & dependencies
└─ README.md
```

---

## 🧪 Test Coverage

This suite validates the core user experiences of the Cocktail Finder UI.

---

## 1️⃣ Random Cocktail Flow — `random.cy.js`

**Goal:** Verify a random cocktail loads and renders correctly.

### High-Level Scenario
1. Visit the home page  
2. Click **“New Drink”**  
3. Assert:
   - The drink name is visible  
   - The drink image is visible  
   - The instructions panel exists  

### Key Assertions
- Status and presence of UI elements  
- Image loads successfully  
- Instructions text is not empty  

---

## 2️⃣ Search Flow — `search.cy.js`

**Goal:** Verify searching by cocktail name loads correct results.

### High-Level Scenario
1. Enter a query (e.g., `"margarita"`)  
2. Submit the search  
3. Assert:
   - Results appear  
   - At least one cocktail name contains the search term  
   - Each result card contains name + category + image  

### Key Assertions
- Uses `data-testid="cocktail-card"` for stable targeting  
- Case-insensitive name matching  
- Ensures results > 0  

---

## 3️⃣ Favorites Flow — `favorites.cy.js`

**Goal:** Validate adding and removing favorites using the UI and localStorage.

### High-Level Scenario
1. Perform a search  
2. Choose the first cocktail  
3. Click **Save**  
4. Open Favorites section  
5. Assert:
   - The saved cocktail is listed  
6. Remove the favorite  
7. Assert:
   - Favorites list updates to zero  

### Stability Enhancements
- Automatic scrolling to ensure the Remove button is clickable  
- LocalStorage validation  
- Element scoping using `.closest()` for precise targeting  

---

## ▶️ Running Tests Locally

### 1. Install dependencies
```
npm install
```

### 2. Open Cypress in interactive mode
```
npm run cy:open
```

### 3. Run all tests in headless mode (CI-style)
```
npm test
```

---

## 🤖 GitHub Actions CI

Workflow file:  
```
.github/workflows/cypress.yml
```

### Pipeline Steps
1. Install Node  
2. Install dependencies  
3. Run Cypress tests in headless mode  
4. Provide test results in CI UI  

This enables automated regression validation on every commit or pull request.

---

## 🔗 Related Projects

### **Cocktail Finder Front-End Application**  
The UI under test.  
https://heathergauthier2018.github.io/cocktail-finder2.0/

### **Companion API Test Suite (Postman + Newman)**
Automated API regression tests for the same application.
https://github.com/heathergauthier2018/api-testing-postman-newman

---

## 👩‍💻 Author

**Heather Gauthier**  
QA Automation • UI Testing • Software Engineering Student  
GitHub: https://github.com/heathergauthier2018
