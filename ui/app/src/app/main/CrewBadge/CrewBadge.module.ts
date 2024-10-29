import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {CREWBADGE_MODULE_DECLARATIONS, CrewBadgeRoutingModule} from  './CrewBadge-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    CrewBadgeRoutingModule
  ],
  declarations: CREWBADGE_MODULE_DECLARATIONS,
  exports: CREWBADGE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CrewBadgeModule { }