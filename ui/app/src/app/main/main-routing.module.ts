import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Badge', loadChildren: () => import('./Badge/Badge.module').then(m => m.BadgeModule) },
    
        { path: 'CrewBadge', loadChildren: () => import('./CrewBadge/CrewBadge.module').then(m => m.CrewBadgeModule) },
    
        { path: 'CrewMember', loadChildren: () => import('./CrewMember/CrewMember.module').then(m => m.CrewMemberModule) },
    
        { path: 'Destination', loadChildren: () => import('./Destination/Destination.module').then(m => m.DestinationModule) },
    
        { path: 'Equipment', loadChildren: () => import('./Equipment/Equipment.module').then(m => m.EquipmentModule) },
    
        { path: 'HolodeckReservation', loadChildren: () => import('./HolodeckReservation/HolodeckReservation.module').then(m => m.HolodeckReservationModule) },
    
        { path: 'LogEntry', loadChildren: () => import('./LogEntry/LogEntry.module').then(m => m.LogEntryModule) },
    
        { path: 'Mission', loadChildren: () => import('./Mission/Mission.module').then(m => m.MissionModule) },
    
        { path: 'Reservation', loadChildren: () => import('./Reservation/Reservation.module').then(m => m.ReservationModule) },
    
        { path: 'Starship', loadChildren: () => import('./Starship/Starship.module').then(m => m.StarshipModule) },
    
        { path: 'Supply', loadChildren: () => import('./Supply/Supply.module').then(m => m.SupplyModule) },
    
        { path: 'Transmission', loadChildren: () => import('./Transmission/Transmission.module').then(m => m.TransmissionModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }