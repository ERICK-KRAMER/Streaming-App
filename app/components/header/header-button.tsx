import { ButtonHTMLAttributes } from "react";

interface HeaderButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children : React.ReactNode;
}


const HeaderButton: React.FC<HeaderButtonProps> = ({children ,...rest}) => {
  return(
    <button {...rest}>{children}</button>
  )
}

export { HeaderButton };