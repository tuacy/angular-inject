import {Injectable} from '@angular/core';
import {TypeProviderResolveModule} from "./type-provider-resolve.module";

@Injectable({
    providedIn: TypeProviderResolveModule
})
export class LazyTypeProviderService {

    constructor() {
    }

}
