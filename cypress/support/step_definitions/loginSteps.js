import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import PageClass from "../../pages/SpecPageClass";
const loginPage = new PageClass();
let date = new Date();
let userData;
beforeEach(() => {
  cy.visit("/");
  cy.fixture("spec").then((data) => {
    userData = data;
  });
  cy.pause();
});
Given("user is on login page", () => {
  //cy.visit("http://www.webdriveruniversity.com/");
  //   const loginPage = new PageClass();
  //   let date = new Date();
  //   let userData;
  //   beforeEach(() => {
  //     cy.visit("/");
  //     cy.fixture("spec").then((data) => {
  //       userData = data;
  //     });
  //     cy.pause();
  //   });
});

When("user enters username and password", () => {
  loginPage.getContactusPage();
  debugger;
  cy.url().should("include", "Contact-Us");
  loginPage.login(
    userData.firstName,
    userData.lastName,
    userData.eMail,
    userData.message,
  );
  cy.url().should("include", "webdriveruniversity");
});

Then("user should pick a date", () => {
  date.setDate(date.getDate());
  cy.log(date.getDate());
  date.setDate(date.getDate() + 5);
  cy.log(date.getDate());
  cy.log(date.getDate());
  cy.log(date.getDay());
  cy.log(date.getFullYear());
  cy.log(date.getHours());
  cy.log(date.getMonth());
  cy.log(date.getTime());
  cy.log(date.getUTCDate());
  cy.log(date.getMilliseconds());
});
