# WebDriverIO E2E Testing Portfolio

A collection of my end-to-end testing projects demonstrating my knowledge in test automation using WebDriverIO. This portfolio showcases testing scenarios across different applications and websites.

---

### To run the tests:

**1. Clone the repository:**

   git clone https://github.com/Vivien9964/testing.git
   
   cd testing

**2. Install dependencies for each project:**

   ### EPAM Final Task

   cd wdio-epam-final-task

   npm install

   ### Amazon Tests

   cd ../wdio-amazon-test
   npm install

   ### E-commerce Tests

   cd ../wdio-ecommerce-tests
   npm install

**3. Run the tests:**

### EPAM Final Task

cd wdio-epam-final-task

### Run all Final Task tests

npm test

### Run specific Final Task test suites

npm run test:login 

npm run test:saucelabs 

---

### Amazon Tests

cd wdio-amazon-test

### Run all Amazon tests

npm test

### Run specific Amazon test suites

npm run test:home

npm run test:cart

---

### E-commerce Tests

cd wdio-ecommerce-tests

### Run all E-commerce tests

npm test

### Run specific E-commerce test suites

npm run test:login

npm run test:products

---

### Technologies

- **WebDriverIO v9**: Browser automation framework
- **Mocha**: JavaScript test framework
- **Node.js**: Runtime environment with ES6+ modules

### Design Patterns & Best Practices

- **Page Object Model (POM)**: Maintainable and reusable page classes
- **Async/Await**: Modern JavaScript async handling
- **ES6 Modules**: Modern import/export syntax

### Testing Concepts

- **Error Handling**: Comprehensive validation scenarios
- **Data-driven Testing**: Multiple user scenarios and product interactions

---

## Repository Overview

This repository contains three different testing projects, each targeting different applications and demonstrating specific testing concepts:

1. **wdio-epam-final-task** - EPAM Training Final Project
2. **wdio-amazon-test** - Amazon E-commerce Testing
3. **wdio-ecommerce-tests** - SauceDemo Application Testing

---

## Projects Description

### 1. EPAM Training Final Task

**Purpose**: Final project for EPAM training program demonstrating E2E testing skills.

**Applications Under Test**:

- SauceDemo login functionality
- SauceLabs website navigation

**Features**:

- Login validation with multiple user scenarios
- Error handling for locked out users
- Navigation flow testing
- Cross-site testing capabilities

**Technologies**: WebDriverIO v9, Mocha, Page Object Model

**Testing Summary**:

- **Status**: 7/7 tests passing
- **Coverage**: Login validation, error handling, navigation flows
- **Highlights**: Complete SauceDemo and SauceLabs integration

---

### 2. Amazon E-commerce Testing

**Purpose**: Personal project testing Amazon's e-commerce functionality with focus on shopping workflows.

**Test Coverage**:

- Homepage validation and search functionality
- Product search with auto-suggestions
- Shopping cart operations
- Price verification and quantity updates

**Features**:

- Complete Page Object Model implementation
- Dynamic product selection
- Cart flow validation
- Price consistency verification

**Technologies**: WebDriverIO v9, Mocha, Page Object Model, Advanced Selectors

**Testing Summary**:

- **Status**: 3/5 tests passing
- **Coverage**: Homepage validation, search functionality
- **Note**: Some cart tests may need timing adjustments for dynamic content

---

### 3. SauceDemo E-commerce Tests

**Purpose**: Personal project focused on e-commerce application testing.

**Test Coverage**:

- User authentication and authorization
- Product catalog management
- Shopping cart functionality
- Product sorting and filtering

**Features**:

- Advanced cart manipulation
- Dynamic product addition/removal
- Sorting validation (A-Z, Z-A, Price)
- Product card structure validation
- Multi-product cart operations

**Technologies**: WebDriverIO v9, Mocha, Page Object Model, Dynamic Element Handling

**Testing Summary**:

- **Status**: 14/17 tests passing
- **Coverage**: Login validation, product sorting, cart operations
- **Note**: Some advanced cart state tests may need adjustments


