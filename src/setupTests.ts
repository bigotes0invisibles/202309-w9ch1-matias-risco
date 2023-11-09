import "@testing-library/jest-dom";
import { server } from "./mocks/main";

import mockMovies from "./mocks/mockData";
import { MovieStructure } from "./store/feature/movies/types";

export let moviesApi: MovieStructure[] = mockMovies;

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
