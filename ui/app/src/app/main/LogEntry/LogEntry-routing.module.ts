import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogEntryHomeComponent } from './home/LogEntry-home.component';
import { LogEntryNewComponent } from './new/LogEntry-new.component';
import { LogEntryDetailComponent } from './detail/LogEntry-detail.component';

const routes: Routes = [
  {path: '', component: LogEntryHomeComponent},
  { path: 'new', component: LogEntryNewComponent },
  { path: ':id', component: LogEntryDetailComponent,
    data: {
      oPermission: {
        permissionId: 'LogEntry-detail-permissions'
      }
    }
  }
];

export const LOGENTRY_MODULE_DECLARATIONS = [
    LogEntryHomeComponent,
    LogEntryNewComponent,
    LogEntryDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogEntryRoutingModule { }