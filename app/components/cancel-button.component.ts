import {Component, Input} from '@angular/core';
import {PluginConfig} from "../services/plugin.config";
import {DataManagerService} from "../services/data-manager.service";
import {toConsole} from "../modules/debug/to-console";
import {PaymentInvoice} from "../models/payment-invoice";
import {PayService} from "../services/pay.service";
import {PaymentAggregateService} from "../services/payment-aggregate.service";

@Component({
    selector: 'cancel-button',
    templateUrl: PluginConfig.buildTemplateUrl('templates/cancel-button.html')
})
export class CancelButtonComponent {
    @Input() invoice: PaymentInvoice;

    constructor(
        private payService: PayService,
        private dm: DataManagerService
    ) {
    }

    // Call from template
    /**
     * If invoice cancelling enabled
     * call cancel invoice method
     */
    public cancel(){
        if(this.invoice.show_cancel_btn){
            this.dm.cancelInvoice(this.invoice);
        }
    }

}
