import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HolodeckReservationHomeComponent } from './home/HolodeckReservation-home.component';
import { HolodeckReservationNewComponent } from './new/HolodeckReservation-new.component';
import { HolodeckReservationDetailComponent } from './detail/HolodeckReservation-detail.component';

const routes: Routes = [
  {path: '', component: HolodeckReservationHomeComponent},
  { path: 'new', component: HolodeckReservationNewComponent },
  { path: ':id', component: HolodeckReservationDetailComponent,
    data: {
      oPermission: {
        permissionId: 'HolodeckReservation-detail-permissions'
      }
    }
  }
];

export const HOLODECKRESERVATION_MODULE_DECLARATIONS = [
    HolodeckReservationHomeComponent,
    HolodeckReservationNewComponent,
    HolodeckReservationDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HolodeckReservationRoutingModule { }