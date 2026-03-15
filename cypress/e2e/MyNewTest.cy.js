describe("Testing ORANGEHRM Scenario", () => {
  it("NAvigate to URL", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
  });
});
