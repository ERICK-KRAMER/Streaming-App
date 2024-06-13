'use client'

import { useQuery } from "@tanstack/react-query";
import { Movie } from "../api/Movies";
import { GenreProps } from "../page";

export default function TestComponent() {
  const { data } = useQuery<GenreProps>({queryKey: ['Categories'], queryFn: Movie.GetGenres});

  return(
    <>
      <div>compornente de teste</div>
      {data && data.genres && data.genres.map(item => (
        <span key={item.id}>{item.name}</span>
      ))}
    </>
  )
}