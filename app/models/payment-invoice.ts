export class PaymentInvoice {

    number: string = '';

    constructor(srcData: PaymentInvoice) {
        Object.assign(this, srcData);
    }
}
