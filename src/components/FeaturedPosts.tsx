import { Card } from "./ui/card";
import { useQuery } from "@tanstack/react-query";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import { BlogPost } from "@/types/blog";
import { toast } from "sonner";

export const FeaturedPosts = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ['featuredPosts'],
    queryFn: async () => {
      console.log("Fetching featured posts");
      
      if (!isSupabaseConfigured()) {
        console.warn("Supabase is not configured. Please set up your environment variables.");
        toast.error("Supabase configuration is missing. Please check your environment variables.");
        return [];
      }

      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(3);
      
      if (error) {
        console.error("Error fetching featured posts:", error);
        toast.error("Failed to load featured posts");
        throw error;
      }
      
      return data as BlogPost[];
    },
  });

  if (isLoading) {
    return (
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary mb-8">Featured Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts?.map((post) => (
            <Card
              key={post.id}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-primary">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">{post.title}</h3>
                <p className="text-gray-600">{post.excerpt}</p>
                <a
                  href={`/blog/${post.id}`}
                  className="inline-block mt-4 text-accent hover:text-accent/80 font-medium transition-colors"
                >
                  Read More →
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};