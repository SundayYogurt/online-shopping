import { Customer } from "./Customer";
import { WebUser } from "./Web_User";
class Account extends Customer {
    protected accountId: string;
    protected billingAddress: string;
    protected is_closed: boolean;
    protected open: string;
    protected closed: string;

    constructor(
        accountId: string,
        billingAddress: string,
        is_closed: boolean,
        open: string,
        closed: string,
        webUser: WebUser,
        id: string,
        address: string,
        phone: string,
        email: string
    ) {
        super(webUser, id, address, phone, email);
        this.accountId = accountId;
        this.billingAddress = billingAddress;
        this.is_closed = is_closed;
        this.open = open;
        this.closed = closed;
    }

    public getIdFromCustomer(): string {
        return super.getId()
    }

    public getAccountId(): string {
        return this.accountId;

    }

    public getAddress(): string {
        return this.billingAddress;
    }

    public getIsClosed(): boolean {
        return this.is_closed;
    }

    public getOpen(): string {
        return this.open;
    }

    public getClosed(): string {
        return this.closed;
    }

    public setAddress(address: string) {
        this.billingAddress = address;
    }

    public setIsClosed(is_closed: boolean) {
        this.is_closed = is_closed;
    }   

    public setOpen(open: string) {
        this.open = open;
    }

    public setClosed(closed: string) {
        this.closed = closed;
    }

    public toStringAccount(): string {
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


export { Account }