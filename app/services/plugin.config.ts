import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs/Rx";

export interface PluginOptions {
    templatesBaseUrl?: string;
    mockAJAX?: boolean;
    onInit?: (callback: any) => any;
    onTranslate?: (code:string, text: string) => any;
    translations: any[];
    terms_conds_text: string;
    payment_types: any[];
    online_systems: any[];
    reg_services: any[];
    show_form: boolean;
    onlinePaymentConst: string;
    show_download_invoice_btn: boolean;
    show_download_receipt_btn: boolean;
    show_edit_invoice_btn: boolean;
    show_pay_btn: boolean;
    is_next_button_active: boolean;
    is_invoice: boolean;
    get_invoice_url: string;
    create_invoice_url: string;
    cancel_invoice_url: string;
    show_reg_services: boolean;
    show_payment_types: boolean;
    show_online_systems: boolean;
    show_online_systems_directly: boolean;
    download_invoice_url: string;
    download_receipt_url: string;
    chosen_online_system: string;
    chosen_payment_type: string;
    chosen_reg_service_id: string;
    pay_btn_url: string;
    base_layout_id: number;
}

@Injectable()
export class PluginConfig {
    templatesBaseUrl: string;
    mockAJAX: boolean;
    onInit: (callback: any) => any;
    onTranslate: (code:string, text: string) => any;
    translations: any[];
    terms_conds_text: string;
    payment_types: any[];
    online_systems: any[];
    reg_services: any[];
    show_form: boolean;
    onlinePaymentConst: string;
    show_download_invoice_btn: boolean;
    show_download_receipt_btn: boolean;
    show_edit_invoice_btn: boolean;
    show_pay_btn: boolean;
    is_next_button_active: boolean;
    is_invoice: boolean;
    get_invoice_url: string;
    create_invoice_url: string;
    cancel_invoice_url: string;
    show_reg_services: boolean;
    show_payment_types: boolean;
    show_online_systems: boolean;
    show_online_systems_directly: boolean;
    download_invoice_url: string;
    download_receipt_url: string;
    chosen_online_system: string;
    chosen_payment_type: string;
    chosen_reg_service_id: string;
    pay_btn_url: string;
    base_layout_id: number;

    private _onUpdate: BehaviorSubject<PluginConfig>;
    public onUpdate: Observable<PluginConfig>;

    constructor(options:PluginOptions) {
        this._onUpdate = new BehaviorSubject(this);
        this.onUpdate = this._onUpdate.asObservable();
        this.update(options);
    }


    public update(options:PluginOptions) {
        console.log('options show_edit_invoice_btn', options.show_edit_invoice_btn);
        this.templatesBaseUrl = options.templatesBaseUrl;
        this.mockAJAX = options.mockAJAX;
        undefined === options.onInit || (this.onInit = typeof options.onInit === 'function' ? options.onInit : () => {});
        this.onTranslate = typeof options.onTranslate === 'function' ? options.onTranslate : () => {};
        this.translations = options.translations;
        undefined === options.terms_conds_text || (this.terms_conds_text = options.terms_conds_text);
        undefined === options.payment_types || (this.payment_types = options.payment_types);
        undefined === options.online_systems || (this.online_systems = options.online_systems);
        undefined === options.reg_services || (this.reg_services = options.reg_services);
        undefined === options.show_form || (this.show_form = options.show_form);
        undefined === options.onlinePaymentConst || (this.onlinePaymentConst = options.onlinePaymentConst);
        undefined === options.show_download_invoice_btn || (this.show_download_invoice_btn = options.show_download_invoice_btn);
        undefined === options.show_download_receipt_btn || (this.show_download_receipt_btn = options.show_download_receipt_btn);
        undefined === options.show_edit_invoice_btn || (this.show_edit_invoice_btn = options.show_edit_invoice_btn);
        undefined === options.show_pay_btn || (this.show_pay_btn = options.show_pay_btn);
        undefined === options.is_next_button_active || (this.is_next_button_active = options.is_next_button_active);
        undefined === options.is_invoice || (this.is_invoice = options.is_invoice);
        undefined === options.get_invoice_url || (this.get_invoice_url = options.get_invoice_url);
        undefined === options.create_invoice_url || (this.create_invoice_url = options.create_invoice_url);
        undefined === options.cancel_invoice_url || (this.cancel_invoice_url = options.cancel_invoice_url);
        undefined === options.show_reg_services || (this.show_reg_services = options.show_reg_services);
        undefined === options.show_payment_types || (this.show_payment_types = options.show_payment_types);
        undefined === options.show_online_systems || (this.show_online_systems = options.show_online_systems);
        undefined === options.show_online_systems_directly || (this.show_online_systems_directly = options.show_online_systems_directly);
        undefined === options.download_invoice_url || (this.download_invoice_url = options.download_invoice_url);
        undefined === options.download_receipt_url || (this.download_receipt_url = options.download_receipt_url);
        undefined === options.chosen_online_system || (this.chosen_online_system = options.chosen_online_system);
        undefined === options.chosen_payment_type || (this.chosen_payment_type = options.chosen_payment_type);
        undefined === options.chosen_reg_service_id || (this.chosen_reg_service_id = options.chosen_reg_service_id);
        undefined === options.pay_btn_url || (this.pay_btn_url = options.pay_btn_url);
        undefined === options.base_layout_id || (this.base_layout_id = options.base_layout_id);

        this._onUpdate.next(this);
    }
}
