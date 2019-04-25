import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// tslint:disable: no-string-literal

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  nuevasCanciones: any [] = [];
  constructor(private spotify: SpotifyService) {
    this.spotify.getNewReleases()
                .subscribe( (data): any => {
                  this.nuevasCanciones = data;
                  console.log(this.nuevasCanciones);
                });
  }

  ngOnInit() {
  }

}
