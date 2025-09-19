import {test, expect} from '@playwright/test';

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