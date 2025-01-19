"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCard = void 0;
const Account_1 = require("./Account");
class ShoppingCard extends Account_1.Account {
    constructor(accountId, billingAddress, is_closed, open, closed, webUser, id, address, phone, email, create, lineItem) {
        super(accountId, billingAddress, is_closed, open, closed, webUser, id, address, phone, email);
        this.lineItem = [];
        this.lineItem = lineItem;
        this.create = create;
    }
    getCreateDate() {
        return this.create;
    }
    setCreateDate(create) {
        this.create = create;
    }
    toString() {
        const itemsDescription = this.lineItem.map(item => item.toString()).join(", ");
        return `Account Id = ${super.getAccountId()}, Customer Id = ${super.getId()}, Cart Date = ${this.create}, Items = [${itemsDescription}]`;
    }
}
exports.ShoppingCard = ShoppingCard;
