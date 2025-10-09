import type { ImageData } from "./ImageData";

export interface BlogPost {
    id: number;
    title: string;
    firstLines: string;
    body: string;
    createdAt:Date;
    category: string;
    img: ImageData[];
}

