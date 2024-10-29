import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Starship-card.component.html',
  styleUrls: ['./Starship-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Starship-card]': 'true'
  }
})

export class StarshipCardComponent {


}