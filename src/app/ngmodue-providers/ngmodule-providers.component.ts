import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-ngmodule-providers',
    templateUrl: './ngmodule-providers.component.html',
    styleUrls: ['./ngmodule-providers.component.less']
})
export class NgmoduleProvidersComponent implements OnInit {

    code = `
.wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.container {
  flex: 1;
  margin: 1em;
  position: relative;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}`;

    constructor() {
    }

    ngOnInit() {
    }

}
