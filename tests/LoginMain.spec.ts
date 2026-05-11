import {test,expect} from '@playwright/test'
import {LoginPage} from '../Pages/LoginpageMain'  //import class from LoginpageMain from Page(same folder aanel single dot or double dot)

import validLogindata from '../Utils/Testdata.json'   //json data import--diff folder../same folder .

test('Login in typescript',async({page})=>{
     const loginpage=new LoginPage(page)
     await loginpage.goto()
     //await loginpage.login('standard_user','secret_sauce')
        const user=validLogindata.username
        const pass=validLogindata.password
        await loginpage.login(user,pass) 
})
