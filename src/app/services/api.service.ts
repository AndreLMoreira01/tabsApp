import { Injectable } from '@angular/core';
//foi colocada aqui
//importante
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

//para integrar a api
  private url = 'https://api.hgbrasil.com/weather?woeid=438947';

  constructor(private http: HttpClient) { }

  buscarPrevisao() {
    return this.http.get(this.url);
  }
}
