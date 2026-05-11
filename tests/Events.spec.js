import {test,expect} from '@playwright/test'
test('Mousehover-event in playwright',async({page})=>{

    await page.goto('https://selenium.qabible.in/')
    const others=page.locator('#others')
    //method for mouse hover
    others.hover()

})