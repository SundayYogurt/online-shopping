import { LineItem } from "./LineItem"
import { OrderStatus } from "./OrderStatus"

class Order {
    private lineItems:LineItem[]= []
    private number:string
    private ordered:string
    private shipped:string
    private shipTo:string
    private status:OrderStatus
    private total:number = 0

    constructor( number:string,ordered:string,shipped:string,ship_to:string,total:number,lineItems:LineItem[]){
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

    public toString():string{
        return `Number = [${this.number}], Ordered = [${this.ordered}], Shipped = [${this.shipped}], Ship to = [${this.shipTo}], Status = [${this.status}], Total = [${this.total}]`
    }
}

export {Order}