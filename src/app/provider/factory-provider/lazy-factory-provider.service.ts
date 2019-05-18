import {Injectable} from '@angular/core';
import {FactoryProviderResolveModule} from "./factory-provider-resolve.module";

/**
 * LazyFactoryProviderService的扩展对象
 * 当然了LazyFactoryProviderService里面需要使用的方法和对象都要在
 * LazyFactoryProviderServiceExtended里面
 */
export class LazyFactoryProviderServiceExtended {

    initValue: string;

    constructor(initValue: string) {
        this.initValue = initValue;
    }

    textFunction() {
        console.log('bbbbbbbbbbbb');
    }

}

function moduleServiceFactory() {
    return new LazyFactoryProviderServiceExtended('tuacy');
}


@Injectable({
    providedIn: FactoryProviderResolveModule, useFactory: moduleServiceFactory
})
export class LazyFactoryProviderService {

    constructor() {
    }

    textFunction() {
        console.log('aaaaaaaaaaaaaa');
    }
}
