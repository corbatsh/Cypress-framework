import BasePage from '../BasePage'

export default class loginPage extends BasePage {
	static login(username, password) {
		cy.login(username, password)
	}

	static clickForgotPasswordLnik() {
		cy.contains('Forgot your password ?').click()
	}

	static displayErrorMessage() {
		cy.isVisible('.alert-error')
	}
}
