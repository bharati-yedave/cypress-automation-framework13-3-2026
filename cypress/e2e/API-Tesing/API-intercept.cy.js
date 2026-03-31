describe("cy.intercept scenarios", () => {
  it("cy.intercept test", () => {
    //  ⚙️ 1️⃣ Basic Syntax
    cy.intercept(method, url);

    //OR (recommended full form):

    cy.intercept({
      method: "GET",
      url: "/api/users",
    });
    //📦 2️⃣ All Important Parameters
    cy.intercept(
      {
        method: "GET", // HTTP method
        url: "/api/users", // API URL
        pathname: "/api/users", // path only
        query: { page: 1 }, // query params
        headers: {
          // request headers
          Authorization: "Bearer token",
        },
        times: 1, // how many times to intercept
      },
      (req) => {
        req.reply({
          // mock response
          statusCode: 200,
          body: [{ name: "Bharati" }],
          headers: { "x-test": "true" },
          delay: 1000, // delay response
        });
      },
    );
    //🔥 3️⃣ GET Intercept
    cy.intercept("GET", "/api/users").as("getUsers");

    cy.visit("/users");

    cy.wait("@getUsers");
    //🔥 4️⃣ POST Intercept
    cy.intercept("POST", "/login").as("loginAPI");

    cy.get("#loginBtn").click();

    cy.wait("@loginAPI");
    //🔥 5️⃣ PUT / PATCH / DELETE
    cy.intercept("PUT", "/api/users/*").as("updateUser");

    cy.intercept("PATCH", "/api/users/*").as("patchUser");

    cy.intercept("DELETE", "/api/users/*").as("deleteUser");
    //🔥 6️⃣ Validate Request
    cy.wait("@loginAPI").then((req) => {
      expect(req.request.body.username).to.eq("admin");
    });
    //🔥 7️⃣ Validate Response
    cy.wait("@getUsers").then((res) => {
      expect(res.response.statusCode).to.eq(200);
    });
    //🔥 8️⃣ Mock API Response
    cy.intercept("GET", "/api/users", {
      statusCode: 200,
      body: [{ name: "Mock User" }],
    }).as("mockUsers");
    //🔥 9️⃣ Modify Request
    cy.intercept("POST", "/login", (req) => {
      req.body.username = "modifiedUser";
    });
    //🔥 🔟 Modify Response
    cy.intercept("GET", "/api/users", (req) => {
      req.continue((res) => {
        res.body[0].name = "Modified Name";
      });
    });
    //🔥 1️⃣1️⃣ Use Fixture (Best Practice 🔥)
    cy.intercept("GET", "/api/users", {
      fixture: "users.json",
    }).as("fixtureUsers");
    //🔥 1️⃣2️⃣ Delay / Slow Network
    cy.intercept("GET", "/api/users", {
      delay: 3000,
    });
    //🔥 1️⃣3️⃣ Handle Query Params
    cy.intercept({
      method: "GET",
      url: "/api/users",
      query: { page: "1" },
    }).as("filteredUsers");
    //🔥 1️⃣4️⃣ Wildcard Matching
    cy.intercept("GET", "**/users*").as("users");
    //🔥 1️⃣5️⃣ Limit Calls
    cy.intercept("GET", "/api/users", { times: 1 });
    //🔥 1️⃣6️⃣ Full Example (Best Practice)
    cy.intercept("GET", "/api/dashboard").as("dashboard");

    cy.visit("/dashboard");

    cy.wait("@dashboard").then((res) => {
      expect(res.response.statusCode).to.eq(200);
    });

    cy.get(".title").should("be.visible");
    //⚠️ Important Rules

    //✔️ Define intercept before action

    // ✅ correct
    cy.intercept("GET", "/api").as("api");
    cy.visit("/page");

    // ❌ wrong
    cy.visit("/page");
    cy.intercept("GET", "/api");
  });
});
