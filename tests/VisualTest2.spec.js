import {test,expect} from '@playwright/test'
test('Dynamic visual testing',async({page})=>{
    await page.goto('https://selenium.qabible.in/')
    await page.waitForLoadState('networkidle')
    await page.locator('.carousel.slide').evaluate((element)=>{
         element.style.display='none'//hiding the banner element
    })
    await expect(page).toHaveScreenshot('Obsqura.png',{threshold:0.20,maxDiffPixels:3000})
})