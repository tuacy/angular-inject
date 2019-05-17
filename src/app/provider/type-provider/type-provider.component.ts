import {Component, OnInit} from '@angular/core';
import {ComponentTypeProviderService} from "./component-type-provider.service";
import {LazyTypeProviderService} from "./lazy-type-provider.service";
import {ModuleTypeProviderService} from "./module-type-provider.service";

/**
 * 验证TypeProvider的使用
 */
@Component({
    selector: 'app-type-provider',
    templateUrl: './type-provider.component.html',
    styleUrls: ['./type-provider.component.less'],
    providers: [ComponentTypeProviderService]
})
export class TypeProviderComponent implements OnInit {

    constructor(private moduleService: ModuleTypeProviderService,
                private componentService: ComponentTypeProviderService,
                private lazyService: LazyTypeProviderService) {
    }

    ngOnInit() {
    }

}
