import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FactoryProviderComponent} from './factory-provider.component';
import {TOKEN_FACTORY_MODULE, TOKEN_FACTORY_MODULE_DEPS} from '../../inject-token-contests';
import {ModuleFactoryProviderService} from './module-factory-provider.service';
import {FactoryProviderResolveModule} from "./factory-provider-resolve.module";

function moduleServiceFactory(initValue) {
    return new ModuleFactoryProviderService(initValue);
}

@NgModule({
    declarations: [
        FactoryProviderComponent
    ],
    exports: [
        FactoryProviderComponent
    ],
    imports: [
        CommonModule,
        FactoryProviderResolveModule
    ],
    providers: [
        { // 创建TOKEN_FACTORY_MODULE对应的服务时候，需要依赖的值
            provide: TOKEN_FACTORY_MODULE_DEPS,
            useValue: 'initValue'
        },
        {
            provide: TOKEN_FACTORY_MODULE,
            useFactory: moduleServiceFactory,
            deps: [TOKEN_FACTORY_MODULE_DEPS]
        }
    ]
})
export class FactoryProviderModule {
}
