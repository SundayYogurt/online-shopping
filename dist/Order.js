"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const OrderStatus_1 = require("./OrderStatus");
const Account_1 = require("./Account");
class Order extends Account_1.Account {
    constructor(accountId, billingAddress, is_closed, open, closed, webUser, id, address, phone, email, number, ordered, shipped, ship_to, total, lineItems) {
        super(accountId, billingAddress, is_closed, open, closed, webUser, id, address, phone, email);
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
exports.Order = Order;
