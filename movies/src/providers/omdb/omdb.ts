import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the OmdbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  CREAMOS EL PROVIDER OMDB E IMPLEMENTAMOS EL METODO SEARCH MOVIE
*/
@Injectable()
export class OmdbProvider {
  private key: string;
  private url: string;
  // Inyectar una dependencia se llama http y es de tipo HttpClient
  //me va a permitir hacer peticiones get y post la inyeccion de httpclient
  constructor(public http: HttpClient) {
    this.key = '4b750745';
    this.url = 'http://www.omdbapi.com/'
  }

  public searchMovie(title: string): any {
    // params: QueryParams
    //va a buscar la pelicula
    //any dice uqe puede devolver cualquier cosa
    return this.http.get(this.url, {
      params: {
        apiKey: this.key, 
        t: title
      }
    });
  }
}
