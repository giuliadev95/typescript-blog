import type {ComponentType } from "react";

export interface NavItem {
    name: string;
    icon: ComponentType;
    onClick?:() => void;
}