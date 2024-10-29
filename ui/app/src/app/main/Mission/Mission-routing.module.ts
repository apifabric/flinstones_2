import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionHomeComponent } from './home/Mission-home.component';
import { MissionNewComponent } from './new/Mission-new.component';
import { MissionDetailComponent } from './detail/Mission-detail.component';

const routes: Routes = [
  {path: '', component: MissionHomeComponent},
  { path: 'new', component: MissionNewComponent },
  { path: ':id', component: MissionDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Mission-detail-permissions'
      }
    }
  },{
    path: ':mission_id/LogEntry', loadChildren: () => import('../LogEntry/LogEntry.module').then(m => m.LogEntryModule),
    data: {
        oPermission: {
            permissionId: 'LogEntry-detail-permissions'
        }
    }
},{
    path: ':mission_id/Reservation', loadChildren: () => import('../Reservation/Reservation.module').then(m => m.ReservationModule),
    data: {
        oPermission: {
            permissionId: 'Reservation-detail-permissions'
        }
    }
},{
    path: ':mission_id/Supply', loadChildren: () => import('../Supply/Supply.module').then(m => m.SupplyModule),
    data: {
        oPermission: {
            permissionId: 'Supply-detail-permissions'
        }
    }
},{
    path: ':mission_id/Transmission', loadChildren: () => import('../Transmission/Transmission.module').then(m => m.TransmissionModule),
    data: {
        oPermission: {
            permissionId: 'Transmission-detail-permissions'
        }
    }
}
];

export const MISSION_MODULE_DECLARATIONS = [
    MissionHomeComponent,
    MissionNewComponent,
    MissionDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MissionRoutingModule { }