import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './pages/character/character.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { ComicDetailsComponent } from './pages/comic-details/comic-details.component';
import { ComicListComponent } from './pages/comic-list/comic-list.component';
import { CreatorsListComponent } from './pages/creators-list/creators-list.component';

const routes: Routes = [
  {path: 'characters', component: CharactersPageComponent},
  {path: 'characters/:id', component: CharacterComponent},
  {path: 'comics', component: ComicListComponent},
  {path: 'comics/:id', component: ComicDetailsComponent},
  {path: 'creators', component: CreatorsListComponent},
  {path: '', redirectTo: 'comics', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
