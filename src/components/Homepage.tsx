import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, MapPin, DollarSign } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HomepageProps {
  onPageChange: (page: string) => void;
}

export function Homepage({ onPageChange }: HomepageProps) {
  const [destination, setDestination] = useState("");
  const [budget, setBudget] = useState("");
  const [dates, setDates] = useState("");

  const trendingDestinations = [
    {
      id: 1,
      name: "Agra, Uttar Pradesh",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWolMjBtYWhhbCUyMGluZGlhfGVufDF8fHx8MTc1NzkxNTE3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "₹12,500",
      duration: "3 days"
    },
    {
      id: 2,
      name: "Goa Beach Resort",
      image: "https://images.unsplash.com/photo-1668262120979-a1af71765107?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2ElMjBiZWFjaCUyMGluZGlhfGVufDF8fHx8MTc1NzkxNTE3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "₹18,900",
      duration: "4 days"
    },
    {
      id: 3,
      name: "Kerala Backwaters",
      image: "https://images.unsplash.com/photo-1680599022555-57fb95b64b5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZXJhbGElMjBiYWNrd2F0ZXJzJTIwaW5kaWF8ZW58MXx8fHwxNzU3ODcyOTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "₹15,700",
      duration: "5 days"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-[60vh] sm:h-[70vh] bg-cover bg-center flex items-center justify-center px-4"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 128, 128, 0.3), rgba(30, 144, 255, 0.3)), url('https://images.unsplash.com/photo-1647291718042-676c0428fc25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWolMjBtYWhhbCUyMGluZGlhfGVufDF8fHx8MTc1NzkxNTE3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
        }}
      >
        <div className="text-center text-white max-w-4xl px-4">
          <h1 className="font-montserrat text-3xl sm:text-4xl lg:text-5xl mb-4 leading-tight">
            Plan Your Perfect Journey
          </h1>
          <p className="text-lg sm:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Smart travel planning based on your budget, time, and preferences
          </p>

          {/* Search Box */}
          <Card className="bg-white/95 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl max-w-3xl mx-auto">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <div className="relative lg:col-span-1 sm:col-span-2">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-[#008080]" />
                  <Input
                    placeholder="Destination or Distance (km)"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="pl-10 h-12 rounded-xl border-gray-200 text-sm sm:text-base"
                  />
                </div>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 h-5 w-5 text-[#008080]" />
                  <Input
                    placeholder="Budget (₹)"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="pl-10 h-12 rounded-xl border-gray-200 text-sm sm:text-base"
                  />
                </div>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-5 w-5 text-[#008080]" />
                  <Input
                    type="date"
                    value={dates}
                    onChange={(e) => setDates(e.target.value)}
                    className="pl-10 h-12 rounded-xl border-gray-200 text-sm sm:text-base"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  onClick={() => onPageChange("plan")}
                  className="bg-[#008080] hover:bg-[#006666] text-white px-6 sm:px-8 py-3 rounded-xl h-12 text-sm sm:text-base w-full sm:w-auto"
                >
                  Plan My Trip
                </Button>
                <Button
                  onClick={() => onPageChange("recommendations")}
                  variant="outline"
                  className="bg-[#FF9500] hover:bg-[#e6850e] text-white border-[#FF9500] px-6 sm:px-8 py-3 rounded-xl h-12 text-sm sm:text-base w-full sm:w-auto"
                >
                  Smart Suggestion
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Trending Destinations */}
      <div className="py-12 sm:py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-montserrat text-2xl sm:text-3xl mb-4 text-gray-800">
            Trending Destinations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Discover popular destinations that match your budget and create unforgettable memories
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {trendingDestinations.map((destination) => (
            <Card key={destination.id} className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <ImageWithFallback
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-3 right-3 bg-[#FF9500] text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                  {destination.price}
                </Badge>
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="font-montserrat text-base sm:text-lg mb-2 text-gray-800">
                  {destination.name}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  {destination.duration} • Perfect for weekend getaway
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-montserrat text-2xl sm:text-3xl mb-4 text-gray-800">
              Why Choose TravelPlan?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="text-center p-6 sm:p-8 rounded-2xl shadow-md">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#008080] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="font-montserrat text-lg sm:text-xl mb-2">Budget-Friendly</h3>
              <p className="text-gray-600 text-sm sm:text-base">Smart recommendations that fit your budget perfectly</p>
            </Card>
            
            <Card className="text-center p-6 sm:p-8 rounded-2xl shadow-md">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#1E90FF] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="font-montserrat text-lg sm:text-xl mb-2">Smart Planning</h3>
              <p className="text-gray-600 text-sm sm:text-base">AI-powered itineraries based on time and distance</p>
            </Card>
            
            <Card className="text-center p-6 sm:p-8 rounded-2xl shadow-md sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#FF9500] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="font-montserrat text-lg sm:text-xl mb-2">Real-time Updates</h3>
              <p className="text-gray-600 text-sm sm:text-base">Live crowd predictions and weather alerts</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}