'use client';

import { Result as Serie } from "@/@types/series";
import { Result as Movie } from "@/@types/movie";
import { createContext, useContext, useState, ReactNode } from "react";
import { API } from "../services/Movies";

interface HeaderContextProps {
  selectPage: (buttonName: string) => void;
  handleGetMovie: (movie: Movie) => void;
  handleGetTitle: (title: string) => Promise<(Movie | Serie)[]>;
  activeButton: string;
  Movie: Movie | null;
  getTitle: Movie[];
}

const HeaderContext = createContext<HeaderContextProps>({} as HeaderContextProps);

const useHeaderContext = () => {
  const context = useContext<HeaderContextProps>(HeaderContext);

  if (context === undefined) {
    throw new Error('useHeaderContext must be used within a HeaderContextProvider');
  }

  return context;
};

const HeaderContextProvider = ({ children }: { children: ReactNode }) => {
  const [activeButton, setActiveButton] = useState<string>("home");
  const [Movie, setMovie] = useState<Movie | null>(null);
  const [getTitle, setGetTitle] = useState<Movie[]>([]);

  const selectPage = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  const handleGetMovie = (movie: Movie) => {
    setMovie(movie);
    console.log(movie);
  }

  const handleGetTitle = async (title: string) => {

    const data = await API.Search({ page: 1, type: 'movie', name: title });

    setGetTitle(data.results);

    return data.results;
  }

  const attributes: HeaderContextProps = {
    selectPage,
    handleGetMovie,
    handleGetTitle,
    activeButton,
    Movie,
    getTitle,
  };

  return <HeaderContext.Provider value={attributes}>{children}</HeaderContext.Provider>
};

export { HeaderContextProvider, useHeaderContext };
