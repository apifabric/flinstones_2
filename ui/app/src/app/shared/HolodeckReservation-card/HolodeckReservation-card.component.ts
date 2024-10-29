import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './HolodeckReservation-card.component.html',
  styleUrls: ['./HolodeckReservation-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.HolodeckReservation-card]': 'true'
  }
})

export class HolodeckReservationCardComponent {


}