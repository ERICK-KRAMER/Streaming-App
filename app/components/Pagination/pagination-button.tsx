import { ButtonHTMLAttributes } from "react";

export interface ButtonPaginationProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string
}

const ButtonPagination: React.FC<ButtonPaginationProps> = ({name, ...rest}) => {
  return(
    <button className=" bg-blue-500 rounded text-white p-2 text-center hover:bg-blue-600 hover:shadow-lg hover:scale-90 transition duration-300" {...rest}>{name}</button>
  )
}

export { ButtonPagination }; 