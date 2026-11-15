# Demo Web Shop Automation Testing

An end-to-end web application automation testing project using **Playwright, JavaScript, Page Object Model (POM), and Allure Reporting**.

**Repository:** [demowebshop-automation](https://github.com/tumpa15/demowebshop-automation)

## 1. Project Overview

This project focuses on automating important user workflows of the Demo Web Shop application.

The automation suite covers:

- User Registration
- User Login and Invalid Login
- Product Purchase
- Shopping Cart Management
- Checkout Process
- Registration and Cart Workflow

The project follows the Page Object Model (POM) design pattern to improve code reusability, maintainability, and readability.

## 2. Technology Stack

| Technology        | Purpose                     |
| ----------------- | --------------------------- |
| JavaScript        | Programming Language        |
| Playwright        | Web UI Automation           |
| Node.js           | Runtime Environment         |
| npm               | Package Management          |
| Page Object Model | Automation Framework Design |
| Allure            | Test Reporting              |
| Git & GitHub      | Version Control             |

## 3. Project Structure

```text
demowebshop-automation/
│
├── pages/
│   ├── BasePage.js
│   ├── HomePage.js
│   ├── LoginPage.js
│   ├── RegisterPage.js
│   ├── ProductPage.js
│   ├── SearchPage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
│
├── tests/
│   ├── registration.spec.js
│   ├── invalidLogin.spec.js
│   ├── purchase-product.spec.js
│   ├── cart.spec.js
│   ├── checkout.spec.js
│   ├── register-cart.spec.js
│   └── sample.spec.js
│
├── playwright.config.js
├── package.json
├── package-lock.json
└── README.md
```

## 4. Installation & Setup

**Prerequisites:**

- Node.js
- npm
- Visual Studio Code
- Git

**Step 1: Clone the repository**

```bash
git clone https://github.com/tumpa15/demowebshop-automation.git
```

**Step 2: Navigate to the project**

```bash
cd demowebshop-automation
```

**Step 3: Install dependencies**

```bash
npm install
```

**Step 4: Install Playwright Chromium browser**

```bash
npx playwright install chromium
```

## 5. Test Execution

### Run Individual Test Scenarios

**1. User Registration**

```bash
npx playwright test tests/registration.spec.js
```

**2. Invalid Login**

```bash
npx playwright test tests/invalidLogin.spec.js
```

**3. Product Purchase**

```bash
npx playwright test tests/purchase-product.spec.js
```

**4. Shopping Cart**

```bash
npx playwright test tests/cart.spec.js
```

**5. Checkout Process**

```bash
npx playwright test tests/checkout.spec.js
```

**6. Registration and Cart Workflow**

```bash
npx playwright test tests/register-cart.spec.js
```

**7. Sample Test**

```bash
npx playwright test tests/sample.spec.js
```

### Run All Test Scenarios Together

```bash
npx playwright test
```

### Run Tests in Headed Mode

```bash
npx playwright test --headed
```

## 6. Test Reports

This project uses Allure for detailed test reporting.

**Generate Allure Report**

```bash
npx allure generate allure-results --clean -o allure-report
```

**Open Allure Report**

```bash
npx allure open allure-report
```

The Allure report provides:

- Test execution summary
- Passed and failed test cases
- Test suite details
- Execution duration
- Test steps and results

## 7. Screenshots

![alt text](<Screenshot 2026-11-15 230743.png>)

## 8. Framework Highlights

- Page Object Model (POM) architecture
- Reusable page classes and methods
- Organized test scenarios
- Centralized Playwright configuration
- Automated HTML and Allure reporting
- Screenshot, trace, and video capture on test failures

## 9. Author

**Antara Aditya**

