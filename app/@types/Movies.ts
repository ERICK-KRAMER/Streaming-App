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