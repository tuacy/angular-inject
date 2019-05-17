import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExistingProviderComponent} from "./existing-provider.component";

@NgModule({
    declarations: [
        ExistingProviderComponent
    ],
    exports: [
        ExistingProviderComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ExistingProviderModule {
}
