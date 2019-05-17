import {Injectable, OnDestroy, OnInit} from '@angular/core';

@Injectable()
export class ComponentTypeProviderService implements OnDestroy {

    constructor() {
    }

    ngOnDestroy(): void {

        console.log('### ComponentTypeProviderService 服务销毁了');

    }


}
