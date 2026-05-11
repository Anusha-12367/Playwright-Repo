//calender validation usually means verifying that a date-picker behaves correctly.
//selecting date, showing correct values, displaying past or future dates

import {test,expect} from '@playwright/test'
test('Date picker validation',async({page})=>{
    await page.goto('https://selenium.qabible.in/date-picker.php')
    const enterdate=page.locator('#single-input-field')
    await enterdate.click()
    const targetyear=1997
    await expect(page.locator('.datepicker-dropdown')).toBeVisible()//waiting for the date popup to be visible
    const switchButton=page.locator('.datepicker-switch:visible')
    await switchButton.click() //month lekk vannu
    await switchButton.click()//again year lekk varaan
    let attempt=10   //to avoid infinite loop
    while(attempt--){

    const decadetest=await switchButton.innerText()  //to fetch the decade in the user interface
    const startyear=parseInt(decadetest.split('-')[0].trim())//parseInt to convert text to integer and fetch the year
    if(targetyear>=startyear && targetyear<=startyear+9) break

    await page.locator('.prev:visible').click()
    }
 await page.locator('.year:visible').filter({hasText:'1997'}).click()
 await page.locator('.month:visible').filter({hasText:'Mar'}).click()
 await page.locator('.day:visible').filter({hasText:'20'}).click()
 await page.locator('#button-one').click()

})