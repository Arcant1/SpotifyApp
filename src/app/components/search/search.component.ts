import { SpotifyService } from './../../services/spotify.service';
import { Component  } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent  {

  artistas: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) {
  }

  buscar(termino: string) {
    this.loading = true;
    this.spotify.getArtistas(termino).subscribe((data): any => {
      this.artistas = data;
      this.loading = false;
      });
  }

}
