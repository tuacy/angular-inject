import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FactoryProviderComponent} from "./factory-provider.component";

@NgModule({
    declarations: [
        FactoryProviderComponent
    ],
    exports: [
        FactoryProviderComponent
    ],
    imports: [
        CommonModule
    ]
})
export class FactoryProviderModule {
}
