import {Component, Input} from '@angular/core';
import {PluginConfig} from "../services/plugin.config";
import {DataManagerService} from "../services/data-manager.service";
import {toConsole} from "../modules/debug/to-console";
import {PaymentInvoice} from "../models/payment-invoice";
import {PayService} from "../services/pay.service";

@Component({
    selector: 'pay-button',
    templateUrl: PluginConfig.buildTemplateUrl('templates/pay-button.html')
})
export class PayButtonComponent {
    @Input() invoice: PaymentInvoice;

    constructor(private payService: PayService) {
    }

    // Call from template
    /**
     * If invoice payment process enabled
     * call pay service method for initialize payment process
     */
    public pay(){
        if(this.invoice.show_pay_btn){
            this.payService.payInvoice(this.invoice);
        }
    }

}
