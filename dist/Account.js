"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const Customer_1 = require("./Customer");
class Account extends Customer_1.Customer {
    constructor(accountId, billingAddress, is_closed, open, closed, webUser, id, address, phone, email) {
        super(webUser, id, address, phone, email);
        this.accountId = accountId;
        this.billingAddress = billingAddress;
        this.is_closed = is_closed;
        this.open = open;
        this.closed = closed;
    }
    getIdFromCustomer() {
        return super.getId();
    }
    getAccountId() {
        return this.accountId;
    }
    getAddress() {
        return this.billingAddress;
    }
    getIsClosed() {
        return this.is_closed;
    }
    getOpen() {
        return this.open;
    }
    getClosed() {
        return this.closed;
    }
    setAddress(address) {
        this.billingAddress = address;
    }
    setIsClosed(is_closed) {
        this.is_closed = is_closed;
    }
    setOpen(open) {
        this.open = open;
    }
    setClosed(closed) {
        this.closed = closed;
    }
    toStringAccount() {
        return `
    ------------------------------------------------------------
    Account Information:
    ------------------------------------------------------------
    Account ID         : ${this.accountId}
    Billing Address    : ${this.billingAddress}
    Is Closed          : ${this.is_closed}
    When Open          : ${this.open}
    When Closed        : ${this.closed}
    Web User           : ${this.webUser}
    Customer ID        : ${this.getIdFromCustomer()}
    Address            : ${this.address}
    Phone Number       : ${this.phone}
    Email              : ${this.email}
    ------------------------------------------------------------
    `;
    }
}
exports.Account = Account;
