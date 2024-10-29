import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadgeHomeComponent } from './home/Badge-home.component';
import { BadgeNewComponent } from './new/Badge-new.component';
import { BadgeDetailComponent } from './detail/Badge-detail.component';

const routes: Routes = [
  {path: '', component: BadgeHomeComponent},
  { path: 'new', component: BadgeNewComponent },
  { path: ':id', component: BadgeDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Badge-detail-permissions'
      }
    }
  },{
    path: ':badge_id/CrewBadge', loadChildren: () => import('../CrewBadge/CrewBadge.module').then(m => m.CrewBadgeModule),
    data: {
        oPermission: {
            permissionId: 'CrewBadge-detail-permissions'
        }
    }
}
];

export const BADGE_MODULE_DECLARATIONS = [
    BadgeHomeComponent,
    BadgeNewComponent,
    BadgeDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BadgeRoutingModule { }