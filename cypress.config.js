const { defineConfig } = require("cypress");
const mochawesome = require("cypress-mochawesome-reporter/plugin");
const { allureCypress } = require("allure-cypress/reporter");
const { queryDb } = require("./cypress/db/db");

import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

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
    experimentalStudio: true,
    baseUrl: "http://www.webdriveruniversity.com/",
    specPattern: "cypress/e2e",

    //features/**/*.feature",
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        }),
      );
      config.env.stepDefinitions = [
        "cypress/e2e/step_definitions/**/*.js",
        "cypress/support/step_definitions/**/*.js",
      ];
      // implement node event listeners here
      this.screenshotOnRunFailure = true;
      //mochawesome(on); //for  /*reporter: "cypress-mochawesome-reporter"*/
      //for allure
      allureCypress(on, config);
      config.experimentalCypressEnv = true;
      on("task", {
        queryDb: (query) => {
          return queryDb(query);
        },
      });

      return config;
    },
  },
});
