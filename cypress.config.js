const { defineConfig } = require("cypress");
const mochawesome = require("cypress-mochawesome-reporter/plugin");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  pageLoadTimeout: 60000,
  retries: {
    runMode: 2,
    openMode: 0,
  },
  video: true,
  projectId: "hudznz",
  allowCypressEnv: true, //make it false fpor allure
  // mochawesome reports
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: false,
    json: true,
  },
  //cypress-mochawesome-reporter
  // reporter: "cypress-mochawesome-reporter",
  // reporterOptions: {
  //   reportDir: "cypress/reports",
  //   charts: true,
  //   overwrite: true,
  //   reportPageTitle: "Automation Test Report",
  //   embeddedScreenshots: true,
  //   inlineAssets: true,
  // },
  //Allure report
  env: {
    allure: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      baseUrl: ("http://www.webdriveruniversity.com/",
        // implement node event listeners here
        (this.screenshotOnRunFailure = true));
      //mochawesome(on); //for  /*reporter: "cypress-mochawesome-reporter"*/
      //for allure
      allureCypress(on, config);
      config.experimentalCypressEnv = true;
      return config;
    },
  },
});
