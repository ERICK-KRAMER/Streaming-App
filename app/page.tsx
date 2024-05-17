'use client';

import { useState, useEffect } from "react";
import { DataProps, SearchProps } from "./@types/Movies";
import { Movie } from "./api/Movies";
import { ContainerItem } from "./components/container-item";
import { ContentImage } from "./components/content-image";
import { useQuery } from "@tanstack/react-query";
import { Loading } from "./components/loading";
import { Pagination } from "./components/Pagination";
import { Genre } from "./components/genre";
import { Search } from "./components/genre/Search";

export interface GenreProps {
  genres: {
    id: number;
    name: string;
  }[]
}

export default function Home() {

  const [page, setPage] = useState<number>(1);

  const [search, setSearch] = useState<string>('');

  const handleMovie = async () => {
    const data = await Movie.GetAllMovie({ page });
    return data;
  }

  const handleMovieByName = async () => {
    if (search.trim() === '') {
      return { results: [] }; 
    }
    const data = await Movie.GetMovieByName({ name: search });
    return data;
  }

  const { data, isLoading, refetch: refetchData } = useQuery<DataProps>({
    queryKey: ['getAllMovie', page],
    queryFn: handleMovie
  });

  const { data: genre } = useQuery<GenreProps>({
    queryKey: ['getGenre'],
    queryFn: Movie.GetGenres
  });

  const { data: movie, isLoading: isLoadingMovie, refetch: refetchMovie } = useQuery<SearchProps>({
    queryKey: ['movieByName', search],
    queryFn: handleMovieByName,
    enabled: !!search, 
  });

  useEffect(() => {
    if (search) {
      refetchMovie();
    } else {
      refetchData();
    }
  }, [page, search, refetchData, refetchMovie]);

  const previousPage = () => {
    if (page > 1) setPage(prev => prev - 1);
  }

  const nextPage = () => {
    if (data && page < data?.total_pages) setPage(prev => prev + 1);
  }

  return (
    <>
      <section className="container bg-neutral-300 mx-auto text-black transition duration-500 flex justify-center flex-col gap-4">

        <Search.Root value={search} onChange={(e) => setSearch(e.target.value)}>
          <Search.Button />
        </Search.Root>

        <Genre.Root>
          {genre && genre.genres && genre.genres.map(genre => (
            <Genre.Button name={genre.name} key={genre.id} />
          ))}
        </Genre.Root>

        <div className="flex flex-wrap justify-center">
          {isLoading && <Loading />}
          {isLoadingMovie && <Loading />}

          {search ? (
            movie && movie.results && movie.results.map(movie => (
              <ContainerItem name={movie.title} key={movie.id}>
                <ContentImage data={{ poster_path: movie.poster_path, name: movie.title, isLoading: isLoadingMovie }} />
              </ContainerItem>
            ))
          ) : (
            data && data.results && data.results.map(movie => (
              <ContainerItem name={movie.title} key={movie.id}>
                <ContentImage data={{ poster_path: movie.poster_path, name: movie.title, isLoading: isLoading }} />
              </ContainerItem>
            ))
          )}
        </div>
        
        {!search && (

        <Pagination.Root>
          <Pagination.Button name={'anterior'} onClick={previousPage} />
          <Pagination.Current count={page} />
          <Pagination.Button name={'next'} onClick={nextPage} />
        </Pagination.Root>
        
        )}

      </section>
    </>
  );
}
