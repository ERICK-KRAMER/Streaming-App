'use client';

import { API } from "./services/Movies";
import { Header } from "./components/header/header";
import { useState, useEffect, useRef } from "react";
import { Result } from "@/@types/movie";
import Image from "next/image";
import { Slide } from "./components/Slide/slideCompornent";

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
