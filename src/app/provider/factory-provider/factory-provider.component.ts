import {Component, Injector, OnInit} from '@angular/core';
import {TOKEN_FACTORY_MODULE} from "../../inject-token-contests";
import {ModuleFactoryProviderService} from "./module-factory-provider.service";
import {LazyFactoryProviderService} from "./lazy-factory-provider.service";

@Component({
    selector: 'app-factory-provider',
    templateUrl: './factory-provider.component.html',
    styleUrls: ['./factory-provider.component.less']
})
export class FactoryProviderComponent implements OnInit {

    moduleServiceInjectState: string;

    constructor(private injector: Injector,
                private lazyService: LazyFactoryProviderService) {

        const moduleService: ModuleFactoryProviderService = injector.get(TOKEN_FACTORY_MODULE);
        if (moduleService != null) {
            this.moduleServiceInjectState = '注入ModuleFactoryProviderService成功!';
            console.log(moduleService.constructorValue);
        } else {
            this.moduleServiceInjectState = '注入ModuleFactoryProviderService失败!';
        }
        lazyService.textFunction();
    }

    ngOnInit() {
    }

}
