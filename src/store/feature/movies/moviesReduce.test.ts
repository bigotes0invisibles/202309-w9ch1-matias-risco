import mockMovies from "../../../mocks/mockData";
import { copyMovies } from "./movieUtils";
import { toggleWatchMovieActionCreator } from "./moviesSlice";
import moviesReducer from "./moviesSlice";
import { MoviesStateStructure } from "./types";

describe("Given the reducer of movies", () => {
  describe("When the reducer recive ActualState and the action toggleWatchMovie with the payload of the id of the fristmovie", () => {
    test("it should return newState with the firstMovie propety watched changed", () => {
      const currentState: MoviesStateStructure = {
        movies: copyMovies(mockMovies),
      };

      const firstMovie = mockMovies[0];

      const toggleaction = toggleWatchMovieActionCreator(firstMovie.id);
      const newState = moviesReducer(currentState, toggleaction);
      const firstMovieUpdated = newState.movies[0];

      expect(firstMovieUpdated.watched).not.toBe(firstMovie.watched);
    });
  });
});
