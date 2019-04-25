import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private spotify: SpotifyService) { }

  artistas: any[] = [];

  ngOnInit() {
  }

  buscar(termino: string) {
    this.spotify.getArtista(termino)
        .subscribe((data): any => { console.log(data);
                                    this.artistas = data; });
  }

}
