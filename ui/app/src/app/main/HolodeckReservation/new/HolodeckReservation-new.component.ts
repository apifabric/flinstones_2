import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'HolodeckReservation-new',
  templateUrl: './HolodeckReservation-new.component.html',
  styleUrls: ['./HolodeckReservation-new.component.scss']
})
export class HolodeckReservationNewComponent {
  @ViewChild("HolodeckReservationForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}