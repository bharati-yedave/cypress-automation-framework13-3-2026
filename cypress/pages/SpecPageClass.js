class PageClass {
  // Locators
  firstNameInput = "input[name = 'first_name']";
  lastNameInput = "input[name = 'last_name']";
  emailInput = "input[name = 'email']";
  messageInput = "textarea[name = 'message']";
  loginButton = "input[value = 'SUBMIT']";

  // Actions

  getContactusPage() {
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
  }

  enterfirstName(firstName) {
    cy.get(this.firstNameInput).type(firstName);
  }

  enterlastName(lastName) {
    cy.get(this.lastNameInput).type(lastName);
  }

  enterEmail(eMail) {
    cy.get(this.emailInput).type(eMail);
  }

  enterMessage(message) {
    cy.get(this.messageInput).type(message);
  }

  clickLogin() {
    cy.get(this.loginButton).click();
  }

  login(firstName, lastName, eMail, message) {
    this.enterfirstName(firstName);
    this.enterlastName(lastName);
    this.enterEmail(eMail);
    this.enterMessage(message);
    this.clickLogin();
  }
}
export default PageClass;
