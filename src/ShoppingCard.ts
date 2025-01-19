import { WebUser } from "./Web_User"
import { Account } from "./Account"
import { LineItem } from "./LineItem"
class ShoppingCard extends Account {
    private create: string
    private lineItem:LineItem[] = []
    constructor(
        accountId: string,
        billingAddress: string,
        is_closed: boolean,
        open: string,
        closed: string,
        webUser: WebUser,
        id: string,
        address: string,
        phone: string,
        email: string,
        create: string,
        lineItem:LineItem []

    ) {
        super (accountId, billingAddress, is_closed, open, closed,webUser, id,address,phone,email)
        this.lineItem = lineItem 
        this.create = create
        
    }
    
    public getCreateDate():string{
        return this.create
    }

    public setCreateDate(create:string):void{
        this.create = create
    }

    public toString():string{
        const itemsDescription = this.lineItem.map(item => item.toString()).join(", ")
        return `Account Id = ${super.getAccountId()}, Customer Id = ${super.getId()}, Cart Date = ${this.create}, Items = [${itemsDescription}]`
    }

}

export { ShoppingCard }