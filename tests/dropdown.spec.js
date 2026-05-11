import {test,expect} from '@playwright/test'
test('Dropdown in Playwright',async({page})=>{
    await page.goto("http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
    const drop=page.locator("//select[@id='dropdowm-menu-1']")
    //using index
    await drop.selectOption({index:1})
    //using value
    //await drop.selectOption({value:'python'})
    //using visible Text
    //await drop.selectOption({label:'SQL'})
})

//checkboxes
test.only('Checkbox in Playwright',async({page})=>{
    await page.goto('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    const checkBox=page.locator("//input[@value='option-1']")
    await checkBox.click()
    //await checkBox.check()
    await checkBox.uncheck()
    console.log(await checkBox.isChecked())
})

//Radiobuttons
test.only('radio button in playwright',async({page})=>{
        await page.goto('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
const radio=page.locator("//input[@value='green']")
await radio.click()

})