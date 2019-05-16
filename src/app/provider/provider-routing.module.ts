import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProviderComponent} from './provider.component';

/**
 * 路由配置信息
 */
const routes: Routes = [
  {
    path: "",
    component: ProviderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ProviderRoutingModule { }
