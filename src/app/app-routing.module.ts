import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: 'injector',
        loadChildren: "./injector/ngmodule-providers.module#NgmoduleProvidersModule"
    },
    {
        path: 'provider',
        loadChildren: "./provider/provider.module#ProviderModule"
    },
    {
        path: "",
        redirectTo: "/injector",
        pathMatch: "full"
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
