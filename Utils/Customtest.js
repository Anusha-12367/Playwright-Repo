import{test as base,expect} from '@playwright/test'

const test=base.extend({  //creating a custom test 
    validlogin:async({page},use)=>{    //creating a fixture name validlogin 
        await page.goto('https://www.demoblaze.com/')
        await page.fill('#user-name','standard_user')
        await page.fill('#password','secret_sauce')
        await page.click('#login-button')
        await use(page)
    }
})

export {test,expect}
