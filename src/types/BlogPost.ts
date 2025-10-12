import type { Image } from "./Image";
import type { Category } from "./Category";
import type { ComponentType } from "react";

export interface BlogPost {
    id: number;
    title: string;
    firstLines: string;
    body: ComponentType;
    createdAt:Date;
    category:Category;
    img: Image[];
}

