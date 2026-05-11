import {getdata} from '../Utils/Excelreader.js' 
import {test,expect} from '@playwright/test'
import { LoginPage } from '../Pages/Loginpage'

const credential=getdata()
test('User login with valid credentials',async({page})=>{

    for(const data of credential){
    const loginp=new LoginPage(page)
    await loginp.goto()
    await loginp.login(data.Username,data.Password)//excel sheet headings Username and Password
    //const inventorypage=await(await loginp.goto()).login(data.Username,data.Password)
    }//chaining to add to cart page

})

