import {Injectable} from '@angular/core';

@Injectable() // @Injectable()加不加都无所谓
export class ModuleConstructorProviderService {

    /**
     * 需要依赖ModuleConstructorConfig
     * @param config ModuleConstructorConfig
     */
    constructor(/*private config: ModuleConstructorConfig*/) {
        // console.log(config.version);
    }

    testFunction() {
        // console.log(this.config.version);
        console.log('aaaaaaaaaaaaa');
    }
}
