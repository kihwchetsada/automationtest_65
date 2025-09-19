import {test, expect} from '@playwright/test';
//ประกาศตัวแปรเก็บค่า user id
var user_id;

test("Facebook@social",async({page})=>{
    await page.goto('https://www.Facebook.com/');
});

test("ig@social",async({page})=>{
    await page.goto('https://www.instagram.com/');
});

test("google",async({page})=>{
    await page.goto('https://www.google.com/');
});

test.describe("group@social",()=>{
    test("bing",async({page})=>{
        await page.goto('https://www.bing.com/');
    });
    test("yahoo",async({page})=>{
        await page.goto('https://www.yahoo.com/');
    });
});

test("Get user CI/CD",async({request})=>{
    const response=await request.get("https://regres.in/api/users/2");
    expect(response.status()).toBe(200);
});
test("Get Users@api", async ({ request }) => {
  // การส่ง API แบบ get และเก็บใส่ตัวแปร response
const response = await request.get("https://reqres.in/api/users/2");
  // การยืนยันหรือ Assertion
expect(response.status()).toBe(200);
});

// การทดสอบ API Method Post
test('Create Users@api', async ({ request }) => {
    // การส่ง API แบบ post และเก็บใส่ตัวแปร response
    const response = await request.post('https://reqres.in/api/users',
        {
            data:{"name": "morpheus","job": "leader"},
            headers:{"Accept":"application/json"}   
        });
        expect(response.status()).toBe(201)
        // การเก็บค่า ID User ที่เพิ่งสร้างขึ้น
        var res = await response.json()
        user_id = res.id
});

// การทดสอบ API Method Put
test('Update Users@api', async ({ request }) => {
    // การส่ง API แบบ put และเก็บใส่ตัวแปร response
    const response = await request.put('https://reqres.in/api/users/'+user_id,
        {
            data:{"name": "anutchai","job": "teacher"},
            headers:{"Accept":"application/json"}   
        });
        expect(response.status()).toBe(200)
});

// การทดสอบ API Method Delete
test('Delete Users@api', async ({ request }) => {
    // การส่ง API แบบ delete และเก็บใส่ตัวแปร response
    const response = await request.delete('https://reqres.in/api/users/'+user_id);
        expect(response.status()).toBe(204)
});