describe("API-calls", () => {
  it.skip("GET call", () => {
    cy.request("GET", "").then(() => {});
    cy.request({
      method: "",
      url: "",
      body: {
        name: "",
        email: "",
      },
      authorization: {},
    });
  });

  it("", () => {
    // ⚙️ 1️⃣ Basic Syntax
    cy.request(method, url, body);

    //OR (recommended full form):

    cy.request({
      method: "GET",
      url: "/api/users",
    });
    //📦 2️⃣ All Important Parameters
    cy.request({
      method: "GET", // HTTP method
      url: "/api/users", // API URL
      qs: { page: 1 }, // query params
      headers: {
        // headers
        Authorization: "Bearer token",
      },
      body: {
        // request body (POST/PUT)
        name: "Bharati",
      },
      auth: {
        // basic auth
        username: "admin",
        password: "1234",
      },
      timeout: 10000, // timeout
      followRedirect: true, // follow redirect
      failOnStatusCode: false, // don't fail test on error
    });
    //🔥 3️⃣ GET Request
    cy.request({
      method: "GET",
      url: "/api/users",
      qs: { page: 1 },
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.not.be.null;
    });
    //🔥 4️⃣ POST Request
    cy.request({
      method: "POST",
      url: "/api/users",
      body: {
        name: "Bharati",
        job: "QA",
      },
    }).then((res) => {
      expect(res.status).to.eq(201);
      expect(res.body.name).to.eq("Bharati");
    });
    //🔥 5️⃣ PUT Request
    cy.request({
      method: "PUT",
      url: "/api/users/1",
      body: {
        name: "Updated Name",
      },
    }).then((res) => {
      expect(res.status).to.eq(200);
    });
    //🔥 6️⃣ PATCH Request
    cy.request({
      method: "PATCH",
      url: "/api/users/1",
      body: {
        job: "Senior QA",
      },
    }).then((res) => {
      expect(res.status).to.eq(200);
    });
    //🔥 7️⃣ DELETE Request
    cy.request({
      method: "DELETE",
      url: "/api/users/1",
    }).then((res) => {
      expect(res.status).to.eq(204);
    });
    //🔐 8️⃣ With Headers (Token Auth)
    cy.request({
      method: "GET",
      url: "/api/users",
      headers: {
        Authorization: "Bearer your_token_here",
      },
    });
    //🔐 9️⃣ Basic Auth
    cy.request({
      method: "GET",
      url: "/api/secure",
      auth: {
        username: "admin",
        password: "1234",
      },
    });
    //🔥 🔟 Handle Negative Response
    cy.request({
      method: "GET",
      url: "/api/invalid",
      failOnStatusCode: false,
    }).then((res) => {
      expect(res.status).to.eq(404);
    });
    //🔄 1️⃣1️⃣ File Upload (API)
    cy.request({
      method: "POST",
      url: "/upload",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: {
        file: "file-data",
      },
    });
    //⏱️ 1️⃣2️⃣ Timeout Example
    cy.request({
      method: "GET",
      url: "/api/users",
      timeout: 20000,
    });
    //🧠 1️⃣3️⃣ Reusable Function (Best Practice 🔥)
  });
});
