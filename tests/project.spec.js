import {test, expect} from '@playwright/test';

test.describe("project test",()=>{ 

    test("admin_login case 1",async({page})=>{ //ทดสอบการเข้าสู่ระบบด้วย admin ชื่อบัญชีไม่ถูกต้อง รหัสผ่านถูกต้อง
        await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/index.php');
        await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
        await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
        await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('test101');
        await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
        await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('!Th123456');
        await page.getByRole('button', { name: 'เข้าสู่ระบบ ' }).click();
    });

    test("admin_login case 2",async({page})=>{ //ทดสอบการเข้าสู่ระบบด้วย admin ชื่อบัญชีถูกต้อง รหัสผ่านไม่ถูกต้อง
        await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/index.php');
        await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
        await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
        await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('admin');
        await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
        await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('123456789');
        await page.getByRole('button', { name: 'เข้าสู่ระบบ ' }).click();
    });

    test("admin_login case 3",async({page})=>{ //ทดสอบการเข้าสู่ระบบด้วย admin ชื่อบัญชีไม่ถูกต้อง รหัสผ่านไม่ถูกต้อง
        await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/index.php');
        await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
        await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
        await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('admin008');
        await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
        await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('!Th12345678910');
        await page.getByRole('button', { name: 'เข้าสู่ระบบ ' }).click();
    });

    test("admin_login case 4",async({page})=>{ //ทดสอบการเข้าสู่ระบบด้วย admin ชื่อบัญชีถูกต้อง รหัสผ่านถูกต้อง
        await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/index.php');
        await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
        await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
        await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('admin');
        await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
        await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('!Th123456');
        await page.getByRole('button', { name: 'เข้าสู่ระบบ ' }).click();
    });

    test("register case 1",async({page})=>{ //ทดสอบการสมัครสมาชิก โดยกรอกบัญชีผู้ใช้ ไม่ครบตามเงื่อนไข 
        await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/index.php');
        await page.getByRole('link', { name: 'สมัครทีม' }).first().click();
        await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
        await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('te');
        await page.getByRole('button', { name: 'สมัครสมาชิก' }).click();
    });

    test("register case 2",async({page})=>{ //ทดสอบการสมัครสมาชิก โดยกรอกบัญชีผู้ใช้ ตรงตามเงื่อนไข และกรอกอีเมลไม่ตรงตามเงื่อนไข
        await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/index.php');
        await page.getByRole('link', { name: 'สมัครทีม' }).first().click();
        await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
        await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('test101');
        await page.getByRole('textbox', { name: 'อีเมล' }).click();
        await page.getByRole('textbox', { name: 'อีเมล' }).fill('test101');
        await page.getByRole('button', { name: 'สมัครสมาชิก' }).click();
    });

    test("register case 3",async({page})=>{ //ทดสอบการสมัครสมาชิก โดยกรอกบัญชีผู้ใช้ ตรงตามเงื่อนไข กรอกอีเมลตรงตามเงื่อนไข และกรอกรหัสผ่านไม่ตรงตามเงื่อนไขที่ 1 แต่กรอกตรงตามเงื่อนไขที่ 2,3,4และ5
        await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/index.php');
        await page.getByRole('link', { name: 'สมัครทีม' }).first().click();
        await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
        await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('test101');
        await page.getByRole('textbox', { name: 'อีเมล' }).click();
        await page.getByRole('textbox', { name: 'อีเมล' }).fill('test101@gmail.com');
        await page.getByRole('textbox', { name: 'รหัสผ่าน' }).nth(1).click();
        await page.getByRole('textbox', { name: 'รหัสผ่าน' }).nth(1).fill('!Th123');
        await page.getByRole('button', { name: 'สมัครสมาชิก' }).click();
    });

    test("register case 4",async({page})=>{ //ทดสอบการสมัครสมาชิก โดยกรอกบัญชีผู้ใช้ ตรงตามเงื่อนไข กรอกอีเมลตรงตามเงื่อนไข และกรอกรหัสผ่านไม่ตรงตามเงื่อนไขที่ 1,2 แต่กรอกตรงตามเงื่อนไขที่ 3,4และ5
        await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/index.php');
        await page.getByRole('link', { name: 'สมัครทีม' }).first().click();
        await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
        await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('test101');
        await page.getByRole('textbox', { name: 'อีเมล' }).click();
        await page.getByRole('textbox', { name: 'อีเมล' }).fill('test101@gmail.com');
        await page.getByRole('textbox', { name: 'รหัสผ่าน' }).nth(1).click();
        await page.getByRole('textbox', { name: 'รหัสผ่าน' }).nth(1).fill('!T123');
        await page.getByRole('button', { name: 'สมัครสมาชิก' }).click();
    });

    test("register case 5",async({page})=>{ //ทดสอบการสมัครสมาชิก โดยกรอกบัญชีผู้ใช้ ตรงตามเงื่อนไข กรอกอีเมลตรงตามเงื่อนไข และกรอกรหัสผ่านไม่ตรงตามเงื่อนไขที่ 1,2,3 แต่กรอกตรงตามเงื่อนไขที่ 4,5
        await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/index.php');
        await page.getByRole('link', { name: 'สมัครทีม' }).first().click();
        await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
        await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('test101');
        await page.getByRole('textbox', { name: 'อีเมล' }).click();
        await page.getByRole('textbox', { name: 'อีเมล' }).fill('test101@gmail.com');
        await page.getByRole('textbox', { name: 'รหัสผ่าน' }).nth(1).click();
        await page.getByRole('textbox', { name: 'รหัสผ่าน' }).nth(1).fill('!123');
        await page.getByRole('button', { name: 'สมัครสมาชิก' }).click();
    });

    test("register case 6",async({page})=>{ //ทดสอบการสมัครสมาชิก โดยกรอกบัญชีผู้ใช้ ตรงตามเงื่อนไข กรอกอีเมลตรงตามเงื่อนไข และกรอกรหัสผ่านไม่ตรงตามเงื่อนไขที่ 1,2,3,4 แต่กรอกตรงตามเงื่อนไขที่ 5
        await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/index.php');
        await page.getByRole('link', { name: 'สมัครทีม' }).first().click();
        await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
        await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('test101');
        await page.getByRole('textbox', { name: 'อีเมล' }).click();
        await page.getByRole('textbox', { name: 'อีเมล' }).fill('test101@gmail.com');
        await page.getByRole('textbox', { name: 'รหัสผ่าน' }).nth(1).click();
        await page.getByRole('textbox', { name: 'รหัสผ่าน' }).nth(1).fill('!!!');
        await page.getByRole('button', { name: 'สมัครสมาชิก' }).click();
    });

    test("register case 7",async({page})=>{ //ทดสอบการสมัครสมาชิก โดยกรอกบัญชีผู้ใช้ ตรงตามเงื่อนไข กรอกอีเมลตรงตามเงื่อนไข และกรอกรหัสผ่านตรงตามเงื่อนไขที่ 1,2,3,4,5 
        await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/index.php');
        await page.getByRole('link', { name: 'สมัครทีม' }).first().click();
        await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
        await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('test101');
        await page.getByRole('textbox', { name: 'อีเมล' }).click();
        await page.getByRole('textbox', { name: 'อีเมล' }).fill('test101@gmail.com');
        await page.getByRole('textbox', { name: 'รหัสผ่าน' }).nth(1).click();
        await page.getByRole('textbox', { name: 'รหัสผ่าน' }).nth(1).fill('!Th123456');
        await page.getByRole('button', { name: 'สมัครสมาชิก' }).click();
    });

    test("register case 8",async({page})=>{ //ทดสอบการสมัครสมาชิก โดยกรอกบัญชีผู้ใช้ ตรงตามเงื่อนไข กรอกอีเมลตรงตามเงื่อนไข และกรอกรหัสผ่านตรงตามเงื่อนไขที่ 1,2,3,4,5 แต่ยืนยันรหัสผ่านไม่ตรงกัน
        await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/index.php');
        await page.getByRole('link', { name: 'สมัครทีม' }).first().click();
        await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
        await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('test101');
        await page.getByRole('textbox', { name: 'อีเมล' }).click();
        await page.getByRole('textbox', { name: 'อีเมล' }).fill('test101@gmail.com');
        await page.getByRole('textbox', { name: 'รหัสผ่าน' }).nth(1).click();
        await page.getByRole('textbox', { name: 'รหัสผ่าน' }).nth(1).fill('!Th123456');
        await page.getByRole('textbox', { name: 'ยืนยันรหัสผ่าน' }).click();
        await page.getByRole('textbox', { name: 'ยืนยันรหัสผ่าน' }).fill('!Th1234567');
        await page.getByRole('button', { name: 'สมัครสมาชิก' }).click();
    });

    test("register case 9",async({page})=>{ //ทดสอบการสมัครสมาชิก โดยกรอกบัญชีผู้ใช้ ตรงตามเงื่อนไข กรอกอีเมลตรงตามเงื่อนไข และกรอกรหัสผ่านตรงตามเงื่อนไขที่ 1,2,3,4,5 ยืนยันรหัสผ่านตรงกัน
        await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/index.php');
        await page.getByRole('link', { name: 'สมัครทีม' }).first().click();
        await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
        await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('test101');
        await page.getByRole('textbox', { name: 'อีเมล' }).click();                                  //13
        await page.getByRole('textbox', { name: 'อีเมล' }).fill('test101@gmail.com');
        await page.getByRole('textbox', { name: 'รหัสผ่าน' }).nth(1).click();
        await page.getByRole('textbox', { name: 'รหัสผ่าน' }).nth(1).fill('!Th123456');
        await page.getByRole('textbox', { name: 'ยืนยันรหัสผ่าน' }).click();
        await page.getByRole('textbox', { name: 'ยืนยันรหัสผ่าน' }).fill('!Th123456');
        await page.getByRole('button', { name: 'สมัครสมาชิก' }).click();
    });

    test("register_team case 1",async({page})=>{ //ทดสอบการเข้าสู่หน้าสมัครทีม
        await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/index.php');
        await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
        await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
        await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('player05');
        await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
        await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('!Th123456');
        await page.getByRole('button', { name: 'เข้าสู่ระบบ ' }).click();
        await page.getByRole('link', { name: 'คลิกที่นี่เพื่อสมัคร' }).click();
    });

    test("register_team case 2",async({page})=>{ //ทดสอบการเข้าสู่หน้าสมัครทีม แล้วกดปุ่มยอมรับและดำเดินการต่อ
        await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/index.php');
        await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
        await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
        await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('player05');
        await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
        await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('!Th123456');
        await page.getByRole('button', { name: 'เข้าสู่ระบบ ' }).click();
        await page.getByRole('link', { name: 'คลิกที่นี่เพื่อสมัคร' }).click();
        await page.getByRole('button', { name: 'ยอมรับและดำเนินการต่อ' }).click();
    });

    test("register_team case 3",async({page})=>{ //ทดสอบการเข้าสู่หน้าสมัครทีม แล้วกดปุ่มยอมรับและดำเดินการต่อ แล้วเลือกรายการแข่งขัน
        await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/index.php');
        await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
        await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
        await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('player05');
        await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
        await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('!Th123456');
        await page.getByRole('button', { name: 'เข้าสู่ระบบ ' }).click();
        await page.getByRole('link', { name: 'คลิกที่นี่เพื่อสมัคร' }).click();
        await page.getByRole('button', { name: 'ยอมรับและดำเนินการต่อ' }).click();
        await page.selectOption('select#tournament_id', { label: 'รุ่นอายุไม่เกิน 18 ปี' });
    });

    test("register_team case 4",async({page})=>{ //ทดสอบการเข้าสู่หน้าสมัครทีม แล้วกดปุ่มยอมรับและดำเดินการต่อ แล้วเลือกรายการแข่งขัน และกรอกชื่อทีม
        await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/index.php');
        await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
        await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
        await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('player05');
        await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
        await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('!Th123456');
        await page.getByRole('button', { name: 'เข้าสู่ระบบ ' }).click();
        await page.getByRole('link', { name: 'คลิกที่นี่เพื่อสมัคร' }).click();
        await page.getByRole('button', { name: 'ยอมรับและดำเนินการต่อ' }).click();
        await page.selectOption('select#tournament_id', { label: 'รุ่นอายุไม่เกิน 18 ปี' });
        await page.getByRole('textbox', { name: 'ชื่อทีม' }).click();
        await page.getByRole('textbox', { name: 'ชื่อทีม' }).fill('The Champions');
    });

    test("register_team case 5",async({page})=>{ //ทดสอบการเข้าสู่หน้าสมัครทีม แล้วกดปุ่มยอมรับและดำเดินการต่อ แล้วเลือกรายการแข่งขัน กรอกชื่อทีม และกรอกชื่อผู้ควบคุมทีม
        await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/index.php');
        await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
        await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
        await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('player05');
        await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
        await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('!Th123456');
        await page.getByRole('button', { name: 'เข้าสู่ระบบ ' }).click();
        await page.getByRole('link', { name: 'คลิกที่นี่เพื่อสมัคร' }).click();
        await page.getByRole('button', { name: 'ยอมรับและดำเนินการต่อ' }).click();
        await page.selectOption('select#tournament_id', { label: 'รุ่นอายุไม่เกิน 18 ปี' });
        await page.getByRole('textbox', { name: 'ชื่อทีม' }).click();
        await page.getByRole('textbox', { name: 'ชื่อทีม' }).fill('The Champions');
        await page.getByRole('textbox', { name: 'ชื่อผู้ควบคุมทีม'}).click();
        await page.getByRole('textbox', { name: 'ชื่อผู้ควบคุมทีม'}).fill('Mr.G');
    });

    test("register_team case 6",async({page})=>{ //ทดสอบการเข้าสู่หน้าสมัครทีม แล้วกดปุ่มยอมรับและดำเดินการต่อ แล้วเลือกรายการแข่งขัน กรอกชื่อทีม กรอกชื่อผู้ควบคุมทีม และกรอกเบอร์โทรผู้ควบคุมทีม
        await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/index.php');
        await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
        await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
        await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('player05');
        await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
        await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('!Th123456');
        await page.getByRole('button', { name: 'เข้าสู่ระบบ ' }).click();
        await page.getByRole('link', { name: 'คลิกที่นี่เพื่อสมัคร' }).click();
        await page.getByRole('button', { name: 'ยอมรับและดำเนินการต่อ' }).click();
        await page.selectOption('select#tournament_id', { label: 'รุ่นอายุไม่เกิน 18 ปี' });
        await page.getByRole('textbox', { name: 'ชื่อทีม' }).click();
        await page.getByRole('textbox', { name: 'ชื่อทีม' }).fill('The Champions');
        await page.getByRole('textbox', { name: 'ชื่อผู้ควบคุมทีม'}).click();
        await page.getByRole('textbox', { name: 'ชื่อผู้ควบคุมทีม'}).fill('Mr.G');
        await page.getByRole('textbox', { name: 'เบอร์โทรผู้ควบคุมทีม'}).click();
        await page.getByRole('textbox', { name: 'เบอร์โทรผู้ควบคุมทีม'}).fill('0123456789');
    });

    test("register_team case 7",async({page})=>{ //ทดสอบการเข้าสู่หน้าสมัครทีม แล้วกดปุ่มยอมรับและดำเดินการต่อ แล้วเลือกรายการแข่งขัน กรอกชื่อทีม กรอกชื่อผู้ควบคุมทีม กรอกเบอร์โทรผู้ควบคุมทีม และกรอกสังกัด/โรงเรียน
        await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/index.php');
        await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
        await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
        await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('player05');
        await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
        await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('!Th123456');
        await page.getByRole('button', { name: 'เข้าสู่ระบบ ' }).click();
        await page.getByRole('link', { name: 'คลิกที่นี่เพื่อสมัคร' }).click();
        await page.getByRole('button', { name: 'ยอมรับและดำเนินการต่อ' }).click();
        await page.selectOption('select#tournament_id', { label: 'รุ่นอายุไม่เกิน 18 ปี' });
        await page.getByRole('textbox', { name: 'ชื่อทีม' }).click();
        await page.getByRole('textbox', { name: 'ชื่อทีม' }).fill('The Champions');
        await page.getByRole('textbox', { name: 'ชื่อผู้ควบคุมทีม'}).click();
        await page.getByRole('textbox', { name: 'ชื่อผู้ควบคุมทีม'}).fill('Mr.G');
        await page.getByRole('textbox', { name: 'เบอร์โทรผู้ควบคุมทีม'}).click();
        await page.getByRole('textbox', { name: 'เบอร์โทรผู้ควบคุมทีม'}).fill('0123456789');
        await page.getByRole('textbox', { name: 'สังกัด/โรงเรียน'}).click();
        await page.getByRole('textbox', { name: 'สังกัด/โรงเรียน'}).fill('Surin Rmuti');
    });

    test("register_team case 8",async({page})=>{ //ทดสอบการเข้าสู่หน้าสมัครทีม แล้วกดปุ่มยอมรับและดำเดินการต่อ แล้วเลือกรายการแข่งขัน กรอกชื่อทีม กรอกชื่อผู้ควบคุมทีม กรอกเบอร์โทรผู้ควบคุมทีม และกรอกสังกัด/โรงเรียน และกรอกชื่อ-นามสกุลคนที่ 1
        await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/index.php');
        await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
        await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
        await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('player05');
        await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
        await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('!Th123456');
        await page.getByRole('button', { name: 'เข้าสู่ระบบ ' }).click();
        await page.getByRole('link', { name: 'คลิกที่นี่เพื่อสมัคร' }).click();
        await page.getByRole('button', { name: 'ยอมรับและดำเนินการต่อ' }).click();
        await page.selectOption('select#tournament_id', { label: 'รุ่นอายุไม่เกิน 18 ปี' });
        await page.getByRole('textbox', { name: 'ชื่อทีม' }).click();
        await page.getByRole('textbox', { name: 'ชื่อทีม' }).fill('The Champions');
        await page.getByRole('textbox', { name: 'ชื่อผู้ควบคุมทีม'}).click();
        await page.getByRole('textbox', { name: 'ชื่อผู้ควบคุมทีม'}).fill('Mr.G');
        await page.getByRole('textbox', { name: 'เบอร์โทรผู้ควบคุมทีม'}).click();
        await page.getByRole('textbox', { name: 'เบอร์โทรผู้ควบคุมทีม'}).fill('0123456789');
        await page.getByRole('textbox', { name: 'สังกัด/โรงเรียน'}).click();
        await page.getByRole('textbox', { name: 'สังกัด/โรงเรียน'}).fill('Surin Rmuti');
        await page.getByRole('textbox', { name: 'ชื่อ-นามสกุล' }).nth(1).click();
        await page.getByRole('textbox', { name: 'ชื่อ-นามสกุล' }).nth(1).fill('ฤทธินันท์ ใจดี');
    });

    test("register_team case 9",async({page})=>{ //ทดสอบการเข้าสู่หน้าสมัครทีม แล้วกดปุ่มยอมรับและดำเดินการต่อ แล้วเลือกรายการแข่งขัน กรอกชื่อทีม กรอกชื่อผู้ควบคุมทีม กรอกเบอร์โทรผู้ควบคุมทีม และกรอกสังกัด/โรงเรียน กรอกชื่อ-นามสกุลคนที่ 1 และกรอกชื่อในเกมคนที่ 1
        await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/index.php');
        await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
        await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
        await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('player05');
        await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
        await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('!Th123456');
        await page.getByRole('button', { name: 'เข้าสู่ระบบ ' }).click();
        await page.getByRole('link', { name: 'คลิกที่นี่เพื่อสมัคร' }).click();
        await page.getByRole('button', { name: 'ยอมรับและดำเนินการต่อ' }).click();
        await page.selectOption('select#tournament_id', { label: 'รุ่นอายุไม่เกิน 18 ปี' });
        await page.getByRole('textbox', { name: 'ชื่อทีม' }).click();
        await page.getByRole('textbox', { name: 'ชื่อทีม' }).fill('The Champions');
        await page.getByRole('textbox', { name: 'ชื่อผู้ควบคุมทีม'}).click();
        await page.getByRole('textbox', { name: 'ชื่อผู้ควบคุมทีม'}).fill('Mr.G');
        await page.getByRole('textbox', { name: 'เบอร์โทรผู้ควบคุมทีม'}).click();
        await page.getByRole('textbox', { name: 'เบอร์โทรผู้ควบคุมทีม'}).fill('0123456789');
        await page.getByRole('textbox', { name: 'สังกัด/โรงเรียน'}).click();
        await page.getByRole('textbox', { name: 'สังกัด/โรงเรียน'}).fill('Surin Rmuti');
        await page.getByRole('textbox', { name: 'ชื่อ-นามสกุล' }).nth(1).click();
        await page.getByRole('textbox', { name: 'ชื่อ-นามสกุล' }).nth(1).fill('ฤทธินันท์ ใจดี');
        await page.getByRole('textbox', { name: 'ชื่อในเกม' }).nth(1).click();
        await page.getByRole('textbox', { name: 'ชื่อในเกม' }).nth(1).fill('RitTee');
    });

    test("register_team case 10",async({page})=>{ //ทดสอบการเข้าสู่หน้าสมัครทีม แล้วกดปุ่มยอมรับและดำเดินการต่อ แล้วเลือกรายการแข่งขัน กรอกชื่อทีม กรอกชื่อผู้ควบคุมทีม กรอกเบอร์โทรผู้ควบคุมทีม และกรอกสังกัด/โรงเรียน กรอกชื่อ-นามสกุลคนที่ 1 กรอกชื่อในเกมคนที่ 1 และกรอกอายุคนที่ 1
        await page.goto('https://computer.surin.rmuti.ac.th/certificate/project/index.php');
        await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
        await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
        await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('player05');
        await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
        await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('!Th123456');
        await page.getByRole('button', { name: 'เข้าสู่ระบบ ' }).click();
        await page.getByRole('link', { name: 'คลิกที่นี่เพื่อสมัคร' }).click();
        await page.getByRole('button', { name: 'ยอมรับและดำเนินการต่อ' }).click();
        await page.selectOption('select#tournament_id', { label: 'รุ่นอายุไม่เกิน 18 ปี' });
        await page.getByRole('textbox', { name: 'ชื่อทีม' }).click();
        await page.getByRole('textbox', { name: 'ชื่อทีม' }).fill('The Champions');
        await page.getByRole('textbox', { name: 'ชื่อผู้ควบคุมทีม'}).click();
        await page.getByRole('textbox', { name: 'ชื่อผู้ควบคุมทีม'}).fill('Mr.G');
        await page.getByRole('textbox', { name: 'เบอร์โทรผู้ควบคุมทีม'}).click();
        await page.getByRole('textbox', { name: 'เบอร์โทรผู้ควบคุมทีม'}).fill('0123456789');
        await page.getByRole('textbox', { name: 'สังกัด/โรงเรียน'}).click();
        await page.getByRole('textbox', { name: 'สังกัด/โรงเรียน'}).fill('Surin Rmuti');
        await page.getByRole('textbox', { name: 'ชื่อ-นามสกุล' }).nth(1).click();
        await page.getByRole('textbox', { name: 'ชื่อ-นามสกุล' }).nth(1).fill('ฤทธินันท์ ใจดี');
        await page.getByRole('textbox', { name: 'ชื่อในเกม' }).nth(1).click();
        await page.getByRole('textbox', { name: 'ชื่อในเกม' }).nth(1).fill('RitTee');
        await page.getByRole('spinbutton', { name: 'อายุ' }).nth(1).click();
        await page.getByRole('spinbutton', { name: 'อายุ' }).nth(1).fill('17');
    });
});