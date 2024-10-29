import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Transmission-new',
  templateUrl: './Transmission-new.component.html',
  styleUrls: ['./Transmission-new.component.scss']
})
export class TransmissionNewComponent {
  @ViewChild("TransmissionForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}