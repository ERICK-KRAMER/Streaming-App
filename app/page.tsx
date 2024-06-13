'use client';

<<<<<<< HEAD
import { API } from "./services/Movies";
import { Header } from "./components/header/header";
import { useState, useEffect } from "react";
import { Result as Movies } from "@/@types/movie";
import { Result as Series } from "@/@types/series";
import { Slide } from "./components/Slide/slideCompornent";
import { SlideBanner } from "./components/Slide/slideBaner";
import { Card } from "./components/card/card";
import { Footer } from "./components/footer/footer";
import { Button } from "./components/ui/button";
import { ChevronDown, Heart, Play } from "lucide-react";
import { useHeaderContext } from "./context/headerContext";

export default function Home() {

  const { handleGetMovie } = useHeaderContext();

  const [releases, steReleases] = useState<Movies[]>([]);
  const [movies, setMovies] = useState<Movies[]>([]);
  const [series, setSeries] = useState<Series[]>([]);
  const [series2, setSeries2] = useState<Series[]>([]);
  const [movies4, setMovies4] = useState<Movies[]>([])
  const [movies3, setMovies3] = useState<Movies[]>([]);

  const getMovies = async () => {
    Promise.all([
      await API.Movies({ page: 1 })
        .then(res => steReleases(res.results)),
      await API.Movies({ page: 2 })
        .then(res => setMovies(res.results)),
      await API.Tv({ day: 'day', page: 1 })
        .then(res => setSeries(res.results)),
      await API.Tv({ day: 'week', page: 2 })
        .then(res => setSeries2(res.results)),
      await API.Movies({ page: 4 })
        .then(res => setMovies3(res.results)),
      await API.Movies({ page: 5 })
        .then(res => setMovies4(res.results)),
    ])
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <Header />

      <SlideBanner>
        {releases && releases.map(item => (
          <div
            key={item.id}
            className="h-[600px] w-screen flex flex-col gap-4 p-10 bg-cover bg-top relative"
            style={{
              backgroundImage: `url('https://image.tmdb.org/t/p/original/${item.backdrop_path}')`,
            }}
          >
            {/* <div className="absolute inset-1 bg-black opacity-30 w-full h-full left-0 top-0"></div> */}

            <h1 className="text-5xl font-bold italic text-white ">{item.title}</h1>

            <p className="text-white w-[500px] ">{item.overview}</p>

            <div className="flex gap-4 ">
              <Button className="bg-violet-700 text-white py-2 px-4 rounded flex justify-center items-center gap-3">WATCH <Play /></Button>
              <Button className="bg-white text-black py-2 px-4 rounded flex justify-center items-center gap-3">MY LIST <Heart /></Button>
            </div>
          </div>
        ))}
      </SlideBanner>

      <section className="py-5">
        <h1 className="font-bold text-white p-3">MOVIES YOU MUST WATCH</h1>
        <Slide>
          {movies && movies.map(item => (
            <Card title={item.title} id={item.id} poster_path={item.poster_path} onClick={() => handleGetMovie(item)} />
          ))}
        </Slide>
      </section>

      <section className="py-5">
        <h1 className="font-bold text-white p-3">SERIES</h1>
        <Slide>
          {series && series.map(item => (
            <Card title={item.name} id={item.id} poster_path={item.poster_path} onClick={() => handleGetMovie(item)} />
          ))}
        </Slide>
      </section>

      <section className="py-5">
        <h1 className="font-bold text-white p-3">SERIES</h1>
        <Slide>
          {series2 && series2.map(item => (
            <Card title={item.name} id={item.id} poster_path={item.poster_path} onClick={() => handleGetMovie(item)} />
          ))}
        </Slide>
      </section>

      <section className="py-5">
        <h1 className="font-bold text-white p-3">MOVIES YOU MUST WATCH</h1>
        <Slide>
          {movies3 && movies3.map(item => (
            <Card title={item.title} id={item.id} poster_path={item.poster_path} onClick={() => handleGetMovie(item)} />
          ))}
        </Slide>
      </section>

      <section className="py-5">
        <h1 className="font-bold text-white p-3">MOVIES YOU MUST WATCH</h1>
        <Slide>
          {movies4 && movies4.map(item => (
            <Card title={item.title} id={item.id} poster_path={item.poster_path} onClick={() => handleGetMovie(item)} />
          ))}
        </Slide>
      </section>

      <div className="flex justify-center items-center p-4">
        <Button className="bg-violet-800 text-white px-8 rounded-full flex gap-2 hover:bg-violet-900 transition duration-500">More <ChevronDown /></Button>
      </div>

      <Footer />

=======
import { useState, useEffect, FormEvent } from "react";
import { DataProps, SearchProps } from "./@types/Movies";
import { Movie } from "./api/Movies";
import { ContainerItem } from "./components/container-item";
import { ContentImage } from "./components/content-image";
import { useQuery } from "@tanstack/react-query";
import { Loading } from "./components/loading";
import { Pagination } from "./components/Pagination";
import { Genre, Alfabet } from "./components/genre";
import { Search } from "./components/Search";
import { Header } from "./components/header";
import Image from "next/image";
import imagemLogo from "../public/Logo.png";
import { SearchIcon, X } from "lucide-react";

export interface GenreProps {
  genres: {
    id: number;
    name: string;
  }[]
}

export default function Home() {
  const [changeIcon, setChangeicon] = useState<boolean>(false);
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

  const handleChangeIcon = () => {
    setChangeicon(prev => !prev);
  }

  const handleFilter = (e: FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  }

  return (
    <>
      <Header.Root>
        {!changeIcon ? (
          <>
            <Image src={imagemLogo} width={100} alt={"Stream Studio"}/>
            <Header.Nav>
              <Header.Item name="Categories"/>
              <Header.Item name="Series"/>
              <Header.Item name="Anime"/>
              <Header.Item name="TV"/>
            </Header.Nav>
          </>
        ) : (
          <Search.Root onChange={(e) => setSearch(e.target.value)}>
            <Search.Button />
          </Search.Root>
        )}
       
        <Header.Button onClick={handleChangeIcon}>
          {changeIcon ? <X className="text-red-500"/> : <SearchIcon/> }
        </Header.Button>
      </Header.Root>

      <section className="bg-zinc-900 text-white transition duration-500 flex justify-center flex-col gap-4">
        <Genre.Root>
          {Alfabet.map(algarism => (
            <Genre.Button name={algarism} key={algarism} value={algarism} onClick={(e) => handleFilter(e as unknown as FormEvent<HTMLInputElement>)}/>
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
>>>>>>> 5baba83658d14a8160fb4cc34fdc285b589da764
    </>
  );
}
