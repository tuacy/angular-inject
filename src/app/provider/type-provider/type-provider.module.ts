import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TypeProviderComponent} from "./type-provider.component";
import {ModuleTypeProviderService} from "./module-type-provider.service";
import {TypeProviderResolveModule} from "./type-provider-resolve.module";

@NgModule({
    declarations: [
        TypeProviderComponent
    ],
    exports: [
        TypeProviderComponent
    ],
    imports: [
        CommonModule,
        TypeProviderResolveModule
    ],
    providers: [
        ModuleTypeProviderService,
    ]
})
export class TypeProviderModule {
}
