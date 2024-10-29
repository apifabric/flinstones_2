import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrewMemberHomeComponent } from './home/CrewMember-home.component';
import { CrewMemberNewComponent } from './new/CrewMember-new.component';
import { CrewMemberDetailComponent } from './detail/CrewMember-detail.component';

const routes: Routes = [
  {path: '', component: CrewMemberHomeComponent},
  { path: 'new', component: CrewMemberNewComponent },
  { path: ':id', component: CrewMemberDetailComponent,
    data: {
      oPermission: {
        permissionId: 'CrewMember-detail-permissions'
      }
    }
  },{
    path: ':crew_member_id/CrewBadge', loadChildren: () => import('../CrewBadge/CrewBadge.module').then(m => m.CrewBadgeModule),
    data: {
        oPermission: {
            permissionId: 'CrewBadge-detail-permissions'
        }
    }
},{
    path: ':crew_member_id/HolodeckReservation', loadChildren: () => import('../HolodeckReservation/HolodeckReservation.module').then(m => m.HolodeckReservationModule),
    data: {
        oPermission: {
            permissionId: 'HolodeckReservation-detail-permissions'
        }
    }
},{
    path: ':crew_member_id/LogEntry', loadChildren: () => import('../LogEntry/LogEntry.module').then(m => m.LogEntryModule),
    data: {
        oPermission: {
            permissionId: 'LogEntry-detail-permissions'
        }
    }
},{
    path: ':crew_member_id/Reservation', loadChildren: () => import('../Reservation/Reservation.module').then(m => m.ReservationModule),
    data: {
        oPermission: {
            permissionId: 'Reservation-detail-permissions'
        }
    }
}
];

export const CREWMEMBER_MODULE_DECLARATIONS = [
    CrewMemberHomeComponent,
    CrewMemberNewComponent,
    CrewMemberDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrewMemberRoutingModule { }