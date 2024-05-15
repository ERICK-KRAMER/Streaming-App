'use client'

import { ApiMovies } from "./api/auth";
import { ContainerItem } from "./components/container-item";
import { ContentImage } from "./components/content-image";
import { Pagination } from "./components/pagination";

export default function Home() {

  const handleSubmit = async() => {
    const data = await ApiMovies({endpoint: 'https://api.themoviedb.org/3/movie/now_playing'});

    console.log(data);

  }

  return (
    <>

      <ContainerItem name="The Lord of the Rings Collection">
        <ContentImage data={{
          poster_path: '/oENY593nKRVL2PnxXsMtlh8izb4.jpg',
          name: 'The Lord of the Rings Collection'
        }}/>
      </ContainerItem>

      <Pagination>

      </Pagination>

      <button onClick={handleSubmit}>Submit</button>

    </>
  );
}
