import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarshipHomeComponent } from './home/Starship-home.component';
import { StarshipNewComponent } from './new/Starship-new.component';
import { StarshipDetailComponent } from './detail/Starship-detail.component';

const routes: Routes = [
  {path: '', component: StarshipHomeComponent},
  { path: 'new', component: StarshipNewComponent },
  { path: ':id', component: StarshipDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Starship-detail-permissions'
      }
    }
  },{
    path: ':starship_id/Equipment', loadChildren: () => import('../Equipment/Equipment.module').then(m => m.EquipmentModule),
    data: {
        oPermission: {
            permissionId: 'Equipment-detail-permissions'
        }
    }
},{
    path: ':starship_id/Reservation', loadChildren: () => import('../Reservation/Reservation.module').then(m => m.ReservationModule),
    data: {
        oPermission: {
            permissionId: 'Reservation-detail-permissions'
        }
    }
}
];

export const STARSHIP_MODULE_DECLARATIONS = [
    StarshipHomeComponent,
    StarshipNewComponent,
    StarshipDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarshipRoutingModule { }