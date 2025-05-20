import React from "react";

type Option = {
    title: string;
};

type Props = {
    placeholder: string;
    className: string;
    optionData: Option[];
};

export default function SelectOption({
    optionData,
    placeholder,
    className,
}: Props) {
    return (
        <select
            defaultValue="elek"
            className={`select ${className}  focus:outline-0 w-20 `}
        >
            <option value="" disabled={true}>
                {placeholder}
            </option>
            {optionData.map((option) => (
                <option key={option.title} value={option.title}>
                    {option.title}
                </option>
            ))}
        </select>
    );
}
