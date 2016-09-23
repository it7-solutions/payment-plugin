import {Injectable} from "@angular/core";

export interface PluginOptions {
    templatesBaseUrl?: string;
    url: string;
    mockAJAX?: boolean;
    onTranslate?: (code:string, text: string) => any;
    translations: any[];
}

@Injectable()
export class PluginConfig {
    templatesBaseUrl: string;
    url: string;
    mockAJAX: boolean;
    onTranslate: (code:string, text: string) => any;
    translations: any[];

    constructor(options:PluginOptions) {
        this.templatesBaseUrl = options.templatesBaseUrl;
        this.url = options.url;
        this.mockAJAX = options.mockAJAX;
        this.onTranslate = typeof options.onTranslate === 'function' ? options.onTranslate : () => {};
        this.translations = options.translations;
    }
}
