import {Component} from '@angular/core';
import {PluginConfig} from "../services/plugin.config";
import {DataManagerService} from "../services/data-manager.service";
import {toConsole} from "../modules/debug/to-console";

@Component({
    selector: 'invoices-block',
    templateUrl: PluginConfig.buildTemplateUrl('templates/invoices-block.html')
})
export class InvoicesBlockComponent {

    constructor(
        private config: PluginConfig,
        private dm: DataManagerService
    ) {

    }
}
