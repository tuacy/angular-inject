import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClassProviderComponent} from "./class-provider.component";
import {ModuleClassProviderService} from "./module-class-provider.service";
import {TOKEN_MODULE_CLASS_PROVIDER} from "../../inject-token-contests";
import {ClassProviderResolveModule} from "./class-provider-resolve.module";

@NgModule({
    declarations: [
        ClassProviderComponent
    ],
    exports: [
        ClassProviderComponent
    ],
    imports: [
        CommonModule,
        ClassProviderResolveModule
    ],
    providers: [
        {
            provide: TOKEN_MODULE_CLASS_PROVIDER, useClass: ModuleClassProviderService
        }
    ],
})
export class ClassProviderModule {
}
