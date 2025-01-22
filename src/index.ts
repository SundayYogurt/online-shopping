const { WebUser } = require('./WebUser')
const { UserState } = require('./UserState')
import { Customer } from './Customer'
import { Product } from './Product'
import { LineItem } from './LineItem'
import { Order } from './Order'
import { Account } from './Account'
import { ShoppingCart } from './ShoppingCart'
import { Payment } from './Payment'

console.log("############## WEBUSER ##############")

const webUser1 = new WebUser("1", "p123")
const webUser2 = new WebUser("2", "p123")
webUser1.setState(UserState.ACTIVE)
console.log(webUser1.toString())
webUser2.setState(UserState.ACTIVE)
console.log(webUser2.toString())



console.log("############## Product ##############")
const product1 = new Product("1", "Pen", "Somchai")
const product2 = new Product("2", "Pencil", "Somchai")
const product3 = new Product("3", "Eraser", "Somchai")
const product4 = new Product("4", "Ruler", "Somchai")
const product5 = new Product("5", "A4", "Somchai")
console.log(product1.toString())
console.log(product2.toString())
console.log(product3.toString())
console.log(product4.toString())
console.log(product5.toString())

console.log("############## LineItem ##############")
const lineitem1 = new LineItem(product1 ,10, 199)
const lineitem2 = new LineItem(product2 ,20, 259)
const lineitem3 = new LineItem(product3 ,5, 20)
const lineitem4 = new LineItem(product4 ,100, 1929)
const lineitem5 = new LineItem(product5 ,1000, 2)
console.log(lineitem1)
console.log(lineitem1.toString())

console.log(lineitem2)
console.log(lineitem2.toString())

console.log(lineitem2)
console.log(lineitem2.toString())

console.log(lineitem3)
console.log(lineitem3.toString())

console.log(lineitem4)
console.log(lineitem4.toString())

console.log(lineitem5)
console.log(lineitem5.toString())



console.log("############## ShoppingCart ##############")
const shoppingcart1 = new ShoppingCart('last month')
const shoppingcart2 = new ShoppingCart('toNight')
// console.log(shoppingcart)
console.log(shoppingcart1.toString())
console.log(shoppingcart2.toString())
// console.log(shoppingcart.getLineItem())

console.log("############## Payment ##############")
const payment1 = new Payment('1', 'wait', 100, '===')
const payment2 = new Payment('2', 'wait', 100, '===')
console.log(payment1.getId())
console.log(payment2.getId())


console.log("############## Order ##############")

const order1 = new Order("1" , "Y", "N", "LA")
console.log(order1.toString())
console.log(order1.calTotal())

const order2 = new Order("2" , "Y", "N", "LA")
console.log(order2.toString())
console.log(order2.calTotal())

console.log("############## Account ##############")
const account1 = new Account('1', 'London', false, 'open', 'no')
const account2 = new Account('2', 'England', false, 'open', 'no')

console.log("############## CUSTOMER ##############")

const cus1 = new Customer(account1 ,webUser1, "1", "London", "099-9999-999", "zny@gmail.com")
const cus2 = new Customer(account2 ,webUser2, "2", "England", "099-9999-999", "zny@gmail.com")
console.log(cus1.toString())
console.log(cus2.toString())

// console.log(account)
// console.log(account.getId())
console.log(account1.toString())
console.log(account2.toString())





console.log("############## ShoppingCart ##############")



