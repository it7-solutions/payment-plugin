import {Injectable} from "@angular/core";

@Injectable()
export class PluginConfig {
    getDataUrl: string = '';
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
