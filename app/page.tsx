'use client';

import { API } from "./services/Movies";
import { Header } from "./components/header/header";
import { useState, useEffect } from "react";
import { Result as Movies } from "@/@types/movie";
import { Result as Series } from "@/@types/series";
import { Slide } from "./components/Slide/slideCompornent";
import { SlideBanner } from "./components/Slide/slideBaner";
import { Card } from "./components/card/card";
import { Footer } from "./components/footer/footer";

export default function Home() {

  const [releases, steReleases] = useState<Movies[]>([]);
  const [movies, setMovies] = useState<Movies[]>([]);
  const [series, setSeries] = useState<Series[]>([]);
  const [series2, setSeries2] = useState<Series[]>([]);
  const [movies4, setMovies4] = useState<Movies[]>([])
  const [movies3, setMovies3] = useState<Movies[]>([]);

  const getMovies = async () => {
    await API.Movies({ page: 1 })
      .then(res => steReleases(res.results));
    await API.Movies({ page: 2 })
      .then(res => setMovies(res.results));
    await API.Tv({ day: 'day', page: 1 })
      .then(res => setSeries(res.results));
    await API.Tv({ day: 'week', page: 2 })
      .then(res => setSeries2(res.results));
    await API.Movies({ page: 4 })
      .then(res => setMovies3(res.results));
    await API.Movies({ page: 5 })
      .then(res => setMovies4(res.results));
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
            <div className="absolute z-10 inset-1 bg-black opacity-30 w-full h-full left-0 top-0"></div>

            <h1 className="text-5xl font-bold italic text-white z-30">{item.title}</h1>
            <p className="text-white w-[500px] z-30">{item.overview}</p>
            <div className="flex gap-4 z-30">
              <button className="bg-violet-700 text-white  py-2 px-4 rounded z-30">WATCH</button>
              <button className="bg-white text-black py-2 px-4 rounded z-30">MY LIST +</button>
            </div>
          </div>
        ))}
      </SlideBanner>

      <section className="py-5">
        <h1 className="font-bold text-white p-3">MOVIES YOU MUST WATCH</h1>
        <Slide>
          {movies && movies.map(item => (
            <Card title={item.title} id={item.id} poster_path={item.poster_path} />
          ))}
        </Slide>
      </section>

      <section className="py-5">
        <h1 className="font-bold text-white p-3">SERIES</h1>
        <Slide>
          {series && series.map(item => (
            <Card title={item.name} id={item.id} poster_path={item.poster_path} />
          ))}
        </Slide>
      </section>

      <section className="py-5">
        <h1 className="font-bold text-white p-3">SERIES</h1>
        <Slide>
          {series2 && series2.map(item => (
            <Card title={item.name} id={item.id} poster_path={item.poster_path} />
          ))}
        </Slide>
      </section>

      <section className="py-5">
        <h1 className="font-bold text-white p-3">MOVIES YOU MUST WATCH</h1>
        <Slide>
          {movies3 && movies3.map(item => (
            <Card title={item.title} id={item.id} poster_path={item.poster_path} />
          ))}
        </Slide>
      </section>

      <section className="py-5">
        <h1 className="font-bold text-white p-3">MOVIES YOU MUST WATCH</h1>
        <Slide>
          {movies4 && movies4.map(item => (
            <Card title={item.title} id={item.id} poster_path={item.poster_path} />
          ))}
        </Slide>
      </section>

      <Footer />

    </>
  );
}
