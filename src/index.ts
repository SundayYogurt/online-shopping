
const { WebUser } = require ('./Web_User')
const { UserState } = require ('./UserState')
const { Customer } = require ('./Customer')
const { Product } = require ('./Product')
const { LineItem } = require ('./LineItem')
const { Order } = require ('./Order')
const { OrderStatus} = require ('./OrderStatus')

const user1 = new WebUser("1","123456")
user1.setState(UserState.ACTIVE)

console.log("#################### Users ####################")

console.log(user1.toString())

console.log("#################### Users ####################")

console.log("#################### Customers ####################")

const customer1 = new Customer( user1,"01","NakornPhatom","095-904-2353","Kritsanalalu5@gmail.com")

console.log(customer1.toString())

console.log("#################### Customers ####################")
console.log("#################### Products ####################")

const product1 =  new Product("1","Oreo","BoomyIce")
console.log(product1.toString())

console.log("#################### Products ####################")
console.log("#################### LineItems ####################")
const Line1 = new LineItem(20,600,product1)

console.log(Line1.toString())
console.log("#################### LineItems ####################")

console.log("#################### Order ####################")
const order1 = new Order([Line1],"01","2021-09-01","2021-09-02","NakornPhatom")
console.log(order1.toString())
console.log("Total Price = "+order1.getTotal()) 
console.log("#################### Order ####################")
