import {Injectable} from "@angular/core";

export interface PluginOptions {
    templatesBaseUrl?: string;
    mockAJAX?: boolean;
    onTranslate?: (code:string, text: string) => any;
    translations: any[];
    terms_conds_text: string;
    payment_types: any[];
    online_systems: any[];
    reg_services: any[];
    show_form: boolean;
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
    chosen_online_system: string;
}

@Injectable()
export class PluginConfig {
    templatesBaseUrl: string;
    mockAJAX: boolean;
    onTranslate: (code:string, text: string) => any;
    translations: any[];
    terms_conds_text: string;
    payment_types: any[];
    online_systems: any[];
    reg_services: any[];
    show_form: boolean;
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
    chosen_online_system: string;

    constructor(options:PluginOptions) {
        this.templatesBaseUrl = options.templatesBaseUrl;
        this.mockAJAX = options.mockAJAX;
        this.onTranslate = typeof options.onTranslate === 'function' ? options.onTranslate : () => {};
        this.translations = options.translations;
        this.terms_conds_text = options.terms_conds_text;
        this.payment_types = options.payment_types;
        this.online_systems = options.online_systems;
        this.reg_services = options.reg_services;
        this.show_form = options.show_form;
        this.show_download_invoice_btn = options.show_download_invoice_btn;
        this.show_download_receipt_btn = options.show_download_receipt_btn;
        this.show_edit_invoice_btn = options.show_edit_invoice_btn;
        this.show_pay_btn = options.show_pay_btn;
        this.is_next_button_active = options.is_next_button_active;
        this.is_invoice = options.is_invoice;
        this.get_invoice_url = options.get_invoice_url;
        this.create_invoice_url = options.create_invoice_url;
        this.cancel_invoice_url = options.cancel_invoice_url;
        this.show_reg_services = options.show_reg_services;
        this.show_payment_types = options.show_payment_types;
        this.show_online_systems = options.show_online_systems;
        this.show_online_systems_directly = options.show_online_systems_directly;
        this.chosen_online_system = options.chosen_online_system;
    }
}
