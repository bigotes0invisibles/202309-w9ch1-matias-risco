import mockMovies from "../../../mocks/mockData";
import { copyMovies } from "./movieUtils";
import {
  AddMovieActionCreator,
  toggleWatchMovieActionCreator,
} from "./moviesSlice";
import moviesReducer from "./moviesSlice";
import { MoviesStateStructure, MovieStructure } from "./types";

describe("Given the reducer of movies", () => {
  describe("When the reducer recive ActualState and the action toggleWatchMovie with the payload of the id of the fristmovie", () => {
    test("it should return newState with the firstMovie propety watched changed", () => {
      const currentState: MoviesStateStructure = {
        movies: copyMovies(mockMovies),
      };

      const firstMovie = mockMovies[0];

      const toggleAction = toggleWatchMovieActionCreator(firstMovie.id);
      const newState = moviesReducer(currentState, toggleAction);
      const firstMovieUpdated = newState.movies[0];

      expect(firstMovieUpdated.watched).not.toBe(firstMovie.watched);
    });
  });

  describe("When the reducer recive ActualState and the action addMovie with the payload of newmovie", () => {
    test("it should return newState with movies added the newMovie", () => {
      const currentState: MoviesStateStructure = {
        movies: copyMovies(mockMovies),
      };
      const newMovie: MovieStructure = {
        id: 6,
        duration: "",
        genres: [],
        image: "",
        mainProtagonist: "",
        meme: "maybe",
        name: "",
        watched: true,
      };

      const addAction = AddMovieActionCreator(newMovie);
      const newState = moviesReducer(currentState, addAction);
      const movies = newState.movies;

      expect(movies).toEqual(
        expect.arrayContaining([expect.objectContaining(newMovie)]),
      );
    });
  });
});
