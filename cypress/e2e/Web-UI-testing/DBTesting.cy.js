describe("DB Testing", () => {
  it("Validate data from database", () => {
    cy.task("queryDb", "SELECT * FROM Users").then((result) => {
      expect(result.length).to.be.greaterThan(0);
      expect(result[0]).to.have.property("name");
    });
  });
});
