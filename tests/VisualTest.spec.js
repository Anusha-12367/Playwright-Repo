import {test,expect} from '@playwright/test'
test('Visual testing in playwright',async({page})=>{
    await page.goto("https://www.saucedemo.com")
    await page.waitForLoadState('networkidle')//To load page completely
    await expect(page).toHaveScreenshot('Loginpage.png',{threshold:0.02,maxDiffPixels:10700})//to take screeshot and 2% diff is allowed here
    

})
