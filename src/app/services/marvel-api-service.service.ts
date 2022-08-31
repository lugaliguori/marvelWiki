import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarvelApiServiceService {

  private baseUrl: string = 'https://gateway.marvel.com/'

  constructor(private http: HttpClient) { 
    console.log('service is up')
  }

  async getCharacters(){
    let url = this.baseUrl + `v1/public/characters?apikey=${environment.publicKeyMarvel}`


      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      });

    return this.http.get(url, {headers: headers}).pipe( 
        map((data): any =>  data)
      ).toPromise()
  }

}
