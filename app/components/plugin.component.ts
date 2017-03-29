import {Component} from '@angular/core';
import {PluginConfig} from "../services/plugin.config";
import {DataManagerService} from "../services/data-manager.service";
import {toConsole} from "../modules/debug/to-console";
import {ImprintInfoService} from "../services/imprint-info.service";
import {PaymentAggregateService} from "../services/payment-aggregate.service";
import {enableProdMode} from '@angular/core';

enableProdMode();

@Component({
    selector: 'payment-public-plugin',
    templateUrl: PluginConfig.buildTemplateUrl('templates/plugin.html')
})
export class PluginComponent {

    constructor(
        private config: PluginConfig,
        private dm: DataManagerService,
        private pas: PaymentAggregateService
    ) {
        toConsole('Payment public plugin config', config);
    }

    ngOnInit(){
        this.dm.updateData();
    }
}
