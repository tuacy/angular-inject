import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FactoryProviderComponent} from './factory-provider.component';
import {TOKEN_FACTORY_MODULE} from '../../inject-token-contests';
import {ModuleFactoryProviderService} from './module-factory-provider.service';

function moduleServiceFactory() {
    return new ModuleFactoryProviderService();
}

@NgModule({
    declarations: [
        FactoryProviderComponent
    ],
    exports: [
        FactoryProviderComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [
        {
            provide: TOKEN_FACTORY_MODULE, useFactory: moduleServiceFactory, deps: []
        }
    ]
})
export class FactoryProviderModule {
}
