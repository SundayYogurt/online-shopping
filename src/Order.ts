import { LineItem } from "./LineItem"
import { OrderStatus } from "./OrderStatus"
import { Account } from "./Account"
import { WebUser} from "./Web_User"

class Order extends Account{
    private lineItems:LineItem[]= []
    private number:string
    private ordered:string
    private shipped:string
    private shipTo:string
    private status:OrderStatus
    private total:number = 0

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
        number:string,ordered:string,shipped:string,ship_to:string,total:number,lineItems:LineItem[]){
            super(accountId, billingAddress, is_closed, open, closed, webUser, id,address,phone,email)
        this.lineItems = lineItems || []
        this.number = number
        this.ordered = ordered
        this.shipped = shipped
        this.shipTo = ship_to
        this.status = OrderStatus.HOLD
        this.total = this.calcTotal()
    }

    public getNumber():string{
        return this.number
    }

    public getOrdered():string{
        return this.ordered
    }

    public getShipped():string{
        return this.shipped
    }

    public getShipTo():string{
        return this.shipTo
    }

    public getStatus():OrderStatus{
        return this.status
    }

    public getTotal():number{
        return this.total
    }

    public setOrdered(ordered:string):void{
        this.ordered = ordered
    }

    public setShipped(shipped:string):void{
        this.shipped = shipped
    }
    
    public setShipto(shipTo:string):void{
        this.shipTo = shipTo
    }

    public setStatus(status:OrderStatus):void{
        this.status = status
    }

    public setTotal(total:number):void{
        this.total = total
    }

    public calcTotal():number{
        let total = 0
        for(let i = 0; i < this.lineItems.length; i++){
            total += this.lineItems[i].getQuantity() * this.lineItems[i].getPrice()
        }
        return total
    }

  public toString(): string {
    let lineItemsDetails = this.lineItems.map((lineItem) => {
        const productName = lineItem.getProduct().getName().padEnd(20, ' '); // เพิ่มความยาวให้ชื่อสินค้า
        const quantity = String(lineItem.getQuantity()).padStart(8, ' '); // เพิ่มช่องว่างให้กับจำนวน
        const price = String(lineItem.getPrice()).padStart(8, ''); // เพิ่มช่องว่างให้กับราคา
        const total = String(lineItem.getQuantity() * lineItem.getPrice()).padStart(12, ' '); // เพิ่มช่องว่างให้กับจำนวนเงินทั้งหมด
        
        return `${productName} | ${quantity} | ${price} Bath | ${total} Bath`;
    }).join("\n");

    return `
    ------------------------------------------------------------
    Account Id: ${super.getAccountId()}
    Customer Id: ${super.getId()}
    ------------------------------------------------------------

    Product              | Quantity | Price   | Total
    ------------------------------------------------------------
    ${lineItemsDetails}
    ------------------------------------------------------------

    Order Number: ${this.number}
    Order Date: ${this.ordered}
    Shipped Date: ${this.shipped}
    Ship To: ${this.shipTo}
    Status: ${this.status}
    ------------------------------------------------------------

    Total Amount: ${this.total} Bath
    ------------------------------------------------------------
    `;
}


}

export {Order}