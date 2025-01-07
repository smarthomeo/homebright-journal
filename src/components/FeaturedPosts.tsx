import { Card } from "./ui/card";

interface Post {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  image: string;
}

const featuredPosts: Post[] = [
  {
    id: 1,
    title: "The Ultimate Smart Home Setup Guide 2024",
    excerpt: "Everything you need to know about creating your perfect smart home ecosystem.",
    category: "Guides",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Top 10 Smart Thermostats Compared",
    excerpt: "An in-depth comparison of the best smart thermostats available today.",
    category: "Reviews",
    image: "https://images.unsplash.com/photo-1585435421671-0c16764628ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Home Security: Smart Cameras Guide",
    excerpt: "Protect your home with the latest in smart security technology.",
    category: "Security",
    image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
];

export const FeaturedPosts = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary mb-8">Featured Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
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