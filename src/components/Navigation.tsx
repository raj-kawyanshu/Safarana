import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const menuItems = [
    { label: "Home", page: "home" },
    { label: "Plan Trip", page: "plan" },
    { label: "My Bookings", page: "bookings" },
    { label: "Rentals", page: "rentals" },
    { label: "Subscription", page: "subscription" },
    { label: "Contact", page: "contact" }
  ];

  const handlePageChange = (page: string) => {
    onPageChange(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => handlePageChange("home")}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-[#008080] to-[#1E90FF] rounded-lg mr-3"></div>
            <span className="font-montserrat font-bold text-lg sm:text-xl text-[#008080]">TravelPlan</span>
          </div>

          {/* Desktop Menu Items */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handlePageChange(item.page)}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  currentPage === item.page
                    ? "text-[#008080] border-b-2 border-[#008080]"
                    : "text-gray-600 hover:text-[#008080]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop Login/Signup */}
          <div className="hidden md:flex space-x-3">
            <Button variant="ghost" className="text-gray-600 hover:text-[#008080]">
              Login
            </Button>
            <Button 
              className="bg-[#008080] hover:bg-[#006666] text-white rounded-lg px-6"
            >
              Sign Up
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handlePageChange(item.page)}
                  className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors rounded-lg ${
                    currentPage === item.page
                      ? "text-[#008080] bg-[#008080]/10"
                      : "text-gray-600 hover:text-[#008080] hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Login/Signup */}
              <div className="pt-4 border-t space-y-2">
                <Button variant="ghost" className="w-full text-gray-600 hover:text-[#008080]">
                  Login
                </Button>
                <Button 
                  className="w-full bg-[#008080] hover:bg-[#006666] text-white rounded-lg"
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}