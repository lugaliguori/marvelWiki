import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.css']
})
export class CreatorsComponent implements OnInit {

  @Input() creatorList: any[] = []

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  async goToCreator(id:number){
    this.router.navigate(['creators/',id]);

  }

}
