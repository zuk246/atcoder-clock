type ButtonProps = {
    children?: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    className?: string;
};

export function Button(props: ButtonProps) {
    return (
        <button
            type={props.type ?? 'button'}
            onClick={props.onClick}
            className={`${props.className} px-4 py-2 text-sm rounded-lg duration-300`}
        >
            {props.children}
        </button>
    );
}
