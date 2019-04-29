import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toMinutes'
})
export class ToMinutesPipe implements PipeTransform {

  transform(tiempo: number): string {
    let segundosTotales: number = tiempo/ 1000;
    let minutos: number = Math.floor(segundosTotales/ 60);
    let segundos: number = Math.floor((segundosTotales / 60 - Math.floor(segundosTotales / 60)) * 60);
    return `${minutos} : ${(segundos > 10) ? segundos : '0' + segundos}`;
  }

}
