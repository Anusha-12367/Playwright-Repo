import {test,expect} from '@playwright/test'
import {SignupPage} from '../Pages/Signuppage'  
import validLogindata from '../Utils/Testdataproject.json' with {type:'json'};  

test('Signup in home screen',async({page})=>{
     const signpage=new SignupPage(page)
     await signpage.goto()
    
        const user=validLogindata.username
        const pass=validLogindata.password
        await signpage.signup(user,pass)
})
test('Signup close button test',async({page})=>{

    const signpage = new SignupPage(page)

    await signpage.goto()

    await signpage.enterSignupDetails('anusha','test123')

    await signpage.closeButton()

})