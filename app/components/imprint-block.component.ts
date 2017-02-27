import {Component} from '@angular/core';
import {PluginConfig} from "../services/plugin.config";
import {DataManagerService} from "../services/data-manager.service";
import {toConsole} from "../modules/debug/to-console";

@Component({
    selector: 'imprint-block',
    templateUrl: PluginConfig.buildTemplateUrl('templates/imprint-block.html')
})
export class ImprintBlockComponent {

    constructor(
        private config: PluginConfig,
        private dm: DataManagerService
    ) {

    }
}
