import {Component, Input} from '@angular/core';
import {PluginConfig} from "../services/plugin.config";
import {DataManagerService} from "../services/data-manager.service";
import {toConsole} from "../modules/debug/to-console";
import {PaymentInvoice} from "../models/payment-invoice";
import {PayService} from "../services/pay.service";

@Component({
    selector: 'invoice-information',
    templateUrl: PluginConfig.buildTemplateUrl('templates/invoice-information.html')
})
export class PayButtonComponent {
    @Input() invoice: PaymentInvoice;

    constructor(private payService: PayService) {
    }
}
