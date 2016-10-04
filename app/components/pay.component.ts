import {Component, Input, Output, EventEmitter} from '@angular/core';
import {PluginConfig} from "../services/plugin.config";
@Component({
    selector: 'pay',
    templateUrl: 'app/templates/pay.component.html'
})
export class PayComponent {
    @Output() cancelInvoice: EventEmitter<any> = new EventEmitter<any>();
    @Input() invoiceInformation: string;
    show_download_invoice_btn: boolean;
    show_download_receipt_btn: boolean;
    show_pay_btn: boolean;

    constructor(
        private _config: PluginConfig
    ) {
        this.show_download_invoice_btn = _config.show_download_invoice_btn;
        this.show_download_receipt_btn = _config.show_download_receipt_btn;
        this.show_pay_btn = _config.show_pay_btn;
    }

    toInvoice() {
        console.log('invoice');
        window.open(this._config.download_invoice_url, '_blank');
    }

    toReceipt() {
        console.log('receipt');
        window.open(this._config.download_receipt_url, '_blank');
    }

    onCancelInvoice() {
        this.cancelInvoice.emit(true);
    }

    toPay() {
        console.log('pay');
        var os = this._config.chosen_online_system;
        if(os == 'pp'){
            window.location.href = this._config.pay_btn_url_pp;
        } else if(os == 'dt') {
            console.log('datatrans');
            this._config.dataTransPay(this._config.pay_btn_url_dt);
        }
    }
}
