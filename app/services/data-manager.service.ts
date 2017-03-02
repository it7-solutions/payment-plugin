import {Injectable} from "@angular/core";
import 'rxjs/add/operator/toPromise';

import {PluginConfig} from './plugin.config';
import {It7ErrorService} from "./it7-error.service";
import {It7AjaxService} from './it7-ajax.service'
import {PopupService} from "./popup.service";
import {BusyPopup} from "../components/busy-popup.component";
import {PaymentAggregateService} from "./payment-aggregate.service";
import {toConsole} from "../modules/debug/to-console";

@Injectable()
export class DataManagerService {
    private popup: BusyPopup;

    constructor(
        private config: PluginConfig,
        private err: It7ErrorService,
        private it7Ajax: It7AjaxService,
        private popupService: PopupService,
        private paymentAggregateService: PaymentAggregateService,
    ){
    }

    public updateData() {
        this.showLoading();
        let data = JSON.stringify({});
        return this.it7Ajax
            .post(this.config.get_data_url, {data})
            .then(
                res => {
                    this.hideLoading();
                    this.checkAndUpdate(res);
                }
            )
    }

    public getImprintDTForm() {
        this.showLoading();
        let data = JSON.stringify({});
        return this.it7Ajax
            .post(this.paymentAggregateService.item.imprint_info.get_dt_form_url, {data})
            .then(
                res => {
                    this.hideLoading();
                    return (res);
                }
            )
    }


    // -- Private

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

