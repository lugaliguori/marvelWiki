import { Component, OnInit } from '@angular/core';
import { MarvelApiServiceService } from 'src/app/services/marvel-api-service.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.css']
})
export class ComicListComponent implements OnInit {

  public comicsList: any[] = [];

  public distance = 2

  public offset = 0;

  public total = 0

  public activeFilter: boolean = false;

  constructor(private api: MarvelApiServiceService) { }

  ngOnInit(): void {
    this.getComics(this.offset);
  }

  async getComics(offset: number){
    this.api.getAllComics(offset).then( res=> {
      this.total = res['data'].total;
      res['data']['results'].map( (element:any) => {
        let comic = element;
        comic.image = `${comic.thumbnail.path}.${comic.thumbnail.extension}`
        if ( comic.creators.items[0]){
          comic.author = comic.creators.items[0].name
        }else{
          comic.author = 'N/A' 
        }
        if ( comic.creators.items[1]){
          comic.cover = comic.creators.items[1].name
        }else{
          comic.cover = 'N/A' 
        }
        
        this.comicsList.push(element);
      })
    })
  }

  onScroll(){
    if (this.comicsList.length > this.total){
      return
    }else if (this.activeFilter == false){
      this.offset += 30; 
      this.getComics(this.offset);
    }
    
  }

  public search(event: any){
    if (event.target.value.length > 0 ){
      this.activeFilter = true;
      this.api.getComicsBySearch(event.target.value).then( res=> {
        this.comicsList = [];
        res['data']['results'].map( (element: any) => {
          let comic = (element)
          comic.image = `${comic.thumbnail.path}.${comic.thumbnail.extension}`
          if ( comic.creators.items[0]){
            comic.author = comic.creators.items[0].name
          }else{
            comic.author = 'N/A' 
          }
          if ( comic.creators.items[1]){
            comic.cover = comic.creators.items[1].name
          }else{
            comic.cover = 'N/A' 
          }
          
          this.comicsList.push(element);
        })
      }).catch(err => {
        console.log(err);
      })
    }else{
      this.activeFilter = false;
    }
  }

  orderBy(int: number ){
    switch (int){
      case 1:
        this.comicsList.sort((a,b) => (a.title > b.title) ? 1 : -1)
        break;
      case 2:
        this.comicsList.sort((a,b) => (a.title > b.title) ? 1 : -1).reverse();
        break;
      case 3:
        this.comicsList.sort((a,b) => (a.prices[0].price > b.prices[0].price) ? 1 : -1)
        break;
      case 4:
        this.comicsList.sort((a,b) => (a.prices[0].price > b.prices[0].price) ? 1 : -1).reverse();
        break;  
    }
  }

}
