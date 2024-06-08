import { ButtonHTMLAttributes, forwardRef } from "react";

interface HeaderButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  activeButton: string;
  name: string;
}

const HeaderButton = forwardRef<HTMLButtonElement, HeaderButtonProps>(
  ({ type = 'button', name, className, activeButton, ...props }, ref) => {
    const isActive = activeButton === name.toLowerCase();

    return (
      <button
        ref={ref}
        type={type}
        {...props}
        className={`flex flex-col justify-center items-center relative ${isActive ? 'text-opacity-100' : 'text-opacity-75'
          } ${className}`}
      >
        {name}
        <span className={`absolute w-2 h-2 bg-cyan-200 rounded-full -bottom-2 ${isActive ? 'block' : 'hidden'}`}></span>
      </button>
    );
  }
);

export { HeaderButton };
