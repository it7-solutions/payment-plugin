import {Component, Input} from '@angular/core';
import {PluginConfig} from "../services/plugin.config";
import {DataManagerService} from "../services/data-manager.service";
import {toConsole} from "../modules/debug/to-console";
import {PaymentInvoice} from "../models/payment-invoice";
import {PayService} from "../services/pay.service";
import {PaymentRegistrationInvoice} from "../models/payment-registration-invoice";

@Component({
    selector: 'registration-invoice-information',
    templateUrl: PluginConfig.buildTemplateUrl('templates/registration-invoice-information.html')
})
export class RegistrationInvoiceInformationComponent {
    @Input() invoice: PaymentRegistrationInvoice;

    constructor(private payService: PayService) {
    }

    public ngOnInit(){
        toConsole(this.invoice);
    }
}
