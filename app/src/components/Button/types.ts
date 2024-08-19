import { MouseEvent } from "react";

export enum ButtonSize {
    SM,
    MD,
    LG,
    XL,
    XXL,
}

export enum ButtonType {
    FILLED,
    OUTLINE,
    TEXT,
    DESTRUCTIVE,
}

export type ButtonProps = {
    size: ButtonSize;
    type: ButtonType;
    color?: string;
    minWidth?: string;
    iconLeading?: React.ReactNode;
    iconTrailing?: React.ReactNode;
    disabled?: boolean;
    onClick?: (ev: MouseEvent) => void;
}
