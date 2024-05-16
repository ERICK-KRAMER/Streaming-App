export interface DataProps {
  page: number;
  total_pages: number;
  total_results: number;
  results: ResultsProps[];
}

export interface ResultsProps {
  poster_path: string;
  title: string;
  overview: string;
  id: number;
}

export interface SearchProps {
  page: number
  results: Result[]
  total_pages: number
  total_results: number
}

export interface Result {
  adult: boolean
  backdrop_path?: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path?: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}