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
      Authorization: 'Bearer BQCWCc5vTZ8D4Uy53KmZI2B05xKV8lLGCmDx6KHLbC7C0KNOq8Qpow1xAHRjif0f-pL5UgMsKkH8wb9XXhcPyw9eCmvUJSKqeLth9NZb1tCfVQggV4Nl3oxJ3j5XYEf6HE7TC_XwSlZTgSgQIaR-0Q1AMP8lzUR4H77kng'
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
    return this.getQuery(`artists/${id}/top-tracks?country=ar`);
  }

}
