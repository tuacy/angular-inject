import {NgModule} from '@angular/core';

/**
 * providedIn: NgModule的时候NgModule不能直接写对应的NgModule,
 * 需要一个过渡的NgModule。否则编译报错：WARNING in Circular dependency detected
 */
@NgModule({
})
export class NgmoduleProvidersResolveModule {
}
