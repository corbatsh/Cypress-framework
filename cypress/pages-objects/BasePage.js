export default class BasePage {
	static pause(ms) {
		cy.wait(ms)
	}

	static logInfo(message) {
		cy.log(message)
	}

	static setMobileViewport() {
		cy.viewport('iphone-x')
	}

	static setTabletViewport() {
		cy.viewport('ipad-2')
	}

	static setDesktopViewport() {
		cy.viewport('macbook-13')
	}

	static setLargeViewport() {
		cy.viewport(1920, 1080)
	}
}
