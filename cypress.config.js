const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      contactListUrl: 'https://thinking-tester-contact-list.herokuapp.com'
    },
    chromeWebSecurity: false,
    supportFile: 'cypress/support/commands.js',
    specPattern: [
      'cypress/integration/e2e/**/*.spec.js',
      'cypress/integration/api/**/*.spec.js'
    ],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
