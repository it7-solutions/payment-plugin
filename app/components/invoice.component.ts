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
export class InvoiceComponent {
    @Input() invoiceData: string;
    @Output() notify: EventEmitter<boolean> = new EventEmitter<boolean>();
    show_form: boolean;
    show_edit_invoice_btn: boolean;
    is_invoice: boolean;

    flagForValidate: boolean;

    constructor(
        private _config: PluginConfig,
        private _dataManager: DataManagerService,
        private _requestPopupService: PopupService
    ) {
        this.show_form = _config.show_form;
        this.show_edit_invoice_btn = _config.show_edit_invoice_btn;
        this.is_invoice = _config.is_invoice;
    }

    changeFlag() {
        this.flagForValidate = !this.flagForValidate;
    }

    onShowFrom() {
        this.notify.emit(true);
    }

    onCancelInvoice() {
        this._dataManager.cancelInvoiceRequest();
        this.onShowFrom();
    }

    onValidateInvoice() {
        this._dataManager.validateInvoiceRequest();
        this.onShowFrom();
    }

    onShowTermsPopUp(event: any) {
        console.log('show popup');
        event.stopPropagation();
        var popup = new ConfirmPopup('');
        this._requestPopupService.showPopup(popup);
    }
}
