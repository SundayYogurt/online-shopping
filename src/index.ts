
const { WebUser } = require ('./Web_User')
const { UserState } = require ('./UserState')
const { Customer } = require ('./Customer')
const { Product } = require ('./Product')
const { LineItem } = require ('./LineItem')
const { Order } = require ('./Order')
const { OrderStatus} = require ('./OrderStatus')
const { ShoppingCard } = require ('./ShoppingCard')
const { Account } = require ('./Account')

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
const Line1 = new LineItem(product1,200,600)

console.log(Line1.toString())
console.log("#################### LineItems ####################")

console.log("#################### Order ####################")
const order1 = new Order("1", "2025-01-18", "2025-01-20", "NakornPhatom" , 0, [Line1])
console.log(order1.toString())
console.log("#################### Order ####################")

console.log("#################### Account ####################")
const account1 = new Account(user1.getId(),"66/110",false,"2025-1-15","Not closed",user1.getState(),customer1.getId(),customer1.getAddress(),customer1.getPhone(),customer1.getEmail())
console.log(account1.toString())
console.log("#################### Account ####################")

console.log("#################### Shopping ####################")

const shopping1  = new ShoppingCard(account1.getAccountId(),"66/110",false,"2025-1-15","Not closed",user1.getState(),customer1.getId(),customer1.getAddress(),customer1.getPhone(),customer1.getEmail(),"2025-01-18",Line1)
console.log(shopping1.toString())

console.log("#################### Shopping ####################")