import {Component, Input} from '@angular/core';
import {PluginConfig} from "../services/plugin.config";
import {DataManagerService} from "../services/data-manager.service";
import {toConsole} from "../modules/debug/to-console";
import {ImprintInfo} from "../models/imprint-info";
import {PaymentAggregateService} from "../services/payment-aggregate.service";
import {PopupService} from "../services/popup.service";
import {BusyPopup} from "./busy-popup.component";
import {PaymentAggregate} from "../models/payment-aggregate";
import {PayService} from "../services/pay.service";
import {TermsPopup} from "./terms-popup.component";

@Component({
    selector: 'i-agree',
    templateUrl: PluginConfig.buildTemplateUrl('templates/i-agree.html')
})
export class IAgreeComponent {
    @Input() public aggregate: PaymentAggregate;

    constructor(
                private config: PluginConfig,
                private dm: DataManagerService,
                private popupService: PopupService
    ) {
    }

    /**
     * Set new Agreement value if allow change Agreement(Consent)
     */
    public doChangeAgreement() {
        if (!this.aggregate.terms_conds_lock) {
            this.dm.setAgree();
        }
    }

    public showTermsAndConditions() {
        this.popupService.showPopup(new TermsPopup(true, this.config.terms_conds))
    }
}
