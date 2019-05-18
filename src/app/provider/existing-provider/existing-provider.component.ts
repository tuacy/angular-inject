import {Component, OnInit} from '@angular/core';
import {ModuleExistingProviderService} from "./module-existing-provider.service";

@Component({
    selector: 'app-existing-provider',
    templateUrl: './existing-provider.component.html',
    styleUrls: ['./existing-provider.component.less']
})
export class ExistingProviderComponent implements OnInit {

    constructor(private moduleService: ModuleExistingProviderService) {
        moduleService.textFunction();
    }

    ngOnInit() {
    }

}
