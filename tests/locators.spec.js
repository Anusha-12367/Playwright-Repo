import {test,expect} from '@playwright/test'
test('locators',async({page})=>{
    await page.goto('https://selenium.qabible.in/simple-form-demo.php')
    const msgBox=page.locator('#single-input-field')//id locator
    page.locator('.form-control')//class locator
    const button=page.locator("//button[@id='button-one']")
    await msgBox.type("Hello world")
    await msgBox.fill("Welcome")
    await button.click()
})

    //special locators
    test.only('Special Locators',async({page})=>{
        await page.goto('https://groceryapp.uniqassosiates.com/admin/login')
        const username = page.locator("//input[@name='username']")
        await username.fill("admin")
        const pwd = page.locator("//input[@name='password']")
        await pwd.fill("admin")
        const login=page.locator("//button[@type='submit']")
        await login.click()
        //special locators from next page
        await page.goto('https://groceryapp.uniqassosiates.com/admin/list-admin')
        await page.getByRole('button',{name:'Active'}).nth(1).click()//if the DOM has attribute 'role'

        //text attribute function
        await page.getByText('Active').nth(4).click()
        //await page.getByText('Active').first().click()
        //await page.getByText('Active').last().click()
    })
