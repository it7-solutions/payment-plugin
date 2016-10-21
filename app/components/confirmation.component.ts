import {Component, Input, Output, EventEmitter} from '@angular/core';
import {PluginConfig} from "../services/plugin.config";
import any = jasmine.any;
import {ConfirmPopup} from "./information-popup.component";
import {PopupService} from "../services/popup.service";

@Component({
    selector: 'confirmation',
    templateUrl: 'app/templates/confirmation.component.html'
})
export class ConfirmationComponent{
    @Input() invoiceInformation: string;
    @Output() showForm: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() showInvoiceButtons: EventEmitter<any> = new EventEmitter<any>();
    show_form: boolean;
    show_edit_invoice_btn: boolean;
    is_invoice: boolean;

    flagForValidate: boolean;

    constructor(
        private _config: PluginConfig,
        private _requestPopupService: PopupService
    ) {
        this.show_form = _config.show_form;
        this.show_edit_invoice_btn = _config.show_edit_invoice_btn;
        this.is_invoice = _config.is_invoice;
    }

    changeFlag() {
        this.flagForValidate = !this.flagForValidate;
    }

    onShowForm() {
        this.showForm.emit(true);
        this._config.update(this._config);
    }

    onValidateInvoice() {
        this.showInvoiceButtons.emit(true);
    }

    onShowTermsPopUp(event: any) {
        event.stopPropagation();
        var popup = new ConfirmPopup('');
        this._requestPopupService.showPopup(popup);
    }

}
