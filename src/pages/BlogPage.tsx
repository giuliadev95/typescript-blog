import { PostCard } from "../components/PostCard";
import BlogPostData from "../data/PlogPostData.ts";
import Layout from "../components/Layout";
import type { BlogPost } from "../types/BlogPost.ts";

export const BlogPage: React.FC = () => {
  return (
    <Layout>
      <div>
        {/** Title component */}
        <h1 className="text-[#97d4c7] text-5xl font-bold mb-2">
            Blog
        </h1>
        {BlogPostData.map((post:BlogPost) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </Layout>
  );
};
