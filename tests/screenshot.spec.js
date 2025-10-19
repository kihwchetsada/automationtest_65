import { test, expect } from '@playwright/test';
/*
// รูปภาพ instagram
test('test with screenshot', async ({ page }) => {
  await page.goto('https://www.instagram.com/');
  await page.screenshot({ path: 'screenshot.png' });
  await page.getByRole('link', { name: 'Forgot password?' }).click();
  await page.screenshot({ path: 'test-results/screenshot2.png',fullPage: true });
});

// รูปภาพ chula
test('chula with screenshot', async ({ page }) => {
  await page.goto('https://www.chula.ac.th/');
  await page.screenshot({ path: 'chula.png' });
  await page.screenshot({ path: 'test-results/chula2.png', fullPage: true });
  await page.screenshot({ path: 'test-results/chula3.png'});
  await page.locator("header").screenshot({ path: 'test-results/chula4.png' });
  await page.locator("footer").screenshot({ path: 'test-results/chula5.png' });
  await page.locator(".site-main").screenshot({ path: 'test-results/chula6.png' });

});

// screenshot auto photo
test('screenshot auto photo', async ({ page }) => {
  await page.goto('https://www.chula.ac.th/');
});

// video
test('video record', async ({ page }) => {
  await page.goto('https://www.facebook.com/r.php');
  await page.locator('body').click();
  await page.getByRole('textbox', { name: 'First name' }).click();
  await page.getByRole('textbox', { name: 'First name' }).fill('free');
  await page.getByRole('textbox', { name: 'Surname' }).click();
  await page.getByRole('textbox', { name: 'Surname' }).fill('name');
  await page.getByLabel('Day').selectOption('6');
  await page.getByLabel('Month').selectOption('2');
  await page.getByLabel('Year').selectOption('1990');
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByRole('textbox', { name: 'Mobile number or email address' }).click();
  await page.getByRole('textbox', { name: 'Mobile number or email address' }).fill('0123456789');
  await page.getByRole('textbox', { name: 'New password' }).click();
  await page.getByRole('textbox', { name: 'New password' }).fill('0123456789');
});
*/