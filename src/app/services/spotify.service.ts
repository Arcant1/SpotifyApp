import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// tslint:disable: max-line-length

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('-- Spotify service ready --');
   }


  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQA8D1HhPoEQbg9X08VD30TcRNMxg82ndjXemHDfuPFxjQI1F7wMGWGMTh5otB6J9nxyngP6dtGOvHw5W_R_3-PtDChd229I16fHYtiw64lpKOy_hBYuGWFQ2SIeMb0s6_NuFOELDTCSlny3WAJCvHFEFsOcTm_LuwOzjA'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }
}
