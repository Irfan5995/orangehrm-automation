class LoginPage {

    visit() {
        cy.visit('/web/index.php/auth/login');
    }

    username() {
        return cy.get('input[name="username"]');
    }

    password() {
        return cy.get('input[name="password"]');
    }

    loginButton() {
        return cy.get('button[type="submit"]');
    }

    errorMessage() {
        return cy.get('.oxd-alert-content-text');
    }

    requiredMessage() {
        return cy.get('.oxd-input-field-error-message');
    }

    dashboardTitle() {
        return cy.get('h6');
    }

    profileMenu() {
        return cy.get('.oxd-userdropdown-tab');
    }

    logoutButton() {
        return cy.contains('Logout');
    }

    login(username, password) {
        if (username !== null)
            this.username().clear().type(username);

        if (password !== null)
            this.password().clear().type(password);

        this.loginButton().click();
    }
}

export default new LoginPage();