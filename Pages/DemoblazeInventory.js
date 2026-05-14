export class InventoryPage{
    constructor(page){
        this.page=page
        this.cart=page.locator('a[href="prod.html?idp_=1"]')
        this.added=page.locator('.btn btn-success btn-lg')
    }
    async add(){
        await this.cart.click()
        await this.added.click()
    }
}