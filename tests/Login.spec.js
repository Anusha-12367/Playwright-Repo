import{test,expect} from '@playwright/test'
test.beforeEach(async({page})=>{
await page.goto('https://www.saucedemo.com')
})
const validLogindata=require('../Utils/Testdata.json')//json data import--diff folder../same folder .
test('Login using valid credentials',async({page})=>{

    const usernamevalue=validLogindata.username
    const uname=page.locator("//input[@id='user-name']")
    await uname.fill(usernamevalue)
    const passwordvalue=validLogindata.password
    const pwd=page.locator("//input[@id='password']")
        await pwd.fill(passwordvalue)
        const clickB=page.locator("//input[@id='login-button']")
        await clickB.click()
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

})
test('Login using invalid credentials',async({page})=>{

    const usename=page.locator("//input[@id='user-name']")
    await usename.fill("TestUser")
        const passwd=page.locator("//input[@id='password']")
    await passwd.fill("annnnn")
    const login=page.locator("//input[@id='login-button']")
    await login.click()
    await expect(page).toHaveURL('https://www.saucedemo.com/')

})