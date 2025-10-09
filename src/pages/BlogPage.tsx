import { Post } from "../components/Post";
import BlogPostData from "../data/PlogPostData.ts";
import Layout from "../components/Layout.tsx";

export const BlogPage: React.FC=()=> {
    return(
        <Layout>
            <h1>Blog</h1>
            <Post post={BlogPostData[0]} />
        </Layout>
    )
}