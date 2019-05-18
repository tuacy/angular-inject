import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ValueProviderComponent} from "./value-provider.component";
import {ValueProviderResolveModule} from "./value-provider-resolve.module";
import {TOKEN_MODULE_CONFIG} from '../../inject-token-contests';
import {Config} from './config';

const config = new Config();
config.version = '1.1.2';

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
    ],
    providers: [
        {provide: TOKEN_MODULE_CONFIG, useValue: config},
    ]
})
export class ValueProviderModule {
}
