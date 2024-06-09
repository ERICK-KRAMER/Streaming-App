import { Logo } from "./logo";
import { Search, Gift, User } from "lucide-react";
import { InputSearch } from "./input";
import { HeaderButton } from "./button";
import Link from "next/link";
import { useRef, useState } from "react";
import { useHeaderContext } from "@/app/context/headerContext";
import { Table, TableBody, TableCell, TableRow } from "../ui/table";
import Image from "next/image";

const Header = () => {

  const { activeButton, selectPage, handleGetTitle, getTitle, handleGetMovie } = useHeaderContext();
  const [showList, setShowList] = useState<boolean>(false);

  const searchRef = useRef<HTMLInputElement>(null);

  const handleSearchChange = async () => {
    if (searchRef.current?.value && searchRef.current.value.length > 0) {
      setShowList(true);
      await handleGetTitle(searchRef.current.value);
    } else {
      setShowList(false);
    }

  };

  return (
    <header className="bg-gradient-to-r from-transparent to-violet-800 backdrop-filter backdrop-opacity-80 flex justify-evenly items-center p-4 gap-4 relative z-10">
      <Logo />

      <nav className="text-white flex gap-4 p-4">
        <Link href={'/'}>
          <HeaderButton onClick={() => selectPage("home")} activeButton={activeButton} name="Home" />
        </Link>
        <Link href={'/tv'}>
          <HeaderButton onClick={() => selectPage("tvshow")} activeButton={activeButton} name="TvShow" />
        </Link>
        <Link href={'/movie'}>
          <HeaderButton onClick={() => selectPage("movies")} activeButton={activeButton} name="Movies" />
        </Link>
        <Link href={'#'}>
          <HeaderButton onClick={() => selectPage("new")} activeButton={activeButton} name="New" />
        </Link>
      </nav>

      <nav className="text-white flex justify-center items-center gap-4 relative">
        <div className="relative">
          <InputSearch
            ref={searchRef}
            className="rounded-xl bg-slate-400 h-8 w-72 outline-none px-3 relative z-20"
            onChange={handleSearchChange}
          />
          <Search className="absolute right-2 top-1 text-black cursor-pointer z-30" />

          <div className={`p-2 bg-white rounded border w-[400px] h-[435px] overflow-y-scroll absolute -right-[25%] top-10 z-50 ${showList ? '' : 'hidden'}`}>
            <Table>
              <TableBody>
                {getTitle && getTitle.map(item => (
                  <TableRow onClick={() => handleGetMovie(item)}>
                    <TableCell>
                      <Image
                        src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                        alt={item.title}
                        width={120}
                        height={10}
                      />
                    </TableCell>
                    <TableCell className="text-black">{item.title}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

        </div>
        <Gift className="cursor-pointer z-20" />
        <User className="cursor-pointer z-20" />
      </nav>

    </header>
  );
};

export { Header };
