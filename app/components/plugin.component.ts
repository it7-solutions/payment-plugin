import { Component } from '@angular/core';
import {PluginConfig} from "../services/plugin.config";
@Component({
    selector: 'it7-payment-public-plugin',
    template: '<h1>Payment Plugin View</h1>'
})
export class PluginComponent {
    constructor(
        private config: PluginConfig
    ) {
        console.log('config', config);
    }
}
