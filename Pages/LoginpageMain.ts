import { AddCart } from "./AddtoCart"
import {Page,Locator} from '@playwright/test' //importing type
export class LoginPage{  
    page:Page 
    userName:Locator
    password:Locator
    loginb:Locator  //export is used to use all elements in the entire classes in the project
   constructor(page:Page){
    this.page=page
    this.userName=page.locator('#user-name')
    this.password=page.locator('#password')
    this.loginb=page.locator('#login-button')
   }
async goto(){   //only if async is used, await can be used
    await this.page.goto('https://www.saucedemo.com/')
    return this//one time navigation that can be used in every pages
}
async login(user:string,pass:string):Promise<AddCart>{        //to wait for loading AddtoCart page when using async
    await this.userName.fill(user)
    await this.password.fill(pass)
    await this.loginb.click() 
    return new AddCart(this.page)
}
}