import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Select} from "../models/select";
import {PluginConfig} from "../services/plugin.config";
import {SelectType} from "../models/select-type";
import {InvoiceComponent} from "./invoice.component";
import {ValidateField} from "../models/validate";

@Component({
    selector: 'selection-form',
    templateUrl: 'app/templates/selection-form.component.html',
    directives: [
        InvoiceComponent
    ]
})
export class SelectionForm implements OnInit {
    reg_services: Select[];
    payment_types: Select[];
    show_form: boolean;
    show_reg_services: boolean;
    show_payment_types: boolean;
    onlinePaymentConst: string;
    chosen_reg_service_id: string;

    info: SelectType = {
        reg_service_id: '',
        payment_type: ''
    };

    @Output() formOkay: EventEmitter<SelectType> = new EventEmitter<SelectType>();


    getDataInvoice: string;
    showDataInvoice: boolean = false;
    formValid: boolean = true;

    constructor(
        private _config: PluginConfig
    ) {
        this.reg_services = _config.reg_services;
        this.payment_types = _config.payment_types;
        this.show_form = _config.show_form;
        this.show_reg_services = _config.show_reg_services;
        this.show_payment_types = _config.show_payment_types;
        this.onlinePaymentConst = _config.onlinePaymentConst;
        this.chosen_reg_service_id = _config.chosen_reg_service_id;
        this.info.reg_service_id = this._config.chosen_reg_service_id;
        this._config.onUpdate.subscribe(config => {this.info.reg_service_id = config.chosen_reg_service_id});
    }

    validateFields: {[key:string] : ValidateField} = {
        reg_service_id: {
            isValid: true,
            messageText: '',
            isRequired: true,
        },
        payment_type: {
            isValid: true,
            messageText: '',
            isRequired: true,
        }
    };

    private setAllValid() {
        for(var fieldName in this.validateFields) {
            var field:ValidateField = this.validateFields[fieldName];
            field.isValid = true;
            field.messageText = '';
        }
    }

    private checkRequired() {
        for(var fieldName in this.validateFields) {
            var field:ValidateField = this.validateFields[fieldName];
            var isFunction = typeof field.isRequired === 'function';
            if(isFunction ? field.isRequired() : field.isRequired) {
                var value = this.info[fieldName];
                if('' === value || value === null) {
                    field.isValid = false;
                    field.messageText = (field.messageText ? field.messageText + '. ' : '') + 'Please make selection!';
                }
            }
        }
    }

    private checkValid() {
        this.formValid = true;
        for(var i in this.validateFields) {
            if(this.validateFields[i].isValid === false) {
                this.formValid = false;
                break;
            }
        }
        return this.formValid;
    }

    onValidateFields() {
        this.setAllValid();
        this.checkRequired();

        this.checkValid();
    }

    public getInvoiceCall() {
        console.log('info', this.info);
        this.onValidateFields();
        console.log('form', this.formValid);

        if(this.checkValid()) {
            this.formOkay.emit(this.info);

            this.fillForm(
                {
                    reg_service_id: '',
                    payment_type: ''
                }
            );

        }
    }

    private fillForm(o: any) {
        Object.assign(this.info, o);
    }

    private sendAjaxCallIfFormFalse() {
        console.log('form false');
        this.formOkay.emit(this.info);
    }

    ngOnInit() {
        if(!this.show_form) {
            this.sendAjaxCallIfFormFalse();
        } else if(this.show_form) {
            console.log('show data');
        }
    }


}
