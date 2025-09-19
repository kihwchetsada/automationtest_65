import {test, expect} from '@playwright/test';  
// เข้า google ค้นหาเว็บสาขาเทคโนโลยีคอมพิวเตอร์ มทร สุรินทร์ กดคลิกเข้าไปในเว็บไซต์สาขา
test('google', async ({ page }) => {
    await page.goto('https://www.google.com/');
    await page.getByRole('combobox', { name: 'ค้นหา' }).click()
    await page.getByRole('combobox', { name: 'ค้นหา' }).fill('สาขาเทคโนโลยีคอมพิวเตอร์ มทร สุรินทร์');
    await page.getByRole('button', { name: 'ค้นหาด้วย Google' }).click();
});

test('ess', async ({ page }) => {
    await page.goto('https://ess-register.rmuti.ac.th/AppSR/announce');
    await page.getByRole('link', { id: 'btn-login' }).click();
   // await page.getByRole('textbox', { name: 'Username' }).click();
   // await page.getByRole('textbox', { name: 'Username' }).fill('65222110019-0');
    //await page.getByRole('textbox', { name: 'Password' }).click();
   // await page.getByRole('textbox', { name: 'Password' }).fill('65222110019-0');
});
test('rmutsv', async ({ page }) => {
    await page.goto('https://computer.surin.rmuti.ac.th/computer/index.php');
    //await page.getByText('หน้าแรก', { exact: true }).click();
    //await page.getByRole('link', { name: 'หน้าแรก' }).click();
    await page.locator('xpath=//*[@id="header"]/div[3]/ul/li[4]').click();
});
