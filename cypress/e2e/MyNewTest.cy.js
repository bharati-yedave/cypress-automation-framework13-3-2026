describe("Testing ORANGEHRM Scenario", () => {
  it("Navigate to URL", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
  });
});
