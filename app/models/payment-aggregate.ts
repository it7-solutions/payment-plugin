import {PaymentInvoice} from "./payment-invoice";
import {ImprintInfo} from "./imprint-info";
import {PaymentRegistrationInvoice} from "./payment-registration-invoice";

export class PaymentAggregate {
    imprint_info: ImprintInfo;
    invoices: PaymentInvoice[] = [];
    is_imprint: boolean = false;
    terms_conds_lock: boolean = false;
    terms_conds_value: boolean = false;

    constructor(srcData: PaymentAggregate) {
        Object.assign(this, srcData);
        if(!(this.imprint_info instanceof ImprintInfo)) {
            this.imprint_info = new ImprintInfo(this.imprint_info);
        }

        if(srcData['invoices'] && Array.isArray(srcData['invoices'])){
            this.invoices = (srcData['invoices'] as Array<any>).map(i => {
                let invoice: PaymentInvoice;
                switch (i['type']){
                    case 'registration':
                        invoice = new PaymentRegistrationInvoice(i);
                        break;

                    default:
                        invoice = new PaymentInvoice(i);
                }
                return invoice;
            });
        }

    }
}
