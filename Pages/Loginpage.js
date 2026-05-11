import { AddCart } from "./AddtoCart"

export class LoginPage{     //export is used to use all elements in the entire classes in the project
   constructor(page){
    this.page=page
    this.userName=page.locator('#user-name')
    this.password=page.locator('#password')
    this.loginb=page.locator('#login-button')
   }
async goto(){   //only if async is used, await can be used
    await this.page.goto('https://www.saucedemo.com/')
    return this//one time navigation that can be used in every pages
}
async login(user,pass){
    await this.userName.fill(user)
    await this.password.fill(pass)
    await this.loginb.click() 
    return new AddCart(this.page)
}
}