import {Component} from '@angular/core';
import {PluginConfig} from "../services/plugin.config";
import {DataManagerService} from "../services/data-manager.service";
import {toConsole} from "../modules/debug/to-console";

@Component({
    selector: 'resources-invoice',
    templateUrl: PluginConfig.buildTemplateUrl('templates/resources-invoice.html')
})
export class ResourcesInvoiceComponent {

    constructor(
        private config: PluginConfig,
        private dm: DataManagerService
    ) {

    }
}
