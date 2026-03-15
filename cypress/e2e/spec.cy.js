describe("Testing ORANGEHRM Scenario", () => {
  it("Nvigate to URL specs.cy.js", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
  });
});
