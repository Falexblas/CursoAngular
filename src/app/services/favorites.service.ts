import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  private userFavorites: { [user: string]: Movie[] } = {};

  getFavorites(user: string): Movie[] {
    return this.userFavorites[user] || [];
  }

  addFavorite(user: string, movie: Movie) {
    if (!this.userFavorites[user]) this.userFavorites[user] = [];
    if (!this.userFavorites[user].find(m => m.id === movie.id)) {
      this.userFavorites[user].push(movie);
    }
  }

  removeFavorite(user: string, movieId: number) {
    if (!this.userFavorites[user]) return;
    this.userFavorites[user] = this.userFavorites[user].filter(m => m.id !== movieId);
  }

  isFavorite(user: string, movieId: number): boolean {
    return !!this.userFavorites[user]?.some(m => m.id === movieId);
  }
}