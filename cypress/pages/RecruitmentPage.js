class RecruitmentPage{

    candidateName(){
        return cy.get('input[placeholder="Type for hints..."]').first();
    }

    vacancy(){
        return cy.get(".oxd-select-text").eq(1);
    }

    hiringManager() {
    return cy.get(".oxd-select-text").eq(2);
    }

    searchButton(){
        return cy.contains("button","Search");
    }

    resetButton(){
        return cy.contains("button","Reset");
    }

    candidateTable(){
        return cy.get(".oxd-table");
    }

    recruitmentTitle(){
        return cy.get(".oxd-topbar-header-breadcrumb-module");
    }

}

export default new RecruitmentPage();