import { Component, Input, OnInit, inject } from '@angular/core';
import { MovieInfo, PopularInfo } from '../../interfaces/movie.interface';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';


@Component({
  selector: 'app-movie-cards',
  templateUrl: './movie-cards.component.html',
  styleUrls: ['./movie-cards.component.scss']
})
export class MovieCardsComponent implements OnInit {
  @Input() movies: PopularInfo | undefined;

  public movieInfo: MovieInfo[] | undefined;
  public imageUrl =  environment.IMAGE_URL;
  private router = inject(Router);

  ngOnInit(): void {
    this.movieInfo = this.movies?.results;    
  }

  public goDetails(id: number): void {
    this.router.navigate(['/details', id]);
  }

}
