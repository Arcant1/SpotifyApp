import { SpotifyService } from './../../services/spotify.service';
import { Component } from '@angular/core';
import { FavManagerService } from '../../services/fav-manager.service';
import { Router } from '@angular/router';

// tslint:disable: no-string-literal

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
  favoritas: any[] = [];
  loading: boolean;
  constructor(private spotify: SpotifyService, private fm: FavManagerService,private _router: Router) {
    
    this.loading = true;
    this.getFavoritas();
    this.loading = false;

    
  }
  getFavoritas(){
    for (let i = 0; i < window.localStorage.length - 1; i++) {
      this.getTrack(window.localStorage.key(i));
    }    
  }
  
  verArtista(item: any) {
    let artistaId;
    if (item.type === 'track') {
      artistaId = item.artists[0].id;
    } else {
      artistaId = item.artists[0].id;
    }
    this._router.navigate([ '/artist', artistaId ]);
  }

  verAlbum(item: any) {
    let albumId;
    if (item.type === 'album') {
      albumId = item.album.id;
    } else {
      albumId = item.album.id;
    }
    this._router.navigate([ '/album', albumId ]);
  }

  getTrack( id: any )  {
    this.spotify.getTrack(id)
                 .subscribe( Tracks => {
                   this.favoritas.push(Tracks);
                 });

  }
}
