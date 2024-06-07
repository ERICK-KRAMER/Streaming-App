'use client';

import { API } from "./services/Movies";
import { Header } from "./components/header/header";
import { useState, useEffect, useRef } from "react";
import { Result } from "@/@types/movie";
import Image from "next/image";

export default function Home() {
  const [movies, setMovies] = useState<Result[]>([]);
  const sliderRef = useRef<HTMLDivElement>(null);

  const getMovies = async () => {
    const page = 1;
    await API.Movies({ page })
      .then(res => setMovies(res.results));
  };

  useEffect(() => {
    getMovies();
  }, []);

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: sliderRef.current.offsetWidth, behavior: 'smooth' });
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -sliderRef.current.offsetWidth, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header />
      <section>
        <div className="relative p-10 overflow-hidden flex justify-center items-center">
          <button onClick={prevSlide} className="absolute h-full opacity-50 left-0 z-10 bg-black text-white p-2">Prev</button>
          <div
            ref={sliderRef}
            className="flex overflow-x-scroll scroll-smooth scrollbar-hide"
          >
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
          </div>
          <button onClick={nextSlide} className="absolute h-full opacity-50 right-0 z-10 bg-black text-white p-2">Next</button>
        </div>
      </section>
    </>
  );
}
