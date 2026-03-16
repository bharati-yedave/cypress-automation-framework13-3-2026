describe("Testing ORANGEHRM Scenario", () => {
  it("Naigate to URL specs.cy.js", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
  });
});
