import { MoviesStateStructure, MovieStructure } from "./types";

export const copyMovie = (movie: MovieStructure): MovieStructure => ({
  ...movie,
  genres: [...movie.genres],
});

export const copyMovies = (movies: MovieStructure[]): MovieStructure[] =>
  movies.map((movie) => copyMovie(movie));

export const copyMovieState = (
  movieState: MoviesStateStructure,
): MoviesStateStructure => ({
  movies: copyMovies(movieState.movies),
});
