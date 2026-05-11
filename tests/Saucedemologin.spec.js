import {test,expect} from '@playwright/test'
test.beforeEach(async({page})=>{
await page.goto('https://www.saucedemo.com')
})
test('@smoke Login using valid credentials',async({page})=>{

    const uname=page.locator("//input[@id='user-name']")
    await uname.fill("standard_user")
    const pwd=page.locator("//input[@id='password']")
        await pwd.fill("secret_sauce")
        const clickB=page.locator("//input[@id='login-button']")
        await clickB.click()
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
})
test('@smoke Login using invalid credentials',async({page})=>{

    const uname=page.locator("//input[@id='user-name']")
    await uname.fill("standard_us")
    const pwd=page.locator("//input[@id='password']")
        await pwd.fill("secret_agent")
        const clickB=page.locator("//input[@id='login-button']")
        await clickB.click()
        await expect(page).toHaveURL('https://www.saucedemo.com/')
})
test('@smoke Login using invalid username valid password',async({page})=>{

    const uname=page.locator("//input[@id='user-name']")
    await uname.fill("standard_us")
    const pwd=page.locator("//input[@id='password']")
        await pwd.fill("secret_sauce")
        const clickB=page.locator("//input[@id='login-button']")
        await clickB.click()
        await expect(page).toHaveURL('https://www.saucedemo.com/')
})
test('@smoke Login using valid username invalid password',async({page})=>{

    const uname=page.locator("//input[@id='user-name']")
    await uname.fill("standard_user")
    const pwd=page.locator("//input[@id='password']")
        await pwd.fill("secret_sauc")
        const clickB=page.locator("//input[@id='login-button']")
        await clickB.click()
        await expect(page).toHaveURL('https://www.saucedemo.com/')
})
