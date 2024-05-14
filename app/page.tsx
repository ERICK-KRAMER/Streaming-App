'use client'

import { Auth } from "./api/auth";
import { ContainerItem } from "./components/container-item";
import { ContentImage } from "./components/content-image";

export default function Home() {

  const handleSubmit = async() => {
    const data = await Auth({endpoint: 'https://api.themoviedb.org/3/movie/11'});

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

      <button onClick={handleSubmit}>Submit</button>

    </>
  );
}
