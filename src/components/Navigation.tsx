import { useState } from "react";
import { Menu, X, Search, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/auth");
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-xl font-semibold text-primary">
              SmartHome
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/blog" className="text-gray-600 hover:text-primary transition-colors">
              Blog
            </a>
            <a href="/reviews" className="text-gray-600 hover:text-primary transition-colors">
              Reviews
            </a>
            <a href="/tutorials" className="text-gray-600 hover:text-primary transition-colors">
              Tutorials
            </a>
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleSignOut}>
              <LogOut className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
            <a
              href="/blog"
              className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors"
            >
              Blog
            </a>
            <a
              href="/reviews"
              className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors"
            >
              Reviews
            </a>
            <a
              href="/tutorials"
              className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors"
            >
              Tutorials
            </a>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={handleSignOut}
            >
              <LogOut className="h-5 w-5 mr-2" />
              Sign out
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};