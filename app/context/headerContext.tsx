'use client';

import { Result } from "@/@types/movie";
import { createContext, useContext, useState } from "react";

interface HeaderContextProps {
  selectPage: (buttonName: string) => void;
  handleGetMovie: (movie: Result) => void;
  activeButton: string;
  getMovie: Result | null;
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
  const [getMovie, setGetMovie] = useState<Result | null>(null);

  const selectPage = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  const handleGetMovie = (movie: Result) => {
    setGetMovie(movie);
    console.log(movie);
  }

  const attributes: HeaderContextProps = {
    selectPage,
    handleGetMovie,
    activeButton,
    getMovie,
  };

  return <HeaderContext.Provider value={attributes}>{children}</HeaderContext.Provider>
};

export { HeaderContextProvider, useHeaderContext };