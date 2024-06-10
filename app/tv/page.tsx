'use client';

import { Result } from "@/@types/series";
import { useEffect, useState } from "react";
import { API } from "../services/Movies";
import { Header } from "../components/header/header";
import { SlideBanner } from "../components/Slide/slideBaner";
import { Card } from "../components/card/card";
import { Button } from "../components/ui/button";
import { Heart, Play } from "lucide-react";
import { useHeaderContext } from "../context/headerContext";
import { Footer } from "../components/footer/footer";
import { useCount } from "../hooks/useCount";

export default function Tv() {
  const { handleGetMovie } = useHeaderContext();
  const { nextCount, prevCount, count } = useCount();

  const [series, setSeries] = useState<Result[]>([]);
  const [banner, setBanner] = useState<Result[]>([]);

  const getSeries = async () => {
    Promise.all([
      await API.Tv({ day: 'day', page: 1 })
        .then(res => setBanner(res.results)),

      await API.Tv({ day: 'day', page: count })
        .then(res => setSeries(res.results))

    ])
  };

  useEffect(() => {
    getSeries();
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
            <h1 className="text-5xl font-bold italic text-white">{item.name}</h1>
            <p className="text-white w-[500px]">{item.overview}</p>
            <div className="flex gap-4">
              <Button className="bg-violet-700 text-white py-2 px-4 rounded flex justify-center items-center gap-3">WATCH <Play /></Button>
              <Button className="bg-white text-black py-2 px-4 rounded flex justify-center items-center gap-3">MY LIST <Heart /></Button>
            </div>
          </div>
        ))}
      </SlideBanner>

      <section className="py-5">
        <h1 className="font-bold text-white p-3">TOP SERIES</h1>
        <div className="grid grid-cols-6 gap-4">
          {series && series.map(item => (
            <Card title={item.name} id={item.id} poster_path={item.poster_path} key={item.id} onClick={() => handleGetMovie(item)} />
          ))}
        </div>

      </section>

      <div className="flex justify-center items-center p-4 gap-4">
        <Button className={`bg-violet-800 text-white px-8 rounded-full flex gap-2 hover:bg-violet-900 transition duration-500 ${count > 1 ? '' : 'hidden'}`} onClick={prevCount}>Prev</Button>
        <Button className="bg-violet-800 text-white px-8 rounded-full flex gap-2 hover:bg-violet-900 transition duration-500" onClick={nextCount}>Next</Button>
      </div>

      <Footer />
    </>
  );
}

