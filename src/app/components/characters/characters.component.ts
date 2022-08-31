import { Component, OnInit } from '@angular/core';
import { MarvelApiServiceService } from 'src/app/services/marvel-api-service.service';
import { characters } from 'src/app/Models/characters';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  public characterslist: characters[] = [];

  constructor(private api: MarvelApiServiceService) {

   }

  ngOnInit(): void {
    this.getCharacters();
  }

   private async getCharacters(){
    await this.api.getCharacters().then( (res) => {
      res['data']['results'].map( (element: any) => {
        let character = new characters(element)
        character.description == null ? character.description = "No description Available" : character.description; 
        this.characterslist.push(character);
      } )
    })

    console.log(this.characterslist);
  }

}
