import {test,expect} from '@playwright/test'
test('Wait in Playwright',async({page})=>{
    await page.goto('https://selenium.qabible.in/')
    //applying wait
    await page.waitForLoadState('networkidle')
    const msgBox1=page.locator("//input[@id='single-input-field']")
    await msgBox1.fill('Test Data')
})