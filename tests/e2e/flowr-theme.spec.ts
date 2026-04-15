import { expect, test } from '@playwright/test'

test.describe('FlowR route theme integration', () => {
	test('uses FlowR theme colors only on the intended interactive elements', async ({ page }) => {
		await page.goto('/product/flowr')

		await expect(page.getByRole('heading', { name: 'Clarity for browser workflows.' })).toBeVisible()

		const header = page.locator('#header')
		const chromeButton = page.getByRole('link', { name: 'Start free on Chrome' }).first()
		const firefoxButton = page.getByRole('link', { name: 'Start free on Firefox' }).first()
		const flowrMenuText = page.locator('a.menu-item.router-link-exact-active span')
		const talkToTeamButton = page.getByRole('link', { name: 'Talk to the team' })
		const browserNote = page.locator('.browser-note')
		const footer = page.locator('footer')
		const footerFlowRLink = page.locator('#company-footer nav a[href="/product/flowr"]')
		const comparisonSection = page.locator('.flowr-comparison')
		const faqSection = page.locator('.flowr-faq')
		const comparisonTable = page.getByRole('table', { name: 'FlowR comparison table' })
		const comparisonHeading = page.getByRole('heading', { name: 'What changes when replay is guided, not passive.' })
		const comparisonFlowRHeader = page.getByRole('columnheader', { name: 'FlowR' })
		const comparisonRecordingHeader = page.getByRole('columnheader', { name: 'Conventional screen recording' })
		const comparisonLanguageText = comparisonTable.getByText('Reuse one workflow with localized instructions.')
		const faqQuestion = page.getByRole('heading', { name: 'What is FlowR?' })
		const faqAnswer = page.getByText('FlowR is a browser extension for recording website walkthroughs and turning them into guided, replayable experiences that other people can actually follow.')
		const interactionFaqQuestion = page.getByRole('heading', { name: 'How can I record hover, right-click, or scroll steps?' })
		const interactionFaqAnswer = page.getByText('Right-click the webpage element and choose the action you want to capture.')
		const privacyLink = page.getByRole('link', { name: 'Privacy Policy' })
		const termsLink = page.getByRole('link', { name: 'Terms of Use' })
		const ctaTransitionProperty = await talkToTeamButton.evaluate((node) => getComputedStyle(node).transitionProperty)

		await expect(header).toHaveCSS('background-color', 'rgba(255, 255, 255, 0.92)')
		await expect(chromeButton).toHaveAttribute('href', 'https://chromewebstore.google.com/detail/flowr-website-recorder/kajjcogpdapfeigbkcaoeihljpihjlie')
		await expect(firefoxButton).toHaveAttribute('href', 'https://addons.mozilla.org/en-US/firefox/addon/flowr-website-recorder/')
		await expect(firefoxButton).toHaveCSS('background-color', 'rgb(141, 46, 58)')
		await expect(flowrMenuText).toHaveCSS('color', 'rgb(141, 46, 58)')
		await expect(talkToTeamButton).toHaveCSS('background-color', 'rgb(141, 46, 58)')
		await expect(browserNote).toHaveText('Available now on Chrome and Firefox. Safari support is still in progress.')
		await expect(footer).toHaveCSS('background-color', 'rgb(255, 255, 255)')
		await expect(footerFlowRLink).toHaveCSS('color', 'rgb(90, 28, 36)')
		await expect(comparisonSection).toHaveCSS('background-color', 'rgb(251, 245, 246)')
		await expect(faqSection).toHaveCSS('background-color', 'rgb(255, 255, 255)')
		await expect(comparisonTable).toBeVisible()
		await expect(comparisonHeading).toBeVisible()
		await expect(comparisonFlowRHeader).toBeVisible()
		await expect(comparisonRecordingHeader).toBeVisible()
		await expect(comparisonLanguageText).toBeVisible()
		await expect(faqQuestion).toBeVisible()
		await expect(faqAnswer).toBeVisible()
		await expect(interactionFaqQuestion).toBeVisible()
		await expect(interactionFaqAnswer).toBeVisible()
		await expect(privacyLink).toHaveAttribute('href', '/product/flowr/privacy')
		await expect(termsLink).toHaveAttribute('href', '/product/flowr/terms')
		expect(ctaTransitionProperty).toBe('transform, opacity')
	})

	test('serves FlowR-specific legal pages on FlowR-specific paths', async ({ page }) => {
		await page.goto('/product/flowr/privacy')
		await expect(page).toHaveURL(/\/product\/flowr\/privacy$/)
		await expect(page.locator('h1')).toHaveText('FlowR Privacy Policy')

		await page.goto('/product/flowr/terms')
		await expect(page).toHaveURL(/\/product\/flowr\/terms$/)
		await expect(page.locator('h1')).toHaveText('FlowR Terms of Use')
	})

	test('redirects the old FlowR path to the new public URL', async ({ page }) => {
		const response = await page.goto('/product/flowr')

		expect(response?.status()).toBe(200)
		await expect(page).toHaveURL(/\/product\/flowr$/)
	})

	test('keeps the comparison table within the viewport on mobile', async ({ page }) => {
		await page.setViewportSize({ width: 390, height: 844 })
		await page.goto('/product/flowr')

		const comparisonTable = page.getByRole('table', { name: 'FlowR comparison table' })
		const comparisonCards = page.locator('.comparison-mobile-list')
		const comparisonCard = page.locator('.comparison-mobile-card').first()
		const flowrMobileLabel = page.locator('.comparison-mobile-card').first().getByText('FlowR')
		const recordingMobileLabel = page.locator('.comparison-mobile-card').first().getByText('Conventional screen recording')

		await expect(comparisonCards).toBeVisible()
		await expect(comparisonCard).toBeVisible()
		await expect(flowrMobileLabel).toBeVisible()
		await expect(recordingMobileLabel).toBeVisible()
		await expect(comparisonTable).not.toBeVisible()

		const dimensions = await comparisonCards.evaluate((list) => {
			const rect = list.getBoundingClientRect()
			const firstCard = list.querySelector('.comparison-mobile-card')
			if (!firstCard) {
				return null
			}

			const cardRect = firstCard.getBoundingClientRect()

			return {
				listWidth: Math.round(rect.width),
				cardWidth: Math.round(cardRect.width),
				viewportWidth: window.innerWidth,
				overflowsViewport: Math.ceil(rect.width) > window.innerWidth || Math.ceil(cardRect.width) > window.innerWidth,
			}
		})

		expect(dimensions).not.toBeNull()
		expect(dimensions?.overflowsViewport).toBe(false)
	})
})