import {Injectable} from "@angular/core";
import {ImprintInfoService} from "./imprint-info.service";
import {ImprintInfo} from "../models/imprint-info";

@Injectable()
export class PluginConfig {
    do_data_trans_pay: (o:any)=> void = (a)=> {};
    do_imprint_validation: (o:any)=> void = (a)=> {};
    get_data_url: string = '';
    set_next_step_state: (state: boolean)=> void = ()=> {};
    translations: any[] = [];

    constructor(options: any) {
        Object.assign(this, options);
    }

    static buildTemplateUrl(path: string) {
        const pluginVarName = '__it7_payment_public_plugin__';
        const pluginVersionVarName = '__it7_payment_public_plugin_version__';

        let base = 'app';
        let suffix = 'dev';

        if(window) {
            window[pluginVarName] && (base = window[pluginVarName]);
            window[pluginVersionVarName] && (suffix = window[pluginVersionVarName]);
        }

        return base.replace(/\/+$/, '') + '/' + path.replace(/^\/+/, '') + '?v=' + suffix;
    }
}
