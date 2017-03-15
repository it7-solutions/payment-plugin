import {Component, Input} from '@angular/core';
import {PluginConfig} from "../services/plugin.config";
import {DataManagerService} from "../services/data-manager.service";
import {toConsole} from "../modules/debug/to-console";
import {PaymentInvoice} from "../models/payment-invoice";
import {PaymentRegistrationInvoice} from "../models/payment-registration-invoice";

@Component({
    selector: 'service-selector',
    templateUrl: PluginConfig.buildTemplateUrl('templates/service-selector.html')
})
export class ServiceSelectorComponent {
    @Input() invoice: PaymentRegistrationInvoice;

    constructor(
        private config: PluginConfig,
        private dm: DataManagerService
    ) {

    }

    /**
     * If allowed changing service
     * call method for save changes
     */
    public changeService() {
        if(this.invoice.show_choose_services){
            this.dm.changeInvoice(this.invoice);
        }
    }
}
