// BlogPost.tsx
import { useParams } from "react-router-dom";

const SingleBlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Post {id}</h1>
      <p>Contenuto del post qui...</p>
    </div>
  );
};

export default SingleBlogPost;
