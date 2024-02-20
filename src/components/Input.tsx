import { forwardRef } from 'react';

type InputProps = JSX.IntrinsicElements['input'] & {
    className?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, ...props }: InputProps, ref) => {
        return (
            <input
                className={`w-full px-4 py-2 bg-white text-black rounded-lg focus:outline-none ring-1 ring-blue-400 focus:ring-2 focus:ring-blue-500 duration-300 focus:ring-opacity-50 ${className}`}
                {...props}
                ref={ref}
            />
        );
    }
);

export { Input };
