import { useParams } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const BlogPost = () => {
  const { id } = useParams();
  
  console.log("Rendering blog post with ID:", id);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <article className="prose lg:prose-xl">
          <h1>Blog Post {id}</h1>
          <p>This is a placeholder for blog post content. Once Supabase is integrated, this will display the actual article content.</p>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;