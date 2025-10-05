import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Alert, AlertDescription } from "./ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Separator } from "./ui/separator";
import { 
  Clock, 
  MapPin, 
  Car, 
  Camera, 
  Utensils, 
  Building, 
  AlertTriangle,
  Map,
  Plus,
  Bike,
  User
} from "lucide-react";

interface ItineraryPageProps {
  onPageChange: (page: string) => void;
}

export function ItineraryPage({ onPageChange }: ItineraryPageProps) {
  const [viewMode, setViewMode] = useState<"timeline" | "map">("timeline");

  const itinerary = [
    {
      day: 1,
      date: "March 15, 2024",
      activities: [
        {
          time: "6:00 AM",
          title: "Departure from Delhi",
          description: "Catch Gatimaan Express to Agra",
          cost: "₹765",
          icon: Car,
          type: "travel"
        },
        {
          time: "8:00 AM",
          title: "Arrive in Agra",
          description: "Check into Hotel Taj Resorts",
          cost: "₹2,500",
          icon: Building,
          type: "accommodation"
        },
        {
          time: "10:00 AM",
          title: "Taj Mahal Visit",
          description: "Explore the wonder of the world",
          cost: "₹50",
          icon: Camera,
          type: "attraction"
        },
        {
          time: "1:00 PM",
          title: "Lunch at Peshawri",
          description: "Traditional Mughlai cuisine",
          cost: "₹800",
          icon: Utensils,
          type: "food"
        },
        {
          time: "3:00 PM",
          title: "Agra Fort",
          description: "Explore the red sandstone fort",
          cost: "₹50",
          icon: Camera,
          type: "attraction"
        },
        {
          time: "6:00 PM",
          title: "Local Market Shopping",
          description: "Sadar Bazaar for marble souvenirs",
          cost: "₹500",
          icon: MapPin,
          type: "activity"
        }
      ]
    },
    {
      day: 2,
      date: "March 16, 2024",
      activities: [
        {
          time: "5:30 AM",
          title: "Sunrise at Mehtab Bagh",
          description: "Best view of Taj Mahal at sunrise",
          cost: "₹25",
          icon: Camera,
          type: "attraction"
        },
        {
          time: "8:00 AM",
          title: "Breakfast at Hotel",
          description: "Continental breakfast",
          cost: "₹300",
          icon: Utensils,
          type: "food"
        },
        {
          time: "10:00 AM",
          title: "Fatehpur Sikri",
          description: "Day trip to the ghost city",
          cost: "₹50 + ₹200 (Auto)",
          icon: Car,
          type: "attraction"
        },
        {
          time: "2:00 PM",
          title: "Lunch at Fatehpur Sikri",
          description: "Local dhaba experience",
          cost: "₹300",
          icon: Utensils,
          type: "food"
        },
        {
          time: "5:00 PM",
          title: "Return to Agra",
          description: "Auto rickshaw back to city",
          cost: "₹200",
          icon: Car,
          type: "travel"
        },
        {
          time: "8:00 PM",
          title: "Dinner & Rest",
          description: "Rooftop restaurant with Taj view",
          cost: "₹600",
          icon: Utensils,
          type: "food"
        }
      ]
    },
    {
      day: 3,
      date: "March 17, 2024",
      activities: [
        {
          time: "8:00 AM",
          title: "Check out & Breakfast",
          description: "Hotel checkout and quick breakfast",
          cost: "₹200",
          icon: Building,
          type: "accommodation"
        },
        {
          time: "10:00 AM",
          title: "Itmad-ud-Daulah Tomb",
          description: "Baby Taj - marble inlay work",
          cost: "₹30",
          icon: Camera,
          type: "attraction"
        },
        {
          time: "1:00 PM",
          title: "Lunch & Shopping",
          description: "Final meal and souvenir shopping",
          cost: "₹400",
          icon: Utensils,
          type: "food"
        },
        {
          time: "3:15 PM",
          title: "Departure",
          description: "Gatimaan Express back to Delhi",
          cost: "₹765",
          icon: Car,
          type: "travel"
        }
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "travel":
        return "bg-blue-100 text-blue-800";
      case "accommodation":
        return "bg-green-100 text-green-800";
      case "attraction":
        return "bg-purple-100 text-purple-800";
      case "food":
        return "bg-orange-100 text-orange-800";
      case "activity":
        return "bg-teal-100 text-teal-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const totalCost = itinerary.reduce((total, day) => 
    total + day.activities.reduce((dayTotal, activity) => {
      const cost = activity.cost.replace(/[^\d]/g, '');
      return dayTotal + (parseInt(cost) || 0);
    }, 0), 0
  );

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="font-montserrat text-2xl sm:text-3xl mb-2 text-gray-800">
            Agra Heritage Tour
          </h1>
          <p className="text-gray-600 mb-4 text-sm sm:text-base">
            March 15-17, 2024 • 3 Days • Total Cost: ₹{totalCost.toLocaleString()}
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            <Badge className="bg-green-100 text-green-800 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm">Within Budget</Badge>
            <Badge variant="outline" className="px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm">3 Days</Badge>
            <Badge variant="outline" className="px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm">230 km from Delhi</Badge>
          </div>
        </div>

        {/* Alerts */}
        <Alert className="mb-6 border-orange-200 bg-orange-50">
          <AlertTriangle className="h-4 w-4 text-orange-600" />
          <AlertDescription className="text-orange-800">
            <strong>Important:</strong> Leave hotel by 3:15 PM on Day 3 to catch your train back to Delhi.
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Main Itinerary */}
          <div className="lg:col-span-3 order-1">
            <Card className="rounded-2xl shadow-lg">
              <CardHeader className="bg-gradient-to-r from-[#008080] to-[#1E90FF] text-white rounded-t-2xl">
                <CardTitle className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <span className="text-base sm:text-lg">Detailed Itinerary</span>
                  <Tabs value={viewMode} onValueChange={(value) => setViewMode(value as "timeline" | "map")} className="w-full sm:w-auto">
                    <TabsList className="bg-white/20 w-full sm:w-auto">
                      <TabsTrigger value="timeline" className="text-white data-[state=active]:bg-white data-[state=active]:text-[#008080] flex-1 sm:flex-none text-xs sm:text-sm">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        Timeline
                      </TabsTrigger>
                      <TabsTrigger value="map" className="text-white data-[state=active]:bg-white data-[state=active]:text-[#008080] flex-1 sm:flex-none text-xs sm:text-sm">
                        <Map className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        Map View
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                {viewMode === "timeline" ? (
                  <div className="space-y-8">
                    {itinerary.map((day) => (
                      <div key={day.day} className="space-y-4">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-8 h-8 bg-[#008080] text-white rounded-full flex items-center justify-center font-medium">
                            {day.day}
                          </div>
                          <div>
                            <h3 className="font-montserrat text-lg">Day {day.day}</h3>
                            <p className="text-gray-600 text-sm">{day.date}</p>
                          </div>
                        </div>

                        <div className="space-y-3 ml-3 sm:ml-6 border-l-2 border-gray-200 pl-3 sm:pl-6">
                          {day.activities.map((activity, index) => {
                            const IconComponent = activity.icon;
                            return (
                              <div key={index} className="relative">
                                <div className="absolute -left-5 sm:-left-8 top-2 w-3 h-3 sm:w-4 sm:h-4 bg-white border-2 border-[#008080] rounded-full"></div>
                                <Card className="hover:shadow-md transition-shadow">
                                  <CardContent className="p-3 sm:p-4">
                                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                                      <div className="flex-1">
                                        <div className="flex items-start gap-2 sm:gap-3 mb-2">
                                          <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-[#008080] mt-0.5" />
                                          <div className="flex-1">
                                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1">
                                              <span className="font-medium text-sm sm:text-base">{activity.time}</span>
                                              <Badge className={`text-xs w-fit ${getTypeColor(activity.type)}`}>
                                                {activity.type}
                                              </Badge>
                                            </div>
                                            <h4 className="font-medium text-gray-800 text-sm sm:text-base">{activity.title}</h4>
                                          </div>
                                        </div>
                                        <p className="text-gray-600 text-xs sm:text-sm ml-6 sm:ml-8">{activity.description}</p>
                                      </div>
                                      <Badge variant="outline" className="self-start text-xs">
                                        {activity.cost}
                                      </Badge>
                                    </div>
                                  </CardContent>
                                </Card>
                              </div>
                            );
                          })}
                        </div>
                        {day.day < itinerary.length && <Separator className="my-6" />}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="h-96 bg-gray-100 rounded-xl flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <Map className="w-12 h-12 mx-auto mb-2" />
                      <p>Interactive map view would be displayed here</p>
                      <p className="text-sm">Integration with Google Maps API</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Add-ons Section */}
            <Card className="rounded-2xl shadow-lg mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="w-5 h-5 text-[#008080]" />
                  Optional Add-ons
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4 border-2 border-dashed border-gray-200 hover:border-[#008080] transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <Bike className="w-6 h-6 text-[#008080]" />
                      <div>
                        <h4 className="font-medium">Bike Rental</h4>
                        <p className="text-gray-600 text-sm">Explore Agra at your own pace</p>
                        <Badge className="bg-[#FF9500] text-white mt-1">₹300/day</Badge>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-4 border-2 border-dashed border-gray-200 hover:border-[#008080] transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <User className="w-6 h-6 text-[#008080]" />
                      <div>
                        <h4 className="font-medium">Local Guide</h4>
                        <p className="text-gray-600 text-sm">Expert storytelling & history</p>
                        <Badge className="bg-[#FF9500] text-white mt-1">₹800/day</Badge>
                      </div>
                    </div>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-4 sm:space-y-6 order-2">
            {/* Cost Breakdown */}
            <Card className="rounded-2xl shadow-lg">
              <CardHeader className="bg-[#008080] text-white rounded-t-2xl">
                <CardTitle className="text-lg">Cost Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Train Travel</span>
                    <span>₹1,530</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Accommodation</span>
                    <span>₹5,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Food & Dining</span>
                    <span>₹2,400</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Entry Tickets</span>
                    <span>₹155</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Local Transport</span>
                    <span>₹520</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shopping</span>
                    <span>₹500</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-medium text-lg">
                    <span>Total</span>
                    <span>₹{totalCost.toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Weather & Tips */}
            <Card className="rounded-2xl shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Tips & Weather</CardTitle>
              </CardHeader>
              <CardContent className="p-6 text-sm space-y-3">
                <div>
                  <h4 className="font-medium mb-1">Weather Forecast</h4>
                  <p className="text-gray-600">Sunny, 22-28°C • Perfect for sightseeing</p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-medium mb-1">Pro Tips</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Book Taj Mahal tickets online in advance</li>
                    <li>• Carry sunscreen and comfortable shoes</li>
                    <li>• Friday is closed for Taj Mahal</li>
                    <li>• Best photos: Early morning light</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full bg-[#008080] hover:bg-[#006666] text-white rounded-xl py-3">
                Book This Trip
              </Button>
              <Button variant="outline" className="w-full rounded-xl py-3">
                Save to Favorites
              </Button>
              <Button 
                variant="outline" 
                className="w-full rounded-xl py-3"
                onClick={() => onPageChange("plan")}
              >
                Modify Trip
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}