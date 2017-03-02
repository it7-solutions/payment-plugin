import {PaymentInvoice} from "./payment-invoice";
import {ImprintInfo} from "./imprint-info";

export class PaymentAggregate {
    imprint_info: ImprintInfo;
    invoices: PaymentInvoice[] = [];
    is_imprint: boolean = false;

    constructor(srcData: PaymentAggregate) {
        Object.assign(this, srcData);
        if(!(this.imprint_info instanceof ImprintInfo)) {
            this.imprint_info = new ImprintInfo(this.imprint_info);
        }
    }
}
