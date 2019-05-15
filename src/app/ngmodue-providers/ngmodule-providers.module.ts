import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgmoduleProvidersComponent} from './ngmodule-providers.component';
import {NgmoduleProvidersRoutingModule} from './ngmodule-providers-routing.module';
import xml from 'highlight.js/lib/languages/xml';
import less from 'highlight.js/lib/languages/less';
import typescript from 'highlight.js/lib/languages/typescript';
import {HighlightModule} from 'ngx-highlightjs';
import {NgmoduleProvidersService} from './ngmodule-providers.service';
import {NgmoduleProvidersResolveModule} from './ngmodule-providers-resolve.module';

export function highlightLanguages() {
    return [
        {name: 'typescript', func: typescript},
        {name: 'less', func: less},
        {name: 'xml', func: xml}
    ];
}

@NgModule({
    declarations: [
        NgmoduleProvidersComponent
    ],
    providers: [
        NgmoduleProvidersService,
    ],
    imports: [
        CommonModule,
        HighlightModule.forRoot({
            languages: highlightLanguages
        }),
        /**
         * 导入过渡NgModule
         */
        NgmoduleProvidersResolveModule,
        NgmoduleProvidersRoutingModule
    ]
})
export class NgmoduleProvidersModule {
}
