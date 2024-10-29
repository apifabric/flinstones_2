import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {HOLODECKRESERVATION_MODULE_DECLARATIONS, HolodeckReservationRoutingModule} from  './HolodeckReservation-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    HolodeckReservationRoutingModule
  ],
  declarations: HOLODECKRESERVATION_MODULE_DECLARATIONS,
  exports: HOLODECKRESERVATION_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HolodeckReservationModule { }