import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  @Input() comics: any[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToComics(id: number){
    this.router.navigate(['/comics', id]);
  }

}
