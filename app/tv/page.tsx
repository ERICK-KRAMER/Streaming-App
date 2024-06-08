'use client';

import { Result } from "@/@types/series";
import { useEffect, useState } from "react";
import { API } from "../services/Movies";
import { Header } from "../components/header/header";
import { SlideBanner } from "../components/Slide/slideBaner";
import { Slide } from "../components/Slide/slideCompornent";
import { Card } from "../components/card/card";

export default function Tv() {
  const [series, setSeries] = useState<Result[]>([]);
  const [test, setTest] = useState<Result[]>([]);
  const [series2, setSeries2] = useState<Result[]>([]);
  const [series4, setSeries4] = useState<Result[]>([])
  const [series3, setSeries3] = useState<Result[]>([]);

  const getSeries = async () => {
    await API.Tv({ day: 'day', page: 1 })
      .then(res => setSeries(res.results));
    await API.Tv({ day: 'day', page: 2 })
      .then(res => setSeries2(res.results));
    await API.Tv({ day: 'day', page: 3 })
      .then(res => setSeries3(res.results));
    await API.Tv({ day: 'day', page: 4 })
      .then(res => setSeries4(res.results));
  };

  useEffect(() => {
    getSeries();
  }, []);

  return (
    <>
      <Header />

      <SlideBanner>
        {series && series.map(item => (
          <div
            key={item.id}
            className="h-[600px] w-screen flex flex-col gap-4 p-10 bg-cover bg-top relative"
            style={{
              backgroundImage: `url('https://image.tmdb.org/t/p/original/${item.backdrop_path}')`,
            }}
          >
            <div className="absolute z-10 inset-1 bg-black opacity-30 w-full h-full left-0 top-0"></div>

            <h1 className="text-5xl font-bold italic text-white z-30">{item.name}</h1>
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
          {series && series.map(item => (
            <Card title={item.name} id={item.id} poster_path={item.poster_path} />
          ))}
        </Slide>
      </section>

      <section className="py-5">
        <h1 className="font-bold text-white p-3">MOVIES YOU MUST WATCH</h1>
        <Slide>
          {series2 && series2.map(item => (
            <Card title={item.name} id={item.id} poster_path={item.poster_path} />
          ))}
        </Slide>
      </section>

      <section className="py-5">
        <h1 className="font-bold text-white p-3">MOVIES YOU MUST WATCH</h1>
        <Slide>
          {series3 && series3.map(item => (
            <Card title={item.name} id={item.id} poster_path={item.poster_path} />
          ))}
        </Slide>
      </section>

      <section className="py-5">
        <h1 className="font-bold text-white p-3">MOVIES YOU MUST WATCH</h1>
        <Slide>
          {series4 && series4.map(item => (
            <Card title={item.name} id={item.id} poster_path={item.poster_path} />
          ))}
        </Slide>
      </section>

    </>
  );
}

