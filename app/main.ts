import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import {PluginConfig} from "./services/plugin.config";

export function RunApplication(options: any) {
    let config = new PluginConfig(options);
    window && !window['It7Ng2AppDevelopMode'] && enableProdMode();

    platformBrowserDynamic([{provide: PluginConfig, useValue: config }])
        .bootstrapModule(AppModule);
}
window['RunApplication'] = RunApplication;
