import { useState } from "react";
import { Logo } from "./logo";
import { Search, Gift, User } from "lucide-react";

const Header = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <header className="bg-gradient-to-r from-transparent to-violet-800 backdrop-filter backdrop-opacity-80 flex justify-center items-center p-4 gap-4 relative">

      <Logo />

      <nav className="text-white flex gap-4 p-4 text-opacity-75">
        <button className="flex flex-col justify-center items-center relative">
          Home
          <span className=" absolute w-2 h-2 bg-cyan-200 rounded-full -bottom-2 hidden"></span>
        </button>

        <button className="flex flex-col justify-center items-center relative">
          TvShow
          <span className=" absolute w-2 h-2 bg-cyan-200 rounded-full -bottom-2 hidden"></span>
        </button>

        <button className="flex flex-col justify-center items-center relative">
          Movies
          <span className=" absolute w-2 h-2 bg-cyan-200 rounded-full -bottom-2 hidden"></span>
        </button>

        <button className="flex flex-col justify-center items-center relative">
          New
          <span className=" absolute w-2 h-2 bg-cyan-200 rounded-full -bottom-2 hidden"></span>
        </button>
      </nav>

      <nav className="text-white flex justify-center items-center gap-4">
        <div className="relative">
          <input
            type="text"
            className="rounded-xl bg-slate-400 h-8 w-72 outline-none px-3 "
          />
          <Search className="absolute right-2 top-1 text-black" />
        </div>
        <Gift className="cursor-pointer" />
        <User className="cursor-pointer" />
      </nav>

    </header>
  )
}

export { Header };
