import { Component, OnInit } from '@angular/core';
import { GifsModule } from '../../gifs/gifs.module';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent   {
  
  get historial (){
    return this.gifsService.historial
  }

  constructor(private gifsService:GifsService) {

  }

  buscar(query:string){
    this.gifsService.buscarGifs(query)
  }

  
}
