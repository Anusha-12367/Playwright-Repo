import {test,expect} from '@playwright/test'
import { LoginDemoblaze } from '../Pages/LoginDemoblaze'
import { InventoryPage } from '../Pages/DemoblazeInventory'
test('Add a product to cart',async({page})=>{
    const l=new LoginDemoblaze(page)
    const i=new InventoryPage(page)
    await l.goto()
    await l.login(user,pass)
    await i.add()
})