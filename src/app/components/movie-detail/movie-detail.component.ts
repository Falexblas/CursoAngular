import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { CategoryService } from '../../services/category.service';
import { FavoritesService } from '../../services/favorites.service';
import { AuthService } from '../../services/auth.service';
import { Movie } from '../../models/movie';
import { Category } from '../../models/category';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie | null = null;
  categories: Category[] = [];
  isLoggedIn = false;
  isFavorite = false;
  userName = '';

 private movieService = inject(MovieService);
  private favoritesService = inject(FavoritesService);
  private authService = inject(AuthService);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      if (id) {
        this.movieService.getMovieById(id).subscribe(movie => {
          this.movie = movie || null;
          if (this.movie && this.userName) {
            this.isFavorite = this.favoritesService.isFavorite(this.userName, this.movie.id);
          }
        });
      } else {
        this.movie = null;
      }
    });

    this.authService.isLoggedIn$.subscribe(logged => this.isLoggedIn = logged);
    this.authService.userName$.subscribe(name => this.userName = name);
  }

  toggleFavorite() {
    if (!this.movie || !this.userName) return;
    if (this.isFavorite) {
      this.favoritesService.removeFavorite(this.userName, this.movie.id);
    } else {
      this.favoritesService.addFavorite(this.userName, this.movie);
    }
    this.isFavorite = !this.isFavorite;
  }
}