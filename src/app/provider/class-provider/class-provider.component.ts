import {Component, Injector, OnInit} from '@angular/core';
import {ModuleClassProviderService} from "./module-class-provider.service";
import {TOKEN_MODULE_CLASS_PROVIDER} from "../../inject-token-contests";
import {LazyClassProviderService} from "./lazy-class-provider.service";

@Component({
    selector: 'app-class-provider',
    templateUrl: './class-provider.component.html',
    styleUrls: ['./class-provider.component.less']
})
export class ClassProviderComponent implements OnInit {

    constructor(private injector: Injector,
                private lazyService: LazyClassProviderService) {
        // 通过Injector获取到TOKEN_MODULE_CLASS_PROVIDER对应的服务
        const service: ModuleClassProviderService = injector.get(TOKEN_MODULE_CLASS_PROVIDER);
        lazyService.textFunction();
    }

    ngOnInit() {
    }

}
