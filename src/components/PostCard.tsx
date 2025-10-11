import { FaAngleRight } from "react-icons/fa6";
import type {BlogPost} from "../types/BlogPost.ts";
import { Link } from "react-router-dom";

interface BlogPostProps{
    post: BlogPost;
}

export const PostCard=({post} : BlogPostProps )=>{
    console.log(post.img[0].imgUrl);
    //const imageSrc= [post.img[0].imgUrl];

    const formattedDate = post.createdAt.toLocaleDateString("it-IT", {
        day: "2-digit",
        month:"2-digit",
        year:"numeric",        
    }).replaceAll("/", "-");

    return(
        <div className="lg:flex lg:flex-col lg:items-center">
            <div className="flex flex-col w-[100%] lg:w-[50%]">       
                <article className="p-2 h-fit border-[1px] border-[#1f232c] mb-[4rem] flex flex-col items-start gap-4">        
                    <img 
                        src={(post.img[0].imgUrl)}
                        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", borderRadius:"2%"}}
                    />
                    <h2 className="font-sans text-[#ffffff] text-3xl">
                        {post.title}
                    </h2>
                    <div className="flex items-baseline gap-[2rem]">
                        <p className="font-sans text-[#f53b57] text-normal">
                            {"# "}{post.category.name}
                        </p> 
                        <time className="font-sans text-[#bac1b8] text-sm" dateTime={post.createdAt.toISOString()}>
                            {formattedDate}
                        </time>
                    </div>
                    <p className="font-sans text-[#a1a1aa] text-md text-start">
                        {post.firstLines} {"..."}
                    </p>
                    <Link to={`/post/${post.id}`}
                        className="flex gap-2 items-center justify-start bg-[#f53b57] text-white font-semibold py-2 px-4 rounded-4xl"
                    >
                        Leggi 
                        <FaAngleRight/>
                    </Link>
                </article>
            </div>
        </div>
    )
}