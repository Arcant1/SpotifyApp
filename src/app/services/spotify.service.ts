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
      Authorization: 'Bearer BQANfD-_vGlKTtoU4kBo8siDhhcX9j3-QNcNMvo_J62vdSSKDGpujpGc7S2o5PCgwsUPBqGb5s7YK5EZzDYfV8gCQ8Z9P4NjtmrEjzRc6Z1eT84Ghi7QPEy0wHa_cfEyOw5O2uoQP2ByjdGZ1HT3Q6StByA0JptSwIwmFw'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery(`browse/new-releases`).pipe(map(data => data['albums'].items));
  }

  getArtista(termino: string) {
    return this.getQuery(`search?q=${ termino }&type=artist`).pipe(map(data => data['artists'].items));
  }

}
