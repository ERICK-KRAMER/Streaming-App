import { ButtonHTMLAttributes, forwardRef } from "react";

type HeaderButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const HeaderButton = forwardRef<HTMLButtonElement, HeaderButtonProps>(
  ({ type = 'button', name, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        {...props}
        className={`text-green-500 hover:opacity-90 p-2 transition duration-300  ${className}`}
      >
        {name}
      </button>
    )
  }
)

export { HeaderButton };