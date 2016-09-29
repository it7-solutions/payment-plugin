import {Component} from '@angular/core';
import {BasePopup, PopupService} from "../services/popup.service";
import {It7ErrorService} from "../services/it7-error.service";
import {DataManagerService} from "../services/data-manager.service";
import {PluginConfig} from "../services/plugin.config";

export class ConfirmPopup extends BasePopup {

}

@Component({
  selector: 'information-popup',
  templateUrl: '/app/templates/information-popup.html'
})
export class InformationPopupComponent {
  popup: ConfirmPopup;
  styleLeft: string;
  styleTop: string;
  overlayWidth: string;
  overlayHeight: string;
  window: any;
  termsAndConditions: string;

  constructor(
    private err: It7ErrorService,
    private requestPopupService: PopupService,
    private dataManager: DataManagerService,
    private _config: PluginConfig
  ) {
    this.window = window;
    this.requestPopupService.popup.subscribe(popup => this.checkPopup(popup));
    this.termsAndConditions = this._config.terms_conds_text;
  }

  private checkPopup(popup:BasePopup) {
    if (popup instanceof ConfirmPopup) {
      this.showPopup(popup as ConfirmPopup);
    }
  }

  private showPopup(popup: ConfirmPopup){
    if(popup){
      this.popup = popup;
      this.setOverlay();
      this.centerPopup();
    } else {
      this.err.fire('Error: Cannon show Confirm popup because not enough data');
    }
  }

  private setOverlay(){
    this.overlayHeight = this.window.innerHeight + "px";
    this.overlayWidth = this.window.innerWidth + "px";
  }

  private centerPopup(){
    this.styleTop = (this.window.innerHeight - 450) / 2 + "px";
    this.styleLeft = (this.window.innerWidth - 800) / 2 + "px";
  }

  public onCancelClick() {
    this.popup = undefined;
  }
}
