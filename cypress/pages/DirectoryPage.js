class DirectoryPage{

    employeeName(){
        return cy.get('input[placeholder="Type for hints..."]').first();
    }

    selectFirstEmployee() {
    return cy.get(".oxd-autocomplete-option").first();
    }
    
    jobTitle(){
        return cy.get(".oxd-select-text").eq(0);
    }

    location(){
        return cy.get(".oxd-select-text").eq(1);
    }

    searchButton(){
        return cy.contains("button","Search");
    }

    resetButton(){
        return cy.contains("button","Reset");
    }

    resultCard(){
        return cy.get(".orangehrm-directory-card");
    }

    directoryTitle(){
        return cy.get(".oxd-topbar-header-breadcrumb-module");
    }

}

export default new DirectoryPage();