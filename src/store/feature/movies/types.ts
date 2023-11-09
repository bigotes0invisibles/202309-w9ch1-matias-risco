export interface MovieStructureBase {
  name: string;
  meme: "yes" | "no" | "maybe" | "yesn't";
  mainProtagonist: string;
  genres: Array<string>;
  duration: string;
  image: string;
  watched: boolean;
}

export interface MovieStructure extends MovieStructureBase {
  id: number;
}

export interface MovieStructureIdOptional extends MovieStructureBase {
  id?: number;
}

export interface MoviesStateStructure {
  movies: MovieStructure[];
}
