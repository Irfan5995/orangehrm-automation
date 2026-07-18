class DashboardPage{

    directoryMenu(){
        return cy.contains("Directory");
    }

    recruitmentMenu(){
        return cy.contains("Recruitment");
    }

    dashboardTitle(){
        return cy.get(".oxd-topbar-header-breadcrumb-module");
    }

}

export default new DashboardPage();