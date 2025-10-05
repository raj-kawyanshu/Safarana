import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Check, X, Star, Zap, Map, Shield, Phone, Wifi } from "lucide-react";

export function SubscriptionPage() {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      period: "forever",
      popular: false,
      features: {
        included: [
          "Basic itinerary planning",
          "Hotel suggestions",
          "Budget calculator",
          "Basic weather info",
          "Community reviews"
        ],
        excluded: [
          "Offline maps",
          "Crowd prediction",
          "Rental deals",
          "Priority support",
          "Real-time alerts",
          "Advanced analytics"
        ]
      }
    },
    {
      name: "Premium",
      price: "₹99",
      period: "per month",
      popular: true,
      features: {
        included: [
          "Everything in Free",
          "Offline maps & navigation",
          "Crowd prediction & alerts",
          "Exclusive rental deals",
          "Priority customer support",
          "Real-time weather alerts",
          "Advanced trip analytics",
          "Multiple trip planning",
          "Export itinerary to PDF",
          "Emergency contact features"
        ],
        excluded: []
      }
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      text: "TravelPlan Premium saved me ₹3000 on my Kerala trip with exclusive rental deals!",
      rating: 5
    },
    {
      name: "Raj Patel",
      location: "Delhi",
      text: "The offline maps feature was a lifesaver when I had no network in the mountains.",
      rating: 5
    },
    {
      name: "Anita Singh",
      location: "Bangalore",
      text: "Crowd predictions helped me avoid tourist rush at Taj Mahal. Worth every rupee!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="font-montserrat text-2xl sm:text-3xl lg:text-4xl mb-4 text-gray-800">
            Choose Your Plan
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-2">
            Unlock advanced features to make your travel planning smarter and more efficient
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {plans.map((plan, index) => (
            <Card key={index} className={`rounded-2xl shadow-xl relative overflow-hidden ${
              plan.popular ? 'ring-2 ring-[#008080] shadow-2xl' : ''
            }`}>
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#008080] to-[#1E90FF] text-white text-center py-2">
                  <Badge className="bg-white text-[#008080] px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className={`text-center ${plan.popular ? 'pt-12' : 'pt-6'} px-4 sm:px-6`}>
                <CardTitle className="text-xl sm:text-2xl font-montserrat mb-2">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-3xl sm:text-4xl font-bold text-gray-800">{plan.price}</span>
                  <span className="text-gray-600 ml-1 text-sm sm:text-base">/{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="px-4 sm:px-6 pb-6 sm:pb-8">
                <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {/* Included Features */}
                  {plan.features.included.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 sm:gap-3">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                    </div>
                  ))}
                  
                  {/* Excluded Features */}
                  {plan.features.excluded.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 sm:gap-3 opacity-50">
                      <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
                      <span className="text-gray-500 text-sm sm:text-base">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={`w-full py-3 rounded-xl text-sm sm:text-base lg:text-lg ${
                    plan.popular 
                      ? 'bg-[#FF9500] hover:bg-[#e6850e] text-white' 
                      : 'bg-[#008080] hover:bg-[#006666] text-white'
                  }`}
                >
                  {plan.name === 'Free' ? 'Get Started Free' : 'Upgrade Now'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Comparison */}
        <Card className="rounded-2xl shadow-lg mb-16">
          <CardHeader className="bg-gradient-to-r from-[#008080] to-[#1E90FF] text-white rounded-t-2xl">
            <CardTitle className="text-2xl text-center">Feature Comparison</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-4 font-medium">Feature</th>
                    <th className="text-center p-4 font-medium">Free</th>
                    <th className="text-center p-4 font-medium">Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {[
                    { feature: "Basic trip planning", free: true, premium: true, icon: Map },
                    { feature: "Budget calculator", free: true, premium: true, icon: null },
                    { feature: "Hotel recommendations", free: true, premium: true, icon: null },
                    { feature: "Offline maps", free: false, premium: true, icon: Wifi },
                    { feature: "Crowd predictions", free: false, premium: true, icon: Zap },
                    { feature: "Rental deals", free: false, premium: true, icon: null },
                    { feature: "Priority support", free: false, premium: true, icon: Phone },
                    { feature: "Real-time alerts", free: false, premium: true, icon: Shield },
                    { feature: "Advanced analytics", free: false, premium: true, icon: null }
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="p-4 flex items-center gap-2">
                        {row.icon && <row.icon className="w-4 h-4 text-[#008080]" />}
                        {row.feature}
                      </td>
                      <td className="p-4 text-center">
                        {row.free ? (
                          <Check className="w-5 h-5 text-green-600 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-400 mx-auto" />
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {row.premium ? (
                          <Check className="w-5 h-5 text-green-600 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-400 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Testimonials */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="font-montserrat text-2xl sm:text-3xl mb-4 text-gray-800">
            What Our Premium Users Say
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="rounded-2xl shadow-lg">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="flex justify-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic text-sm sm:text-base">"{testimonial.text}"</p>
                <div>
                  <h4 className="font-medium text-gray-800 text-sm sm:text-base">{testimonial.name}</h4>
                  <p className="text-gray-500 text-xs sm:text-sm">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <Card className="rounded-2xl shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">Can I cancel my subscription anytime?</h3>
                <p className="text-gray-600">Yes, you can cancel your Premium subscription at any time. You'll continue to have access to Premium features until the end of your billing period.</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-600">We accept all major credit cards, debit cards, UPI, and net banking through secure payment gateways.</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Do you offer refunds?</h3>
                <p className="text-gray-600">We offer a 7-day money-back guarantee for Premium subscriptions. If you're not satisfied, contact our support team.</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Can I use Premium features offline?</h3>
                <p className="text-gray-600">Yes! Premium subscribers get offline maps and can access downloaded itineraries without an internet connection.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center mt-12 sm:mt-16 bg-gradient-to-r from-[#008080] to-[#1E90FF] rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="font-montserrat text-xl sm:text-2xl lg:text-3xl mb-4">
            Ready to Upgrade Your Travel Experience?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 opacity-90 max-w-2xl mx-auto">
            Join thousands of smart travelers who save money and time with TravelPlan Premium
          </p>
          <Button className="bg-[#FF9500] hover:bg-[#e6850e] text-white px-6 sm:px-8 py-3 rounded-xl text-sm sm:text-base lg:text-lg w-full sm:w-auto">
            Start Premium Trial
          </Button>
        </div>
      </div>
    </div>
  );
}