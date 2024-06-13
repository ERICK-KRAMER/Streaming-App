'use client';

import { Result as Serie } from "@/@types/series";
import { Result as Movie } from "@/@types/movie";
import { createContext, useContext, useState, ReactNode } from "react";
import { API } from "../services/Movies";

type Media = Movie | Serie;

interface HeaderContextProps {
  selectPage: (buttonName: string) => void;
  handleGetMovie: (media: Media) => void;
  handleGetTitle: (title: string) => Promise<Media[]>;
  activeButton: string;
  media: Media | null;
  getTitle: Media[];
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
  const action = sessionStorage.getItem('action-button');

  const [activeButton, setActiveButton] = useState<string>('');

  const [media, setMedia] = useState<Media | null>(null);

  const [getTitle, setGetTitle] = useState<Media[]>([]);

  const selectPage = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  const handleGetMovie = (media: Media) => {
    setMedia(media);
    console.log(media);
  }

  const handleGetTitle = async (title: string) => {
    const data = await API.Search({ page: 1, type: 'movie', name: title });
    setGetTitle(data.results as Media[]);
    return data.results as Media[];
  }

  const attributes: HeaderContextProps = {
    selectPage,
    handleGetMovie,
    handleGetTitle,
    activeButton,
    media,
    getTitle,
  };

  return <HeaderContext.Provider value={attributes}>{children}</HeaderContext.Provider>
};

export { HeaderContextProvider, useHeaderContext };
