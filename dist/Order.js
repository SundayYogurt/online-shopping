"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const OrderStatus_1 = require("./OrderStatus");
class Order {
    constructor(number, ordered, shipped, ship_to, total, lineItems) {
        this.lineItems = [];
        this.total = 0;
        this.lineItems = lineItems || [];
        this.number = number;
        this.ordered = ordered;
        this.shipped = shipped;
        this.shipTo = ship_to;
        this.status = OrderStatus_1.OrderStatus.HOLD;
        this.total = this.calcTotal();
    }
    getNumber() {
        return this.number;
    }
    getOrdered() {
        return this.ordered;
    }
    getShipped() {
        return this.shipped;
    }
    getShipTo() {
        return this.shipTo;
    }
    getStatus() {
        return this.status;
    }
    getTotal() {
        return this.total;
    }
    setOrdered(ordered) {
        this.ordered = ordered;
    }
    setShipped(shipped) {
        this.shipped = shipped;
    }
    setShipto(shipTo) {
        this.shipTo = shipTo;
    }
    setStatus(status) {
        this.status = status;
    }
    setTotal(total) {
        this.total = total;
    }
    calcTotal() {
        let total = 0;
        for (let i = 0; i < this.lineItems.length; i++) {
            total += this.lineItems[i].getQuantity() * this.lineItems[i].getPrice();
        }
        return total;
    }
    toString() {
        return `Number = [${this.number}], Ordered = [${this.ordered}], Shipped = [${this.shipped}], Ship to = [${this.shipTo}], Status = [${this.status}], Total = [${this.total}]`;
    }
}
exports.Order = Order;
