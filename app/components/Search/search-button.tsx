import { Search } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

interface SearchButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const SearchButton: React.FC <SearchButtonProps> = ({...rest}) => {
  return <button className="flex justify-center items-center w-10 bg-yellow-400 rounded-e-md h-10" {...rest}><Search/></button>
}

export { SearchButton };