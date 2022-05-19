import { login_password, login_username } from '../../config'

describe('This is test example of test', () => {
	it('Should check if sth is visible', () => {
		cy.visit('http://zero.webappsecurity.com/login.html')
		cy.login(login_username, login_password)
		cy.isVisible('.top_offset')
	})
})
