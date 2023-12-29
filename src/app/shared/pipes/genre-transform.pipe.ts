import { Pipe, PipeTransform, inject } from '@angular/core';
import { GenresProvider } from '../providers/genres.provider';

@Pipe({
  name: 'genreTransform'
})
export class GenreTransformPipe implements PipeTransform {

  private genresProvider = inject(GenresProvider);

  transform(value: number): string {
    return this.genresProvider.getGenres().genres.find((genre) => genre.id === value)?.name || '';
  }

}
