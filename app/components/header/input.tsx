import { forwardRef, InputHTMLAttributes } from 'react';

type InputSearchProps = InputHTMLAttributes<HTMLInputElement>;

const InputSearch = forwardRef<HTMLInputElement, InputSearchProps>(
  ({ type = 'text', name = '', ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        name={name}
        className="rounded-xl bg-slate-400 h-8 w-72 outline-none px-3 "
        {...props} />
    );
  }
);

export { InputSearch };
