import mockMovies from "../../../mocks/mockData";
import { toggleWatchMovieActionCreator } from "./moviesSlice";
import moviesReducer from "./moviesSlice";
import { MoviesStateStructure } from "./types";

describe("Given the reducer of movies", () => {
  describe("When the reducer recive the action toggleWatchMovie with the payload of the id of the fristmovie", () => {
    test.only("it should change firts movie watch propety", () => {
      const currentState: MoviesStateStructure = { movies: mockMovies };
      const expectState: MoviesStateStructure = JSON.parse(
        JSON.stringify(currentState),
      );
      expectState.movies[0].watched = true;
      const firstMovie = mockMovies[0];

      const toggleaction = toggleWatchMovieActionCreator(firstMovie.id);
      const actualState = moviesReducer(currentState, toggleaction);

      expect(actualState).toStrictEqual(expectState);
    });
  });
});
