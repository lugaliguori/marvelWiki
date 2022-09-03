import { Component, OnInit } from '@angular/core';
import { MarvelApiServiceService } from 'src/app/services/marvel-api-service.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {

  public seriesList: any[] = [];

  private offset = 0;


  constructor(private api: MarvelApiServiceService) { }

  ngOnInit(): void {
    this.getSeries();
  }
  
  async getSeries(){
    this.api.getSeriesList(this.offset).then( res => {
      this.seriesList = res['data']['results'].map(( element:any) => {
        let serie = element;
        serie.image = `${element.thumbnail.path}.${element.thumbnail.extension}`
        serie.writer = element.creators.items.filter( (e:any) => e.role === 'writer')
        return element;
      })
      console.log(this.seriesList);
    }).catch(err=> console.log(err))
  }

  async search(event: any){
    this.api.searchSeriesList(event.target.value).then(res => {
      this.seriesList = [];
      this.seriesList = res['data']['results'].map( (element:any) => {
        let serie = element;
        serie.image = `${element.thumbnail.path}.${element.thumbnail.extension}`
        serie.writer = element.creators.items.filter( (e:any) => e.role === 'writer')
        return element;
      })
    })
  }

}
