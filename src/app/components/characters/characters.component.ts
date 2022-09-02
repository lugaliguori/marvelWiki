import { Component, Input, OnInit } from '@angular/core';
import { characters } from 'src/app/Models/characters';
import { Router } from '@angular/router';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  @Input() characterslist: characters[] = [];

  constructor(private router: Router) {

   }

  ngOnInit(): void {
  }

  goToCharacter(id: number){
    this.router.navigate(['/characters', id]);
  }

}
