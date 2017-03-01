export class ImprintInfo {

    get_dt_form_url: string = '';
    imprint_message: string = '';
    show_validate_imprint_btn: boolean = false;

    constructor(srcData: any) {
        Object.assign(this, srcData);
    }
}
