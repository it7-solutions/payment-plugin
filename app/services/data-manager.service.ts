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
    constructor(
        private config: PluginConfig,
        private err: It7ErrorService,
        private it7Ajax: It7AjaxService,
        private popupService:PopupService
    ){}


    saveRequest(selection: Object){
        console.log('save request1');
        this.showLoading();
        selection = JSON.stringify(selection);
        console.log('new data', selection);
        return this.it7Ajax
            .post(this.config.get_invoice_url, {selection: selection})
            .then(
                () => {
                    this.hideLoading()
                }
            );
    }

    private showLoading(){
        console.log('show loading');
        this.popup = new BusyPopup();
        this.popupService.showPopup(this.popup);
    }

    private hideLoading(){
        if(this.popup){
            this.popup.visible = false;
            this.popupService.showPopup(this.popup);
            this.popup = undefined;
        }
    }
}
