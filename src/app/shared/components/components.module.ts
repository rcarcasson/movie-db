import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NowPlayingCarrouselComponent } from './now-playing-carrousel/now-playing-carrousel.component';
import { MovieCardsComponent } from './movie-cards/movie-cards.component';
import { GenreTransformPipe } from '../pipes/genre-transform.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NowPlayingCarrouselComponent,
    MovieCardsComponent,
    GenreTransformPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    NowPlayingCarrouselComponent,
    MovieCardsComponent
  ],
  providers: [
    GenreTransformPipe
  ]
})
export class ComponentsModule { }
