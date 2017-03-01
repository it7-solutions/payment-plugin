import {Component} from '@angular/core';
import {PluginConfig} from "../services/plugin.config";
import {DataManagerService} from "../services/data-manager.service";
import {toConsole} from "../modules/debug/to-console";
import {ImprintInfoService} from "../services/imprint-info.service";
import {ImprintInfo} from "../models/imprint-info";

@Component({
    selector: 'imprint-block',
    templateUrl: PluginConfig.buildTemplateUrl('templates/imprint-block.html')
})
export class ImprintBlockComponent {
    public imprint: ImprintInfo;

    constructor(
        private config: PluginConfig,
        private iis: ImprintInfoService
    ) {
        iis.onUpdate.subscribe(i => this.updateInfo(i));
        this.updateInfo(iis.item);
    }

    private updateInfo(info: ImprintInfo){
        this.imprint = info;
    }
}
