import type { Image } from "./Image";
import type { Category } from "./Category";

export interface BlogPost {
    id: number;
    title: string;
    firstLines: string;
    body: string;
    createdAt:Date;
    category:Category;
    img: Image[];
}

