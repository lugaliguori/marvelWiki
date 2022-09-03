import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { NumberValueAccessor } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MarvelApiServiceService {

  private baseUrl: string = 'https://gateway.marvel.com/'

  constructor(private http: HttpClient) { 
    console.log('service is up')
  }

  async getCharacters(offset: number){
    let url = this.baseUrl + `v1/public/characters?limit=30&offset=${offset}&apikey=${environment.publicKeyMarvel}`


      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      });

    return this.http.get(url, {headers: headers}).pipe( 
        map((data): any =>  data)
      ).toPromise()
  }

  async getCharactersByLetter(offset: number, letter: string){
      let url = this.baseUrl + `v1/public/characters?nameStartsWith=${letter}&limit=30&offset=${offset}&apikey=${environment.publicKeyMarvel}`


        let headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        });

      return this.http.get(url, {headers: headers}).pipe( 
          map((data): any =>  data)
        ).toPromise()
  }

  async getCharactersBySearch(string: string){
    let url = this.baseUrl + `v1/public/characters?nameStartsWith=${string}&limit=30&apikey=${environment.publicKeyMarvel}`


      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      });

    return this.http.get(url, {headers: headers}).pipe( 
        map((data): any =>  data)
      ).toPromise()
  }

  async getCharacterInfo(id: number){

      let url = this.baseUrl + `v1/public/characters/${id}?&apikey=${environment.publicKeyMarvel}`

      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      });

    return this.http.get(url, {headers: headers}).pipe( 
        map((data): any =>  data)
      ).toPromise()

  }

    async getCharacterComics(id : number){
      
      let url = this.baseUrl + `v1/public/characters/${id}/comics?limit=10&&apikey=${environment.publicKeyMarvel}`

        let headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        });

      return this.http.get(url, {headers: headers}).pipe( 
          map((data): any =>  data)
        ).toPromise()
    }

    async getCharacterSeries(id : number){
      
      let url = this.baseUrl + `v1/public/characters/${id}/series?limit=10&&apikey=${environment.publicKeyMarvel}`

        let headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        });

      return this.http.get(url, {headers: headers}).pipe( 
          map((data): any =>  data)
        ).toPromise()
    }

    async getAllComics(offset: number){
        let url = this.baseUrl + `v1/public/comics?formatType=comic&limit=30&offset=${offset}&apikey=${environment.publicKeyMarvel}`


        let headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        });

      return this.http.get(url, {headers: headers}).pipe( 
          map((data): any =>  data)
        ).toPromise()

    }

    async getComicsBySearch(string: string){
      let url = this.baseUrl + `v1/public/comics?formatType=comic&titleStartsWith=${string}&limit=30&apikey=${environment.publicKeyMarvel}`
  
  
        let headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        });
  
      return this.http.get(url, {headers: headers}).pipe( 
          map((data): any =>  data)
        ).toPromise()
    }

    async getComicInfo(id: number){

      let url = this.baseUrl + `v1/public/comics/${id}?apikey=${environment.publicKeyMarvel}`
  
  
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      });

      return this.http.get(url, {headers: headers}).pipe( 
          map((data): any =>  data)
      ).toPromise()


    }

    async getCreatorsList(offset: number){

      let url = this.baseUrl + `v1/public/creators?limit=30&offset=${offset}&apikey=${environment.publicKeyMarvel}`
  
  
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      });

      return this.http.get(url, {headers: headers}).pipe( 
          map((data): any =>  data)
      ).toPromise()

    }
    
    async searchCreator(offset: number, string : string){
        let url = this.baseUrl + `v1/public/creators?limit=30&offset=${offset}&nameStartsWith=${string}&apikey=${environment.publicKeyMarvel}`
    
    
        let headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        });

        return this.http.get(url, {headers: headers}).pipe( 
            map((data): any =>  data)
        ).toPromise()
    }

     async getCreator(id: number){
      let url = this.baseUrl + `v1/public/creators/${id}?apikey=${environment.publicKeyMarvel}`
    
    
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      });

      return this.http.get(url, {headers: headers}).pipe( 
          map((data): any =>  data)
      ).toPromise()
     }

     async getCreatorsComics(id: number){
      let url = this.baseUrl + `v1/public/creators/${id}/comics?limit=10&apikey=${environment.publicKeyMarvel}`
    
    
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      });

      return this.http.get(url, {headers: headers}).pipe( 
          map((data): any =>  data)
      ).toPromise()
     }

     async getCreatorsSeries(id: number){
      let url = this.baseUrl + `v1/public/creators/${id}/series?limit=10&apikey=${environment.publicKeyMarvel}`
    
    
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      });

      return this.http.get(url, {headers: headers}).pipe( 
          map((data): any =>  data)
      ).toPromise()
     }

     async getSeriesList(offset: number){
        let url = this.baseUrl + `v1/public/series?limit=30&offset=${offset}&apikey=${environment.publicKeyMarvel}`
    
    
        let headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        });

        return this.http.get(url, {headers: headers}).pipe( 
            map((data): any =>  data)
        ).toPromise()

     }

     async searchSeriesList(string: string){
        let url = this.baseUrl + `v1/public/series?limit=30&titleStartsWith=${string}&apikey=${environment.publicKeyMarvel}`
      
      
          let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          });

          return this.http.get(url, {headers: headers}).pipe( 
              map((data): any =>  data)
          ).toPromise()
     }

}
