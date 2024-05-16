'use client';

import { useState, useEffect } from "react";
import { DataProps } from "./@types/Movies";
import { Movie } from "./api/Movies";
import { ContainerItem } from "./components/container-item";
import { ContentImage } from "./components/content-image";
import { useQuery } from "@tanstack/react-query";
import { Loading } from "./components/loading";
import { Pagination } from "./components/Pagination";
import { GenreComponent } from "./components/container-genre";
import { GenreButton } from "./components/button-genre";

export interface GenreProps {
  genres: {
    id: number;
    name: string;
  }[]
}

export default function Home() {

  const [page, setPage] = useState<number>(1);
  
  const handleMovie = async () => {
    const data = await Movie.GetAllMovie({ page });
    return data;
  }

  const { data, isLoading, refetch } = useQuery<DataProps>({
    queryKey: ['getAllMovie', page],
    queryFn: handleMovie
  });

  const { data: genre } = useQuery<GenreProps>({
    queryKey : ['getGenre'], 
    queryFn: Movie.GetGenres
  });

  useEffect(() => {
    refetch();
  }, [page, refetch]);

  const previousPage = () => {
    if (page > 1) setPage(prev => prev - 1);
  }

  const nextPage = () => {
    if (data && page < data?.total_pages) setPage(prev => prev + 1);
  }

  return (
    <>
      <section className="container bg-neutral-300 mx-auto text-black transition duration-500 flex justify-center flex-col gap-6">
        
        <GenreComponent>
          {genre && genre.genres.map(genre => (
            <GenreButton name={genre.name} key={genre.id}/>
          ))}
        </GenreComponent>

        <div className="flex flex-wrap justify-center">
          {isLoading && <Loading />}
          {data && data.results.map(movie => (
            <ContainerItem name={movie.title} key={movie.id}>
              <ContentImage data={{ poster_path: movie.poster_path, name: movie.title }} />
            </ContainerItem>
          ))}
        </div>
        
        <Pagination.Root>
          <Pagination.Button name={'anterior'} onClick={previousPage} />
          <Pagination.Current count={page} />
          <Pagination.Button name={'next'} onClick={nextPage} />
        </Pagination.Root>
      
      </section>
    </>
  );
}
