import {Component} from '@angular/core';
import {PluginConfig} from "../services/plugin.config";
import {DataManagerService} from "../services/data-manager.service";
import {toConsole} from "../modules/debug/to-console";
import {ImprintInfoService} from "../services/imprint-info.service";

@Component({
    selector: 'payment-public-plugin',
    templateUrl: PluginConfig.buildTemplateUrl('templates/plugin.html')
})
export class PluginComponent {

    constructor(
        private config: PluginConfig,
        private dm: DataManagerService,
        private imprintInfoService: ImprintInfoService
    ) {
        toConsole('Payment public plugin config', config);
        if(config.is_imprint){
            this.imprintInfoService.update(config.imprint_info)
        } else {
            dm.updateData();
        }
    }
}
