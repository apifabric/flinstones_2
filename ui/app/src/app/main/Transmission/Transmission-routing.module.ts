import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransmissionHomeComponent } from './home/Transmission-home.component';
import { TransmissionNewComponent } from './new/Transmission-new.component';
import { TransmissionDetailComponent } from './detail/Transmission-detail.component';

const routes: Routes = [
  {path: '', component: TransmissionHomeComponent},
  { path: 'new', component: TransmissionNewComponent },
  { path: ':id', component: TransmissionDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Transmission-detail-permissions'
      }
    }
  }
];

export const TRANSMISSION_MODULE_DECLARATIONS = [
    TransmissionHomeComponent,
    TransmissionNewComponent,
    TransmissionDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransmissionRoutingModule { }