import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConstructorProviderComponent} from "./constructor-provider.component";

@NgModule({
    declarations: [
        ConstructorProviderComponent
    ],
    exports: [
        ConstructorProviderComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ConstructorProviderModule {
}
