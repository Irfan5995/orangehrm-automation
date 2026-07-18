import LoginPage from "../pages/LoginPage";

describe("OrangeHRM - Login Feature", () => {

    beforeEach(() => {
        LoginPage.visit();
    });

    // ==========================================
    // TC01 - Login dengan username & password valid
    // ==========================================
    it("TC01 - Login dengan username dan password valid", () => {

        cy.intercept("POST", "**/auth/validate").as("loginRequest");

        LoginPage.login("Admin", "admin123");

        cy.wait("@loginRequest")
            .its("response.statusCode")
            .should("eq", 302);

        cy.url().should("include", "dashboard");

        LoginPage.dashboardTitle()
            .should("contain", "Dashboard");
    });

    // ==========================================
    // TC02 - Username kosong
    // ==========================================
    it("TC02 - Username kosong", () => {

        LoginPage.login(null, "admin123");

        LoginPage.requiredMessage()
            .should("contain", "Required");
    });

    // ==========================================
    // TC03 - Password kosong
    // ==========================================
    it("TC03 - Password kosong", () => {

        LoginPage.login("Admin", null);

        LoginPage.requiredMessage()
            .should("contain", "Required");
    });

    // ==========================================
    // TC04 - Username dan Password kosong
    // ==========================================
    it("TC04 - Username dan Password kosong", () => {

        LoginPage.login(null, null);

        LoginPage.requiredMessage()
            .should("have.length", 2);
    });

    // ==========================================
    // TC05 - Username salah
    // ==========================================
    it("TC05 - Username salah", () => {

        cy.intercept("POST", "**/auth/validate").as("loginRequest");

        LoginPage.login("WrongAdmin", "admin123");

        cy.wait("@loginRequest");

        LoginPage.errorMessage()
            .should("contain", "Invalid credentials");
    });

    // ==========================================
    // TC06 - Password salah
    // ==========================================
    it("TC06 - Password salah", () => {

        cy.intercept("POST", "**/auth/validate").as("loginRequest");

        LoginPage.login("Admin", "wrongpassword");

        cy.wait("@loginRequest");

        LoginPage.errorMessage()
            .should("contain", "Invalid credentials");
    });

    // ==========================================
    // TC07 - Username dan Password salah
    // ==========================================
    it("TC07 - Username dan Password salah", () => {

        cy.intercept("POST", "**/auth/validate").as("loginRequest");

        LoginPage.login("WrongAdmin", "wrongpassword");

        cy.wait("@loginRequest");

        LoginPage.errorMessage()
            .should("contain", "Invalid credentials");
    });

    // ==========================================
    // TC08 - Logout berhasil
    // ==========================================
    it("TC08 - Logout berhasil", () => {

        cy.intercept("POST", "**/auth/validate").as("loginRequest");

        LoginPage.login("Admin", "admin123");

        cy.wait("@loginRequest");

        cy.url().should("include", "dashboard");

        LoginPage.profileMenu()
        .should("be.visible")
        .click();

        LoginPage.logoutButton()
        .should("be.visible")
        .click();

        cy.url().should("include", "/auth/login");

        LoginPage.loginButton()
        .should("be.visible");

    });

});