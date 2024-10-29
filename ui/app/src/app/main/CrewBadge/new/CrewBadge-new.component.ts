import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'CrewBadge-new',
  templateUrl: './CrewBadge-new.component.html',
  styleUrls: ['./CrewBadge-new.component.scss']
})
export class CrewBadgeNewComponent {
  @ViewChild("CrewBadgeForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}