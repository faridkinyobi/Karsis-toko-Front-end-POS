import React from "react";

type Props = {
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
    disable?: boolean;
    outline?: boolean;
    type?: "button" | "submit" | "reset";
};

export default function Button({
    onClick,
    children,
    className,
    disable,
    type,
}: Props) {
    return (
        <button
            className={`${className} btn capitalize `}
            onClick={onClick}
            disabled={disable}
            type={type}
        >
            {children}
        </button>
    );
}
