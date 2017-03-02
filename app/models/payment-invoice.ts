export class PaymentInvoice {

    download_invoice_url: string = '';
    download_receipt_url: string = '';
    id: string = ''; // ????
    show_download_invoice_btn: boolean = false;
    show_download_receipt_btn: boolean = false;
    type: string = '';

    constructor(srcData: PaymentInvoice) {
        Object.assign(this, srcData);
    }
}
