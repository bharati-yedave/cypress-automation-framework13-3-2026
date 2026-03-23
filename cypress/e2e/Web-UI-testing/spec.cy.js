import PageClass from "../../pages/SpecPageClass";

describe("LOGIN scenario", () => {
  const loginPage = new PageClass();
  let date = new Date();
  let userData;
  beforeEach(() => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.fixture("spec").then((data) => {
      userData = data;
    });
  });
  it("should login successfully", () => {
    loginPage.getContactusPage();
    cy.url().should("include", "Contact-Us");
    //cy.visit("/login");
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
  });
});
