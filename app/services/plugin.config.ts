import {Injectable} from "@angular/core";

export interface PluginOptions {
    templatesBaseUrl?: string;
    url: string;
    mockAJAX?: boolean;
}

@Injectable()
export class PluginConfig {
    templatesBaseUrl: string;
    url: string;
    mockAJAX: boolean;

    constructor(options:PluginOptions) {
        this.templatesBaseUrl = options.templatesBaseUrl;
        this.url = options.url;
        this.mockAJAX = options.mockAJAX;
    }
}
