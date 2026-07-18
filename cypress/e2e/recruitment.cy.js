import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import RecruitmentPage from "../pages/RecruitmentPage";

describe("OrangeHRM - Recruitment Feature", () => {

    beforeEach(() => {

        LoginPage.visit();

        cy.intercept("POST", "**/auth/validate").as("loginRequest");

        LoginPage.login("Admin", "admin123");

        cy.wait("@loginRequest");

        cy.url().should("include", "dashboard");

        DashboardPage.recruitmentMenu().click();

        cy.url().should("include", "recruitment");

    });

    // ==========================================
    // TC01 - Open Recruitment Page
    // ==========================================

    it("TC01 - Open Recruitment Page", () => {

        RecruitmentPage.recruitmentTitle()
            .should("contain", "Recruitment");

    });

    // ==========================================
    // TC02 - Search Candidate Name
    // ==========================================
    
    it("TC02 - Search Candidate Name", () => {

    cy.intercept(
        "GET",
        "**/api/v2/recruitment/candidates*"
    ).as("candidateSearch");

    RecruitmentPage.candidateName()
        .type("a");

    cy.wait("@candidateSearch");

    RecruitmentPage.candidateOption()
        .should("have.length.greaterThan", 1)
        .first()
        .click();

    RecruitmentPage.searchButton()
        .click();

    RecruitmentPage.candidateTable()
        .should("be.visible");

    });

    // ==========================================
    // TC03 - Search tanpa input
    // ==========================================
    
    it("TC03 - Search tanpa input", () => {

        RecruitmentPage.searchButton()
            .click();

        RecruitmentPage.candidateTable()
            .should("exist");

    });

    // ==========================================
    // TC04 - Reset Search
    // ==========================================

    it("TC04 - Reset Search", () => {

        DashboardPage.recruitmentMenu().click();

        RecruitmentPage.candidateName().type("Linda");

        RecruitmentPage.searchButton().click();

        cy.intercept("GET","**/api/v2/recruitment/candidates*").as("reset");

        RecruitmentPage.resetButton().click();

        cy.wait("@reset");

    });

    // ==========================================
    // TC05 - Search Invalid Candidate
    // ==========================================

    it("TC05 - Search Invalid Candidate", () => {

        RecruitmentPage.candidateName()
            .type("ABCDEFGXYZ");

        RecruitmentPage.searchButton()
            .click();

    });

    // ==========================================
    // TC06 - Open Vacancy Dropdown
    // ==========================================

    it("TC06 - Open Vacancy Dropdown", () => {

        RecruitmentPage.vacancy()
            .click();
    
    cy.get(".oxd-select-dropdown")
        .contains("-- Select --")
        .click();

    });
    
    // ==========================================
    // TC07 - Open Hiring Manager Dropdown
    // ==========================================

    it("TC07 - Open Hiring Manager Dropdown", () => {

    RecruitmentPage.hiringManager()
        .click();

    cy.get(".oxd-select-dropdown")
        .contains("-- Select --")
        .click();

    });

    // ==========================================
    // TC08 - Refresh Recruitment
    // ==========================================

    it("TC08 - Refresh Recruitment", () => {

        cy.reload();

        RecruitmentPage.recruitmentTitle()
            .should("contain", "Recruitment");

    });

});