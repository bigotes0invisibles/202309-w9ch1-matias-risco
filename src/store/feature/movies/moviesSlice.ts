import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface moviesStructure {
  id: number;
  name: string;
  meme: "yes" | "no" | "maybe" | "yesn't";
  mainProtagonist: string;
  genre: string[];
  duration: string;
}

interface moviesStateStructure {
  movies: moviesStructure[];
}

const InitialMoviesState: moviesStateStructure = {
  movies: [],
};

const movies = createSlice({
  name: "movies",
  initialState: InitialMoviesState,
  reducers: {
    loadMovies: (currentState, action: PayloadAction<moviesStructure[]>) => ({
      ...currentState,
      movies: action.payload,
    }),
  },
});

export default movies;
export const { loadMovies } = movies.actions;