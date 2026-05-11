import {test,expect} from '@playwright/test'
import {LoginDemoblaze} from '../Pages/LoginDemoblaze' //import class from LoginpageMain from Page(same folder aanel single dot or double dot)

import validLogindata from '../Utils/Testdataproject.json' with {type:'json'};  

test('Login in home screen',async({page})=>{
     const loginpage=new LoginDemoblaze(page)        
     const user=validLogindata.username
        const pass=validLogindata.password
        await loginpage.goto()
        await loginpage.login(user,pass) 
})