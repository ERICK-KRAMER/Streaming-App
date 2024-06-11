'use client';

import { API } from "../services/Movies";
import { Header } from "../components/header/header";
import { useState, useEffect } from "react";
import { Result } from "@/@types/movie";
import { Slide } from "../components/Slide/slideCompornent";
import { SlideBanner } from "../components/Slide/slideBaner";
import { Card } from "../components/card/card";
import { Heart, Play } from "lucide-react";
import { Button } from "../components/ui/button";
import { useHeaderContext } from "../context/headerContext";
import { Footer } from "../components/footer/footer";
import { useCount } from "../hooks/useCount";

export default function Home() {
  const { handleGetMovie } = useHeaderContext();
  const { count, nextCount, prevCount } = useCount();

  const [movies, setMovies] = useState<Result[]>([]);
  const [banner, setBanner] = useState<Result[]>([]);
  const [slide, setSlide] = useState<Result[]>([]);

  const getMovies = async () => {
    Promise.all([
      await API.Movies({ page: count })
        .then(res => setMovies(res.results)),
      await API.Movies({ page: 2 })
        .then(res => setBanner(res.results)),
      await API.Movies({ page: 5 })
        .then(res => setSlide(res.results))
    ]);
  };

  useEffect(() => {
    getMovies();
  }, [count]);

  return (
    <>
      <Header />

      <SlideBanner>
        {banner && banner.map(item => (
          <div
            key={item.id}
            className="h-[600px] w-screen flex flex-col gap-4 p-10 bg-cover bg-top relative"
            style={{
              backgroundImage: `url('https://image.tmdb.org/t/p/original/${item.backdrop_path}')`,
            }}
          >

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
          {slide && slide.map(item => (
            <Card title={item.title} id={item.id} poster_path={item.poster_path} onClick={() => handleGetMovie(item)} key={item.id} />
          ))}
        </Slide>
      </section>

      <section className="py-5">
        <h1 className="font-bold text-white p-3">TOP SERIES</h1>
        <div className="grid grid-cols-6 max-2xl:grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-4 place-items-center">
          {movies && movies.map(item => (
            <Card title={item.title} id={item.id} poster_path={item.poster_path} key={item.id} />
          ))}
        </div>

      </section >


      <div className="flex justify-center items-center p-4 gap-4">
        <Button className={`bg-violet-800 text-white px-8 rounded-full flex gap-2 hover:bg-violet-900 transition duration-500 ${count > 1 ? '' : 'hidden'}`} onClick={prevCount}>Prev</Button>
        <Button className="bg-violet-800 text-white px-8 rounded-full flex gap-2 hover:bg-violet-900 transition duration-500" onClick={nextCount}>Next</Button>
      </div>


      <Footer />
    </>
  );
}
