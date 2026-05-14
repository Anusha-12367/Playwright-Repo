import {test,expect} from '@playwright/test'
import {LoginDemoblaze} from '../Pages/LoginDemoblaze' //import class from LoginpageMain from Page(same folder aanel single dot or double dot)

import validLogindata from '../Utils/Testdataproject.json' with {type:'json'};  

test('Invalid username and invalid password',async({page})=>{

        const user = validLogindata[0].invalidUsername
        const pass = validLogindata[0].invalidPassword
        const loginpage = new LoginDemoblaze(page)
        await loginpage.goto()
        await loginpage.invalidLogin(user,pass)
         page.on('dialog',async dialog=>{  
    expect(dialog.message()).toBe('Wrong password.') 
    await dialog.accept()
})
})
test('Invalid username and validpassword',async({page})=>{

        const user = validLogindata[1].invalidUsername
        const pass = validLogindata[1].validPassword
        const loginpage = new LoginDemoblaze(page)
        await loginpage.goto()
        await loginpage.invalidLogin(user,pass)
         page.on('dialog',async dialog=>{  
    expect(dialog.message()).toBe('Wrong password.') 
    await dialog.accept()
})
})
test('Valid username and invalidpassword',async({page})=>{

         const user=validLogindata[2].validUsername
        const pass=validLogindata[2].invalidPassword
        const loginpage = new LoginDemoblaze(page)
        await loginpage.goto()
        await loginpage.invalidLogin(user,pass)
        
     page.on('dialog',async dialog=>{  
    expect(dialog.message()).toBe('Wrong password.') 
    await dialog.accept()
})
})
test('Login in with valid credentials',async({page})=>{
     const loginpage=new LoginDemoblaze(page)        
         const user = validLogindata[3].username
         const pass = validLogindata[3].password
        await loginpage.goto()
        await loginpage.login(user,pass) 
})
