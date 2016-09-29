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
@Component({
    selector: 'it7-payment-public-plugin',
    templateUrl: 'app/templates/plugin.component.html',
    directives: [
        SelectionForm,
        BusyPopupComponent,
        InformationPopupComponent
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
    constructor(
        private pluginConfig: PluginConfig
    ) {
        console.log('pluginConfig', pluginConfig);
    }
}
