import {getCellData} from '../Utils/ExcelReader2.js'
import {test,expect} from '@playwright/test'

test('Login using row and column in excel',async({page})=>{
    const username=getCellData(2,1)
    const password=getCellData(2,2)
    await page.goto('https://www.saucedemo.com/')
    const uname=page.locator("//input[@id='user-name']")
    await uname.fill(username)
    const pwd=page.locator("//input[@id='password']")
    await pwd.fill(password)
    const clickB=page.locator("//input[@id='login-button']")
    await clickB.click()
})

