import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {TranslationsModule} from './modules/translations/translations.module';
import {PluginComponent}  from './components/plugin.component';
import {It7ErrorService} from "./services/it7-error.service";
import {It7AjaxService} from "./services/it7-ajax.service";
import {PopupService} from "./services/popup.service";
import {DataManagerService} from "./services/data-manager.service";
import {BusyPopupComponent} from "./components/busy-popup.component";
import {PaymentAggregateService} from "./services/payment-aggregate.service";
import {ImprintBlockComponent} from "./components/imprint-block.component";
import {InvoicesBlockComponent} from "./components/invoices-block.component";
import {RegistrationInvoiceComponent} from "./components/registration-invoice.component";
import {ImprintInfoService} from "./services/imprint-info.service";
import {ResourcesInvoiceComponent} from "./components/resources-invoice.component";
import {DownloadInvoiceButtonComponent} from "./components/download-invoice-button.component";
import {DownloadReceiptButtonComponent} from "./components/download-receipt-button.component";
import {PaymentTypeSelectorComponent} from "./components/payment-type-selector.component";
import {PayButtonComponent} from "./components/pay-button.component";
import {PayService} from "./services/pay.service";
import {ValidateButtonComponent} from "./components/validate-button.component";
import {RegistrationInvoiceInformationComponent} from "./components/registration-invoice-information.component";
import {ResourcesInvoiceInformationComponent} from "./components/resources-invoice-information.component";
import {IAgreeComponent} from "./components/i-agree.component";
import {ServiceSelectorComponent} from "./components/service-selector.component";
import {CancelButtonComponent} from "./components/cancel-button.component";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        TranslationsModule
    ],
    declarations: [
        PluginComponent,
        BusyPopupComponent,
        ImprintBlockComponent,
        InvoicesBlockComponent,
        RegistrationInvoiceComponent,
        ResourcesInvoiceComponent,
        DownloadInvoiceButtonComponent,
        DownloadReceiptButtonComponent,
        PaymentTypeSelectorComponent,
        PayButtonComponent,
        ValidateButtonComponent,
        RegistrationInvoiceInformationComponent,
        ResourcesInvoiceInformationComponent,
        IAgreeComponent,
        ServiceSelectorComponent,
        CancelButtonComponent
    ],
    bootstrap: [PluginComponent],
    providers: [
        PopupService,
        DataManagerService,
        It7ErrorService,
        It7AjaxService,
        PaymentAggregateService,
        ImprintInfoService,
        PayService

    ]
})
export class AppModule {
}
