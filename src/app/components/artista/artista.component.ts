import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.scss']
})
export class ArtistaComponent  {

  artista: any;
  albumes: any[][] = []; // albunes[disco][tema]
  loading: boolean;
  external_url: string;
  imgurl: any[] = [];
  nombreArtista: string;
  alb: any;

  constructor(private _route: ActivatedRoute, private sp: SpotifyService) {
    this.loading = true;
    this._route.params.subscribe( params => {
      this.getArtista(params.id);  // id del album
      this.getAlbumes(params.id);
      this.loading = false;
    });
   }

   getAlbumes(id: string){
      this.sp.getAlbumes(id).subscribe( data => {
        this.alb = data['items'];
        console.log(this.alb);
        for (let i = 0; i < data['items'].length; i++) {
          this.sp.getAlbumTracks(data['items'][i].id).subscribe( data2 =>{
            this.albumes[i] = data2['items'];
          }) 
        }
        console.log("Album");
        console.log(this.albumes);
      })
    }
   
   getArtista(id: string) {
    this.sp.getArtista(id).subscribe(data => {
      this.artista = data;
      this.external_url = data['external_urls'].spotify;
      this.imgurl = data['images'];
      this.nombreArtista = data['name'];
      console.log("ARTISTA")
      console.log(data);
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
