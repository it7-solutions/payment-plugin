import {PopupService} from "../services/popup.service";
import {ConfirmPopup} from "./information-popup.component";
export class AbstractShowTerms {
    constructor(
        protected _requestPopupService: PopupService
    ) {}

    onShowTermsPopUp(event: any) {
        event.stopPropagation();
        var popup = new ConfirmPopup('');
        this._requestPopupService.showPopup(popup);
    }
}
