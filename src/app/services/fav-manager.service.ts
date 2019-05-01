import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavManagerService {
  favArray: any[] = [];
  constructor() { 
    for (let i = 0; i < window.localStorage.length-1; i++) {
      this.favArray.push(window.localStorage.key[i]);    
    }
  }
}
