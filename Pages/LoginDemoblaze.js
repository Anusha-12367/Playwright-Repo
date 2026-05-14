import { InventoryPage } from "./DemoblazeInventory.js"

export class LoginDemoblaze{  
    
   constructor(page){
    this.page=page
    this.loginbut=page.locator('#login2')
    this.userName=page.locator('#loginusername')
    this.password=page.locator('#loginpassword')
    this.loginb=page.locator('#logInModal .btn-primary')
   }
   async goto(){   
    await this.page.goto('https://www.demoblaze.com/')
    return this
}
async login(user,pass){  
    await this.loginbut.click()      
    await this.userName.fill(user)
    await this.password.fill(pass)
    await this.loginb.click() 
   return new InventoryPage(this.page)
}

// INVALID LOGIN METHOD
    async invalidLogin(user,pass){

        await this.loginbut.click()

        await this.userName.fill(user)
        await this.password.fill(pass)

        const alertPromise = this.page.waitForEvent('dialog')

        await this.loginb.click()

        const dialog = await alertPromise

        const message = dialog.message()

        await dialog.accept()

        return message
    }
}