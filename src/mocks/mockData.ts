import { MoviesStructure } from "../store/feature/movies/types";

const mockMovies: MoviesStructure[] = [
  {
    id: 1,
    name: "spider man into the spider verse",
    duration: "1:56:00",
    genres: ["Fantasy", "Action", "Superhero"],
    mainProtagonist: "Miles Morales",
    meme: "yesn't",
    image:
      "https://images.mubicdn.net/images/film/252425/cache-880577-1691758931/image-w1280.jpg?size=400x",
  },
  {
    id: 2,
    name: "Interstellar",
    meme: "yes",
    duration: "2:49:00",
    genres: ["Drama", "Ciencia ficción"],
    mainProtagonist: "Joseph Cooper.",
    image:
      "https://i.blogs.es/25fad9/714563181_preview_interstellar_voyage-3840x2160/450_1000.jpg",
  },
];

export default mockMovies;
