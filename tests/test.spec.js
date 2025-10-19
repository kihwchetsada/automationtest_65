import {test, expect} from '@playwright/test';  
// ชื่อเรื่อง Facebook
test('Facebook', async ({ page }) => {
    await page.goto('https://www.Facebook.com/');
    //await expect(page).toHaveTitle(/Facebook/);
    //**locater**
    await page.getByRole('button', { name: 'Log In' }).click();
   // await page.getByRole('button', { name: 'Create new account' }).click();
    await page.getByRole('textbox', { name: 'Email address or phone number' }).click();
    
    //**action**
    await page.getByRole('textbox', { name: 'Email address or phone number' }).fill('Peter');
    await page.getByRole('textbox', { name: 'Password' }).press('Tab');
});

test('Fackebook_register', async ({ page }) => {
    await page.goto('https://www.Facebook.com/');
    await page.getByRole('button', { name: 'Create new account' }).click();
    await page.getByRole('textbox', { name: 'First name' }).fill('chetsadaphon');
    await page.getByRole('textbox', { name: 'Surname' }).fill('wonwiwong');
    await page.getByRole('combobox', { name: 'Day' }).selectOption('10');
    await page.getByRole('combobox', { name: 'Month' }).selectOption('6');
    await page.getByRole('combobox', { name: 'Year' }).selectOption('2000');
    await page.getByRole('radio', { name: 'Male', exact: true }).click();
    await page.getByRole('textbox', { name: 'Mobile number or email address' }).fill('chetsadaphon@example.com');
    await page.getByRole('textbox', { name: 'New password' }).fill('password123');
    await page.getByRole('button', { name: 'Sign Up' }).click();
});
/*
test('computer.surin.rmuti.ac.th/sc', async ({ page }) => {
    await page.goto('https://computer.surin.rmuti.ac.th/sc/fornend/');
    await page.getByRole('link', { name: 'สมัครสมาชิก' }).click();
    await page.getByRole('textbox', { name: 'ชื่อ', exact: true }).fill('chetsadaphon');
    await page.getByRole('textbox', { name: 'นามสกุล' }).fill('wonwiwong');
    await page.getByRole('textbox', { name: 'ชื่อผู้ใช้', exact: true }).fill('chetsadaphon123');
    await page.getByRole('textbox', { name: 'รหัสผ่าน', exact: true }).fill('password123');
    await page.getByRole('textbox', { name: 'ยืนยันรหัสผ่าน', exact: true }).fill('password123');
    await page.getByRole('textbox', { name: 'เบอร์โทรศัพท์' }).fill('1234567890');
    await page.getByRole('textbox', { name: 'อีเมล' }).fill('chetsadaphon@example.com');
    await page.getByRole('button', { name: 'สมัครสมาชิก' }).click();
});

test('computer.surin.rmuti.ac.th/sc_login', async ({ page }) => {
    await page.goto('https://computer.surin.rmuti.ac.th/sc/fornend/');
    await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
    await page.getByRole('textbox', { name: 'ชื่อผู้ใช้งาน', exact: true }).fill('chetsadaphon123');
    await page.getByRole('textbox', { name: 'รหัสผ่าน', exact: true }).fill('password123');
    await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
    await expect(page.getByText('กลุ่มวิชาเรียนทั้งหมด')).toBeVisible();
});

test('ig', async ({ page }) => {
        await page.goto('https://computer.surin.rmuti.ac.th/sc/fornend/fornend/');
        await page.getByRole('link', { name: 'home.php' }).click();
        await page.getByRole('textbox', { name: 'ชื่อผู้ใช้งาน' }).click();
        await page.getByRole('textbox', { name: 'ชื่อผู้ใช้งาน' }).fill('chetsadaphon123');
        await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
        await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('password123');
        await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
        await page.getByRole('heading', { name: 'คอร์สเรียนทั้งหมด' }).click();
        await expect(page.getByRole('heading', { name: 'คอร์สเรียนทั้งหมด' })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'คอร์สเรียนทั้งหมด' })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'คอร์สเรียนทั้งหมด' })).toBeVisible();
        await page.getByRole('heading', { name: 'กลุ่มวิชาเรียนทั้งหมด' }).click();
        await expect(page.getByRole('heading', { name: 'กลุ่มวิชาเรียนทั้งหมด' })).toBeVisible();
        await page.getByRole('heading', { name: 'คอร์สเรียนทั้งหมด' }).click();
        await expect(page.locator('body')).toContainText('คอร์สเรียนทั้งหมด');
        await expect(page.getByRole('heading', { name: 'คอร์สเรียนทั้งหมด' })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'คอร์สเรียนทั้งหมด' })).toBeVisible();
});*/