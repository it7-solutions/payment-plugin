import {
    Component, EventEmitter, Input, OnInit, OnDestroy, Output, ViewChild, ElementRef,
    Renderer
} from '@angular/core';

import {PopupService, BasePopup} from '../services/popup.service';
import {PluginConfig} from "../services/plugin.config";

export class TermsPopup extends BasePopup {
    visible: boolean;
    code: string;

    constructor(visible: boolean = true, code: string) {
        super('RequestPopup');
        this.visible = visible;
        this.code = code;
    }
}

@Component({
    selector: 'terms-popup',
    templateUrl: PluginConfig.buildTemplateUrl('/templates/terms-popup.html')
})
export class TermsPopupComponent {
    @Input() width: number;
    @Input() height: number;
    popup: TermsPopup;
    styleLeft: string;
    styleTop: string;
    overlayWidth: string;
    overlayHeight: string;
    window: any;

    constructor(private popupService: PopupService//,
                //private window: Window
    ) {
        this.window = window;
        this.popupService.popup.subscribe(popup => this.checkPopup(popup));
    }

    private checkPopup(popup: BasePopup) {
        if (popup instanceof TermsPopup) {
            if (popup.visible) {
                this.showPopup(popup as TermsPopup);
            } else {
                this.hidePopup();
            }
        }
    }

    private showPopup(popup: TermsPopup) {
        this.popup = popup;
        this.setOverlay();
        this.centerPopup();
    }

    private hidePopup() {
        this.popup = undefined;
    }

    private setOverlay() {
        this.overlayHeight = this.window.innerHeight + "px";
        this.overlayWidth = this.window.innerWidth + "px";
    }

    private centerPopup() {
        this.styleTop = (this.window.innerHeight - this.width) / 2 + "px";
        this.styleLeft = (this.window.innerWidth - this.height) / 2 + "px";
    }
}
