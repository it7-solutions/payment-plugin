import {PaymentInvoice} from "./payment-invoice";

export class PaymentAggregate {

    invoices: PaymentInvoice[] = [];

    constructor(srcData: PaymentAggregate) {
        Object.assign(this, srcData);
    }
}
