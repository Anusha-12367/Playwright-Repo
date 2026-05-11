import { Given, When, Then, After } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import assert from 'assert';

let browser;
let context;
let page;

Given('user is on login page to log in',async function(){
    browser = await chromium.launch({headless:false, slowMo:500})

    context = await browser.newContext()

    page = await context.newPage()

    await page.goto('https://www.saucedemo.com/',{timeout: 50000})
});

When('user enters valid username and password',async function(){

    await page.fill('#user-name', 'standard_user')

    await page.fill('#password', 'secret_sauce')

    await page.click('#login-button')
});

Then('user should see inventory page',async function(){

    await page.waitForSelector('.inventory_list')

    const title = await page.title()

    assert.ok(title.includes('Swag Labs'))
});

Then('user should add a product to cart',async function(){

    await page.click('#add-to-cart-sauce-labs-backpack')
});

Then('user verifies the product in the cart',async function(){

    await page.click('.shopping_cart_link')

    const productText = await page.textContent('.inventory_item_name')

    assert.strictEqual(productText, 'Sauce Labs Backpack')
});

Then('user completes the checkout',async function(){

    await page.click('#checkout')

    await page.fill('#first-name', 'John')

    await page.fill('#last-name', 'Doe')

    await page.fill('#postal-code', '12345')

    await page.click('#continue')

    await page.click('#finish')

    const confirmationMessage = await page.textContent('.complete-header')

    assert.strictEqual(confirmationMessage,'Thank you for your order!' )
});

After(async function(){

    if (browser){
        await browser.close() 
    }
});