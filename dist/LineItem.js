"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineItem = void 0;
class LineItem {
    constructor(product, quantity, price) {
        this.product = product;
        this.quantity = quantity;
        this.price = price;
    }
    getProduct() {
        return this.product;
    }
    getQuantity() {
        return this.quantity;
    }
    getPrice() {
        return this.price;
    }
    setQuantity(quantity) {
        this.quantity = quantity;
    }
    setPrice(price) {
        this.price = price;
    }
    toString() {
        return `Quantity = [${this.quantity} Unit ] , Price = [${this.price} Bath ], Product = [${this.product.toString()}]`;
    }
}
exports.LineItem = LineItem;
