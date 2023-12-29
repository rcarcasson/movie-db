import { Injectable } from "@angular/core";
import { Genres } from "../interfaces/genres.interface";


@Injectable({
    providedIn: 'root'
})
export class GenresProvider {

    private genres!: Genres;

    public setGenres(genres: Genres): void {
        this.genres = genres;
    }

    public getGenres(): Genres {
        return this.genres;
    }
}