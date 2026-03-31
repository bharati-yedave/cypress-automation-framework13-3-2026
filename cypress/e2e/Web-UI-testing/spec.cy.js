import PageClass from "../../pages/SpecPageClass";

describe("LOGIN scenario", () => {
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
  it("should login successfully", () => {
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
  it("Datepicker", () => {
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
});
