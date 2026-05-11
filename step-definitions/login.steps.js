import { Given,When,Then } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import assert  from 'assert';
let browser 
let page
Given('user is on login page',async function(){
    browser=await chromium.launch({headless:false})
    const context=await browser.newContext()
    page=await context.newPage()
    await page.goto('https://www.saucedemo.com/',{timeout:50000})

})
When('user enters valid username and password',async function(){
    
    await page.fill('#user-name','standard_user')
    await page.fill('#password','secret_sauce')
    await page.click('#login-button')
})
When('user enters invalid username {string} and  password {string}',async function(username,password){
    await page.fill('#user-name',username)
    await page.fill('#password',password)
    await page.click('#login-button')
})
Then('user should see inventory page',async function(){
    await page.waitForSelector('.inventory_list')
    const title=await page.title()
    assert.ok(title.includes('Swag Labs'))
    await browser.close()
})
Then('user should see error message',async function() {
    const error=await page.locator('[data-test="error"]').textContent()
    assert.ok(error.includes('Username and password do not match any user in this service'))
    await browser.close()
    
})