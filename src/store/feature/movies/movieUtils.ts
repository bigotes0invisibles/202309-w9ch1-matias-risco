import { MoviesStateStructure, MoviesStructure } from "./types";

export const copyMovie = (movie: MoviesStructure): MoviesStructure => ({
  ...movie,
  genres: [...movie.genres],
});

export const copyMovies = (movies: MoviesStructure[]): MoviesStructure[] =>
  movies.map((movie) => copyMovie(movie));

export const copyMovieState = (
  movieState: MoviesStateStructure,
): MoviesStateStructure => ({
  movies: copyMovies(movieState.movies),
});
