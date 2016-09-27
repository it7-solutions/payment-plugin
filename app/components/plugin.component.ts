import { Component } from '@angular/core';
import {PluginConfig} from "../services/plugin.config";
import {TranslationsService} from "../services/translations.service";
@Component({
    selector: 'it7-payment-public-plugin',
    templateUrl: 'app/templates/plugin.component.html',
    providers: [
        TranslationsService
    ]
})
export class PluginComponent {
    constructor(
        private pluginConfig: PluginConfig
    ) {
        console.log('pluginConfig', pluginConfig);
    }
}
