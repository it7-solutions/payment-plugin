import {Component, Input} from '@angular/core';
import {PluginConfig} from "../services/plugin.config";
import {DataManagerService} from "../services/data-manager.service";
import {toConsole} from "../modules/debug/to-console";
import {PaymentInvoice} from "../models/payment-invoice";

@Component({
    selector: 'download-receipt-button',
    templateUrl: PluginConfig.buildTemplateUrl('templates/download-receipt-button.html')
})
export class DownloadReceiptButtonComponent {
    @Input() invoice: PaymentInvoice;
}
