import {Component, OnInit} from '@angular/core';
import {ComponentInjectService} from './component-inject.service';

@Component({
    selector: 'app-ngmodule-providers',
    templateUrl: './ngmodule-providers.component.html',
    styleUrls: ['./ngmodule-providers.component.less'],
    providers: [ComponentInjectService],   // providers提供的服务在当前组件和子组件都可以使用
    // viewProviders: [ComponentInjectService], // viewProviders提供的服务在当前组件使用
})
export class NgmoduleProvidersComponent implements OnInit {

    providedInRoot = 'import {Injectable} from \'@angular/core\';\n' +
        '\n' +
        '/**\n' +
        ' * StartupService可以在系统的任务地方使用\n' +
        ' */\n' +
        '@Injectable({\n' +
        '    providedIn: \'root\'\n' +
        '})\n' +
        'export class StartupService {\n' +
        '\n' +
        '    constructor() {\n' +
        '    }\n' +
        '\n' +
        '    // TODO: 其他逻辑\n' +
        '}';


    providerInNgModuleServiceCode = 'import {Injectable} from \'@angular/core\';\n' +
        'import {NgmoduleProvidersResolveModule} from \'./ngmodule-providers-resolve.module\';\n' +
        '\n' +
        '/**\n' +
        ' * providedIn中直接指定了当前服务可以在哪个模块使用\n' +
        ' * 特别说明：我们想在NgmoduleProvidersModule模块里面使用该服务，\n' +
        ' * 如果providedIn直接写NgmoduleProvidersModule，会报编译错误，\n' +
        ' * 所以我们定义了一个中间模块NgmoduleProvidersResolveModule，\n' +
        ' * 然后在NgmoduleProvidersModule里面引入了NgmoduleProvidersResolveModule。\n' +
        ' *\n' +
        ' * NgmoduleProvidersResolveModule相当于一个过渡的作用\n' +
        ' */\n' +
        '@Injectable({\n' +
        '    providedIn: NgmoduleProvidersResolveModule\n' +
        '})\n' +
        'export class NgmoduleProviderInModuleService {\n' +
        '\n' +
        '    constructor() {\n' +
        '    }\n' +
        '\n' +
        '    // TODO: 其他逻辑\n' +
        '}\n';

    providerInNgModuleResolveModuleCode = 'import {NgModule} from \'@angular/core\';\n' +
        '\n' +
        '/**\n' +
        ' * providedIn: NgModule的时候NgModule不能直接写对应的NgModule,\n' +
        ' * 需要一个过渡的NgModule。否则编译报错：WARNING in Circular dependency detected\n' +
        ' */\n' +
        '@NgModule({\n' +
        '})\n' +
        'export class NgmoduleProvidersResolveModule {\n' +
        '}';

    providerInNgModuleModuleCode = 'import {NgModule} from \'@angular/core\';\n' +
        'import {CommonModule} from \'@angular/common\';\n' +
        'import {NgmoduleProvidersComponent} from \'./ngmodule-providers.component\';\n' +
        'import {NgmoduleProvidersRoutingModule} from \'./ngmodule-providers-routing.module\';\n' +
        'import {NgmoduleProvidersService} from \'./ngmodule-providers.service\';\n' +
        'import {NgmoduleProvidersResolveModule} from \'./ngmodule-providers-resolve.module\';\n' +
        '\n' +
        '\n' +
        '@NgModule({\n' +
        '    declarations: [\n' +
        '        NgmoduleProvidersComponent\n' +
        '    ],\n' +
        '    providers: [\n' +
        '        NgmoduleProvidersService,\n' +
        '    ],\n' +
        '    imports: [\n' +
        '        CommonModule,\n' +
        '        /**\n' +
        '         * 导入了过渡的NgModule\n' +
        '         */\n' +
        '        NgmoduleProvidersResolveModule,\n' +
        '        NgmoduleProvidersRoutingModule\n' +
        '    ]\n' +
        '})\n' +
        'export class NgmoduleProvidersModule {\n' +
        '}\n';

    componentServiceCode = 'import { Injectable } from \'@angular/core\';\n' +
        '\n' +
        '/**\n' +
        ' * 当前服务在组件里面使用，会在需要使用的组件里面注入\n' +
        ' */\n' +
        '@Injectable()\n' +
        'export class ComponentInjectService {\n' +
        '\n' +
        '  constructor() { }\n' +
        '}';

    componentCode = 'import {ComponentInjectService} from \'./component-inject.service\';\n' +
        '\n' +
        '@Component({\n' +
        '    selector: \'app-ngmodule-providers\',\n' +
        '    templateUrl: \'./ngmodule-providers.component.html\',\n' +
        '    styleUrls: [\'./ngmodule-providers.component.less\'],\n' +
        '    providers: [ComponentInjectService],   // providers提供的服务在当前组件和子组件都可以使用\n' +
        '    // viewProviders: [ComponentInjectService], // viewProviders提供的服务在当前组件使用\n' +
        '})\n' +
        'export class NgmoduleProvidersComponent implements OnInit {\n' +
        '    \n' +
        '    constructor(private service: ComponentInjectService) {\n' +
        '    }\n' +
        '\n' +
        '    ngOnInit() {\n' +
        '    }\n' +
        '\n' +
        '}';

    constructor() {
    }

    ngOnInit() {
    }

}
