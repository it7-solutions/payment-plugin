import {Component} from '@angular/core';
import {PluginConfig} from "../services/plugin.config";
import {DataManagerService} from "../services/data-manager.service";
import {toConsole} from "../modules/debug/to-console";
import {PaymentAggregateService} from "../services/payment-aggregate.service";
import {PaymentAggregate} from "../models/payment-aggregate";
import {PaymentInvoice} from "../models/payment-invoice";
import {PaymentRegistrationInvoice} from "../models/payment-registration-invoice";

@Component({
    selector: 'invoices-block',
    templateUrl: PluginConfig.buildTemplateUrl('templates/invoices-block.html')
})
export class InvoicesBlockComponent {
    public pa: PaymentAggregate;
    public registrationInvoice: PaymentRegistrationInvoice;
    public invoices: PaymentInvoice[];

    constructor(
        private config: PluginConfig,
        private dm: DataManagerService,
        private pas: PaymentAggregateService
    ) {
        pas.onUpdate.subscribe(pa => this.onAggregateUpdate(pa));
        this.onAggregateUpdate(pas.item);
    }

    private onAggregateUpdate(pa: PaymentAggregate) {
        this.pa = pa;
        this.registrationInvoice = pa.invoices.find(i => 'registration' === i.type) as PaymentRegistrationInvoice;
        this.invoices = pa.invoices.filter(i => 'registration' !== i.type);
    }
}
