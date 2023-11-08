import { http, HttpResponse } from "msw";
import mockMovies from "./mockData";

const urlApi = import.meta.env.VITE_API_URL;

export const handlers = [
  http.get(`${urlApi}/movies`, () => {
    return HttpResponse.json(mockMovies);
  }),
];
