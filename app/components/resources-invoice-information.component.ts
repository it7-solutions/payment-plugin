import {Component, Input} from '@angular/core';
import {PluginConfig} from "../services/plugin.config";
import {DataManagerService} from "../services/data-manager.service";
import {toConsole} from "../modules/debug/to-console";
import {PaymentInvoice} from "../models/payment-invoice";
import {PayService} from "../services/pay.service";

@Component({
    selector: 'resources-invoice-information',
    templateUrl: PluginConfig.buildTemplateUrl('templates/resources-invoice-information.html')
})
export class ResourcesInvoiceInformationComponent {
    @Input() invoice: PaymentInvoice;

    constructor(private payService: PayService) {
    }
}
