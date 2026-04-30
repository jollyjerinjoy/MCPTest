// spec: specs/saucedemo.test.plan.md
// seed: seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('SauceDemo Functional Test Suite', () => {
  test('Login and authentication', async ({ page }) => {
    // 1. Start on the Sauce Demo landing page at https://www.saucedemo.com.
    await page.goto('https://www.saucedemo.com');

    // 2. Enter valid username "standard_user" in the username field.
    await page.fill('#user-name', 'standard_user');
    await expect(page.locator('#user-name')).toHaveValue('standard_user');

    // 3. Enter valid password "secret_sauce" in the password field.
    await page.fill('#password', 'secret_sauce');
    await expect(page.locator('#password')).toHaveValue('secret_sauce');

    // 4. Click the Login button.
    await page.click('#login-button');
    await expect(page).toHaveURL(/inventory.html/);
    await expect(page.locator('.title')).toHaveText('Products');
    //test branch merge saved
    // 5. Log out from the application if possible (via menu or user icon).
    await page.click('#react-burger-menu-btn');    
    await page.waitForSelector('#logout_sidebar_link', { state: 'visible' });    
    await page.click('#logout_sidebar_link');
    await expect(page).toHaveURL('https://www.saucedemo.com/');
  });
});
