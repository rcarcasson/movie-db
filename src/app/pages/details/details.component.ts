import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetails } from 'src/app/shared/interfaces/details.interface';
import { MOVIE_DETAILS } from 'src/app/shared/mocks/details.mock';
import { FooterProvider } from 'src/app/shared/providers/footer.provider';
import { MovieServices } from 'src/app/shared/services/movie-services.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public detail: MovieDetails = MOVIE_DETAILS;
  public imageUrl = environment.IMAGE_URL;
  public loading = false;

  private route = inject(ActivatedRoute);
  private movieServices = inject(MovieServices);
  private footerProvider = inject(FooterProvider);

  constructor() {
    this.route.params.subscribe((p: any) => {
      this.loading = true;
      const { id } = p;
      this.getDetails(id);
    });
  }

  ngOnInit(): void {
    this.footerProvider.showFooter();
  }

  private getDetails(id: number): void {
    this.movieServices.getMovieDetails(id).subscribe((data: MovieDetails) => {
      this.detail = data;
      this.loading = false;
    });
  }

}
