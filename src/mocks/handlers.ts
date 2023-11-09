import { http, HttpResponse } from "msw";

import { moviesApi } from "../setupTests";

const urlApi = import.meta.env.VITE_URL_API;

export const handlers = [
  http.get(`${urlApi}/movies`, () => {
    return HttpResponse.json(moviesApi);
  }),

  http.patch(`${urlApi}/movies/:id`, ({ params }) => {
    const id = Number(params.id);
    moviesApi.forEach((movie) => {
      movie.watched = id === movie.id ? !movie.watched : movie.watched;
    });

    return HttpResponse.json(moviesApi.find((movie) => movie.id === id));
  }),
];
