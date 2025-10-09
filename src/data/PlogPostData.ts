import type { BlogPost } from "../types/BlogPost";

// Declare an array of objects instanced from the Interface BlogPost
const BlogPostData : BlogPost[] = [
    {
        id: 0,
        title: "Titolo0",
        firstLines:"Noi siamo le prime righe",
        body:"I'm the body, not very long, uh?",
        img:[
            {
                imgUrl:"/about-img.png",
                imgAlt:"A teacher giving an online class"
            }],
        createdAt: new Date('09/10/2025'),
        category:"generale"
    }
]

export default BlogPostData;