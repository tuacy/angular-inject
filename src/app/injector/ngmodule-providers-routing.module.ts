import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {NgmoduleProvidersComponent} from "./ngmodule-providers.component";

/**
 * 路由配置信息
 */
const routes: Routes = [
    {
        path: "",
        component: NgmoduleProvidersComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class NgmoduleProvidersRoutingModule {
}
