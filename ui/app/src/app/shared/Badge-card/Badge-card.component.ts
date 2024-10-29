import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Badge-card.component.html',
  styleUrls: ['./Badge-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Badge-card]': 'true'
  }
})

export class BadgeCardComponent {


}