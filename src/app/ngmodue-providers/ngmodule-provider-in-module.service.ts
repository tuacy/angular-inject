import {Injectable} from '@angular/core';
import {NgmoduleProvidersResolveModule} from './ngmodule-providers-resolve.module';

/**
 * providedIn中直接指定了当前服务可以在哪个模块使用
 * 特别说明：我们想在NgmoduleProvidersModule模块里面使用该服务，
 * 如果providedIn直接写NgmoduleProvidersModule，会报编译错误，
 * 所以我们定义了一个中间模块NgmoduleProvidersResolveModule，
 * 然后在NgmoduleProvidersModule里面引入了NgmoduleProvidersResolveModule。
 *
 * NgmoduleProvidersResolveModule相当于一个过渡的作用
 */
@Injectable({
    providedIn: NgmoduleProvidersResolveModule
})
export class NgmoduleProviderInModuleService {

    constructor() {
    }

    // TODO: 其他逻辑
}
