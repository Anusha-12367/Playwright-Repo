import {test,expect} from '../Utils/Customtest'  //importing the custom test from Utils folder
test('Inventory page test',async({validlogin})=>{
    await expect(validlogin).toHaveURL('https://www.saucedemo.com/inventory.html')
})