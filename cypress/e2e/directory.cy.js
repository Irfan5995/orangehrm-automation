import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import DirectoryPage from "../pages/DirectoryPage";

describe("OrangeHRM Directory",()=>{

    beforeEach(()=>{

        LoginPage.visit();

        LoginPage.login("Admin","admin123");

        cy.url().should("include","dashboard");

    });

    // ==========================================
    // TC01 - Open Directory Page
    // ==========================================
    it("TC01 Open Directory Page",()=>{

        cy.intercept("GET","**/directory/**").as("directory");

        DashboardPage.directoryMenu().click();

        cy.wait("@directory");

        DirectoryPage.directoryTitle()
            .should("contain","Directory");

    });

    // ==========================================
    // TC02 - Search Employee Name
    // ==========================================
    it("TC02 Search Employee Name",()=>{

        DashboardPage.directoryMenu().click();

        cy.intercept("GET","**/api/v2/directory/employees*").as("employeeSearch");

        DirectoryPage.employeeName().type("a");

        cy.wait("@employeeSearch");

        cy.get(".oxd-autocomplete-dropdown")
            .should("be.visible");

        cy.get(".oxd-autocomplete-option")
            .should("have.length.greaterThan", 1)
            .first()
            .click();

        DirectoryPage.searchButton().click();

    });

    // ==========================================
    // TC03 - Search Tanpa Input
    // ==========================================
    it("TC03 Search Tanpa Input",()=>{

        DashboardPage.directoryMenu().click();

        DirectoryPage.searchButton()
            .click();

        DirectoryPage.resultCard()
            .should("exist");

    });

    // ==========================================
    // TC04 - Reset Search
    // ==========================================
    it("TC04 Reset Search", () => {

        DashboardPage.directoryMenu().click();

        DirectoryPage.employeeName().type("Admin");

        DirectoryPage.searchButton().click();
        
        cy.intercept("GET","**/api/v2/directory/employees*").as("reset");

        DirectoryPage.resetButton().click();

        cy.wait("@reset");

});

    // ==========================================
    // TC05 - Invalid Employee
    // ==========================================
    it("TC05 Invalid Employee",()=>{

        DashboardPage.directoryMenu().click();

        DirectoryPage.employeeName()
            .type("ABCDEFGXYZ");

        DirectoryPage.searchButton()
            .click();

    });

    // ==========================================
    // TC06 - Job Title Dropdown
    // ==========================================
    it("TC06 Job Title Dropdown",()=>{

        DashboardPage.directoryMenu().click();

        DirectoryPage.jobTitle()
            .click();

    });

    // ==========================================
    // TC07 - Location Dropdown
    // ==========================================
    it("TC07 Location Dropdown",()=>{

        DashboardPage.directoryMenu().click();

        DirectoryPage.location()
            .click();

    });

    // ==========================================
    // TC08 - Refresh Directory
    // ==========================================
    it("TC08 Refresh Directory",()=>{

        DashboardPage.directoryMenu().click();

         cy.reload();

        DirectoryPage.directoryTitle()
            .should("contain","Directory");

    });

});