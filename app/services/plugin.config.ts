import {Injectable} from "@angular/core";
import {ImprintInfoService} from "./imprint-info.service";
import {ImprintInfo} from "../models/imprint-info";

interface DictionaryItem {
    input: string
    output: string
}

@Injectable()
export class PluginConfig {
    base_layout_id: string = '';
    do_data_trans_pay: (o:any)=> void = (a)=> {};
    do_imprint_validation: (o:any)=> void = (a)=> {};
    do_pay_pal_pay: (o:any)=> void = (a)=> {};
    init_url: string = '';
    payment_types: DictionaryItem[] = [];
    set_next_step_state: (state: boolean)=> void = ()=> {};
    terms_conds: string;
    terms_conds_url: string = '';
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
