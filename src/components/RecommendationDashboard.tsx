import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Slider } from "./ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Separator } from "./ui/separator";
import { MapPin, Clock, DollarSign, Filter, Eye } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface RecommendationDashboardProps {
  onPageChange: (page: string) => void;
}

export function RecommendationDashboard({ onPageChange }: RecommendationDashboardProps) {
  const [budgetRange, setBudgetRange] = useState([5000, 25000]);
  const [distanceFilter, setDistanceFilter] = useState("");
  const [stayFilter, setStayFilter] = useState("");

  const destinations = [
    {
      id: 1,
      name: "Agra Heritage Tour",
      location: "Agra, Uttar Pradesh",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWolMjBtYWhhbCUyMGluZGlhfGVufDF8fHx8MTc1NzkxNTE3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "3 days",
      cost: 12500,
      budgetStatus: "within", // within, near, over
      distance: "230 km"
    },
    {
      id: 2,
      name: "Goa Beach Paradise",
      location: "Goa",
      image: "https://images.unsplash.com/photo-1668262120979-a1af71765107?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2ElMjBiZWFjaCUyMGluZGlhfGVufDF8fHx8MTc1NzkxNTE3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "4 days",
      cost: 18900,
      budgetStatus: "near",
      distance: "450 km"
    },
    {
      id: 3,
      name: "Kerala Backwater Cruise",
      location: "Alleppey, Kerala",
      image: "https://images.unsplash.com/photo-1680599022555-57fb95b64b5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZXJhbGElMjBiYWNrd2F0ZXJzJTIwaW5kaWF8ZW58MXx8fHwxNzU3ODcyOTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "5 days",
      cost: 22800,
      budgetStatus: "over",
      minRequired: 25000,
      distance: "680 km"
    },
    {
      id: 4,
      name: "Royal Rajasthan",
      location: "Jaipur, Rajasthan",
      image: "https://images.unsplash.com/photo-1673807095836-0904031b4f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWphc3RoYW4lMjBqYWlwdXIlMjBwYWxhY2V8ZW58MXx8fHwxNzU3OTE1MjQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "4 days",
      cost: 16700,
      budgetStatus: "within",
      distance: "280 km"
    },
    {
      id: 5,
      name: "Himalayan Adventure",
      location: "Manali, Himachal Pradesh",
      image: "https://images.unsplash.com/photo-1743634360054-63490c53da40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW1hY2hhbCUyMG1vdW50YWlucyUyMG1hbmFsaXxlbnwxfHx8fDE3NTc4NDYxMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "6 days",
      cost: 19200,
      budgetStatus: "near",
      distance: "540 km"
    },
    {
      id: 6,
      name: "Karnataka Temple Trail",
      location: "Hampi, Karnataka",
      image: "https://images.unsplash.com/photo-1729826753161-23da6fe74c6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwZGVzdGluYXRpb258ZW58MXx8fHwxNzU3ODM3MjY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "3 days",
      cost: 11800,
      budgetStatus: "within",
      distance: "320 km"
    }
  ];

  const getBudgetStatusColor = (status: string) => {
    switch (status) {
      case "within":
        return "bg-green-100 text-green-800 border-green-200";
      case "near":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "over":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getBudgetStatusText = (destination: any) => {
    switch (destination.budgetStatus) {
      case "within":
        return "Within Budget";
      case "near":
        return "Near Limit";
      case "over":
        return `Minimum Required: ₹${destination.minRequired?.toLocaleString()}`;
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="font-montserrat text-2xl sm:text-3xl mb-4 text-gray-800">
            Recommended Destinations
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-2">
            Based on your preferences, here are the perfect destinations for your next adventure
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <Card className="rounded-2xl shadow-lg lg:sticky lg:top-8">
              <CardHeader className="bg-[#008080] text-white rounded-t-2xl">
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <Filter className="w-4 h-4 sm:w-5 sm:h-5" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                {/* Budget Range */}
                <div>
                  <label className="font-medium mb-3 block">
                    Budget Range: ₹{budgetRange[0].toLocaleString()} - ₹{budgetRange[1].toLocaleString()}
                  </label>
                  <Slider
                    value={budgetRange}
                    onValueChange={setBudgetRange}
                    max={50000}
                    min={5000}
                    step={1000}
                    className="w-full"
                  />
                </div>

                <Separator />

                {/* Distance Filter */}
                <div>
                  <label className="font-medium mb-3 block">Distance</label>
                  <Select value={distanceFilter} onValueChange={setDistanceFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Any distance" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Any distance</SelectItem>
                      <SelectItem value="0-300">0 - 300 km</SelectItem>
                      <SelectItem value="300-500">300 - 500 km</SelectItem>
                      <SelectItem value="500+">500+ km</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Separator />

                {/* Stay Type Filter */}
                <div>
                  <label className="font-medium mb-3 block">Stay Type</label>
                  <Select value={stayFilter} onValueChange={setStayFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Any stay type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Any stay type</SelectItem>
                      <SelectItem value="budget">Budget</SelectItem>
                      <SelectItem value="budget-comfort">Budget + Comfort</SelectItem>
                      <SelectItem value="comfort-prime">Comfort + Prime</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Budget Breakdown */}
                <Separator />
                <div>
                  <h3 className="font-medium mb-3">Estimated Budget Breakdown</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Travel</span>
                      <span>₹3,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Stay</span>
                      <span>₹6,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Food</span>
                      <span>₹2,800</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tickets</span>
                      <span>₹1,200</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Transport</span>
                      <span>₹1,500</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-medium">
                      <span>Total</span>
                      <span>₹15,000</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Destination Grid */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {destinations.map((destination) => (
                <Card key={destination.id} className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  {/* Destination Image */}
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <ImageWithFallback
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <Badge 
                      className={`absolute top-3 right-3 text-xs sm:text-sm px-2 py-1 ${getBudgetStatusColor(destination.budgetStatus)} border`}
                    >
                      {destination.budgetStatus === 'over' ? `Min: ₹${destination.minRequired?.toLocaleString()}` : getBudgetStatusText(destination)}
                    </Badge>
                  </div>

                  <CardContent className="p-4 sm:p-6">
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-montserrat text-base sm:text-lg text-gray-800 mb-1">
                          {destination.name}
                        </h3>
                        <p className="text-gray-600 text-xs sm:text-sm flex items-center gap-1">
                          <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                          {destination.location}
                        </p>
                      </div>

                      <div className="flex items-center justify-between text-xs sm:text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                          {destination.duration}
                        </span>
                        <span>{destination.distance}</span>
                      </div>

                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-[#008080]" />
                          <span className="text-lg sm:text-xl font-montserrat">
                            ₹{destination.cost.toLocaleString()}
                          </span>
                        </div>
                        <Button
                          onClick={() => onPageChange("itinerary")}
                          className="bg-[#008080] hover:bg-[#006666] text-white rounded-xl px-3 sm:px-4 py-2 flex items-center gap-1 w-full sm:w-auto text-xs sm:text-sm"
                        >
                          <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                          View Itinerary
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-6 sm:mt-8">
              <Button variant="outline" className="px-6 sm:px-8 py-3 rounded-xl w-full sm:w-auto">
                Load More Destinations
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}