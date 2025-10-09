import type {BlogPost} from "../types/BlogPost.ts";

interface BlogPostProps{
    post: BlogPost;
}

export const Post=({post} : BlogPostProps )=>{

    const formattedDate = post.createdAt.toLocaleDateString("it-IT", {
        day: "2-digit",
        month:"2-digit",
        year:"numeric",        
    }).replaceAll("/", "-");

    return(
        <article>
            {post.img.map((image, index)=> (
                <img key={index} src={image.imgUrl} alt={image.imgAlt}/>
            ))}
            <span>{post.category}</span>
            <time dateTime={post.createdAt.toISOString()}>
                {formattedDate}
            </time>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </article>
    )
}