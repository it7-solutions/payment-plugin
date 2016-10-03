import {Component, Input, Output, EventEmitter} from '@angular/core';
import {PluginConfig} from "../services/plugin.config";
import {DataManagerService} from "../services/data-manager.service";
import any = jasmine.any;
import {ConfirmPopup} from "./information-popup.component";
import {PopupService} from "../services/popup.service";

@Component({
    selector: 'invoice',
    templateUrl: 'app/templates/invoice.component.html',
    inputs: ['parentValue:passedValue'],
})
export class InvoiceComponent{
    @Input() invoiceData: string;
    @Output() notify: EventEmitter<boolean> = new EventEmitter<boolean>();
    show_form: boolean;
    show_edit_invoice_btn: boolean;
    is_invoice: boolean;
    show_download_invoice_btn: boolean;
    show_download_receipt_btn: boolean;
    show_pay_btn: boolean;

    flagForValidate: boolean;
    showTerms: boolean = true;

    constructor(
        private _config: PluginConfig,
        private _dataManager: DataManagerService,
        private _requestPopupService: PopupService
    ) {
        this.show_form = _config.show_form;
        this.show_edit_invoice_btn = _config.show_edit_invoice_btn;
        this.is_invoice = _config.is_invoice;
        this.show_download_invoice_btn = _config.show_download_invoice_btn;
        this.show_download_receipt_btn = _config.show_download_receipt_btn;
        this.show_pay_btn = _config.show_pay_btn;
    }

    changeFlag() {
        this.flagForValidate = !this.flagForValidate;
    }

    onShowForm() {
        console.log('config', this._config);
        this.notify.emit(true);
        this._config.update(this._config);
    }

    onCancelInvoice() {
        this._dataManager.cancelInvoiceRequest();
        console.log('config', this._config);
        this.onShowForm();
    }

    onValidateInvoice() {
        this._dataManager.validateInvoiceRequest();
        this.showTerms = false;
        console.log('config', this._config);
    }

    onShowTermsPopUp(event: any) {
        console.log('show popup');
        event.stopPropagation();
        var popup = new ConfirmPopup('');
        this._requestPopupService.showPopup(popup);
    }

    toInvoice() {
        console.log('invoice');
        window.open(this._config.download_invoice_url, '_blank');
    }

    toReceipt() {
        console.log('receipt');
        window.open(this._config.download_receipt_url, '_blank');
    }

    toPay() {
        console.log('pay');
        var os = this._config.chosen_online_system;
        var url = this._config.pay_btn_url;
        if(os == 'pp'){
            window.location.href = url;
        } else if(os == 'dt') {
            console.log('datatrans');

            this._config.onInit(url);


        }

    }

}
