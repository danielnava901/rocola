import React from "react";
import clsx from "clsx";

type TextProps = {
    as?: React.ElementType; // 'h1' | 'h2' | 'p' | 'span', etc.
    children: React.ReactNode;
    weight?: "normal" | "medium" | "semibold" | "bold";
    size?: "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
    color?: string;
    className?: string;
    onClick?: () => void;
};

const weightMap = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
};

const sizeMap = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
};

export const Text: React.FC<TextProps> = (
    {
        as: Component = "p",
        children,
        weight = "normal",
        size = "base",
        color = "text-black",
        className = "",
        onClick = () => {}
    }) => {
    return (
        <Component
            className={clsx(
                weightMap[weight],
                sizeMap[size],
                color,
                className
            )}
            onClick={onClick}
        >
            {children}
        </Component>
    );
};
