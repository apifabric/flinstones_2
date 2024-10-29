import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrewBadgeHomeComponent } from './home/CrewBadge-home.component';
import { CrewBadgeNewComponent } from './new/CrewBadge-new.component';
import { CrewBadgeDetailComponent } from './detail/CrewBadge-detail.component';

const routes: Routes = [
  {path: '', component: CrewBadgeHomeComponent},
  { path: 'new', component: CrewBadgeNewComponent },
  { path: ':id', component: CrewBadgeDetailComponent,
    data: {
      oPermission: {
        permissionId: 'CrewBadge-detail-permissions'
      }
    }
  }
];

export const CREWBADGE_MODULE_DECLARATIONS = [
    CrewBadgeHomeComponent,
    CrewBadgeNewComponent,
    CrewBadgeDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrewBadgeRoutingModule { }