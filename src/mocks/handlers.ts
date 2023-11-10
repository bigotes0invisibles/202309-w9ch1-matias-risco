import { http, HttpResponse } from "msw";

import { moviesApi } from "../setupTests";
import {
  MovieStructure,
  MovieStructureIdOptional,
} from "../store/feature/movies/types";

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

  http.post(`${urlApi}/movies`, async ({ request }) => {
    const newPost = (await request.json()) as MovieStructureIdOptional;
    const maxid = moviesApi.reduce(
      (accumulator, currentValue) =>
        accumulator > currentValue.id ? accumulator : currentValue.id,
      0,
    );
    newPost["id"] = maxid + 1;
    moviesApi.push(newPost as MovieStructure);
    console.log(newPost);
    return HttpResponse.json(newPost, { status: 201 });
  }),
];
