'use client';

import { API } from "../services/Movies";
import { Header } from "../components/header/header";
import { useState, useEffect } from "react";
import { Result } from "@/@types/movie";
import { Slide } from "../components/Slide/slideCompornent";
import { SlideBanner } from "../components/Slide/slideBaner";
import { Card } from "../components/card/card";
import { ChevronDown, Heart, Play } from "lucide-react";
import { Button } from "../components/ui/button";
import { useHeaderContext } from "../context/headerContext";
import { Footer } from "../components/footer/footer";

export default function Home() {
  const { handleGetMovie } = useHeaderContext();

  const [movies, setMovies] = useState<Result[]>([]);
  const [movies2, setMovies2] = useState<Result[]>([]);
  const [movies4, setMovies4] = useState<Result[]>([])
  const [movies3, setMovies3] = useState<Result[]>([]);

  const getMovies = async () => {
    await API.Movies({ page: 1 })
      .then(res => setMovies(res.results));
    await API.Movies({ page: 2 })
      .then(res => setMovies2(res.results));
    await API.Search({ page: 1, name: 'serie', type: 'movie' })
      .then(res => setMovies3(res.results));
    await API.Movies({ page: 4 })
      .then(res => setMovies4(res.results));
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <Header />

      <SlideBanner>
        {movies && movies.map(item => (
          <div
            key={item.id}
            className="h-[600px] w-screen flex flex-col gap-4 p-10 bg-cover bg-top relative"
            style={{
              backgroundImage: `url('https://image.tmdb.org/t/p/original/${item.backdrop_path}')`,
            }}
          >
            {/* <div className="absolute z-10 inset-1 bg-black opacity-30 w-full h-full left-0 top-0"></div> */}

            <h1 className="text-5xl font-bold italic text-white">{item.title}</h1>
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
        <h1 className="font-bold text-white p-3">MOVIES YOU MUST WATCH</h1>
        <Slide>
          {movies2 && movies2.map(item => (
            <Card title={item.title} id={item.id} poster_path={item.poster_path} onClick={() => handleGetMovie(item)} />
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
    </>
  );
}
