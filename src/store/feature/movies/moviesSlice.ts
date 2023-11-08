import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MoviesStateStructure, MoviesStructure } from "./types";
import { copyMovie, copyMovies } from "./movieUtils";

const initialMoviesState: MoviesStateStructure = {
  movies: [],
};

const moviesSlice = createSlice({
  name: "moviesState",
  initialState: initialMoviesState,
  reducers: {
    loadMovies: (
      currentState,
      action: PayloadAction<MoviesStructure[]>,
    ): MoviesStateStructure => ({
      ...currentState,
      movies: copyMovies(action.payload),
    }),

    toggleWatchMovie: (currentState, action: PayloadAction<number>) => ({
      ...currentState,
      movies: currentState.movies.map((movie) => ({
        ...copyMovie(movie),
        watched: movie.id === action.payload ? !movie.watched : movie.watched,
      })),
    }),
  },
});

export default moviesSlice.reducer;
export const {
  loadMovies: loadMoviesActionCreator,
  toggleWatchMovie: toggleWatchMovieActionCreator,
} = moviesSlice.actions;
