import { InputSearch } from "./input";

const Header = () => {
  return (
    <header className="bg-neutral-950">
      <div>Film-guide</div>
      <nav>
        <ul>
          <li>Filmes</li>
          <li>Pessoas</li>
          <li>Perfil</li>
        </ul>
      </nav>
      <InputSearch />
    </header>
  )
}

export { Header };

