import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  MapPin, 
  Calendar, 
  Hotel, 
  Train, 
  Car, 
  Star, 
  Eye, 
  Clock,
  CheckCircle,
  Circle
} from "lucide-react";

interface BookingProps {
  onPageChange: (page: string) => void;
}

interface Booking {
  id: string;
  bookingId: string;
  destination: string;
  dates: string;
  status: "active" | "completed" | "upcoming";
  image: string;
  stay: {
    type: "Budget" | "Budget + Comfort" | "Comfort + Prime";
    hotel: string;
    icon: string;
  };
  travel: {
    mode: string;
    details: string;
    cost: number;
  };
  pickup: {
    service: string;
    cost: number;
  };
  localCommute: {
    estimated: number;
    details: string;
  };
  itinerary: {
    day1: string;
    day2?: string;
  };
  progress: {
    percentage: number;
    currentStage: string;
    milestones: {
      travel: boolean;
      stay: boolean;
      visits: boolean;
      return: boolean;
    };
  };
  rating?: {
    stars: number;
    feedback: string;
  };
}

export function MyBookingsPage({ onPageChange }: BookingProps) {
  const [bookings] = useState<Booking[]>([
    {
      id: "1",
      bookingId: "TRIP-AG123",
      destination: "Agra",
      dates: "20-21 Sept 2025",
      status: "active",
      image: "https://images.unsplash.com/photo-1716896427993-ddad7c7ec891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWolMjBtYWhhbCUyMGFncmElMjBpbmRpYXxlbnwxfHx8fDE3NTc4ODY4NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      stay: {
        type: "Budget",
        hotel: "Hotel Saffron Nest",
        icon: "🏨"
      },
      travel: {
        mode: "Train Sleeper",
        details: "Bengaluru → Agra",
        cost: 1200
      },
      pickup: {
        service: "Auto pickup",
        cost: 150
      },
      localCommute: {
        estimated: 400,
        details: "Station ↔ Hotel ↔ Monuments"
      },
      itinerary: {
        day1: "Taj Mahal, Mehtab Bagh",
        day2: "Agra Fort, Local Market"
      },
      progress: {
        percentage: 50,
        currentStage: "Day 1 completed",
        milestones: {
          travel: true,
          stay: true,
          visits: false,
          return: false
        }
      }
    },
    {
      id: "2",
      bookingId: "TRIP-HF789",
      destination: "Harihar Fort Trek",
      dates: "5-6 Aug 2025",
      status: "completed",
      image: "https://images.unsplash.com/photo-1668000866242-3b71ead8f086?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHRyZWslMjBoaWtpbmd8ZW58MXx8fHwxNzU3OTE2MzA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      stay: {
        type: "Budget + Comfort",
        hotel: "Camp Tent",
        icon: "⛺"
      },
      travel: {
        mode: "Own Bike Rental",
        details: "From Nagpur",
        cost: 800
      },
      pickup: {
        service: "Self-drive",
        cost: 0
      },
      localCommute: {
        estimated: 200,
        details: "Base camp to fort"
      },
      itinerary: {
        day1: "Trek to Harihar Fort, Camping",
        day2: "Sunrise view, Return trek"
      },
      progress: {
        percentage: 100,
        currentStage: "Completed",
        milestones: {
          travel: true,
          stay: true,
          visits: true,
          return: true
        }
      },
      rating: {
        stars: 5,
        feedback: "Amazing trek with breathtaking views!"
      }
    },
    {
      id: "3",
      bookingId: "TRIP-GO456",
      destination: "Goa",
      dates: "10-14 Oct 2025",
      status: "upcoming",
      image: "https://images.unsplash.com/photo-1741208597601-499d1d60fb5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2ElMjBiZWFjaCUyMHJlc29ydHxlbnwxfHx8fDE3NTc5MTYzMTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      stay: {
        type: "Comfort + Prime",
        hotel: "Beach Resort Paradise",
        icon: "🌴"
      },
      travel: {
        mode: "Train AC 3-tier",
        details: "Bengaluru → Goa",
        cost: 2100
      },
      pickup: {
        service: "Resort shuttle",
        cost: 300
      },
      localCommute: {
        estimated: 800,
        details: "Beach hopping, Local transport"
      },
      itinerary: {
        day1: "Arrival, Calangute Beach",
        day2: "Baga Beach, Water sports"
      },
      progress: {
        percentage: 0,
        currentStage: "Upcoming",
        milestones: {
          travel: false,
          stay: false,
          visits: false,
          return: false
        }
      }
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "completed":
        return "bg-green-100 text-green-800 border-green-200";
      case "upcoming":
        return "bg-gray-100 text-gray-600 border-gray-200";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const getProgressColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-blue-500";
      case "completed":
        return "bg-green-500";
      case "upcoming":
        return "bg-gray-300";
      default:
        return "bg-gray-300";
    }
  };

  const renderStars = (rating: number, interactive: boolean = false) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 sm:w-5 sm:h-5 ${
          index < rating
            ? "fill-yellow-400 text-yellow-400"
            : "text-gray-300"
        } ${interactive ? "cursor-pointer hover:text-yellow-400 transition-colors" : ""}`}
      />
    ));
  };

  const MilestoneProgress = ({ milestones, status }: { milestones: any; status: string }) => {
    const stages = [
      { key: 'travel', label: 'Travel', icon: Train },
      { key: 'stay', label: 'Stay', icon: Hotel },
      { key: 'visits', label: 'Visits', icon: MapPin },
      { key: 'return', label: 'Return', icon: CheckCircle }
    ];

    return (
      <div className="mt-4">
        <div className="flex items-center justify-between mb-2">
          {stages.map((stage, index) => {
            const IconComponent = stage.icon;
            const isCompleted = milestones[stage.key];
            const isActive = status === "active" && !isCompleted && index === Object.values(milestones).filter(Boolean).length;
            
            return (
              <div key={stage.key} className="flex flex-col items-center relative">
                <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mb-1 ${
                  isCompleted 
                    ? 'bg-green-500 text-white' 
                    : isActive 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-200 text-gray-400'
                }`}>
                  <IconComponent className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
                <span className="text-xs text-gray-600 text-center">{stage.label}</span>
              </div>
            );
          })}
        </div>
        
        {/* Progress line */}
        <div className="flex items-center mt-2 px-3">
          <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full transition-all duration-300"
              style={{ 
                width: `${(Object.values(milestones).filter(Boolean).length / stages.length) * 100}%`
              }}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="font-montserrat text-2xl sm:text-3xl mb-4 text-gray-800">
            My Bookings
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-2">
            Track your trips, view itineraries, and share your travel experiences
          </p>
        </div>

        {/* Bookings List */}
        <div className="space-y-6 sm:space-y-8">
          {bookings.map((booking) => (
            <Card key={booking.id} className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              {/* Status Banner */}
              <div className={`px-4 sm:px-6 py-2 ${getStatusColor(booking.status)} border-b`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <Badge className={`w-fit ${getStatusColor(booking.status)} text-xs sm:text-sm`}>
                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)} Trip
                  </Badge>
                  <span className="text-xs sm:text-sm font-medium">
                    Booking ID: {booking.bookingId}
                  </span>
                </div>
              </div>

              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6">
                  {/* Trip Image & Basic Info */}
                  <div className="lg:col-span-1">
                    <div className="relative h-48 sm:h-56 rounded-xl overflow-hidden mb-4">
                      <ImageWithFallback
                        src={booking.image}
                        alt={booking.destination}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-white/90 text-gray-800 px-2 py-1 text-xs">
                          {booking.progress.percentage}% Complete
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-montserrat text-lg sm:text-xl text-gray-800">
                        {booking.destination}
                      </h3>
                      <p className="text-gray-600 text-sm flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {booking.dates}
                      </p>
                      <p className="text-gray-600 text-sm">
                        Status: <span className="font-medium">{booking.progress.currentStage}</span>
                      </p>
                    </div>
                  </div>

                  {/* Booking Details */}
                  <div className="lg:col-span-1 space-y-4">
                    {/* Stay Info */}
                    <div className="bg-gray-50 rounded-xl p-3 sm:p-4">
                      <h4 className="font-medium text-sm sm:text-base mb-2 flex items-center gap-2">
                        <Hotel className="w-4 h-4 text-[#008080]" />
                        Stay Details
                      </h4>
                      <div className="space-y-1 text-xs sm:text-sm">
                        <p><span className="font-medium">{booking.stay.type}</span> {booking.stay.icon}</p>
                        <p className="text-gray-600">{booking.stay.hotel}</p>
                      </div>
                    </div>

                    {/* Travel Info */}
                    <div className="bg-gray-50 rounded-xl p-3 sm:p-4">
                      <h4 className="font-medium text-sm sm:text-base mb-2 flex items-center gap-2">
                        <Train className="w-4 h-4 text-[#008080]" />
                        Travel Details
                      </h4>
                      <div className="space-y-1 text-xs sm:text-sm">
                        <p><span className="font-medium">{booking.travel.mode}</span> - ₹{booking.travel.cost}</p>
                        <p className="text-gray-600">{booking.travel.details}</p>
                        <p><span className="font-medium">{booking.pickup.service}</span> - ₹{booking.pickup.cost}</p>
                      </div>
                    </div>

                    {/* Local Commute */}
                    <div className="bg-gray-50 rounded-xl p-3 sm:p-4">
                      <h4 className="font-medium text-sm sm:text-base mb-2 flex items-center gap-2">
                        <Car className="w-4 h-4 text-[#008080]" />
                        Local Transport
                      </h4>
                      <div className="space-y-1 text-xs sm:text-sm">
                        <p><span className="font-medium">Estimated:</span> ₹{booking.localCommute.estimated}</p>
                        <p className="text-gray-600">{booking.localCommute.details}</p>
                      </div>
                    </div>
                  </div>

                  {/* Itinerary & Progress */}
                  <div className="lg:col-span-1 space-y-4">
                    {/* Itinerary Snapshot */}
                    <div className="bg-blue-50 rounded-xl p-3 sm:p-4">
                      <h4 className="font-medium text-sm sm:text-base mb-2 flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#008080]" />
                        Itinerary Snapshot
                      </h4>
                      <div className="space-y-2 text-xs sm:text-sm">
                        <p><span className="font-medium">Day 1:</span> {booking.itinerary.day1}</p>
                        {booking.itinerary.day2 && (
                          <p><span className="font-medium">Day 2:</span> {booking.itinerary.day2}</p>
                        )}
                      </div>
                    </div>

                    {/* Progress Section */}
                    <div className="bg-white border-2 border-gray-100 rounded-xl p-3 sm:p-4">
                      <h4 className="font-medium text-sm sm:text-base mb-3">Trip Progress</h4>
                      
                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="flex justify-between text-xs mb-1">
                          <span>Progress</span>
                          <span>{booking.progress.percentage}%</span>
                        </div>
                        <div className="relative">
                          <Progress 
                            value={booking.progress.percentage} 
                            className="h-2"
                          />
                        </div>
                      </div>

                      {/* Milestones */}
                      <div className="relative">
                        <MilestoneProgress milestones={booking.progress.milestones} status={booking.status} />
                      </div>
                    </div>

                    {/* Rating Section (for completed trips) */}
                    {booking.status === "completed" && booking.rating && (
                      <div className="bg-green-50 rounded-xl p-3 sm:p-4">
                        <h4 className="font-medium text-sm sm:text-base mb-2">Your Rating</h4>
                        <div className="flex items-center gap-2 mb-2">
                          {renderStars(booking.rating.stars)}
                          <span className="text-sm text-gray-600">({booking.rating.stars}/5)</span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 italic">
                          "{booking.rating.feedback}"
                        </p>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="space-y-2">
                      <Button
                        onClick={() => onPageChange("itinerary")}
                        className="w-full bg-[#008080] hover:bg-[#006666] text-white rounded-xl flex items-center justify-center gap-2"
                      >
                        <Eye className="w-4 h-4" />
                        View Full Itinerary
                      </Button>
                      
                      {booking.status === "completed" && !booking.rating && (
                        <Button
                          variant="outline"
                          className="w-full border-[#FF9500] text-[#FF9500] hover:bg-[#FF9500] hover:text-white rounded-xl"
                        >
                          <Star className="w-4 h-4 mr-2" />
                          Rate Experience
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State or Load More */}
        {bookings.length === 0 ? (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="font-montserrat text-lg mb-2">No bookings yet</h3>
              <p className="text-gray-600 mb-4">Start planning your first trip with TravelPlan!</p>
              <Button
                onClick={() => onPageChange("plan")}
                className="bg-[#008080] hover:bg-[#006666] text-white rounded-xl px-6"
              >
                Plan Your First Trip
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center mt-8">
            <Button variant="outline" className="px-6 sm:px-8 py-3 rounded-xl">
              Load More Bookings
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}