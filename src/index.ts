
const { WebUser } = require('./Web_User');
const { UserState } = require('./UserState');
const { Customer } = require('./Customer');
const { Product } = require('./Product');
const { LineItem } = require('./LineItem');
const { Order } = require('./Order');
const { OrderStatus } = require('./OrderStatus');
const { ShoppingCard } = require('./ShoppingCard');
const { Account } = require('./Account');
const { Payments } = require('./Payments');

// #################### Users ####################
console.log("\n#################### Users ####################");
const user1 = new WebUser("1", "123456");
const user2 = new WebUser("2", "654321");
user1.setState(UserState.ACTIVE);
user2.setState(UserState.ACTIVE);
console.log(user1.toString());
console.log(user2.toString());
console.log("#################### Users ####################");

// #################### Customers ####################
console.log("\n#################### Customers ####################");
const customer1 = new Customer(user1, "01", "NakornPhatom", "095-904-2353", "Kritsanalalu5@gmail.com");
const customer2 = new Customer(user2, "02", "Bangkok", "095-xxx-xxxx", "Boomy@gmail.com");
console.log(customer1.toString());
console.log(customer2.toString());
console.log("#################### Customers ####################");

// #################### Products ####################
console.log("\n#################### Products ####################");
const product1 = new Product("1", "A4 Paper", "StationeryHub");
const product2 = new Product("2", "Notebook", "StationeryHub");
const product3 = new Product("3", "Pen", "StationeryHub");
const product4 = new Product("4", "Pencil", "StationeryHub");
const product5 = new Product("5", "Eraser", "StationeryHub");
console.log(product1.toString());
console.log(product2.toString());
console.log(product3.toString());
console.log(product4.toString());
console.log(product5.toString());
console.log("#################### Products ####################");

// #################### LineItems ####################
console.log("\n#################### LineItems ####################");
const lineItem1 = new LineItem(product1, 10, 3); 
const lineItem2 = new LineItem(product2, 50, 2); 
const lineItem3 = new LineItem(product3, 20, 5); 
const lineItem4 = new LineItem(product4, 5, 10); 
const lineItem5 = new LineItem(product5, 3, 15); 
console.log(lineItem1.toString());
console.log(lineItem2.toString());
console.log(lineItem3.toString());
console.log(lineItem4.toString());
console.log(lineItem5.toString());
console.log("#################### LineItems ####################");

// #################### Order & ShoppingCart ####################
// สำหรับ User1
console.log("\n#################### Order & ShoppingCart (User1) ####################");
const shoppingCart1 = new ShoppingCard(
  user1.getId(),
  "66/110",
  false,
  "2025-1-15",
  "Not closed",
  user1.getState(),
  customer1.getId(),
  customer1.getAddress(),
  customer1.getPhone(),
  customer1.getEmail(),
  "2025-01-18",
  [lineItem1, lineItem2]
);
console.log(shoppingCart1.toString());

const order1 = new Order(
  user1.getId(),
  "66/110",
  false,
  "2025-1-15",
  "Not closed",
  user1.getState(),
  customer1.getId(),
  customer1.getAddress(),
  customer1.getPhone(),
  customer1.getEmail(),
  "1",
  "2025-01-18",
  "2025-01-20",
  "NakornPhatom",
  0,
  [lineItem1, lineItem2]
);
console.log(order1.toString());

// สำหรับ User2
console.log("\n#################### Order & ShoppingCart (User2) ####################");
const shoppingCart2 = new ShoppingCard(
  user2.getId(),
  "Bangkok 02",
  false,
  "2025-1-16",
  "Not closed",
  user2.getState(),
  customer2.getId(),
  customer2.getAddress(),
  customer2.getPhone(),
  customer2.getEmail(),
  "2025-01-19",
  [lineItem3, lineItem4, lineItem5]
);
console.log(shoppingCart2.toString());

const order2 = new Order(
  user2.getId(),
  "Bangkok 02",
  false,
  "2025-1-16",
  "Not closed",
  user2.getState(),
  customer2.getId(),
  customer2.getAddress(),
  customer2.getPhone(),
  customer2.getEmail(),
  "2",
  "2025-01-19",
  "2025-01-21",
  "Bangkok",
  0,
  [lineItem3, lineItem4, lineItem5]
);
console.log(order2.toString());
console.log("#################### Order & ShoppingCart ####################");
