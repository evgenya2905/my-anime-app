export interface IGenre {
  mal_id: number;
  name: string;
  url: string;
}

export interface IGenreWithType extends IGenre {
  type: string;
}

export interface IGenreWithCount extends IGenre {
  count: number;
}

export interface IAuthors {
  mal_id: number;
  name: string;
  type: string;
  url: string;
}

export interface IMediaItem {
  mal_id: number;
  images: {
    jpg: {
      image_url: string;
    };
  };
  title: string;
  title_japanese: string;
  score: number | null;
}

interface IImages {
  jpg: {
    large_image_url: string;
  };
}

export interface IMediaItemDetail {
  title: string;
  title_japanese: string;
  genres: IGenreWithType[];
  score: number | null;
  images: IImages;
  synopsis: string;
}

export interface IMediaItemDetailWithAuthors extends IMediaItemDetail {
  title: string;
  title_japanese: string;
  authors: IAuthors[];
  genres: IGenreWithType[];
  score: number | null;
  images: IImages;
  synopsis: string;
}
