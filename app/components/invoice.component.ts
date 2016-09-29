import {Component, Input, Output, EventEmitter} from '@angular/core';
import {PluginConfig} from "../services/plugin.config";

@Component({
    selector: 'invoice',
    templateUrl: 'app/templates/invoice.component.html',
    inputs: ['parentValue:passedValue'],
})
export class InvoiceComponent {
    @Input() invoiceData: string;
    show_form: boolean;
    showDataInvoice: boolean = false;

    constructor(
        private _config: PluginConfig
    ) {
        this.show_form = _config.show_form;
    }

    public showForm() {
        console.log('show form');
        this.showDataInvoice = false;
    }

    @Output() notify: EventEmitter<boolean> = new EventEmitter<boolean>();

    onShowFrom() {
        this.notify.emit(true);
    }
}
