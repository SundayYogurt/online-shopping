import { Product } from "./Product"
class LineItem {

    private product:Product
    private quantity:number
    private price:number

    constructor(product:Product, quantity:number, price:number){
        this.product = product
        this.quantity = quantity
        this.price = price
    }

    public getQuantity(){
        return this.quantity
    }

    public getPrice(){
        return this.price
    }

    public setQuantity(quantity:number){
        this.quantity = quantity
    }

    public setPrice(price:number){
        this.price = price
    }

    public toString():string{
        return `Quantity = [${this.quantity} Unit ] , Price = [${this.price} Bath ], Product = [${this.product.toString()}]`
    }
}

export {LineItem}