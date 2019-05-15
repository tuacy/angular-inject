import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HighlightModule} from "ngx-highlightjs";
import xml from 'highlight.js/lib/languages/xml';
import less from 'highlight.js/lib/languages/less';
import typescript from 'highlight.js/lib/languages/typescript';

export function highlightLanguages() {
    return [
        {name: 'typescript', func: typescript},
        {name: 'less', func: less},
        {name: 'xml', func: xml}
    ];
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        RouterModule,
        FormsModule,
        BrowserModule,
        HighlightModule.forRoot({
            languages: highlightLanguages
        }),
        BrowserAnimationsModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
