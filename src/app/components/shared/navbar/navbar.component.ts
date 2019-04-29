import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

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
