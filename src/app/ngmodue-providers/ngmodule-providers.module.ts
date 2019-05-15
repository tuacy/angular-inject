import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgmoduleProvidersComponent} from './ngmodule-providers.component';
import {NgmoduleProvidersRoutingModule} from './ngmodule-providers-routing.module';
import xml from 'highlight.js/lib/languages/xml';
import less from 'highlight.js/lib/languages/less';
import typescript from 'highlight.js/lib/languages/typescript';
import {HighlightModule} from "ngx-highlightjs";

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
    imports: [
        CommonModule,
        HighlightModule.forRoot({
            languages: highlightLanguages
        }),
        NgmoduleProvidersRoutingModule
    ]
})
export class NgmoduleProvidersModule {
}
