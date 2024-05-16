import { InputHTMLAttributes } from "react";

interface SearchCompoenntProps extends InputHTMLAttributes<HTMLInputElement> {}

const SearchComponent: React.FC<SearchCompoenntProps> = ({...rest}) => {
  return (
    <div className="flex justify-center items-center p-4">
      <input type="text" placeholder="Search" {...rest} className="px-2 rounded h-8 outline-none w-[80%]"/>
    </div>
  )
}

export { SearchComponent };