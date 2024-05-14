'use client'

import { Auth } from "./api/auth";

export default function Home() {

  const handleSubmit = async() => {
    const data = await Auth({endpoint: 'https://api.themoviedb.org/3/movie/11'});

    console.log(data);

  }

  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
