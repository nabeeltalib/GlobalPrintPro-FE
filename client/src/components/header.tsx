import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Store, User, Heart } from "lucide-react";

interface HeaderProps {
  searchQuery: string;
  onSearch: (query: string) => void;
}

export default function Header({ searchQuery, onSearch }: HeaderProps) {
  const [inputValue, setInputValue] = useState(searchQuery);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(inputValue);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-promo-blue flex items-center">
              <Store className="mr-2 h-8 w-8" />
              PromoPlace
            </div>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <form onSubmit={handleSubmit} className="relative">
              <Input
                type="text"
                placeholder="Search promotional products..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-promo-blue focus:border-transparent"
              />
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            </form>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="text-gray-700 hover:text-promo-blue font-medium">
              Products
            </Link>
            <a href="#" className="text-gray-700 hover:text-promo-blue font-medium">
              Services
            </a>
            <a href="#" className="text-gray-700 hover:text-promo-blue font-medium">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-promo-blue font-medium">
              Contact
            </a>
          </nav>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
