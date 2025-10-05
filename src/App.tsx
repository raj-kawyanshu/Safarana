import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Homepage } from "./components/Homepage";
import { TripInputPage } from "./components/TripInputPage";
import { RecommendationDashboard } from "./components/RecommendationDashboard";
import { ItineraryPage } from "./components/ItineraryPage";
import { MyBookingsPage } from "./components/MyBookingsPage";
import { RentalsPage } from "./components/RentalsPage";
import { SubscriptionPage } from "./components/SubscriptionPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Homepage onPageChange={setCurrentPage} />;
      case "plan":
        return <TripInputPage onPageChange={setCurrentPage} />;
      case "recommendations":
        return <RecommendationDashboard onPageChange={setCurrentPage} />;
      case "itinerary":
        return <ItineraryPage onPageChange={setCurrentPage} />;
      case "bookings":
        return <MyBookingsPage onPageChange={setCurrentPage} />;
      case "rentals":
        return <RentalsPage />;
      case "subscription":
        return <SubscriptionPage />;
      case "contact":
        return (
          <div className="min-h-screen bg-gray-50 py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-montserrat text-4xl mb-8 text-gray-800">
                Contact Us
              </h1>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="font-montserrat text-xl mb-4">Get in Touch</h3>
                  <p className="text-gray-600 mb-4">
                    Have questions about TravelPlan? We're here to help you plan your perfect journey.
                  </p>
                  <div className="space-y-3 text-left">
                    <p><strong>Email:</strong> support@travelplan.com</p>
                    <p><strong>Phone:</strong> +91 9876543210</p>
                    <p><strong>Hours:</strong> Mon-Sun 9AM-9PM</p>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="font-montserrat text-xl mb-4">Office Address</h3>
                  <p className="text-gray-600 text-left">
                    TravelPlan Technologies Pvt Ltd<br />
                    123, Travel Hub Building<br />
                    Connaught Place, New Delhi<br />
                    Delhi - 110001, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return <Homepage onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      {renderPage()}
    </div>
  );
}