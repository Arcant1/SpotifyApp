import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
// tslint:disable: max-line-length
// tslint:disable: no-string-literal

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('-- Spotify service ready --');
   }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDVtWmNLL5j-sdSf_yInpfu-Zyn7S-7d12k3jR2JhIxv3sYlJIZqX413nvgY01nY4VceU23OFzz5Y1h2aZqU9pA2_g6otA8lmM59kC-6FbBqvGbTEW1Uh-tG54SOQSPwxVMvQ-Uzt0pcOocB4r7X5MdVLc-eoVaeanMJw'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery(`browse/new-releases`).pipe(map(data => data['albums'].items));
  }

  getArtistas(termino: string) {
    return this.getQuery(`search?q=${ termino }&type=artist`).pipe(map(data => data['artists'].items));
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${ id }`); // .pipe(map(data => console.log(data)));
  }

  getTopTracks( id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=ar`).pipe( map ( data => data['tracks']));
  }

}
