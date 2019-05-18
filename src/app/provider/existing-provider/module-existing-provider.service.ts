import {Injectable} from '@angular/core';

export class ModuleExistingProviderServiceExtended {
    textFunction() {
        console.log("extended");
    }
}

@Injectable()
export class ModuleExistingProviderService {

    constructor() {
    }

    textFunction() {
        console.log("normal");
    }
}
