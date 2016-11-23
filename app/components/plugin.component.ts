import { Component, OnInit, enableProdMode } from '@angular/core';
import {PluginConfig} from "../services/plugin.config";
import {TranslationsService} from "../services/translations.service";
import {SelectionForm} from "./selection-form.component";
import {DataManagerService} from "../services/data-manager.service";
import {It7ErrorService} from "../services/it7-error.service";
import {It7AjaxService} from "../services/it7-ajax.service";
import {PopupService} from "../services/popup.service";
import {BusyPopupComponent} from "./busy-popup.component";
import {InformationPopupComponent} from "./information-popup.component";
import {ConfirmationComponent} from "./confirmation.component";
import {SelectType} from "../models/select-type";
import {PayComponent} from "./pay.component";
enableProdMode();
@Component({
    selector: 'it7-payment-public-plugin',
    templateUrl: 'app/templates/plugin.component.html',
    directives: [
        SelectionForm,
        BusyPopupComponent,
        InformationPopupComponent,
        ConfirmationComponent,
        PayComponent
    ],
    providers: [
        DataManagerService,
        It7ErrorService,
        It7AjaxService,
        TranslationsService,
        PopupService
    ]
})
export class PluginComponent implements OnInit{
    private info: SelectType;
    invoiceInformation: string;
    showStep1A: boolean = true;
    showStep1B: boolean = false;

    constructor(
        private pluginConfig: PluginConfig,
        private _dataManager: DataManagerService
    ) {
        console.log('pluginConfig', pluginConfig);
    }

    //
    //
    //

    isStep1A() {
        this.pluginConfig.isActiveNext(this.pluginConfig.is_next_button_active);
        return '1a' === this.pluginConfig.view_step;
    }

    isStep1B() {
        this.pluginConfig.isActiveNext(this.pluginConfig.is_next_button_active);
        return '1b' === this.pluginConfig.view_step;
    }

    isStep2() {
        this.pluginConfig.isActiveNext(this.pluginConfig.is_next_button_active);
        return '2' === this.pluginConfig.view_step;
    }

    //
    //
    //


    onClickFormOkay(info: SelectType):void {
        this.info = info;
        this.getAjaxDataForStep1B();
    }

    onNotifyToShowForm():void {
        this.pluginConfig.view_step = '1a';
    }

    onShowStep2(): void {
        this._dataManager.validateInvoiceRequest();
        this.pluginConfig.view_step = '2';
    }

    private getAjaxDataForStep1B() {
        this._dataManager.getInvoiceRequest(this.info)
            .then(
                data => {
                    this.invoiceInformation = data.invoice_html;
                    this.pluginConfig.view_step = '1b';
                }
            );
    }

    private getAjaxDataForStep2() {
        var info = {
            reg_service_id: this.pluginConfig.chosen_reg_service_id,
            payment_type: ''
        };
        if(this.pluginConfig.get_invoice) {
        this._dataManager.getInvoiceRequest(info)
            .then(
                data => {
                    this.invoiceInformation = data.invoice_html;
                    this.pluginConfig.view_step = '2';
                }
            );
        }
    }

    onCancelInvoice() {
        this._dataManager.cancelInvoiceRequest();
        // this.pluginConfig.view_step = '1a';
    }

    ngOnInit() {
        if('2' === this.pluginConfig.view_step) {
            this.getAjaxDataForStep2();
        }
        if('1b' === this.pluginConfig.view_step) {
            var info = {
                reg_service_id: this.pluginConfig.chosen_reg_service_id,
                payment_type: ''
            };
            if(this.pluginConfig.get_invoice) {
                this._dataManager.getInvoiceRequest(info)
                    .then(
                        data => {
                            this.invoiceInformation = data.invoice_html;
                            this.pluginConfig.view_step = '1b';
                        }
                    );
            }
        }
    }
}
