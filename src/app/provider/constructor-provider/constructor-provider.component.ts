import {Component, Inject, Injector, OnInit} from '@angular/core';
import {ModuleConstructorProviderService} from "./module-constructor-provider.service";
import {TOKEN_CONSTRUCTOR_RELY} from "../../inject-token-contests";
import {ModuleConstructorConfig} from "./module-constructor-config";

@Component({
    selector: 'app-constructor-provider',
    templateUrl: './constructor-provider.component.html',
    styleUrls: ['./constructor-provider.component.less']
})
export class ConstructorProviderComponent implements OnInit {

    constructor(private injector: Injector,
                @Inject(TOKEN_CONSTRUCTOR_RELY) private config: ModuleConstructorConfig,
                private moduleService: ModuleConstructorProviderService) {
        moduleService.testFunction();
        console.log(config.version);
    }

    ngOnInit() {
    }

}
