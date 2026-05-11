export class AddCart{
    constructor(page){
        this.page=page
        this.cart=page.locator('#add-to-cart-sauce-labs-backpack')
        this.added=page.locator("//a[@class='shopping_cart_link']")
    }
    async add(){
        await this.cart.click()
        //return this
        await this.added.click()
        //return this
    }
}