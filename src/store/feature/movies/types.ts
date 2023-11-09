export interface MoviesStructureBase {
  name: string;
  meme: "yes" | "no" | "maybe" | "yesn't";
  mainProtagonist: string;
  genres: Array<string>;
  duration: string;
  image: string;
  watched: boolean;
}

export interface MoviesStructure extends MoviesStructureBase {
  id: number;
}

export interface MoviesStructureIdOptional extends MoviesStructureBase {
  id?: number;
}

export interface MoviesStateStructure {
  movies: MoviesStructure[];
}
