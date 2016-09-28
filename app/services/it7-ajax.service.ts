import {Injectable} from "@angular/core";
import {Headers, Http, Response, ResponseOptions, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
//import {MockBackend} from "@angular/http/testing";
import * as _ from 'underscore';

import {It7ErrorService} from "./it7-error.service";
import {PluginConfig} from "./plugin.config";

interface It7AjaxResponse {
    error: number
    errorMessage: string
    data: any
}

@Injectable()
export class It7AjaxService {

    constructor(
        private http: Http,
        private err: It7ErrorService,
        private config: PluginConfig
    ) { }

    post(url: string, data: any): Promise<any> {
        let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
        let options = new RequestOptions({ headers: headers });

        if(this.config.mockAJAX){return Promise.resolve(this.getMockData(url));}
        let here = this;
        return this.http
            .post(url, this.urlEncode(data), options)
            .toPromise()
            .then(res => this.checkResponse(res))
            .catch(function (error) {
                console.log(arguments); here.handleError('Request error: ' + error.message);
            });
    }

    private urlEncode(obj: any): string {
        let urlSearchParams = new URLSearchParams();
        for (let key in obj) {
            urlSearchParams.append(key, obj[key]);
        }
        return urlSearchParams.toString();
    }

    private checkResponse(res:Response): any{
        var response = res.json();
        if(response.error){
            this.err.fire('Server request error: ' + response.errorMessage);
        }
        return res.json().data;
    }

    // public checkResponse(res: Response): any{
    //     if(this.isJson(res)) {
    //         var response = res.json();
    //         if (response.error) {
    //             this.err.fire('Server request error: ' + response.errorMessage);
    //         }
    //         return res.json().data;
    //     } else {
    //         console.log(res);
    //         return res;
    //     }
    // }
    //
    // private isJson(str: any) {
    //     console.log('check if json');
    //     try {
    //         JSON.parse(str);
    //     } catch (e) {
    //         return false;
    //     }
    //     return true;
    // }

    private handleError(error: any) {
        this.err.fire('Server connection error: ' + error);
        return Promise.reject(error.message || error);
    }

    private getMockData(mod: string = ''):any {
        var m = {};
        return m;
    }
}
