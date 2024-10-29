import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Starship-new',
  templateUrl: './Starship-new.component.html',
  styleUrls: ['./Starship-new.component.scss']
})
export class StarshipNewComponent {
  @ViewChild("StarshipForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}