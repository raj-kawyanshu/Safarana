import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Switch } from "./ui/switch";
import { Slider } from "./ui/slider";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { 
  Star, 
  MapPin, 
  Search, 
  Filter, 
  ChevronDown, 
  ChevronUp, 
  Shield, 
  ShieldCheck,
  Phone,
  MessageCircle,
  ExternalLink,
  Bike,
  Car
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface RentalProvider {
  id: string;
  name: string;
  location: string;
  state: string;
  image: string;
  vehicles: string[];
  startingPrice: number;
  verified: boolean;
  rating: number;
  reviewCount: number;
  contactNumber: string;
  providerType: "bike" | "car" | "both";
  logo?: string;
}

interface LocationGroup {
  location: string;
  state: string;
  providers: RentalProvider[];
}

export function RentalsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVehicleType, setSelectedVehicleType] = useState("all");
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [openSections, setOpenSections] = useState<string[]>(["Panchmarhi", "Jammu & Kashmir", "Manali"]);

  const rentalProviders: RentalProvider[] = [
    // Panchmarhi Providers
    {
      id: "pnc-001",
      name: "Green Valley Rentals",
      location: "Panchmarhi",
      state: "Madhya Pradesh",
      image: "https://images.unsplash.com/photo-1566444471488-f4179f0994f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3lhbCUyMGVuZmllbGQlMjBtb3RvcmN5Y2xlJTIwcmVudGFsfGVufDF8fHx8MTc1NzkxNjk0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      vehicles: ["Royal Enfield 350", "Activa 125"],
      startingPrice: 700,
      verified: true,
      rating: 4.2,
      reviewCount: 87,
      contactNumber: "+91 9876543201",
      providerType: "bike"
    },
    {
      id: "pnc-002",
      name: "Hilltop Motors",
      location: "Panchmarhi",
      state: "Madhya Pradesh",
      image: "https://images.unsplash.com/photo-1748342604000-53d94c778642?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjByZW50YWwlMjBzZXJ2aWNlJTIwaW5kaWF8ZW58MXx8fHwxNzU3OTE2OTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      vehicles: ["Swift Dzire", "Royal Enfield 500"],
      startingPrice: 1600,
      verified: true,
      rating: 4.1,
      reviewCount: 134,
      contactNumber: "+91 9876543202",
      providerType: "both"
    },
    
    // Jammu & Kashmir Providers
    {
      id: "jk-001",
      name: "Kashmir Bikes & Tours",
      location: "Jammu & Kashmir",
      state: "Jammu & Kashmir",
      image: "https://images.unsplash.com/photo-1581793746485-04698e79a4e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW1hbGF5YW4lMjBiaWtlJTIwdG91ciUyMHJlbnRhbHxlbnwxfHx8fDE3NTc5MTY5NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      vehicles: ["Himalayan RE", "Innova Crysta"],
      startingPrice: 1800,
      verified: true,
      rating: 4.8,
      reviewCount: 256,
      contactNumber: "+91 9876543203",
      providerType: "both"
    },
    {
      id: "jk-002",
      name: "Valley Adventures",
      location: "Jammu & Kashmir",
      state: "Jammu & Kashmir",
      image: "https://images.unsplash.com/photo-1566444471488-f4179f0994f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3lhbCUyMGVuZmllbGQlMjBtb3RvcmN5Y2xlJTIwcmVudGFsfGVufDF8fHx8MTc1NzkxNjk0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      vehicles: ["Royal Enfield Classic", "Scorpio N"],
      startingPrice: 1500,
      verified: false,
      rating: 3.9,
      reviewCount: 78,
      contactNumber: "+91 9876543204",
      providerType: "both"
    },
    
    // Manali Providers
    {
      id: "mnl-001",
      name: "Snowline Rentals",
      location: "Manali",
      state: "Himachal Pradesh",
      image: "https://images.unsplash.com/photo-1748342604000-53d94c778642?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjByZW50YWwlMjBzZXJ2aWNlJTIwaW5kaWF8ZW58MXx8fHwxNzU3OTE2OTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      vehicles: ["Bullet 500", "Thar 4x4"],
      startingPrice: 1600,
      verified: true,
      rating: 4.4,
      reviewCount: 192,
      contactNumber: "+91 9876543205",
      providerType: "both"
    },
    {
      id: "mnl-002",
      name: "Himalayan Riders",
      location: "Manali",
      state: "Himachal Pradesh",
      image: "https://images.unsplash.com/photo-1581793746485-04698e79a4e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW1hbGF5YW4lMjBiaWtlJTIwdG91ciUyMHJlbnRhbHxlbnwxfHx8fDE3NTc5MTY5NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      vehicles: ["Royal Enfield 350", "Bullet 500", "Activa 125"],
      startingPrice: 800,
      verified: true,
      rating: 4.6,
      reviewCount: 298,
      contactNumber: "+91 9876543206",
      providerType: "bike"
    },
    {
      id: "mnl-003",
      name: "Mountain Motors",
      location: "Manali", 
      state: "Himachal Pradesh",
      image: "https://images.unsplash.com/photo-1748342604000-53d94c778642?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjByZW50YWwlMjBzZXJ2aWNlJTIwaW5kaWF8ZW58MXx8fHwxNzU3OTE2OTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      vehicles: ["Swift Dzire", "Innova Crysta", "Fortuner"],
      startingPrice: 2200,
      verified: false,
      rating: 4.0,
      reviewCount: 156,
      contactNumber: "+91 9876543207",
      providerType: "car"
    }
  ];

  // Filter providers based on current filters
  const filteredProviders = rentalProviders.filter(provider => {
    const matchesSearch = provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         provider.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         provider.vehicles.some(v => v.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesVehicleType = selectedVehicleType === "all" || 
                              (selectedVehicleType === "bike" && (provider.providerType === "bike" || provider.providerType === "both")) ||
                              (selectedVehicleType === "car" && (provider.providerType === "car" || provider.providerType === "both"));
    
    const matchesVerified = !verifiedOnly || provider.verified;
    
    const matchesPrice = provider.startingPrice >= priceRange[0] && provider.startingPrice <= priceRange[1];
    
    const matchesLocation = selectedLocation === "all" || provider.location === selectedLocation;

    return matchesSearch && matchesVehicleType && matchesVerified && matchesPrice && matchesLocation;
  });

  // Group filtered providers by location
  const groupedProviders = filteredProviders.reduce((groups: LocationGroup[], provider) => {
    const existingGroup = groups.find(group => group.location === provider.location);
    if (existingGroup) {
      existingGroup.providers.push(provider);
    } else {
      groups.push({
        location: provider.location,
        state: provider.state,
        providers: [provider]
      });
    }
    return groups;
  }, []);

  const toggleSection = (location: string) => {
    setOpenSections(prev => 
      prev.includes(location) 
        ? prev.filter(l => l !== location)
        : [...prev, location]
    );
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-3 h-3 sm:w-4 sm:h-4 ${
          index < Math.floor(rating)
            ? "fill-yellow-400 text-yellow-400"
            : index < rating
            ? "fill-yellow-200 text-yellow-400"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="font-montserrat text-2xl sm:text-3xl mb-4 text-gray-800">
            Find Verified Local Rentals
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-2 mb-6">
            We connect you with local verified bike & car rental providers.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search rentals by location or vehicle type"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-3 sm:py-4 rounded-2xl border-2 border-gray-200 focus:border-[#008080] text-sm sm:text-base"
            />
          </div>
        </div>

        {/* Filters */}
        <Card className="mb-6 sm:mb-8 rounded-2xl shadow-lg">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-[#008080]" />
              <h3 className="font-medium text-sm sm:text-base">Filter Results</h3>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {/* Location Filter */}
              <div>
                <label className="block text-sm font-medium mb-2">Location</label>
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="All locations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All locations</SelectItem>
                    <SelectItem value="Panchmarhi">📍 Panchmarhi, MP</SelectItem>
                    <SelectItem value="Jammu & Kashmir">📍 Jammu & Kashmir</SelectItem>
                    <SelectItem value="Manali">📍 Manali, HP</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Vehicle Type Filter */}
              <div>
                <label className="block text-sm font-medium mb-2">Vehicle Type</label>
                <Select value={selectedVehicleType} onValueChange={setSelectedVehicleType}>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Vehicles</SelectItem>
                    <SelectItem value="bike">🏍️ Bikes Only</SelectItem>
                    <SelectItem value="car">🚗 Cars Only</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Verified Toggle */}
              <div>
                <label className="block text-sm font-medium mb-2">Trust Filter</label>
                <div className="flex items-center space-x-3 h-10 px-3 border border-gray-200 rounded-xl">
                  <Switch
                    checked={verifiedOnly}
                    onCheckedChange={setVerifiedOnly}
                    className="data-[state=checked]:bg-green-500"
                  />
                  <span className="text-sm">Verified Only</span>
                  <ShieldCheck className="w-4 h-4 text-green-500" />
                </div>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}/day
                </label>
                <div className="px-3 py-2">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={3000}
                    min={500}
                    step={100}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="mb-4 sm:mb-6">
          <p className="text-gray-600 text-sm sm:text-base">
            Found {filteredProviders.length} rental provider{filteredProviders.length !== 1 ? 's' : ''} 
            {selectedLocation !== "all" && ` in ${selectedLocation}`}
          </p>
        </div>

        {/* Grouped Provider Listings */}
        <div className="space-y-6 sm:space-y-8">
          {groupedProviders.length === 0 ? (
            <div className="text-center py-12">
              <div className="max-w-md mx-auto">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="font-montserrat text-lg mb-2">No providers found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters to find more options.</p>
                <Button 
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedVehicleType("all");
                    setSelectedLocation("all");
                    setVerifiedOnly(false);
                    setPriceRange([500, 3000]);
                  }}
                  variant="outline" 
                  className="rounded-xl"
                >
                  Clear All Filters
                </Button>
              </div>
            </div>
          ) : (
            groupedProviders.map((group) => (
              <div key={group.location} className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                <Collapsible
                  open={openSections.includes(group.location)}
                  onOpenChange={() => toggleSection(group.location)}
                >
                  <CollapsibleTrigger asChild>
                    <div className="w-full p-4 sm:p-6 bg-gradient-to-r from-[#008080]/10 to-[#1E90FF]/10 border-b border-gray-200 cursor-pointer hover:bg-gradient-to-r hover:from-[#008080]/15 hover:to-[#1E90FF]/15 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <MapPin className="w-5 h-5 text-[#008080]" />
                          <div>
                            <h2 className="font-montserrat text-lg sm:text-xl text-gray-800">
                              📍 {group.location}
                            </h2>
                            <p className="text-gray-600 text-sm">{group.state}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-[#008080] text-white">
                            {group.providers.length} provider{group.providers.length !== 1 ? 's' : ''}
                          </Badge>
                          {openSections.includes(group.location) ? (
                            <ChevronUp className="w-5 h-5 text-gray-600" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-600" />
                          )}
                        </div>
                      </div>
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                        {group.providers.map((provider) => (
                          <Card key={provider.id} className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                            {/* Provider Image */}
                            <div className="relative h-32 sm:h-40 overflow-hidden">
                              <ImageWithFallback
                                src={provider.image}
                                alt={provider.name}
                                className="w-full h-full object-cover"
                              />
                              {/* Trust Badge */}
                              <div className="absolute top-3 left-3">
                                {provider.verified ? (
                                  <Badge className="bg-green-500 text-white flex items-center gap-1 text-xs">
                                    <ShieldCheck className="w-3 h-3" />
                                    Verified
                                  </Badge>
                                ) : (
                                  <Badge className="bg-gray-400 text-white flex items-center gap-1 text-xs">
                                    <Shield className="w-3 h-3" />
                                    Not Verified
                                  </Badge>
                                )}
                              </div>
                              {/* Starting Price */}
                              <Badge className="absolute top-3 right-3 bg-[#FF9500] text-white text-xs">
                                From ₹{provider.startingPrice}/day
                              </Badge>
                            </div>

                            <CardContent className="p-4 sm:p-5">
                              {/* Provider Info */}
                              <div className="mb-3 sm:mb-4">
                                <h3 className="font-montserrat text-base sm:text-lg mb-1 text-gray-800 truncate">
                                  {provider.name}
                                </h3>
                                <div className="flex items-center gap-2 mb-2">
                                  <div className="flex items-center gap-1">
                                    {renderStars(provider.rating)}
                                  </div>
                                  <span className="text-xs sm:text-sm font-medium text-gray-700">
                                    {provider.rating}
                                  </span>
                                  <span className="text-xs text-gray-500">
                                    ({provider.reviewCount} reviews)
                                  </span>
                                </div>
                              </div>

                              {/* Available Vehicles */}
                              <div className="mb-4">
                                <h4 className="text-xs sm:text-sm font-medium text-gray-700 mb-2">Available Vehicles:</h4>
                                <div className="flex flex-wrap gap-1">
                                  {provider.vehicles.slice(0, 2).map((vehicle, index) => (
                                    <Badge key={index} variant="outline" className="text-xs truncate">
                                      {vehicle}
                                    </Badge>
                                  ))}
                                  {provider.vehicles.length > 2 && (
                                    <Badge variant="outline" className="text-xs">
                                      +{provider.vehicles.length - 2} more
                                    </Badge>
                                  )}
                                </div>
                              </div>

                              {/* Contact Button */}
                              <div className="space-y-2">
                                <Button className="w-full bg-[#008080] hover:bg-[#006666] text-white rounded-xl flex items-center justify-center gap-2 text-xs sm:text-sm h-9 sm:h-10">
                                  <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                                  Contact Provider
                                </Button>
                                <div className="flex gap-2">
                                  <Button 
                                    variant="outline" 
                                    size="sm" 
                                    className="flex-1 rounded-xl text-xs h-8 border-[#1E90FF] text-[#1E90FF] hover:bg-[#1E90FF] hover:text-white"
                                  >
                                    <MessageCircle className="w-3 h-3 mr-1" />
                                    WhatsApp
                                  </Button>
                                  <Button 
                                    variant="outline" 
                                    size="sm"
                                    className="flex-1 rounded-xl text-xs h-8 border-[#FF9500] text-[#FF9500] hover:bg-[#FF9500] hover:text-white"
                                  >
                                    <ExternalLink className="w-3 h-3 mr-1" />
                                    Book via Partner
                                  </Button>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            ))
          )}
        </div>

        {/* Marketplace Info */}
        <div className="mt-8 sm:mt-12 bg-gradient-to-br from-blue-50 to-teal-50 border border-blue-200 rounded-2xl p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-12 h-12 bg-[#008080] rounded-2xl flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-montserrat font-medium text-gray-800 mb-1 text-sm sm:text-base">
                TravelPlan Rental Marketplace
              </h3>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                We connect you with verified local rental providers across India. All providers are independently operated businesses. 
                Please verify vehicle condition, insurance coverage, and rental terms directly with the provider before booking. 
                TravelPlan acts as a facilitator and is not responsible for the quality of vehicles or services provided by third-party operators.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}