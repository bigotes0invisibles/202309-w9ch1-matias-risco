import { renderHook } from "@testing-library/react";
import mockMovies from "../mocks/mockData";
import useMoviesApi from "./useMoviesApi";
import { copyMovies } from "../store/feature/movies/movieUtils";
import {
  MovieStructure,
  MovieStructureIdOptional,
} from "../store/feature/movies/types";

describe("Given the hook useMoviesApi", () => {
  describe("When getMoviesApi is call", () => {
    test("it should return a array of movies", async () => {
      const expectedMovies = copyMovies(mockMovies);

      const {
        result: {
          current: { getMoviesApi },
        },
      } = renderHook(useMoviesApi);

      const actualMovies = await getMoviesApi();

      expect(actualMovies).toStrictEqual(expectedMovies);
    });
  });

  describe("When toggleWatchMovieApi is call with the movieInterstellar", () => {
    test("it should change the propety isWatched of movieInterstellar in the Api", async () => {
      const {
        result: {
          current: { getMoviesApi, toggleWatchMovieApi },
        },
      } = renderHook(useMoviesApi);
      const pocition = 1;
      const moviesApi = await getMoviesApi();
      const movieInterstellar = moviesApi[pocition];

      await toggleWatchMovieApi(movieInterstellar);
      const moviesApiUpdated = await getMoviesApi();
      const movieInterstellarUpdated = moviesApiUpdated[pocition];

      expect(movieInterstellar.watched).not.toBe(
        movieInterstellarUpdated.watched,
      );
    });
  });

  describe("When addMovieApi is call with a new movie as a parameter", () => {
    test("it should add the new movie to movies in the Api", async () => {
      const {
        result: {
          current: { AddMovieApi, getMoviesApi },
        },
      } = renderHook(useMoviesApi);
      const newMovie: MovieStructureIdOptional = {
        duration: "",
        genres: [],
        id: 90,
        image: "",
        name: "testApi",
        mainProtagonist: "",
        meme: "maybe",
        watched: true,
      };

      await AddMovieApi(newMovie as MovieStructure);
      const moviesApi = await getMoviesApi();
      delete newMovie.id;

      expect(moviesApi).toEqual(
        expect.arrayContaining([expect.objectContaining(newMovie)]),
      );
    });
  });
});
