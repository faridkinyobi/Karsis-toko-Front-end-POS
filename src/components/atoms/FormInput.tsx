
type Props = {
    label?: string;
    placeholder: string;
    type: string;
    className: string;
    id?: string;
    required?: boolean;
    error?: string;
};

export default function FormInput({
    label,
    placeholder,
    type,
    className,
    id,
    required,
    error,
    ...props
}: Props) {
    return (
        <fieldset className="fieldset">
            {label ? (
                <legend className="fieldset-legend capitalize text-base">
                    {label}
                </legend>
            ) : (
                ""
            )}
            <input
                {...props}
                id={id}
                required={required}
                type={type}
                className={`${className} input focus:outline-none placeholder:capitalize `}
                placeholder={placeholder}
            />
            {error && <p className="text-error text-sm mt-1">{error}</p>}
        </fieldset>
    );
}
