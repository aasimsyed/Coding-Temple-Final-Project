# Coding Temple Final Project

Welcome to my Coding Temple Final Project repository. This project contains end-to-end (e2e) and API tests for the Contact List application.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Prerequisites](#prerequisites)
3. [Setup Instructions](#setup-instructions)
4. [Running the Tests](#running-the-tests)
5. [Project Structure](#project-structure)

## Project Overview

This project uses Cypress for e2e and API testing. The tests cover various scenarios to ensure the functionality and security of the Contact List application.

- **Application URL**: https://thinking-tester-contact-list.herokuapp.com/
- **API Documentation**: https://documenter.getpostman.com/view/4012288/TzK2bEa8

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 18 or later)
- npm (Node package manager)
- Git

## Setup Instructions

1. **Clone the Repository**

   Clone the repository to your local machine using the following command:

   ```bash
   git clone https://github.com/aasimsyed/Coding-Temple-Final-Project.git
   cd Coding-Temple-Final-Project
   ```

2. **Install Dependencies**

   Install the project dependencies using npm:

   ```bash
   npm install
   ```

3. **Install Cypress**

   Install the Cypress binary:

   ```bash
   npx cypress install
   ```

## Running the Tests

### Open Cypress Test Runner

To open the Cypress Test Runner in interactive mode:

```bash
npm run cypress:open
```

### Run All Cypress Tests

To run all Cypress tests in headless mode:

```bash
npm run cypress:run
```

### Run API Tests

To run only the API tests:

```bash
npm run test:api
```

### Run E2E Tests

To run only the end-to-end tests:

```bash
npm run test:e2e
```

## Project Structure

The Cypress project is organized as follows:

```bash
cypress
├── downloads
├── fixtures
│   └── validUser.json
├── integration
│   ├── api
│   │   ├── contacts.spec.js
│   │   └── user.spec.js
│   └── e2e
│       ├── page-objects
│       │   ├── AddContactPage.js
│       │   ├── AddUserPage.js
│       │   ├── BasePage.js
│       │   ├── ContactDetailsPage.js
│       │   ├── ContactListPage.js
│       │   └── LoginPage.js
│       └── tests
│           ├── addContact.spec.js
│           ├── addUser.spec.js
│           ├── contactDetails.spec.js
│           ├── contactList.spec.js
│           └── login.spec.js
├── screenshots
├── support
│   ├── commands.js
│   └── e2e.js
└── utils
    ├── contactUtils.js
    ├── contractLoader.js
    ├── contractNames.js
    ├── dataGenerator.js
    └── userUtils.js
```

### Key Files and Directories

- **`cypress/fixtures`**: Contains static data used in tests.
- **`cypress/integration`**: Contains the test files organized into `api` and `e2e` directories.
- **`cypress/plugins`**: Contains plugins for extending Cypress functionality.
- **`cypress/support`**: Contains custom commands and other support files.
- **`cypress/utils`**: Contains utility functions and helpers for tests.
- **`.github/workflows`**: Contains the GitHub Actions workflows for CI/CD.
