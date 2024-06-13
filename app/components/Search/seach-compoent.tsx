import { InputHTMLAttributes } from "react";
interface SearchCompoenntProps extends InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
}

const SearchComponent: React.FC<SearchCompoenntProps> = ({children ,...rest}) => {
  return (
    <div className="flex justify-center items-center p-4 text-black w-[95%] py-10">
      <input type="text" placeholder="Search" {...rest} className="px-2 rounded-s h-10 outline-none w-full "/>
      {children}
    </div>
  )
}

export { SearchComponent };