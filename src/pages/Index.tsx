import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { FeaturedPosts } from "@/components/FeaturedPosts";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <FeaturedPosts />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;