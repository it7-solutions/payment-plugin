///<reference path="../typings/index.d.ts"/>
import { bootstrap }    from '@angular/platform-browser-dynamic';
import {PluginComponent} from "./components/plugin.component";
import {PluginOptions, PluginConfig} from "./services/plugin.config";
import {HTTP_PROVIDERS} from "@angular/http";
import {ViewResolver} from "@angular/compiler";
import {ViewResolverService} from "./services/view-resolver.service";
import { PLATFORM_PIPES } from '@angular/core';
import { TranslationPipe }    from './pipes/translation.pipe';

// setTimeout(function () {
//     bootstrap(PluginComponent);
// }, 1);



export function RunApplication(options: PluginOptions) {

    // Create our API config provider using the external data
    //
    let menuConfig = new PluginConfig(options);
    window && (window['__it7_payment_public_plugin__'] = menuConfig.templatesBaseUrl);

    // Now we can call bootstrap, but we have the API config object
    //  set up as well. Just create is as an injectable token here
    //  so other components/services can consume it.
    //
    setTimeout(function () {
        bootstrap(PluginComponent, [
            HTTP_PROVIDERS,
            { provide: Window, useValue: window },
            { provide: PluginConfig, useValue: menuConfig },
            { provide: ViewResolver, useClass: ViewResolverService},
            [{provide: PLATFORM_PIPES, useValue: [TranslationPipe], multi:true}]
        ]);
    });
}

window['RunApplication'] = RunApplication;
