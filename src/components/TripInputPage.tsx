import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Slider } from "./ui/slider";
import { MapPin, DollarSign, Calendar, Train, Car, Bus } from "lucide-react";

interface TripInputPageProps {
  onPageChange: (page: string) => void;
}

export function TripInputPage({ onPageChange }: TripInputPageProps) {
  const [destination, setDestination] = useState("");
  const [distance, setDistance] = useState([200]);
  const [budget, setBudget] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [travelMode, setTravelMode] = useState("");
  const [stayType, setStayType] = useState("");
  const [inputType, setInputType] = useState("destination"); // "destination" or "distance"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Pass form data and navigate to recommendations
    onPageChange("recommendations");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="font-montserrat text-2xl sm:text-3xl mb-4 text-gray-800">
            Plan Your Perfect Trip
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-2">
            Tell us your preferences and we'll create a customized itinerary that fits your budget and timeline
          </p>
        </div>

        <Card className="rounded-2xl shadow-lg">
          <CardHeader className="bg-gradient-to-r from-[#008080] to-[#1E90FF] text-white rounded-t-2xl">
            <CardTitle className="font-montserrat text-xl">Trip Details</CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 lg:p-8">
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              {/* Destination or Distance */}
              <div className="space-y-4">
                <Label className="text-base sm:text-lg font-montserrat">How would you like to plan?</Label>
                <RadioGroup value={inputType} onValueChange={setInputType} className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="destination" id="destination-option" />
                    <Label htmlFor="destination-option" className="text-sm sm:text-base">Specific Destination</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="distance" id="distance-option" />
                    <Label htmlFor="distance-option" className="text-sm sm:text-base">Within Distance</Label>
                  </div>
                </RadioGroup>

                {inputType === "destination" ? (
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-[#008080]" />
                    <Input
                      placeholder="Enter destination (e.g., Goa, Agra, Kerala)"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="pl-10 h-12 rounded-xl"
                      required
                    />
                  </div>
                ) : (
                  <div className="space-y-3">
                    <Label>Maximum Distance: {distance[0]} km</Label>
                    <Slider
                      value={distance}
                      onValueChange={setDistance}
                      max={1000}
                      min={50}
                      step={50}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>50 km</span>
                      <span>1000 km</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Budget */}
              <div className="space-y-3">
                <Label htmlFor="budget" className="text-lg font-montserrat">Budget</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 h-5 w-5 text-[#008080]" />
                  <Input
                    id="budget"
                    type="number"
                    placeholder="Enter your budget in ₹"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="pl-10 h-12 rounded-xl"
                    required
                  />
                </div>
              </div>

              {/* Dates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <Label htmlFor="start-date" className="text-base sm:text-lg font-montserrat">Start Date</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-5 w-5 text-[#008080]" />
                    <Input
                      id="start-date"
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="pl-10 h-11 sm:h-12 rounded-xl text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <Label htmlFor="end-date" className="text-base sm:text-lg font-montserrat">End Date</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-5 w-5 text-[#008080]" />
                    <Input
                      id="end-date"
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="pl-10 h-11 sm:h-12 rounded-xl text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Travel Mode */}
              <div className="space-y-3">
                <Label className="text-lg font-montserrat">Travel Mode</Label>
                <Select value={travelMode} onValueChange={setTravelMode} required>
                  <SelectTrigger className="h-12 rounded-xl">
                    <SelectValue placeholder="Select your preferred travel mode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="train-sleeper">
                      <div className="flex items-center gap-2">
                        <Train className="h-4 w-4" />
                        Train - Sleeper Class
                      </div>
                    </SelectItem>
                    <SelectItem value="train-ac">
                      <div className="flex items-center gap-2">
                        <Train className="h-4 w-4" />
                        Train - AC Class
                      </div>
                    </SelectItem>
                    <SelectItem value="train-general">
                      <div className="flex items-center gap-2">
                        <Train className="h-4 w-4" />
                        Train - General
                      </div>
                    </SelectItem>
                    <SelectItem value="bus">
                      <div className="flex items-center gap-2">
                        <Bus className="h-4 w-4" />
                        Bus
                      </div>
                    </SelectItem>
                    <SelectItem value="rental">
                      <div className="flex items-center gap-2">
                        <Car className="h-4 w-4" />
                        Rental Car
                      </div>
                    </SelectItem>
                    <SelectItem value="own-car">
                      <div className="flex items-center gap-2">
                        <Car className="h-4 w-4" />
                        Own Car
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Stay Type */}
              <div className="space-y-4">
                <Label className="text-base sm:text-lg font-montserrat">Stay Type</Label>
                <RadioGroup value={stayType} onValueChange={setStayType} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card className={`p-3 sm:p-4 cursor-pointer transition-colors ${stayType === 'budget' ? 'ring-2 ring-[#008080] bg-[#008080]/5' : ''}`}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="budget" id="budget-stay" />
                      <Label htmlFor="budget-stay" className="cursor-pointer flex-1">
                        <div className="space-y-1">
                          <div className="font-medium text-sm sm:text-base">Budget</div>
                          <div className="text-xs sm:text-sm text-gray-500">₹800-1500/night</div>
                          <div className="text-xs text-gray-400">Basic amenities, clean rooms</div>
                        </div>
                      </Label>
                    </div>
                  </Card>
                  
                  <Card className={`p-3 sm:p-4 cursor-pointer transition-colors ${stayType === 'budget-comfort' ? 'ring-2 ring-[#008080] bg-[#008080]/5' : ''}`}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="budget-comfort" id="budget-comfort-stay" />
                      <Label htmlFor="budget-comfort-stay" className="cursor-pointer flex-1">
                        <div className="space-y-1">
                          <div className="font-medium text-sm sm:text-base">Budget + Comfort</div>
                          <div className="text-xs sm:text-sm text-gray-500">₹1500-3000/night</div>
                          <div className="text-xs text-gray-400">AC, WiFi, breakfast included</div>
                        </div>
                      </Label>
                    </div>
                  </Card>
                  
                  <Card className={`p-3 sm:p-4 cursor-pointer transition-colors sm:col-span-2 lg:col-span-1 ${stayType === 'comfort-prime' ? 'ring-2 ring-[#008080] bg-[#008080]/5' : ''}`}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="comfort-prime" id="comfort-prime-stay" />
                      <Label htmlFor="comfort-prime-stay" className="cursor-pointer flex-1">
                        <div className="space-y-1">
                          <div className="font-medium text-sm sm:text-base">Comfort + Prime</div>
                          <div className="text-xs sm:text-sm text-gray-500">₹3000-6000/night</div>
                          <div className="text-xs text-gray-400">Luxury amenities, spa, pool</div>
                        </div>
                      </Label>
                    </div>
                  </Card>
                </RadioGroup>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <Button
                  type="submit"
                  className="bg-[#008080] hover:bg-[#006666] text-white px-12 py-3 rounded-xl h-12 text-lg"
                >
                  Generate My Trip
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}