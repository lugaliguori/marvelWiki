import { Component, OnInit } from '@angular/core';
import { MarvelApiServiceService } from 'src/app/services/marvel-api-service.service';
import { map } from 'rxjs/operators';

import { characters } from 'src/app/Models/characters';




@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.css']
})
export class CharactersPageComponent implements OnInit {

  public characterslist: characters[] = [];

  public distance = 1;

  public offset = 0;

  public activeFilter = false;

  public filter: string = '';

  public total = 0;

  constructor(private api: MarvelApiServiceService) { }

  ngOnInit() {
    this.getCharacters(this.offset);
  }

  private async getCharacters(offset: number){
    await this.api.getCharacters(offset).then( (res) => {
        this.total =  res['data']['total'];
        res['data']['results'].map( (element: any) => {
        let character = new characters(element)
        character.description == null ? character.description = "No description Available" : character.description; 
        this.characterslist.push(character)
      } )
    }).catch(err => {
      console.log(err);
    })
  }

  onScroll(){
    if (this.characterslist.length > this.total){
      return
    }else{
      this.offset += 30; 
      if (this.activeFilter){
        this.searchByLetter(this.filter);
      }else{
        this.getCharacters(this.offset);
      }
    }
    
  }

  public searchByLetter(letter: string){
      if ( this.activeFilter == false){
          this.activeFilter = true;
          this.offset = 0;
          this.characterslist = [];
          this.filter = letter;
      }
      if (this.filter != letter){
        this.characterslist = [];
        this.offset = 0;
      }
      this.api.getCharactersByLetter(this.offset, letter).then( res => {
        this.total =  res['data']['total'];
        res['data']['results'].map( (element: any) => {
          let character = new characters(element)
          character.description == null ? character.description = "No description Available" : character.description; 
          this.characterslist.push(character)
        } )
      }).catch(err => {
        console.log(err);
      })
  }

  public search(event: any){
    if (event.target.value.length > 0 ){
      this.filter = event.target.value;
      this.activeFilter = true;
      this.api.getCharactersBySearch(event.target.value).then( res=> {
        this.characterslist = res['data']['results'].map( (element: any) => {
          let character = new characters(element)
          character.description == null ? character.description = "No description Available" : character.description; 
          return character;
        })
      }).catch(err => {
        console.log(err);
      })
    }
  }

}
