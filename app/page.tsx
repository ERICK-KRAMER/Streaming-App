'use client';

import { API } from "./api/Movies";

import { Header } from "./components/header/header"
import { Button } from "./components/ui/button";

export default function Home() {

  const handleClick = async () => {
    const page = 2
    console.log(await API.Movies({ page }));
    console.log(await API.Search({ name: 'harry potter' }));
  }

  return (
    <>
      <Header />
      <Button onClick={handleClick}>CONSOLE.LOG</Button>
      <section>

      </section>
    </>
  );
}
