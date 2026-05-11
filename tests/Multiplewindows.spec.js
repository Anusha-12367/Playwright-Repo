import {test,expect} from '@playwright/test'
test('Multiple window in playwright',async({page,context})=>{
    await page.goto('https://demo.guru99.com/popup.php')
    const popup=context.waitForEvent('page')//waiting for 2nd window to load b4 click
    //xpath taking using text
    const clickBut=page.locator("//a[text()='Click Here']")
    await clickBut.click()
    //for loading new window/popup
    const newpop=await popup   //for page loading ,using already used popup variable as it contain waitforEvent context
    await newpop.waitForLoadState()
    const email=newpop.locator("//input[@name='emailid']")
    await email.fill('anusha123@gmail.com')
    const submit=newpop.locator("//input[@type='submit']")
    await submit.click()

})