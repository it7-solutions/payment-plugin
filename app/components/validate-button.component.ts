import {Component, Input} from '@angular/core';
import {PluginConfig} from "../services/plugin.config";
import {DataManagerService} from "../services/data-manager.service";
import {toConsole} from "../modules/debug/to-console";
import {PaymentInvoice} from "../models/payment-invoice";
import {PayService} from "../services/pay.service";

@Component({
    selector: 'validate-button',
    templateUrl: PluginConfig.buildTemplateUrl('templates/validate-button.html')
})
export class ValidateButtonComponent {
    @Input() invoice: PaymentInvoice;

    constructor(private dm: DataManagerService) {
    }

    // Call from template
    /**
     * If invoice validation enabled
     * call validate method
     */
    public validate(){
        if(this.invoice.show_validate_btn){
            this.dm.validateInvoice(this.invoice);
        }
    }

}
