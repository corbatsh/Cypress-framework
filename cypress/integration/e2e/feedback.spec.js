import FeedbackPage from '../../pages-objects/pages/FeedbackPage'

describe('Feedback Test using fixtures', () => {
	before(() => {
		FeedbackPage.load()
	})

	it('Should submit feedback form', () => {
		FeedbackPage.submitFeedback()
	})
})
