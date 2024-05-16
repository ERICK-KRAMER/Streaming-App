'use client';

import { Movie } from "./api/Movies";
import { ContainerItem } from "./components/container-item";
import { ContentImage } from "./components/content-image";
import { useQuery } from "@tanstack/react-query";

interface DataProps {
  page: number;
  total_pages: number;
  total_results: number;
  results: ResultsProps[];
}

interface ResultsProps {
  poster_path: string;
  title: string;
  overview: string;
  id: number;
}

export default function Home() {

  const { data } = useQuery<DataProps>({queryKey: ['getAllMovie'], queryFn: Movie.GetAllMovie});

  return (
    <>

      <section className="container bg-neutral-300 mx-auto text-black transition duration-500">
       <div className="flex flex-wrap justify-center">
         
         {data && data.results.map(movie => (
           <ContainerItem name={movie.title} key={movie.id}>
             <ContentImage data={{poster_path: movie.poster_path, name: movie.title}}/>
           </ContainerItem>
         ))}

       </div>
      </section>

    </>
  );
}
