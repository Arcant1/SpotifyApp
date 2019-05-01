import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent  {
  url: string;
  loading: boolean;
  album: any[] = [];
  nombreAlbum: string;
  artista: string;
  imgUrl: string;
  constructor(private sp:SpotifyService,private _route: ActivatedRoute,) { 
    this._route.params.subscribe( params => {
      this.getAlbum(params.id);
    } );
  }

  getAlbum(id: string){
    this.sp.getAlbum(id).subscribe(data => {
       this.artista = data['artists'][0].name;
       this.album = data['tracks']['items'];
       this.nombreAlbum = data['name'];
       this.url = data['external_urls'].spotify;
       this.imgUrl = data['images'][0]['url'];
      });
  }



  addFav(name: string, id: string ): void {
    if (window.localStorage.getItem(name) !== id) {
      window.localStorage.setItem(name, id);
    } else {
      window.localStorage.removeItem(name);
    }
  }

  isFav(name: string, id: string): boolean {
    return (window.localStorage.getItem(name) === id);
  }


}
