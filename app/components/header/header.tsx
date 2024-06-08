import { useState } from "react";
import { Logo } from "./logo";
import { Search, Gift, User } from "lucide-react";
import { InputSearch } from "./input";
import { HeaderButton } from "./button";

const Header = () => {
  const [activeButton, setActiveButton] = useState<string>("home");

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <header className="bg-gradient-to-r from-transparent to-violet-800 backdrop-filter backdrop-opacity-80 flex justify-evenly items-center p-4 gap-4 relative">
      <Logo />

      <nav className="text-white flex gap-4 p-4">
        <HeaderButton onClick={() => handleButtonClick("home")} activeButton={activeButton} name="Home" />
        <HeaderButton onClick={() => handleButtonClick("tvshow")} activeButton={activeButton} name="TvShow" />
        <HeaderButton onClick={() => handleButtonClick("movies")} activeButton={activeButton} name="Movies" />
        <HeaderButton onClick={() => handleButtonClick("new")} activeButton={activeButton} name="New" />
      </nav>

      <nav className="text-white flex justify-center items-center gap-4">
        <div className="relative">
          <InputSearch
            type="text"
            className="rounded-xl bg-slate-400 h-8 w-72 outline-none px-3 "
          />
          <Search className="absolute right-2 top-1 text-black" />
        </div>
        <Gift className="cursor-pointer" />
        <User className="cursor-pointer" />
      </nav>
    </header>
  );
};

export { Header };
