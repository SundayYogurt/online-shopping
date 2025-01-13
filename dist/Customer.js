"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor(webuser, id, address, phone, email) {
        this.webUser = webuser;
        this.id = id;
        this.address = address;
        this.phone = phone;
        this.email = email;
    }
    getId() {
        return this.id;
    }
    getPhone() {
        return this.phone;
    }
    getAdress() {
        return this.address;
    }
    getEmail() {
        return this.email;
    }
    setAddress(address) {
        this.address = address;
    }
    setPhone(phone) {
        this.phone = phone;
    }
    setEmail(email) {
        this.email = email;
    }
    toString() {
        return `[ WebUser =  ${this.webUser.toString()} ] Customer [ID = ${this.id}],[ Address = ${this.address} ],[ Phone = ${this.phone} ],[ Email = ${this.email}] `;
    }
}
exports.Customer = Customer;
