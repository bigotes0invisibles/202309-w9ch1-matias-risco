import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MoviesStateStructure, MoviesStructure } from "./types";

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
      movies: action.payload.map((movie) => ({
        ...movie,
        genres: [...movie.genres],
      })),
    }),
  },
});

export default moviesSlice.reducer;
export const { loadMovies: loadMoviesActionCreator } = moviesSlice.actions;
