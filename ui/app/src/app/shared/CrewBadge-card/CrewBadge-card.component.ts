import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './CrewBadge-card.component.html',
  styleUrls: ['./CrewBadge-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.CrewBadge-card]': 'true'
  }
})

export class CrewBadgeCardComponent {


}