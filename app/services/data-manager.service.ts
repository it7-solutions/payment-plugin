import {Injectable} from "@angular/core";
import 'rxjs/add/operator/toPromise';
import * as _ from 'underscore';

import {PluginConfig} from './plugin.config';
import {It7ErrorService} from "./it7-error.service";
import {It7AjaxService} from './it7-ajax.service'
import {BusyPopup} from "../components/busy-popup.component";
import {PopupService} from "./popup.service";

@Injectable()
export class DataManagerService {
    private popup: BusyPopup;
    private selectedData: any = {};
    constructor(
        private config: PluginConfig,
        private err: It7ErrorService,
        private it7Ajax: It7AjaxService,
        private popupService: PopupService
    ){}


    getInvoiceRequest(selection: Object){
        console.log('save request');
        this.showLoading();
        this.selectedData = JSON.stringify(Object.assign({}, selection, {"terms_accept": 1}));
        selection = JSON.stringify(selection);
        console.log('new data', selection);
        return this.it7Ajax
            .post(this.config.get_invoice_url, {selection: selection})
            .then(
                res => {
                    this.config.update(res);
                    this.hideLoading();
                    return res;
                }
            )
    }

    cancelInvoiceRequest() {
        console.log('cancel invoice');
        this.showLoading();
        return this.it7Ajax
            .post(this.config.cancel_invoice_url, {})
            .then(
                (data) => {
                    this.config.update(data);
                    this.hideLoading();
                }
            )
    }

    validateInvoiceRequest() {
        console.log('validate invoice');
        this.showLoading();
        return this.it7Ajax
            .post(this.config.create_invoice_url, {selection: this.selectedData})
            .then(
                (data) => {
                    this.config.update(data);
                    this.hideLoading();
                }
            )
    }

    private showLoading(){
        console.log('show loading');
        this.popup = new BusyPopup();
        this.popupService.showPopup(this.popup);
    }

    private hideLoading(): any{
        console.log('hide loading');
        if(this.popup){
            this.popup.visible = false;
            this.popupService.showPopup(this.popup);
            this.popup = undefined;
        }
    }
}

