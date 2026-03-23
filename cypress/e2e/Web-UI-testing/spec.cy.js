import PageClass from "../../pages/SpecPageClass";

describe("LOGIN scenario", () => {
  const loginPage = new PageClass();
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
});
