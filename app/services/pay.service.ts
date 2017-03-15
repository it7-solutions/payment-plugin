import {Injectable} from "@angular/core";
import 'rxjs/add/operator/toPromise';

import {PluginConfig} from './plugin.config';
import {It7ErrorService} from "./it7-error.service";
import {It7AjaxService} from './it7-ajax.service'
import {PopupService} from "./popup.service";
import {BusyPopup} from "../components/busy-popup.component";
import {PaymentAggregateService} from "./payment-aggregate.service";
import {toConsole} from "../modules/debug/to-console";
import {PaymentInvoice} from "../models/payment-invoice";
import {DataManagerService} from "./data-manager.service";

@Injectable()
export class PayService {

    constructor(
        private config: PluginConfig,
        private err: It7ErrorService,
        private popupService: PopupService,
        private dm: DataManagerService
    ){
    }

    public payImprint() {
        toConsole('Pay IMPRINT');
        this.dm.getImprintDTForm().then(d => {
            this.popupService.showPopup(new BusyPopup());
            this.config.do_imprint_validation(d);
        });
    }

    public payInvoice(invoice: PaymentInvoice) {
        if(invoice.is_datatrans){
            toConsole('Pay Invoice by datatrans');
            this.dm.getInvoiceDTForm(invoice).then(d => {
                this.popupService.showPopup(new BusyPopup());
                this.config.do_data_trans_pay(d);
            });
        } else {
            toConsole('Pay Invoice by paypal');
            this.config.do_pay_pal_pay(invoice.pay_pp_url);
        }
    }
}

