import type { BlogPost } from "../types/BlogPost";
import { categories } from "../types/Category";
import Post1 from "../mdx/post1.mdx";

// Declare an array of objects instanced from the Interface BlogPost
const BlogPostData : BlogPost[] = [
    {
        id: 0,
        title: "La prima lezione",
        firstLines:`
            C’è sempre un po’ di emozione, 
            la prima volta che ci si collega per insegnare online. 
            Lo schermo diventa una finestra su volti nuovi, curiosi, 
            a volte timidi, pronti ad ascoltare. Per un aspirante tutor, 
            quella prima lezione è molto più di un incontro: è l’inizio 
            di un percorso di fiducia, empatia e scoperta reciproca.
        `,
        body:Post1,
        img:[
            {
                imgUrl:"/man-gives-lesson.jpg",
                imgAlt:"A teacher giving an online class"
            }],
        createdAt: new Date('09/10/2025'),
        category: categories[0]
    },
    {
  id: 1,
  title: "Fare networking",
  firstLines: `
    Il networking è un'arte che richiede strategia e autenticità.
    *Connettersi* con le persone giuste può aprire porte inaspettate.
  `,
  body:Post1,
  img: [
    {
      imgUrl: "/people-interconnected.jpg",
      imgAlt: "People networking at an event",
    },
  ],
  createdAt: new Date('09/10/2025'),
  category: categories[1],
},
    {
        id: 2,
        title: "Titolo0",
        firstLines:"Noi siamo le prime righe",
       body: Post1,
        img:[
            {
                imgUrl:"/about-img.png",
                imgAlt:"A teacher giving an online class"
            }],
        createdAt: new Date('09/10/2025'),
        category: categories[1]
    },
    {
        id: 3,
        title: "Titolo0",
        firstLines:"Noi siamo le prime righe",
       body: Post1,
        img:[
            {
                imgUrl:"/about-img.png",
                imgAlt:"A teacher giving an online class"
            }],
        createdAt: new Date('09/10/2025'),
        category: categories[2]
    },
    {
        id: 4,
        title: "Titolo0",
        firstLines:"Noi siamo le prime righe",
       body: Post1,
        img:[
            {
                imgUrl:"/about-img.png",
                imgAlt:"A teacher giving an online class"
            }],
        createdAt: new Date('09/10/2025'),
         category: categories[3]
    },
    {
        id: 5,
        title: "Titolo0",
        firstLines:"Noi siamo le prime righe",
       body: Post1,
        img:[
            {
                imgUrl:"/about-img.png",
                imgAlt:"A teacher giving an online class"
            }],
        createdAt: new Date('09/10/2025'),
         category: categories[3]
    },
    {
        id: 6,
        title: "Titolo0",
        firstLines:"Noi siamo le prime righe",
       body: Post1,
        img:[
            {
                imgUrl:"/about-img.png",
                imgAlt:"A teacher giving an online class"
            }],
        createdAt: new Date('09/10/2025'),
         category: categories[3]
    },
    {
        id: 7,
        title: "Titolo0",
        firstLines:"Noi siamo le prime righe",
       body: Post1,
        img:[
            {
                imgUrl:"/about-img.png",
                imgAlt:"A teacher giving an online class"
            }],
        createdAt: new Date('09/10/2025'),
         category: categories[3]
    },
    {
        id: 8,
        title: "Titolo0",
        firstLines:"Noi siamo le prime righe",
       body: Post1,
        img:[
            {
                imgUrl:"/about-img.png",
                imgAlt:"A teacher giving an online class"
            }],
        createdAt: new Date('09/10/2025'),
         category: categories[3]
    },
]

export default BlogPostData;