export class CheckOut{
    constructor(page){
        this.page=page
        this.check=page.locator('#checkout')
        this.fname=page.locator("//input[@id='first-name']")
        this.lname=page.locator("//input[@id='last-name']")
        this.pcode=page.locator("//input[@id='postal-code']")
        this.cont=page.locator("//input[@id='continue']")
        this.finish=page.locator("//button[@id='finish']")
    }
    async checkout(){
        await this.check.click()
    }
    async fill(first,last,pin){
        await this.fname.fill(first)
        await this.lname.fill(last)
        await this.pcode.fill(pin)
        await this.cont.click()
        await this.finish.click()
        //await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!')
    
    }

}