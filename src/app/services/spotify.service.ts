import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
// tslint:disable: max-line-length
// tslint:disable: no-string-literal

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQD1aXeHqJm3laipY7rq1NIxw49zSMS1DwXYyekDnMD8Dwy1R3ZBxlaY_v9d8XqeMcjk_KAxPqs0irah-IfglnInXurABMfFekPuOFLuxp0grg3fMDeW7pj2XQlGPkFP4jTiWx09mXU3BUefJwYUZi9fsQYcjB-eBHsA9A'
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
    return this.getQuery(`artists/${ id }`);
  }

  getTopTracks( id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=ar`).pipe( map ( data => data['tracks']));
  }

  getTrack ( id: string ) {
    return this.getQuery(`tracks/${id}`);
  }

  getAlbumTracks( id: string) {
    return this.getQuery(`albums/${id}/tracks`)
  }

  getAlbum( id: string) {
    return this.getQuery(`albums/${id}`).pipe( map ( data => data));;
  }

  getAlbumes( id: string) {
    return this.getQuery(`artists/${id}/albums?limit=5`).pipe( map (data => data));
  }
}
