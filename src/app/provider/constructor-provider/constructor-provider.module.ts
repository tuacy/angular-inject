import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConstructorProviderComponent} from "./constructor-provider.component";
import {ModuleConstructorProviderService} from "./module-constructor-provider.service";
import {TOKEN_CONSTRUCTOR_RELY} from "../../inject-token-contests";
import {ModuleConstructorConfig} from "./module-constructor-config";

const constructorRely: ModuleConstructorConfig = new ModuleConstructorConfig();
constructorRely.version = 'abac';

@NgModule({
    declarations: [
        ConstructorProviderComponent
    ],
    exports: [
        ConstructorProviderComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [
        {provide: TOKEN_CONSTRUCTOR_RELY, useValue: constructorRely}, // 提前把ModuleConstructorProviderService构造的时候需要的东西注入进来
        {provide: ModuleConstructorProviderService, deps: [TOKEN_CONSTRUCTOR_RELY]}
    ]
})
export class ConstructorProviderModule {
}
