import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import  { HttpClientModule} from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CharactersComponent } from './components/characters/characters.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { CharacterComponent } from './pages/character/character.component';
import { ComicListComponent } from './pages/comic-list/comic-list.component';
import { ComicsComponent } from './components/comics/comics.component';
import { ComicDetailsComponent } from './pages/comic-details/comic-details.component';
import { CreatorsListComponent } from './pages/creators-list/creators-list.component';
import { CreatorsComponent } from './components/creators/creators.component';
import { CreatorDetailComponent } from './pages/creator-detail/creator-detail.component';
import { SeriesListComponent } from './pages/series-list/series-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CharactersComponent,
    CharactersPageComponent,
    CharacterComponent,
    ComicListComponent,
    ComicsComponent,
    ComicDetailsComponent,
    CreatorsListComponent,
    CreatorsComponent,
    CreatorDetailComponent,
    SeriesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
