import {Component} from '@angular/core';
import {Select} from "../models/select";
import {PluginConfig} from "../services/plugin.config";

@Component({
    selector: 'selection-form',
    templateUrl: 'app/templates/selection-form.component.html'
})
export class SelectionForm {
    reg_services: Select[];
    payment_types: Select[];
    online_systems: Select[];
    show_form: boolean;

    constructor(
        private _config: PluginConfig
    ) {
        this.reg_services = _config.reg_services;
        this.payment_types = _config.payment_types;
        this.online_systems = _config.online_systems;
        this.show_form = _config.show_form;
    }

}
