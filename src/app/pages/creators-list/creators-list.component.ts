import { Component, OnInit } from '@angular/core';
import { MarvelApiServiceService } from 'src/app/services/marvel-api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creators-list',
  templateUrl: './creators-list.component.html',
  styleUrls: ['./creators-list.component.css']
})
export class CreatorsListComponent implements OnInit {

  private offset =  0;

  public creatorsList: any[] =[];

  public distance = 2;

  public activeFilter = false;

  public searchString = ''

  constructor(private router: Router, private api: MarvelApiServiceService) { }

  ngOnInit(): void {
    this.getCreators(this.offset)
  }

  async getCreators(offset: number){
    this.api.getCreatorsList(offset).then( res=> {
      console.log(res);
      res['data']['results'].map( (element: any) => {
        let creator = element;
        creator.image = `${element['thumbnail']['path']}.${element['thumbnail']['extension']}`
        this.creatorsList.push(creator);
      })
    }).catch( err => {
      console.log(err);
    })

  }

  search(event: any){
    if (!this.activeFilter){
      this.offset = 0;
    }
    this.activeFilter = true;
    this.searchString = event.target.value
    this.creatorsList = [];
    this.searchCreator(this.offset, this.searchString)
  }

  async searchCreator(offset: number, string: string){
    this.api.searchCreator(offset,string).then( res=>{
      res['data']['results'].map( (element: any) => {
        let creator = element;
        creator.image = `${element['thumbnail']['path']}.${element['thumbnail']['extension']}`
        this.creatorsList.push(creator);
      })
    }).catch(err => console.log(err))
  }

  onScroll(){
    this.offset += 30;
    if (this.activeFilter){
      this.searchCreator(this.offset, this.searchString);
    }else{
      this.getCreators(this.offset);
    }

  }

}
