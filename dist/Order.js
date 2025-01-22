"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const OrderStatus_1 = require("./OrderStatus");
class Order {
    constructor(number, ordered, shipped, ship_to) {
        this.lineItems = [];
        this.payment = [];
        this.total = 0;
        this.number = number;
        this.ordered = ordered;
        this.shipped = shipped;
        this.ship_to = ship_to;
        this.status = OrderStatus_1.OrderStatus.NEW;
    }
    getNumber() {
        return this.number;
    }
    getOrderedDate() {
        return this.ordered;
    }
    getShippedDate() {
        return this.shipped;
    }
    setShippedDate(shipped) {
        this.shipped = shipped;
    }
    getShip_toAddress() {
        return this.ship_to;
    }
    setShip_toAddress(ship) {
        this.ship_to = ship;
    }
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }
    getTotal() {
        return this.total;
    }
    setTotal(total) {
        this.total = total;
    }
    calTotal() {
        let total = 0;
        for (let i = 0; i < this.lineItems.length; i++) {
            total += this.lineItems[i].getQuantity() * this.lineItems[i].getPrice();
        }
        return total;
    }
    getPayments() {
        return this.payment;
    }
    addPayment(payment) {
        this.payment.push(payment);
    }
    addLineItem(lineItems) {
        this.lineItems.push(lineItems);
    }
    getLineItems() {
        return this.lineItems;
    }
    toString() {
        return `Order | [number = ${this.number}, ordered = ${this.ordered}, shipped = ${this.shipped}, ship_to = ${this.ship_to}, status = ${this.status}, total = ${this.total}, [Payment | ${this.payment}]]`;
    }
}
exports.Order = Order;
