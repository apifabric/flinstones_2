import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Transmission-card.component.html',
  styleUrls: ['./Transmission-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Transmission-card]': 'true'
  }
})

export class TransmissionCardComponent {


}