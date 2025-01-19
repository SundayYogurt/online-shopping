import { Account } from "./Account";
import { Order } from "./Order";

class Payments {
    private order: Order;
    private account: Account;
    private id: string;
    private paid: string;
    private total: number = 0;
    private detail: string;

    constructor(order: Order, account: Account, id: string, paid: string, total: number, detail: string) {
        this.order = order;
        this.account = account;
        this.id = id;
        this.paid = paid;
        this.total = this.order.calcTotal();
        this.detail = detail;
    }

    public getId(): string {
        return this.id;
    }

    public getPaid(): string {
        return this.paid;
    }

    public getTotal(): number {
        return this.total;
    }

    public setTotal(total: number): void {
        this.total = total;
    }

    public getDetail(): string {
        return this.detail;
    }

    public setPaid(paid: string): void {
        this.paid = paid;
    }

    public setDetail(detail: string): void {
        this.detail = detail;
    }

    public toString(): string {
        return `Order = ${this.order.toString()} Account = ${this.account.toString()} PaymentID = ${this.id} Paid By =  ${this.paid} Total = ${this.total} Detail = ${this.detail}`;
    }
}

export { Payments };
