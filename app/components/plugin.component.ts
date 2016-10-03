import { Component } from '@angular/core';
import {PluginConfig} from "../services/plugin.config";
import {TranslationsService} from "../services/translations.service";
import {SelectionForm} from "./selection-form.component";
import {DataManagerService} from "../services/data-manager.service";
import {It7ErrorService} from "../services/it7-error.service";
import {It7AjaxService} from "../services/it7-ajax.service";
import {PopupService} from "../services/popup.service";
import {BusyPopupComponent} from "./busy-popup.component";
import {InformationPopupComponent} from "./information-popup.component";
import {InvoiceComponent} from "./invoice.component";
import {SelectType} from "../models/select-type";
import {InvoiceButtonsComponent} from "./invoice-buttons.component";
@Component({
    selector: 'it7-payment-public-plugin',
    templateUrl: 'app/templates/plugin.component.html',
    directives: [
        SelectionForm,
        BusyPopupComponent,
        InformationPopupComponent,
        InvoiceComponent,
        InvoiceButtonsComponent
    ],
    providers: [
        DataManagerService,
        It7ErrorService,
        It7AjaxService,
        TranslationsService,
        PopupService
    ]
})
export class PluginComponent {
    private info: SelectType;
    getDataInvoice: string;
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
        return '1a' === this.pluginConfig.view_step;
    }

    isStep1B() {
        return '1b' === this.pluginConfig.view_step;
    }

    isStep2() {
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

    private getAjaxDataForStep1B() {
        this._dataManager.getInvoiceRequest(this.info)
            .then(
                data => {
                    this.getDataInvoice = data;
                    this.pluginConfig.view_step = '1b';
                }
            );
    }
}
