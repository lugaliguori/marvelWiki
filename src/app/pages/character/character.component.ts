import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarvelApiServiceService } from 'src/app/services/marvel-api-service.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  public character: any;

  public comics: any[] = [];

  public series: any[] = [];

  constructor(private route: ActivatedRoute, private api: MarvelApiServiceService, private router: Router) {

   }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getInfo(params['id'])
    });
  }

  async getInfo(id: number){
    this.api.getCharacterInfo(id).then( res => {
      this.character = res['data']['results'][0]
      this.character.image = `${this.character['thumbnail']['path']}.${this.character['thumbnail']['extension']}`
      this.getCharactersComics(id)
      this.getCharacterSeries(id)
    }).catch(err => {
      console.log(err);
    })
  }

  async getCharactersComics(id: number){
    this.api.getCharacterComics(id).then( res => {
      console.log(res);
      this.comics = res['data']['results'].map((element: any) => {
          let comic = element;
          comic.image = `${element['images'][0]['path']}.${element['images'][0]['extension']}`
          comic.writer = element['creators']['items'].filter( (e:any) => e.role === 'writer');
          comic.cover = element['creators']['items'].filter( (e:any) => e.role.includes('cover'));
          return comic;
        })
      })
  }

  async getCharacterSeries(id: number){
    this.api.getCharacterSeries(id).then( res => {
      this.series = res['data']['results'].map((element: any) => {
          let serie = element;
              serie.image = `${element['thumbnail']['path']}.${element['thumbnail']['extension']}`
              serie.type == '' ? serie.type = 'N/A' : serie.type 
              serie.rating == '' ? serie.rating = 'N/A' : serie.rating 
          return serie;
        })
      })
  }

  async goToComic(id: number){
    this.router.navigate(['comics/', id]);
  }

}
