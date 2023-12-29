import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NOW_PLAYING_MOCK } from '../mocks/now-playing.mock';
import { NowPlayingInfo } from '../interfaces/movie.interface';
import { POPULAR_MOVIES_MOCK } from '../mocks/popular.mock';
import { Genres } from '../interfaces/genres.interface';
import { MovieDetails } from '../interfaces/details.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieServices {
  private http = inject(HttpClient);

  constructor() { }

  public getPopularMovies(): Observable<any> {
    return of(POPULAR_MOVIES_MOCK);
    // const url = `${environment.BASE_URL}movie/popular?language=es-CL&api_key=${environment.API_KEY}&page=1`;
    // return this.http.get(url);
  }

  public getNowPlayingMovies(): Observable<NowPlayingInfo> {
    return of(NOW_PLAYING_MOCK);
    // const url = `${environment.BASE_URL}movie/now_playing?language=es-CL&api_key=${environment.API_KEY}&page=1`;
    // return this.http.get<NowPlayingInfo>(url);
  }

  public getMovieGenres(): Observable<Genres> {
    const url = `${environment.BASE_URL}genre/movie/list?language=es&api_key=${environment.API_KEY}&page=1`;
    return this.http.get<Genres>(url);
  }

  public getMovieDetails(id: number): Observable<MovieDetails> {
    const url = `${environment.BASE_URL}movie/${id}?language=es-CL&api_key=${environment.API_KEY}&append_to_response=credits`;
    return this.http.get<MovieDetails>(url);
  }
}
