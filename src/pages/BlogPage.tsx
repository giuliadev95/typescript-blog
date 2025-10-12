import React, { useState } from "react";
import Layout from "../components/Layout";
import BlogPostData from "../data/BlogPostData.ts";
import type { BlogPost } from "../types/BlogPost.ts";
import { PostCard } from "../components/PostCard";
import { Pagination } from "../components/Pagination";

export const BlogPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  // Number of posts per page
  const postsPerPage = 6;

  // Posts to show peer page are displayed automatically
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = BlogPostData.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <Layout>
      <h1 className="text-[#97d4c7] text-5xl font-bold mb-6">
        Blog
      </h1>

      <div className="mb-4">
        {/* Pagination component */}
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={BlogPostData.length}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>

      {/* Post card */}
      {currentPosts.map((post: BlogPost) => (
        <PostCard key={post.id} post={post}/>
      ))}

      {/* Pagination component */}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={BlogPostData.length}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </Layout>
  );
};
