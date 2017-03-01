import {Injectable} from "@angular/core";
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

import {PaymentAggregate} from "../models/payment-aggregate";
import {ImprintInfo} from "../models/imprint-info";

@Injectable()
export class ImprintInfoService {
    public item: ImprintInfo;
    private _onUpdate: BehaviorSubject<ImprintInfo>;
    public onUpdate: Observable<ImprintInfo>;

    constructor() {
        this._onUpdate = new BehaviorSubject(this.item);
        this.onUpdate = this._onUpdate.asObservable();
    }

    public update(src: any) {
        this.item = new ImprintInfo(src);
        this._onUpdate.next(this.item);
    }

    public fireUpdate(){
        this._onUpdate.next(this.item);
    }
}