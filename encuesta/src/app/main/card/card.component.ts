import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() route: string = '';
  @Input() url: string = '';
  @Input() is_mobile: boolean | null = false;

  constructor( private router: Router) {}

  goTo() {
    if ( this.url ) {
      this.router.navigate([this.url]);
    }
  }

}
