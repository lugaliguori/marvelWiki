import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarvelApiServiceService } from 'src/app/services/marvel-api-service.service';

@Component({
  selector: 'app-comic-details',
  templateUrl: './comic-details.component.html',
  styleUrls: ['./comic-details.component.css']
})
export class ComicDetailsComponent implements OnInit {

  private comicId: number = 0;

  public comicInfo: any;

  constructor(private route: ActivatedRoute, private router: Router, private api: MarvelApiServiceService) { 
    this.route.params.subscribe( param => {
      this.comicId = param['id']
    })
  }

  ngOnInit(): void {
    this.getComicInfo(this.comicId)
  }

  async getComicInfo(id: number){
    this.api.getComicInfo(id).then( res => {
      this.comicInfo = res['data']['results'][0];
      this.comicInfo['image'] = `${this.comicInfo['thumbnail'].path}.${this.comicInfo['thumbnail'].extension} `
      console.log(this.comicInfo);
      this.comicInfo.creator = this.comicInfo.creators.items
    })
  }

  
  async goToCharacter(url: string){
    let id = url.split('/');
    this.router.navigate(['characters/', id[id.length -1]])
  }
  
  async goToCreators(url: string){
    let id = url.split('/');
    this.router.navigate(['creators/', id[id.length -1]])
  }  
    

}
