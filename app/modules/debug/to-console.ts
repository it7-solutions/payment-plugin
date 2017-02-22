import {isDevMode} from '@angular/core';

export function toConsole(...data: any[]){
    if(isDevMode()  && console && 'function' === typeof console.log) {
        console.log.apply(this, data);
    }
}