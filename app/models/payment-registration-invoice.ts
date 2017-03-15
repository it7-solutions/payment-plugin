import {PaymentInvoice} from "./payment-invoice";
import {toConsole} from "../modules/debug/to-console";

export class PaymentRegistrationInvoice extends PaymentInvoice {

    chosen_service_id: string;
    services: any[];
    show_choose_services: boolean;

    constructor(srcData: any) {
        super(srcData);

        this.show_choose_services = !!this.show_choose_services;

        if(!this.services || !Array.isArray(this.services)){
            this.services = [];
        }

        if ('string' !== typeof this.chosen_service_id) {
            this.chosen_service_id = this.chosen_service_id ? ('' + this.chosen_service_id) : '';
        }

    }
}
