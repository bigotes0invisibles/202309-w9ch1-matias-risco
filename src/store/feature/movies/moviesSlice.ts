import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MoviesStateStructure, MoviesStructure } from "./types";

const initialMoviesState: MoviesStateStructure = {
  movies: [],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState: initialMoviesState,
  reducers: {
    loadMovies: (
      currentState,
      action: PayloadAction<MoviesStructure[]>,
    ): MoviesStateStructure => ({
      ...currentState,
      movies: action.payload,
    }),
  },
});

export default moviesSlice.reducer;
export const { loadMovies: loadMoviesActionCreator } = moviesSlice.actions;
