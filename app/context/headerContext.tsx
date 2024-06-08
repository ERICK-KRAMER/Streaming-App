'use client';

import { Result as Serie } from "@/@types/series";
import { Result as Movie } from "@/@types/movie";
import { createContext, useContext, useState } from "react";

interface HeaderContextProps {
  selectPage: (buttonName: string) => void;
  handleGetMovie: (movie: Movie | Serie) => void;
  activeButton: string;
  Movie: Movie | Serie | null;
}

const HeaderContext = createContext<HeaderContextProps>({} as HeaderContextProps);

const useHeaderContext = () => {
  const context = useContext<HeaderContextProps>(HeaderContext);

  if (context === undefined) {
    throw new Error('useHeaderContext must be used within a HeaderContextProvider');
  }

  return context;
};

const HeaderContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeButton, setActiveButton] = useState<string>("home");
  const [Movie, setMovie] = useState<Movie | Serie | null>(null);

  const selectPage = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  const handleGetMovie = (movie: Movie | Serie) => {
    setMovie(movie);
    console.log(movie);
  }

  const attributes: HeaderContextProps = {
    selectPage,
    handleGetMovie,
    activeButton,
    Movie,
  };

  return <HeaderContext.Provider value={attributes}>{children}</HeaderContext.Provider>
};

export { HeaderContextProvider, useHeaderContext };