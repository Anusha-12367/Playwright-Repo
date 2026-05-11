import {test,expect} from '@playwright/test'
import { LoginPage } from '../Pages/Loginpage'
import { AddCart } from '../Pages/AddtoCart'
import { CheckOut } from '../Pages/Checkout'
test('Checkout from site',async({page})=>{
    const lo=new LoginPage(page)
    const ad=new AddCart(page)
    const ch=new CheckOut(page)
    await lo.goto()
    await lo.login('standard_user','secret_sauce')
    await ad.add()
    await ch.checkout()
    await ch.fill('anusha','mohan','685585')
})