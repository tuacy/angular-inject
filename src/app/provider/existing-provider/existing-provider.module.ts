import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExistingProviderComponent} from "./existing-provider.component";
import {ModuleExistingProviderService, ModuleExistingProviderServiceExtended} from "./module-existing-provider.service";

@NgModule({
    declarations: [
        ExistingProviderComponent
    ],
    exports: [
        ExistingProviderComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [
        ModuleExistingProviderServiceExtended,
        {provide: ModuleExistingProviderService, useExisting: ModuleExistingProviderServiceExtended}
    ]
})
export class ExistingProviderModule {
}
