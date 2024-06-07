'use client';

import { API } from "./services/Movies";
import { Header } from "./components/header/header";
import { useState, useEffect } from "react";
import { Result } from "@/@types/movie";
import Image from "next/image";
import { Slide } from "./components/Slide/slideCompornent";
import { SlideBanner } from "./components/Slide/slideBaner";

export default function Home() {
  const [movies, setMovies] = useState<Result[]>([]);

  const getMovies = async () => {
    const page = 1;
    await API.Movies({ page })
      .then(res => setMovies(res.results));
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
            className="h-[600px] w-screen flex flex-col gap-4 p-10 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://image.tmdb.org/t/p/original/${item.backdrop_path}')`,
            }}
          >
            <h1 className="text-4xl text-white">{item.title}</h1>
            <p className="text-white w-[500px]">{item.overview}</p>
            <div className="flex gap-4">
              <button className="bg-violet-700 text-white  py-2 px-4 rounded">WATCH</button>
              <button className="bg-white text-black py-2 px-4 rounded">MY LIST +</button>
            </div>
          </div>
        ))}
      </SlideBanner>

      <section className="py-10">
        <Slide>
          {movies && movies.map(item => (
            <div className="w-[250px] h-[375px] bg-neutral-700 rounded overflow-hidden cursor-pointer flex-shrink-0 mx-2" key={item.id}>
              <abbr title={item.title}>
                <Image
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  alt={item.title}
                  width={200}
                  height={250}
                  className="w-full h-full bg-cover object-cover hover:scale-105 transition"
                />
              </abbr>
            </div>
          ))}
        </Slide>
      </section>
    </>
  );
}
