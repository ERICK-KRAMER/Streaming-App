import { forwardRef, InputHTMLAttributes } from 'react';

type InputSearchProps = InputHTMLAttributes<HTMLInputElement>;

const InputSearch = forwardRef<HTMLInputElement, InputSearchProps>(
  ({ type = 'text', name = '', ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        name={name}
        className='p-2 bg-neutral-200 rounded outline-none max-sm:w-full'
        {...props} />
    );
  }
);

export { InputSearch };
