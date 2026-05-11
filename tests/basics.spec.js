import {test,expect} from '@playwright/test'
test('Browser Context Playwright Test',async({browser})=>{//test case name-Browser Context Playwright Test
const context=await browser.newContext()//to launch the browser-newContext()
const page=await context.newPage()//to enable a new tab for interaction
await page.goto('https://selenium.qabible.in/')//for url launch
})
//assertion--reassure whether the expected nd actual meets
//always add at the end of the page
test.only('Page Playwright Test',async({page})=>
{
    await page.goto('https://selenium.qabible.in/')
    const titile=await page.title()//to get the title of the page
    console.log("Title is :",titile)
    await expect(page).toHaveTitle("Obsqura Testing")//verify the title of the page

} )
