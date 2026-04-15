import { expect, test } from '@playwright/test'

test.describe('home page', () => {
    test('renders successfully with the hero content in production-like routing', async ({ page }) => {
        await page.goto('/')

        await expect(page).toHaveURL(/\/$/)
        await expect(page.getByRole('heading', { name: 'Celestial Synthesis' })).toBeVisible()
        await expect(page.getByText('Where boundless imagination becomes precise solutions.')).toBeVisible()
        await expect(page).toHaveTitle('Celestial Synthesis | Software Company')
    })
})