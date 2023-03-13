import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Images, Gif } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey: string = 'rzHStqe6MyPE03UbCx4ngYV89t12hLXt';
  private url: string = 'https://api.giphy.com/v1/gifs';
  private limit: number = 10;
  private _historial: string[] = [];
  // TODO:Cambiar tipado
  public resultados: Gif[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {
    // if(localStorage.getItem('historial')){
    //   this._historial=JSON.parse(localStorage.getItem('historial')!)
    // }

    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  buscarGifs(query: string) {
    query = query.trim().toLocaleLowerCase();
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 9);
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('url', this.url)
      .set('q', query)
      .set('limit', this.limit.toString());
    this.http
      .get<SearchGifsResponse>(
        `${this.url}/search`,{params}
      )
      .subscribe((response) => {
        
        this.resultados = response.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      });

   ;
  }
}
