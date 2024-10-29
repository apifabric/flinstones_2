import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {TRANSMISSION_MODULE_DECLARATIONS, TransmissionRoutingModule} from  './Transmission-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    TransmissionRoutingModule
  ],
  declarations: TRANSMISSION_MODULE_DECLARATIONS,
  exports: TRANSMISSION_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TransmissionModule { }