import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import { animate, state, transition, trigger, style, keyframes } from '@angular/animations';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.scss'],
  animations: [
    trigger('show', [
        transition(':enter', [
            style({ opacity: 0 }),
            animate(200, style({ opacity: 1 }))
        ]),
        transition(':leave', [
            style({ opacity: 1 }),
            animate(300, style({ opacity: 0 }))
        ])
    ])
  ]

})
export class TarjetasComponent {
  @Input() items: any[] = [];
  constructor(private _router: Router) {

  }

  verArtista(item: any) {
    let artistaId;
    if (item.type === 'artist') {
      artistaId = item.id;
    } else {
      artistaId = item.artists[0].id;
    }
    this._router.navigate([ '/artist', artistaId ]);
  }
}
