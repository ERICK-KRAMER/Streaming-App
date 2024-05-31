import { InputSearch } from "./input";
import { HeaderButton } from "./button";

const Header = () => {
  return (
    <header className="bg-neutral-950 flex justify-center items-center flex-col gap-4 p-6">
      <h1 className="text-4xl text-white font-thin">Film-guide</h1>
      <nav className="flex gap-6">
        <HeaderButton name="Filme" />
        <HeaderButton name="Pessoas" />
        <HeaderButton name="Perfil" />
      </nav>
      <InputSearch placeholder="Busque por filmes ou pessoas" />
    </header>
  )
}

export { Header };
