const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'bwn8xo',
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      this.screenshotOnRunFailure = true;
    },
  },
});
