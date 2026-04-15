import { expect, test } from '@playwright/test'

test.describe('FlowR playground', () => {
	test('links from the FlowR page and navigates across the playground routes', async ({ page }) => {
		await page.goto('/product/flowr')

		const playgroundLink = page.getByRole('link', { name: 'Open the FlowR playground' })
		await expect(playgroundLink).toBeVisible()
		await playgroundLink.click()

		await expect(page).toHaveURL(/\/product\/flowr\/playground$/)
		await expect(page.getByRole('heading', { name: 'Recording warm-up surfaces' })).toBeVisible()
		await page.goto('/product/flowr/playground')
		await expect(page.getByRole('heading', { name: 'Recording warm-up surfaces' })).toBeVisible()
		const createWalkthrough = page.getByRole('button', { name: 'Create walkthrough' })
		await expect(createWalkthrough).toBeVisible()
		await createWalkthrough.click()
		await expect(page.locator('.button-bank-status strong')).toHaveText('Create walkthrough triggered a visible draft-created state.')
		await expect(page.getByRole('article', { name: /Primary navigation card/i }).or(page.locator('.hover-card').first())).toBeVisible()
		await expect(page.getByText('Right-click any tile below to open a custom helper menu.')).toBeVisible()
		const routeNav = page.getByRole('navigation', { name: 'FlowR playground sections' })

		await routeNav.getByRole('link', { name: /Form capture lab/i }).click()
		await expect(page).toHaveURL(/\/product\/flowr\/playground\/forms$/)
		await expect(page.getByRole('heading', { name: 'Walkthrough intake form' })).toBeVisible()
		await page.goto('/product/flowr/playground/forms')
		await expect(page.getByRole('heading', { name: 'Walkthrough intake form' })).toBeVisible()
		const workflowName = page.getByLabel('Workflow name')
		const ownerEmail = page.getByLabel('Owner email')
		const workflowControl = page.locator('.field').filter({ has: workflowName }).locator('.field-control')
		const ownerControl = page.locator('.field').filter({ has: ownerEmail }).locator('.field-control')
		const runDate = page.locator('.field--date-instruction')
		const includeScreenshots = page.getByLabel('Include screenshots for every step')
		const controlsPanel = page.locator('.field-grid--controls')
		const choiceGrid = page.locator('.choice-grid')
		const toggleRow = page.locator('.toggle-row')
		const firstCheckbox = page.locator('.choice-group').first().locator('.choice-row').first().locator('input')
		const firstCheckboxLabel = page.locator('.choice-group').first().locator('.choice-row').first().locator('span')
		const firstRadio = page.locator('.choice-group').nth(1).locator('.choice-row').first().locator('input')
		const firstRadioLabel = page.locator('.choice-group').nth(1).locator('.choice-row').first().locator('span')
		const initialHeights = await Promise.all([
			workflowControl.evaluate((node) => Math.round(node.getBoundingClientRect().height)),
			ownerControl.evaluate((node) => Math.round(node.getBoundingClientRect().height)),
		])
		expect(Math.abs(initialHeights[0] - initialHeights[1])).toBeLessThanOrEqual(1)
		const spacingMetrics = await Promise.all([
			controlsPanel.evaluate((node) => node.getBoundingClientRect()),
			choiceGrid.evaluate((node) => node.getBoundingClientRect()),
			toggleRow.evaluate((node) => node.getBoundingClientRect()),
			page.locator('.choice-group').first().evaluate((node) => node.getBoundingClientRect()),
			page.locator('.choice-group').nth(1).evaluate((node) => node.getBoundingClientRect()),
		])
		expect(Math.round(spacingMetrics[1].top - spacingMetrics[0].bottom)).toBeGreaterThanOrEqual(20)
		expect(Math.round(spacingMetrics[2].top - spacingMetrics[1].bottom)).toBeGreaterThanOrEqual(20)
		expect(Math.abs(Math.round(spacingMetrics[4].top - spacingMetrics[3].top))).toBeLessThanOrEqual(2)
		expect(Math.round(spacingMetrics[4].left - spacingMetrics[3].right)).toBeGreaterThanOrEqual(20)
		const controlLabelGaps = await Promise.all([
			Promise.all([
				firstCheckbox.evaluate((node) => node.getBoundingClientRect()),
				firstCheckboxLabel.evaluate((node) => node.getBoundingClientRect()),
			]),
			Promise.all([
				firstRadio.evaluate((node) => node.getBoundingClientRect()),
				firstRadioLabel.evaluate((node) => node.getBoundingClientRect()),
			]),
		])
		expect(Math.round(controlLabelGaps[0][1].left - controlLabelGaps[0][0].right)).toBeGreaterThanOrEqual(12)
		expect(Math.round(controlLabelGaps[1][1].left - controlLabelGaps[1][0].right)).toBeGreaterThanOrEqual(12)
		await workflowName.focus()
		const focusedHeights = await Promise.all([
			workflowControl.evaluate((node) => Math.round(node.getBoundingClientRect().height)),
			ownerControl.evaluate((node) => Math.round(node.getBoundingClientRect().height)),
		])
		expect(Math.abs(initialHeights[0] - focusedHeights[0])).toBeLessThanOrEqual(1)
		expect(Math.abs(focusedHeights[0] - focusedHeights[1])).toBeLessThanOrEqual(1)
		await workflowName.fill('QA replay drill')
		await ownerEmail.fill('qa@example.com')
		await includeScreenshots.uncheck()
		await expect(workflowName).toHaveValue('QA replay drill')
		await expect(ownerEmail).toHaveValue('qa@example.com')
		await expect(includeScreenshots).not.toBeChecked()
		await runDate.evaluate((node) => {
			node.dispatchEvent(new MouseEvent('contextmenu', { bubbles: true, cancelable: true, clientX: 280, clientY: 360 }))
		})
		await expect(page.locator('.instruction-menu')).toBeVisible()
		await page.getByRole('button', { name: 'Add manual instruction' }).click()
		await expect(page.locator('.manual-instruction-feedback')).toHaveText('Add manual instruction selected for the date field.')
		const decisionControls = page.locator('.manual-instruction-card')
		await decisionControls.evaluate((node) => {
			node.dispatchEvent(new MouseEvent('contextmenu', { bubbles: true, cancelable: true, clientX: 360, clientY: 420 }))
		})
		await expect(page.locator('.instruction-menu')).toBeVisible()
		await page.getByRole('button', { name: 'Add manual instruction' }).click()
		await expect(page.locator('.manual-instruction-feedback')).toHaveText('Add manual instruction selected for the decision-controls section.')

		await routeNav.getByRole('link', { name: /Conditional steps/i }).click()
		await expect(page).toHaveURL(/\/product\/flowr\/playground\/conditions$/)
		await expect(page.getByRole('heading', { name: 'Conditional step lab' })).toBeVisible()
		await expect(page.locator('.premium-pill')).toHaveText('Premium feature')
		const visibilityToggle = page.getByLabel('Show confirmation banner')
		await expect(visibilityToggle).toBeChecked()
		await visibilityToggle.uncheck()
		await expect(page.getByText('Current state: Hidden')).toBeVisible()
		await expect(page.getByText('The confirmation banner is fully hidden right now.')).toBeVisible()
		await page.getByLabel('Condition type').selectOption('not visible')
		await expect(page.locator('.condition-outcome h3')).toHaveText('Step will run')
		await visibilityToggle.check()
		await expect(page.getByText('Current state: Visible')).toBeVisible()
		await expect(page.locator('.condition-outcome h3')).toHaveText('Step will be skipped')
	})
})