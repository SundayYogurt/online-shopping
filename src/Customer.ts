
import { WebUser } from "./Web_User"
class Customer {
    protected webUser:WebUser
    protected id:string
    protected address:string
    protected phone:string
    protected email:string

    constructor(webuser:WebUser,id:string,address:string,phone:string,email:string){

        this.webUser = webuser
        this.id = id
        this.address = address
        this.phone = phone
        this.email = email

    }

    public getId():string{
        return this.id
    }

    public getPhone():string{
        return this.phone
    }

    public getAddress():string{
        return this.address
    }

    public getEmail():string{
        return this.email
    }
    
    public setAddress(address:string):void{
        this.address = address
    }

    public setPhone(phone:string):void{
        this.phone = phone
    }

    public setEmail(email:string):void{
        this.email = email
    }

    public toString():string{
        return `[ WebUser =  ${this.webUser.toString()} ] Customer [ID = ${this.id}],[ Address = ${this.address} ],[ Phone = ${this.phone} ],[ Email = ${this.email}] `
    }
}

export {Customer}