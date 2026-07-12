import LoginPage from "../pages/LoginPage";

describe("OrangeHRM Login", () => {

    beforeEach(() => {
        LoginPage.visit();
    });

    //====================================================
    // TC01
    //====================================================

    it("TC01 - Login dengan username dan password valid", () => {

        LoginPage.login("Admin", "admin123");

        cy.url().should("include", "dashboard");

        LoginPage.dashboardTitle().should("contain", "Dashboard");

    });

    //====================================================
    // TC02
    //====================================================

    it("TC02 - Username kosong", () => {

        LoginPage.login(null, "admin123");

        LoginPage.requiredMessage()
            .should("contain", "Required");

    });

    //====================================================
    // TC03
    //====================================================

    it("TC03 - Password kosong", () => {

        LoginPage.login("Admin", null);

        LoginPage.requiredMessage()
            .should("contain", "Required");

    });

    //====================================================
    // TC04
    //====================================================

    it("TC04 - Username dan Password kosong", () => {

        LoginPage.login(null, null);

        LoginPage.requiredMessage()
            .should("have.length", 2);

    });

    //====================================================
    // TC05
    //====================================================

    it("TC05 - Username salah", () => {

        LoginPage.login("WrongAdmin", "admin123");

        LoginPage.errorMessage()
            .should("contain", "Invalid credentials");

    });

    //====================================================
    // TC06
    //====================================================

    it("TC06 - Password salah", () => {

        LoginPage.login("Admin", "wrongpassword");

        LoginPage.errorMessage()
            .should("contain", "Invalid credentials");

    });

    //====================================================
    // TC07
    //====================================================

    it("TC07 - Username dan Password salah", () => {

        LoginPage.login("WrongAdmin", "wrongpassword");

        LoginPage.errorMessage()
            .should("contain", "Invalid credentials");

    });

    //====================================================
    // TC08
    //====================================================

    it("TC08 - Username hanya spasi", () => {

        LoginPage.login("     ", "admin123");

        LoginPage.requiredMessage()
            .should("contain", "Required");


    });

    //====================================================
    // TC09
    //====================================================

    it("TC09 - Password hanya spasi", () => {

        LoginPage.login("Admin", "      ");

        LoginPage.requiredMessage()
            .should("contain", "Required");

    });

    //====================================================
    // TC10
    //====================================================

    it("TC10 - Username terlalu panjang", () => {

        LoginPage.login(
            "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            "admin123"
        );

        LoginPage.errorMessage()
            .should("contain", "Invalid credentials");

    });

    //====================================================
    // TC11
    //====================================================

    it("TC11 - Password terlalu panjang", () => {

        LoginPage.login(
            "Admin",
            "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        );

        LoginPage.errorMessage()
            .should("contain", "Invalid credentials");

    });

    //====================================================
    // TC12
    //====================================================

    it("TC12 - Username dan Password sangat panjang", () => {

        LoginPage.login(
            "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"
        );

        LoginPage.errorMessage()
            .should("contain", "Invalid credentials");

    });

});