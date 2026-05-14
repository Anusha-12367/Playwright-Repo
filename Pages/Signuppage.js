import { LoginDemoblaze } from "./LoginDemoblaze"
export class SignupPage{     
   constructor(page){
    this.page=page
    this.signbut=page.locator('#signin2')
    this.userName=page.locator('#sign-username')
    this.password=page.locator('#sign-password')
    this.loginb=page.locator('button[onclick="register()"]')
    this.closeb=page.locator('#signInModal .btn-secondary')
   }
async goto(){   
    await this.page.goto('https://www.demoblaze.com/')
    return this
}
async signup(user,pass){
    
    await this.signbut.click()
    await this.userName.fill(user)
    await this.password.fill(pass)
    await this.loginb.click() 
    return new LoginDemoblaze(this.page)
}
async enterSignupDetails(user,pass){

        await this.signbut.click()

        await this.userName.fill(user)

        await this.password.fill(pass)
    }
async closeButton(){
    await this.closeb.click()
}
}