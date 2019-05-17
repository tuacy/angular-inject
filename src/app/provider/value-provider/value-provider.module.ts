import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ValueProviderComponent} from "./value-provider.component";
import {ValueProviderResolveModule} from "./value-provider-resolve.module";

@NgModule({
    declarations: [
        ValueProviderComponent
    ],
    exports: [
        ValueProviderComponent
    ],
    imports: [
        CommonModule,
        ValueProviderResolveModule
    ]
})
export class ValueProviderModule {
}
