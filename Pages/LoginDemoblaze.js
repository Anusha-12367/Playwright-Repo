//import { AddCart } from "./AddtoCart"

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
   // return new AddCart(this.page)
}
}