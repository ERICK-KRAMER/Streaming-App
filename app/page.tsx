'use client';

import { DataProps } from "./@types/Movies";
import { Movie } from "./api/Movies";
import { ContainerItem } from "./components/container-item";
import { ContentImage } from "./components/content-image";
import { useQuery } from "@tanstack/react-query";
import { Loading } from "./components/loading";
import { Pagination } from "./components/Pagination";


export default function Home() {

  const { data, isLoading } = useQuery<DataProps>({queryKey: ['getAllMovie'], queryFn: Movie.GetAllMovie});

  return (
    <>

      <section className="container bg-neutral-300 mx-auto text-black transition duration-500 flex justify-center flex-col gap-6">
       
       <div className="flex flex-wrap justify-center">
        
         { isLoading && <Loading/> }

         {data && data.results.map(movie => (
           <ContainerItem name={movie.title} key={movie.id}>
             <ContentImage data={{poster_path: movie.poster_path, name: movie.title}}/>
           </ContainerItem>
         ))}


       </div>

         <Pagination.Root>
          <Pagination.Button name={'anterior'}/>
          <Pagination.Count count={1}/>
          <Pagination.Button name={'next'}/>
         </Pagination.Root>

      </section>

    </>
  );
}
