import { login_password, login_username, url } from '../../../config'
import Navbar from '../../pages-objects/components/Navbar'
import loginPage from '../../pages-objects/pages/loginPage'

describe('Login Failed Test', () => {
	before(() => {
		cy.visit(url)
		Navbar.clickSignIn()
	})

	it('Should try to login with invalid credentials', () => {
		loginPage.login('invalid username', 'invalid password')
	})

	it('Should display an error message', () => {
		loginPage.displayErrorMessage()
	})
})

describe('Login Success Test', () => {
	before(() => {
		cy.visit(url)
		Navbar.clickSignIn()
	})

	it('Should login into application', () => {
		loginPage.login(login_username, login_password)
	})

	it('Should logout from application', () => {
		Navbar.logout()
		Navbar.displaySignInButton()
	})
})
