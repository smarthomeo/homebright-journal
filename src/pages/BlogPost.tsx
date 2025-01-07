import { useParams } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { BlogPost as BlogPostType } from "@/types/blog";
import { toast } from "sonner";

const BlogPost = () => {
  const { id } = useParams();
  
  const { data: post, isLoading, error } = useQuery({
    queryKey: ['blog', id],
    queryFn: async () => {
      console.log("Fetching blog post with ID:", id);
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) {
        console.error("Error fetching blog post:", error);
        toast.error("Failed to load blog post");
        throw error;
      }
      
      return data as BlogPostType;
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <main className="max-w-4xl mx-auto px-4 py-16">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <main className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600">Error Loading Blog Post</h1>
            <p className="mt-2 text-gray-600">Please try again later</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <article className="prose lg:prose-xl">
          <img
            src={post?.image}
            alt={post?.title}
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
          <h1 className="text-4xl font-bold text-primary mb-4">{post?.title}</h1>
          <div className="mb-8">
            <span className="inline-block bg-secondary px-3 py-1 rounded-full text-sm font-medium text-primary">
              {post?.category}
            </span>
            <span className="ml-4 text-gray-500">
              {new Date(post?.created_at || '').toLocaleDateString()}
            </span>
          </div>
          <div className="mt-8 text-gray-700 leading-relaxed">
            {post?.content}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;