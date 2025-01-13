"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(id, name, supplier) {
        this.id = id;
        this.name = name;
        this.supplier = supplier;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getSupplier() {
        return this.supplier;
    }
    setName(name) {
        this.name = name;
    }
    setSupplier(supplier) {
        this.supplier = supplier;
    }
    toString() {
        return `ID = [${this.id}], Name = [${this.name}], Supplier = [${this.supplier}]`;
    }
}
exports.Product = Product;
