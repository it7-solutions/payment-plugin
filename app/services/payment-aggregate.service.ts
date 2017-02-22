import {Injectable} from "@angular/core";
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

import {PaymentAggregate} from "../models/payment-aggregate";

@Injectable()
export class PaymentAggregateService {
    public item: PaymentAggregate;
    private _onUpdate: BehaviorSubject<PaymentAggregate>;
    public onUpdate: Observable<PaymentAggregate>;

    constructor() {
        this._onUpdate = new BehaviorSubject(this.item);
        this.onUpdate = this._onUpdate.asObservable();
    }

    public update(src: any) {
        this.item = new PaymentAggregate(src);
        this._onUpdate.next(this.item);
    }

    public fireUpdate(){
        this._onUpdate.next(this.item);
    }
}