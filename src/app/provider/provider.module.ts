import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProviderRoutingModule} from './provider-routing.module';
import {ProviderComponent} from './provider.component';
import {ClassProviderModule} from "./class-provider/class-provider.module";
import {ConstructorProviderModule} from "./constructor-provider/constructor-provider.module";
import {ExistingProviderModule} from "./existing-provider/existing-provider.module";
import {FactoryProviderModule} from "./factory-provider/factory-provider.module";
import {TypeProviderModule} from "./type-provider/type-provider.module";
import {ValueProviderModule} from "./value-provider/value-provider.module";

@NgModule({
    declarations: [
        ProviderComponent
    ],
    imports: [
        CommonModule,
        ClassProviderModule,
        ConstructorProviderModule,
        ExistingProviderModule,
        FactoryProviderModule,
        TypeProviderModule,
        ValueProviderModule,
        ProviderRoutingModule
    ]
})
export class ProviderModule {
}
