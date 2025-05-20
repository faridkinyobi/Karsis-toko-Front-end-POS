import React from "react";
type Variant =
    | "sm-normal"
    | "base-light"
    | "base-medium"
    | "base-semibold"
    | "lg-light"
    | "lg-medium"
    | "lg-semibold"
    | "xl-medium"
    | "xl-semibold";
type Props = {
    children: React.ReactNode;
    baseLight?: boolean;
    variant?: Variant;
    className?: string;
};
const variantData: Record<Variant, string> = {
    "sm-normal": "text-sm font-normal",
    "base-light": "text-base font-light",
    "base-semibold": "text-base font-semibold",
    "base-medium": "text-base font-medium",
    "lg-light": "text-lg font-light",
    "lg-medium": "text-lg font-medium",
    "lg-semibold": "text-lg font-semibold",
    "xl-medium": "text-xl font-medium",
    "xl-semibold": "text-xl font-semibold",
};
export default function Text({
    children,
    variant = "sm-normal",
    className,
}: Props) {
    return (
        <p className={` ${className} ${variantData[variant]} capitalize`}>
            {children}
        </p>
    );
}
