import {Component, OnInit, ViewChild, Input, Output, EventEmitter} from '@angular/core';
import {Select} from "../models/select";
import {PluginConfig} from "../services/plugin.config";
import {SelectType} from "../models/select-type";
import {DataManagerService} from "../services/data-manager.service";
import {InvoiceComponent} from "./invoice.component";

@Component({
    selector: 'selection-form',
    templateUrl: 'app/templates/selection-form.component.html',
    directives: [
        InvoiceComponent
    ]
})
export class SelectionForm implements OnInit {
    reg_services: Select[];
    payment_types: Select[];
    online_systems: Select[];
    show_form: boolean;
    show_reg_services: boolean;
    show_payment_types: boolean;
    show_online_systems: boolean;
    show_online_systems_directly: boolean;

    info: SelectType = {
        reg_service_id: '',
        payment_type: '',
        online_system: '',
    };

    getDataInvoice: string;
    showDataInvoice: boolean = false;

    constructor(
        private _config: PluginConfig,
        private _dataManager: DataManagerService
    ) {
        this.reg_services = _config.reg_services;
        this.payment_types = _config.payment_types;
        this.online_systems = _config.online_systems;
        this.show_form = _config.show_form;
        this.show_reg_services = _config.show_reg_services;
        this.show_payment_types = _config.show_payment_types;
        this.show_online_systems = _config.show_online_systems;
        this.show_online_systems_directly = _config.show_online_systems_directly;
    }

    public getInvoiceCall() {
        console.log('info', this.info);
        this._dataManager.getInvoiceRequest(this.info)
            .then(
            data => {
                this.getDataInvoice = data;
                this.showDataInvoice = true;
            }
        );


        this.fillForm(
            {
                reg_service_id: '',
                payment_type: '',
                online_system: ''
            }
        );
    }

    private fillForm(o: any) {
        Object.assign(this.info, o);
    }

    private sendAjaxCallIfFormFalse() {
        console.log('form false');
        this._dataManager.getInvoiceRequest({})
            .then(
                data => {
                    this.getDataInvoice = data;
                    this.showDataInvoice = true;
                }
            );
    }

    ngOnInit() {
        if(!this.show_form) {
            this.sendAjaxCallIfFormFalse();
        } else if(this.show_form) {
            console.log('show data');
        }
    }

    onNotifyToShowForm():void {
        this.showDataInvoice = false;
    }
}
