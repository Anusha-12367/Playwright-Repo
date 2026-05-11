import{test,expect} from '@playwright/test'
const dataset=require('../Utils/ParameterisedTestdata.json')//json data import--diff folder../same folder .

test.beforeEach(async({page})=>{
await page.goto('https://www.saucedemo.com')
})

//for passing multiple data, loop can be used

for(const data of dataset){
test(`Login using invalid credentials as a loop ${data.username} ${data.password}`,async({page})=>{//using backtick symbol and dollar for passing arguments in console.log 

    const usename=page.locator("//input[@id='user-name']")
    await usename.fill(data.username)
        const passwd=page.locator("//input[@id='password']")
    await passwd.fill(data.password)
    const login=page.locator("//input[@id='login-button']")
    await login.click()
    //await expect(page).toHaveURL('https://www.saucedemo.com/')

})
}
