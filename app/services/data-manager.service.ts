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

@Injectable()
export class DataManagerService {
    private popup: BusyPopup;

    constructor(
        private config: PluginConfig,
        private err: It7ErrorService,
        private it7Ajax: It7AjaxService,
        private popupService: PopupService,
        private paymentAggregateService: PaymentAggregateService
    ){
    }

    public updateData() {
        this.showLoading();
        let data = this.prepareRequestData({base_layout_id: this.config.base_layout_id});
        return this.it7Ajax
            .post(this.config.init_url, {data})
            .then(
                res => {
                    this.hideLoading();
                    this.checkAndUpdate(res);
                }
            )
    }

    public getImprintDTForm() {
        this.showLoading();
        let data = this.prepareRequestData(this.paymentAggregateService.item.imprint_info);
        return this.it7Ajax
            .post(this.paymentAggregateService.item.imprint_info.get_dt_form_url, {data})
            .then(
                res => {
                    this.hideLoading();
                    return (res);
                }
            )
    }

    public getInvoiceDTForm(invoice: PaymentInvoice) {
        this.showLoading();
        let data = this.prepareRequestData(invoice);
        return this.it7Ajax
            .post(invoice.get_dt_form_url, {data})
            .then(
                res => {
                    this.hideLoading();
                    return (res);
                }
            )
    }

    public payByPayPal(invoice: PaymentInvoice, url: string) {
        this.showLoading();
        let data = this.prepareRequestData(invoice);
        this.config.do_pay_pal_pay(data, url);
        this.hideLoading();
    }

    public validateInvoice(invoice: PaymentInvoice) {
        this.showLoading();
        let data = this.prepareRequestData(invoice);
        return this.it7Ajax
            .post(invoice.create_invoice_url, {data})
            .then(
                res => {
                    this.hideLoading();
                    this.checkAndUpdate(res);
                    return (res);
                }
            )
    }

    public setAgree() {
        this.showLoading();
        let data = this.prepareRequestData({
            terms_conds_value: this.paymentAggregateService.item.terms_conds_value
        });
        return this.it7Ajax
            .post(this.config.terms_conds_url, {data})
            .then(
                res => {
                    this.hideLoading();
                    this.checkAndUpdate(res);
                }
            )
    }

    public cancelInvoice(invoice: PaymentInvoice) {
        this.showLoading();
        let data = this.prepareRequestData(invoice);
        return this.it7Ajax
            .post(invoice.cancel_invoice_url, {data})
            .then(
                res => {
                    this.hideLoading();
                    this.checkAndUpdate(res);
                }
            )
    }

    public changeInvoice(invoice: PaymentInvoice) {
        this.showLoading();
        let data = this.prepareRequestData(invoice);
        return this.it7Ajax
            .post(invoice.change_invoice_url, {data})
            .then(
                res => {
                    this.hideLoading();
                    this.checkAndUpdate(res);
                }
            )
    }


    // -- Private

    private prepareRequestData(requestData: any): string {
        return JSON.stringify({
            'dynamic_data': this.paymentAggregateService.item,
            'params_data': requestData
        });
    }

    private checkAndUpdate(res: any){
        toConsole('DataManagerService.checkAndUpdate', res);
        if (res) {
            this.paymentAggregateService.update(res);
        } else {
            this.err.fire('Parse error: Incompatible format server response.');
        }
    }

    private showLoading(){
        this.popup = new BusyPopup();
        this.popupService.showPopup(this.popup);
    }

    private hideLoading(): any{
        if(this.popup){
            this.popup.visible = false;
            this.popupService.showPopup(this.popup);
            this.popup = undefined;
        }
    }
}

