import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'printArtist'
})
export class PrintArtistPipe implements PipeTransform {

  transform(artistas: any[]): string {
    let resultado = '';
    if (!artistas) {
      return 'ERROR de !artistas';
    }

    if (artistas.length > 0) {
      resultado = artistas[0].name;
      for ( let i = 1; i < artistas.length; i++) {
        resultado += ', ' + artistas[i].name;
      }
      return resultado;
    } else {
      return 'Arreglo vacío';
    }
  }

}
