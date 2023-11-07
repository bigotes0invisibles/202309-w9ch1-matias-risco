export interface MoviesStructure {
  id: number;
  name: string;
  meme: "yes" | "no" | "maybe" | "yesn't";
  mainProtagonist: string;
  genres: Array<string>;
  duration: string;
}

export interface MoviesStateStructure {
  movies: MoviesStructure[];
}
