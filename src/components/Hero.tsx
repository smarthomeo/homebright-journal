import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="relative h-[70vh] flex items-center justify-center bg-gradient-to-b from-secondary to-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block animate-fadeIn opacity-0 [animation-delay:200ms] bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
          Welcome to SmartHome Blog
        </span>
        <h1 className="animate-fadeIn opacity-0 [animation-delay:400ms] text-4xl md:text-6xl font-bold text-primary mb-6">
          The Future of Home Automation
        </h1>
        <p className="animate-fadeIn opacity-0 [animation-delay:600ms] text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover the latest in smart home technology, expert reviews, and step-by-step tutorials
        </p>
        <div className="animate-fadeIn opacity-0 [animation-delay:800ms] space-x-4">
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
            Latest Articles
          </Button>
          <Button size="lg" variant="outline">
            Browse Reviews
          </Button>
        </div>
      </div>
    </div>
  );
};