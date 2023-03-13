import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [],
})
export class BusquedaComponent {
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  buscar() {
    const valor = this.txtBuscar.nativeElement.value;
    // Controlamos que no esté vacío
    if(valor.trim().length==0){
      return 
    }
    this.gifsService.buscarGifs(valor);

    this.txtBuscar.nativeElement.value = '';
  }
}
