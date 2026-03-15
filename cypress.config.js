const { defineConfig } = require("cypress");
const mochawesome = require("cypress-mochawesome-reporter/plugin");
//const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  retries: {
    runMode: 2,
    openMode: 0,
  },
  projectId: "hudznz",
  allowCypressEnv: true, //make it false fpor allure
  // mochawesome reports
  // reporter: "mochawesome",
  // reporterOptions: {
  //   reportDir: "cypress/reports/mochawesome",
  //   overwrite: false,
  //   html: true,
  //   json: true,
  //},
  //cypress-mochawesome-reporter
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports/cypress-mochawesome-reporter",
    charts: true,
    overwrite: true,
    reportPageTitle: "Automation Test Report",
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  //Allure report
  // env: {
  //   allure: true,
  // },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      this.screenshotOnRunFailure = true;
      mochawesome(on); //for  /*reporter: "cypress-mochawesome-reporter"*/
      //for allure
      // allureCypress(on, config);
      // config.experimentalCypressEnv = true;
      // return config;
    },
  },
});
