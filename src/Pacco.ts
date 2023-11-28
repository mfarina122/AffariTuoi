import { Component } from '@angular/core';

@Component({
  selector: 'pacco-component',
  template: '',
  standalone: true,
})
export class Pacco {
  numero: number;
  importo: string;
  regione: string;
  isRed: boolean;
  constructor(
    importo: string,
    numero: number,
    regione: string,
    isRed: boolean
  ) {
    this.numero = numero;
    this.importo = importo;
    this.regione = regione;
    this.isRed = isRed;
  }
}
