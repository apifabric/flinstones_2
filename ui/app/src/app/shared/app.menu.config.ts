import { MenuRootItem } from 'ontimize-web-ngx';

import { BadgeCardComponent } from './Badge-card/Badge-card.component';

import { CrewBadgeCardComponent } from './CrewBadge-card/CrewBadge-card.component';

import { CrewMemberCardComponent } from './CrewMember-card/CrewMember-card.component';

import { DestinationCardComponent } from './Destination-card/Destination-card.component';

import { EquipmentCardComponent } from './Equipment-card/Equipment-card.component';

import { HolodeckReservationCardComponent } from './HolodeckReservation-card/HolodeckReservation-card.component';

import { LogEntryCardComponent } from './LogEntry-card/LogEntry-card.component';

import { MissionCardComponent } from './Mission-card/Mission-card.component';

import { ReservationCardComponent } from './Reservation-card/Reservation-card.component';

import { StarshipCardComponent } from './Starship-card/Starship-card.component';

import { SupplyCardComponent } from './Supply-card/Supply-card.component';

import { TransmissionCardComponent } from './Transmission-card/Transmission-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Badge', name: 'BADGE', icon: 'view_list', route: '/main/Badge' }
    
        ,{ id: 'CrewBadge', name: 'CREWBADGE', icon: 'view_list', route: '/main/CrewBadge' }
    
        ,{ id: 'CrewMember', name: 'CREWMEMBER', icon: 'view_list', route: '/main/CrewMember' }
    
        ,{ id: 'Destination', name: 'DESTINATION', icon: 'view_list', route: '/main/Destination' }
    
        ,{ id: 'Equipment', name: 'EQUIPMENT', icon: 'view_list', route: '/main/Equipment' }
    
        ,{ id: 'HolodeckReservation', name: 'HOLODECKRESERVATION', icon: 'view_list', route: '/main/HolodeckReservation' }
    
        ,{ id: 'LogEntry', name: 'LOGENTRY', icon: 'view_list', route: '/main/LogEntry' }
    
        ,{ id: 'Mission', name: 'MISSION', icon: 'view_list', route: '/main/Mission' }
    
        ,{ id: 'Reservation', name: 'RESERVATION', icon: 'view_list', route: '/main/Reservation' }
    
        ,{ id: 'Starship', name: 'STARSHIP', icon: 'view_list', route: '/main/Starship' }
    
        ,{ id: 'Supply', name: 'SUPPLY', icon: 'view_list', route: '/main/Supply' }
    
        ,{ id: 'Transmission', name: 'TRANSMISSION', icon: 'view_list', route: '/main/Transmission' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    BadgeCardComponent

    ,CrewBadgeCardComponent

    ,CrewMemberCardComponent

    ,DestinationCardComponent

    ,EquipmentCardComponent

    ,HolodeckReservationCardComponent

    ,LogEntryCardComponent

    ,MissionCardComponent

    ,ReservationCardComponent

    ,StarshipCardComponent

    ,SupplyCardComponent

    ,TransmissionCardComponent

];