import {test,expect} from '@playwright/test'
import { LoginPage } from '../Pages/Loginpage'
import { AddCart } from '../Pages/AddtoCart'
test('Add a product to cart',async({page})=>{
    const l=new LoginPage(page)
    const a=new AddCart(page)
    await l.goto()
    await l.login('standard_user','secret_sauce')
    await a.add()
})