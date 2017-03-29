import {toConsole} from "../modules/debug/to-console";

export class PaymentInvoice {

    cancel_invoice_url: string = '';
    change_invoice_url: string = '';
    chosen_payment_type: string = '';
    chosen_payment_type_formatted: string = '';
    create_invoice_url: string = '';
    download_invoice_url: string = '';
    download_receipt_url: string = '';
    id: string = ''; // ????
    is_datatrans: boolean = false;
    get_dt_form_url: string = '';
    lock_payment_type: boolean = false;
    payment_message: string = '';
    online_payment_error_message: string = '';
    pay_pp_url:string = '';
    show_cancel_btn: boolean = false;
    show_download_invoice_btn: boolean = false;
    show_download_receipt_btn: boolean = false;
    show_pay_btn: boolean = false;
    show_validate_btn: boolean = false;
    type: string = '';
    currency_short_name: string = '';

    constructor(srcData: any) {
        Object.assign(this, srcData);
    }
}
