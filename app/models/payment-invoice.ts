export class PaymentInvoice {

    chosen_payment_type: string = '';
    chosen_payment_type_formatted: string = '';
    download_invoice_url: string = '';
    download_receipt_url: string = '';
    get_dt_form_url: string = '';
    id: string = ''; // ????
    lock_payment_type: boolean = false;
    payment_message: string = '';
    online_payment_error_message: string = '';
    show_download_invoice_btn: boolean = false;
    show_download_receipt_btn: boolean = false;
    show_pay_btn: boolean = false;
    show_validate_btn: boolean = false;
    type: string = '';

    constructor(srcData: PaymentInvoice) {
        Object.assign(this, srcData);
    }
}
