import {Component} from '@angular/core';
import {PluginConfig} from "../services/plugin.config";
import {DataManagerService} from "../services/data-manager.service";
import {toConsole} from "../modules/debug/to-console";

@Component({
    selector: 'inventory-public-plugin',
    templateUrl: PluginConfig.buildTemplateUrl('templates/plugin.html')
})
export class PluginComponent {

    constructor(
        private config: PluginConfig,
        private dm: DataManagerService
    ) {
        toConsole('Payment public plugin config', config);
        dm.updateData();
    }
}
