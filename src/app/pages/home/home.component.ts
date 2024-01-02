import { Component, OnInit, inject } from '@angular/core';
import { NowPlayingInfo, PopularInfo } from 'src/app/shared/interfaces/movie.interface';
import { FooterProvider } from 'src/app/shared/providers/footer.provider';
import { GenresProvider } from 'src/app/shared/providers/genres.provider';
import { MovieServices } from 'src/app/shared/services/movie-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public nowPlayingInfo: NowPlayingInfo | undefined;
  public popularMovies: PopularInfo | undefined;
  public loading = false;

  private movieServices = inject(MovieServices);
  private genresProvider = inject(GenresProvider);
  private footerProvider = inject(FooterProvider);

  constructor() { }

  ngOnInit(): void {
    this.footerProvider.showFooter();
    this.loading = true;
    this.loadGenres();
    this.loadData();
  }

  private loadGenres(): void {
    this.movieServices.getMovieGenres().subscribe((data) => {
      this.genresProvider.setGenres(data);
    });
  }

  private loadData(): void {
    this.movieServices.getNowPlayingMovies().subscribe((data) => {
      this.nowPlayingInfo = data;
    });
    
    this.movieServices.getPopularMovies().subscribe((data) => {
      console.log(data);
      this.popularMovies = data;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    });
  }

}
