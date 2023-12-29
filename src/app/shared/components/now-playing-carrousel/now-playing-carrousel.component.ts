import { Component, Input, OnInit } from '@angular/core';
import { MovieInfo, NowPlayingInfo } from '../../interfaces/movie.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-now-playing-carrousel',
  templateUrl: './now-playing-carrousel.component.html',
  styleUrls: ['./now-playing-carrousel.component.scss']
})
export class NowPlayingCarrouselComponent implements OnInit {
  @Input() nowPlayingInfo: NowPlayingInfo | undefined;

  public movieInfo: MovieInfo[] | undefined;
  public imageUrl = environment.IMAGE_URL;

  ngOnInit(): void {
    this.movieInfo = this.nowPlayingInfo?.results;
  }

}
