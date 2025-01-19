"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payments = void 0;
class Payments {
    constructor(order, account, id, paid, total, detail) {
        this.total = 0;
        this.order = order;
        this.account = account;
        this.id = id;
        this.paid = paid;
        this.total = this.order.calcTotal();
        this.detail = detail;
    }
    getId() {
        return this.id;
    }
    getPaid() {
        return this.paid;
    }
    getTotal() {
        return this.total;
    }
    setTotal(total) {
        this.total = total;
    }
    getDetail() {
        return this.detail;
    }
    setPaid(paid) {
        this.paid = paid;
    }
    setDetail(detail) {
        this.detail = detail;
    }
    toString() {
        return `Order = ${this.order.toString()} Account = ${this.account.toString()} PaymentID = ${this.id} Paid By =  ${this.paid} Total = ${this.total} Detail = ${this.detail}`;
    }
}
exports.Payments = Payments;
