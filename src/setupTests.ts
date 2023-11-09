import "@testing-library/jest-dom";
import { server } from "./mocks/main";

import mockMovies from "./mocks/mockData";
import { MoviesStructure } from "./store/feature/movies/types";

export let moviesApi: MoviesStructure[] = mockMovies;

beforeAll(() => {
  moviesApi = mockMovies;
  return server.listen();
});

afterEach(() => {
  moviesApi = mockMovies;
  return server.resetHandlers();
});

afterAll(() => server.close());

server.events.on("request:start", ({ request }) => {
  console.log("MSW intercepted:", request.method, request.url);
});
