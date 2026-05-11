import {test,expect} from '@playwright/test'
test('Alerts in playwright',async({page})=>{
    await page.goto('https://selenium.qabible.in/javascript-alert.php')
    page.on('dialog',async dialog=>{   //creating a listner before alert box comes
    expect(dialog.message()).toBe('I am a Javascript alert box!') //alert box msg gets and verifies it to confirm alert box
    await dialog.accept()
    })

    const clickBut=page.locator("//button[@class='btn btn-success']")
    await clickBut.click()
})