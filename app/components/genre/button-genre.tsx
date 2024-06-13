import { ButtonHTMLAttributes } from "react";

interface GenreButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string
}

const GenreButton: React.FC<GenreButtonProps> = ({name, ...rest}) => {
  return(
    <button className="h-10 w-10 p-1 px-4 bg-neutral-700 rounded-full hover:bg-red-600 transition duration-500 hover:scale-90 flex justify-center items-center" {...rest}>{name}</button>
  )
}

export { GenreButton };