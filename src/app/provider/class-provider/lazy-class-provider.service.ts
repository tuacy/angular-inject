import {Injectable} from '@angular/core';
import {ClassProviderResolveModule} from './class-provider-resolve.module';
import {ExtendedLazyClassProviderService} from './extended-lazy-class-provider.service';

@Injectable(
    {providedIn: ClassProviderResolveModule, useClass: ExtendedLazyClassProviderService}
)
export class LazyClassProviderService {

}

