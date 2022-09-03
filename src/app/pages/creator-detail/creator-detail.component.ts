import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { MarvelApiServiceService } from 'src/app/services/marvel-api-service.service';

@Component({
  selector: 'app-creator-detail',
  templateUrl: './creator-detail.component.html',
  styleUrls: ['./creator-detail.component.css']
})
export class CreatorDetailComponent implements OnInit {

  private creatorId = 0;

  public creator : any ;

  public comics: any[] = [];

  public series: any[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private api: MarvelApiServiceService) { 
    this.route.params.subscribe(data => {
      this.creatorId = data['id']
      this.getCreatorInfo(this.creatorId);
    })
  }

  ngOnInit(): void {
    
  }

  async getCreatorInfo(id: number){
    this.api.getCreator(id).then( (res: any) => {
      this.creator = res['data']['results'][0];
      console.log(this.creator)
      this.creator.image = `${this.creator.thumbnail.path}.${this.creator.thumbnail.extension}`
      this.getCreatorsComics(id);
      this.getCreatorsSeries(id);
    })

  }

  async getCreatorsComics(id: number){
    this.api.getCreatorsComics(id).then( res => {
      res['data']['results'].map( (element:any ) => {
        let serie = element;
        serie.image = `${serie.thumbnail.path}.${serie.thumbnail.extension}`
        serie.role = serie.creators.items.filter( (e:any) => e.name == this.creator.fullName)
        this.comics.push(serie);
      })
    }).catch(err => console.log(err))
  }

  async getCreatorsSeries(id: number){
    this.api.getCreatorsSeries(id).then( res => {
      console.log(res);
      res['data']['results'].map( (element:any ) => {
        let comic = element;
        comic.image = `${comic.thumbnail.path}.${comic.thumbnail.extension}`
        comic.role = comic.creators.items.filter( (e:any) => e.name == this.creator.fullName)
        this.series.push(comic);
      })
    }).catch(err => console.log(err))
  }

  async goToComic(id: number){
    this.router.navigate(['comics/', id]);
  }

}
