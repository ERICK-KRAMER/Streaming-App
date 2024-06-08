'use client';

import { createContext, useContext, useState } from "react";

interface HeaderContextProps {
  selectPage: (buttonName: string) => void;
  activeButton: string;
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

  const selectPage = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  const attributes: HeaderContextProps = {
    activeButton,
    selectPage,
  };

  return <HeaderContext.Provider value={attributes}>{children}</HeaderContext.Provider>
};

export { HeaderContextProvider, useHeaderContext };
