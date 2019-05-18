import {Component, Injector, OnInit} from '@angular/core';
import {TOKEN_COMPONENT_VALUE, TOKEN_MODULE_CONFIG} from '../../inject-token-contests';
import {Config} from './config';

@Component({
    selector: 'app-value-provider',
    templateUrl: './value-provider.component.html',
    styleUrls: ['./value-provider.component.less'],
    providers: [
        {provide: TOKEN_COMPONENT_VALUE, useValue: 'tuacy'}
    ]
})
export class ValueProviderComponent implements OnInit {

    constructor(private injector: Injector) {
        // 获取模块中注入的TOKEN_MODULE_CONFIG
        const config: Config = injector.get(TOKEN_MODULE_CONFIG);
        console.log(config.version);
        config.version = config.version + '.1';
        // 获取组件中注入的TOKEN_COMPONENT_VALUE
        const componentValue: string = injector.get(TOKEN_COMPONENT_VALUE);
        console.log(componentValue);

    }

    ngOnInit() {
    }

}
