import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  // Datos de muestra (en una aplicación real, estos vendrían de una API)
  private movies: Movie[] = [
    {
      id: 1,
      title: 'El Padrino',
      description: 'Don Vito Corleone, el respetado y temido jefe de una de las cinco familias de la mafia de Nueva York.',
      posterUrl: 'https://m.media-amazon.com/images/S/pv-target-images/dfdb14a922a0e909148038ae1b97a916581f00320b14a3a7b2f786c32c288342.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=UaVTIH8mujA',
      year: 1972,
      duration: '2h 55m',
      categories: [1, 2], // Drama, Crimen
      rating: 9.2
    },
    {
      id: 2,
      title: 'Interestelar',
      description: 'Un grupo de exploradores utilizan un agujero de gusano recién descubierto para superar las limitaciones de los viajes espaciales.',
      posterUrl: 'https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=zSWdZVtXT7E',
      year: 2014,
      duration: '2h 49m',
      categories: [3, 4], // Ciencia ficción, Aventura
      rating: 8.6
    },
    {
      id: 3,
      title: 'El Caballero Oscuro',
      description: 'Batman se enfrenta a la mayor amenaza psicológica contra la ciudad de Gotham: el Joker.',
      posterUrl: 'https://www.aceprensa.com/wp-content/uploads/2012/07/49026-0.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=EXeTwQWrcwY',
      year: 2008,
      duration: '2h 32m',
      categories: [2, 4, 5], // Crimen, Aventura, Acción
      rating: 9.0
    },
    {
      id: 4,
      title: 'Titanic',
      description: 'Las vidas de dos mafiosos, un boxeador, la esposa de un gángster y un par de bandidos se entrelazan en cuatro historias de violencia y redención.',
      posterUrl: 'https://es.web.img3.acsta.net/medias/nmedia/18/86/91/41/19870073.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=kVrqfYjkTdQ',
      year: 1994,
      duration: '2h 34m',
      categories: [8, 1], // Crimen, Drama
      rating: 9.9
    },
    {
      id: 5,
      title: 'Matrix',
      description: 'Un hacker descubre que lo que conocemos como realidad es parte de una simulación computacional.',
      posterUrl: 'https://m.media-amazon.com/images/M/MV5BNGE1YzI4NzMtZTUxNi00Y2I5LTg2MmQtODE0NThmYTFmMDk0XkEyXkFqcGc@._V1_.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=vKQi3bBA1y8',
      year: 1999,
      duration: '2h 16m',
      categories: [3, 5], // Ciencia ficción, Acción
      rating: 8.7
    },
    {
      id: 6,
      title: 'Spiderman',
      description: 'Un ladrón especializado en el robo de secretos corporativos a través de la tecnología de compartir sueños.',
      posterUrl: 'https://conocedores.com/wp-content/uploads/2021/12/Spider-Man-3-No-Way-Home-Poster-scaled.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=JfVOs4VSpmA',
      year: 2010,
      duration: '2h 28m',
      categories: [3, 5, 4], // Ciencia ficción, Acción, Aventura
      rating: 8.8
    }
  ];

  constructor() { }

  getAllMovies(): Observable<Movie[]> {
    return of(this.movies);
  }

  getMovieById(id: number): Observable<Movie | undefined> {
    const movie = this.movies.find(m => m.id === id);
    return of(movie);
  }

  getMoviesByCategory(categoryId: number): Observable<Movie[]> {
    const filteredMovies = this.movies.filter(
      movie => movie.categories.includes(categoryId)
    );
    return of(filteredMovies);
  }
  searchMovies(query: string): Observable<Movie[]> {
  const lowerQuery = query.toLowerCase();
  const filtered = this.movies.filter(movie =>
    movie.title.toLowerCase().includes(lowerQuery) ||
    movie.description.toLowerCase().includes(lowerQuery)
  );
  return of(filtered);
}

}