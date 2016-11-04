import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs/Rx";

export interface PluginOptions {
    templatesBaseUrl?: string;
    mockAJAX?: boolean;
    dataTransPay?: (callback: any) => any;
    isActiveNext?: (callback: any) => any;
    onTranslate?: (code:string, text: string) => any;
    translations: any[];
    terms_conds_text: string;
    payment_types: any[];
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
    download_invoice_url: string;
    download_receipt_url: string;
    chosen_online_system: string;
    chosen_payment_type: string;
    chosen_reg_service_id: string;
    view_step: string;
    pay_btn_url_dt: string;
    pay_btn_url_pp: string;
    bank_details_text: string;
    show_bank_details: boolean;
    get_invoice: boolean;
}

@Injectable()
export class PluginConfig {
    templatesBaseUrl: string;
    mockAJAX: boolean;
    dataTransPay: (callback: any) => any;
    isActiveNext: (callback: any) => any;
    onTranslate: (code:string, text: string) => any;
    translations: any[];
    terms_conds_text: string;
    payment_types: any[];
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
    download_invoice_url: string;
    download_receipt_url: string;
    chosen_online_system: string;
    chosen_payment_type: string;
    chosen_reg_service_id: string;
    view_step: string;
    pay_btn_url_dt: string;
    pay_btn_url_pp: string;
    bank_details_text: string;
    show_bank_details: boolean;
    get_invoice: boolean;

    private _onUpdate: BehaviorSubject<PluginConfig>;
    public onUpdate: Observable<PluginConfig>;

    constructor(options:PluginOptions) {
        this._onUpdate = new BehaviorSubject(this);
        this.onUpdate = this._onUpdate.asObservable();
        this.update(options);
    }


    public update(options:PluginOptions) {
        undefined === options.templatesBaseUrl || (this.templatesBaseUrl = options.templatesBaseUrl);
        undefined === options.mockAJAX || (this.mockAJAX = options.mockAJAX);
        undefined === options.dataTransPay || (this.dataTransPay = typeof options.dataTransPay === 'function' ? options.dataTransPay : () => {});
        undefined === options.isActiveNext || (this.isActiveNext = typeof options.isActiveNext === 'function' ? options.isActiveNext : () => {});
        undefined === options.onTranslate || (this.onTranslate = typeof options.onTranslate === 'function' ? options.onTranslate : () => {});
        undefined === options.translations || (this.translations = options.translations);
        undefined === options.terms_conds_text || (this.terms_conds_text = options.terms_conds_text);
        undefined === options.payment_types || (this.payment_types = options.payment_types);
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
        undefined === options.download_invoice_url || (this.download_invoice_url = options.download_invoice_url);
        undefined === options.download_receipt_url || (this.download_receipt_url = options.download_receipt_url);
        undefined === options.chosen_online_system || (this.chosen_online_system = options.chosen_online_system);
        undefined === options.chosen_payment_type || (this.chosen_payment_type = options.chosen_payment_type);
        undefined === options.chosen_reg_service_id || (options.chosen_reg_service_id ? this.chosen_reg_service_id = options.chosen_reg_service_id : this.chosen_reg_service_id = '');
        undefined === options.view_step || (this.view_step = options.view_step);
        undefined === options.pay_btn_url_dt || (this.pay_btn_url_dt = options.pay_btn_url_dt);
        undefined === options.pay_btn_url_pp || (this.pay_btn_url_pp = options.pay_btn_url_pp);
        undefined === options.bank_details_text || (this.bank_details_text = options.bank_details_text);
        undefined === options.show_bank_details || (this.show_bank_details = options.show_bank_details);
        undefined === options.get_invoice || (this.get_invoice = options.get_invoice);

        this._onUpdate.next(this);
    }
}
