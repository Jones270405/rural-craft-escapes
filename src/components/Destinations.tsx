
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Star, Clock } from "lucide-react";

const destinations = [
  {
    id: 1,
    name: "Mountain Valley Village",
    location: "Himachal Pradesh",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    duration: "3 Days",
    price: "₹2,999",
    description: "Experience traditional mountain life with stunning valley views and local handicraft workshops."
  },
  {
    id: 2,
    name: "Riverside Artisan Village",
    location: "Uttarakhand",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    duration: "2 Days",
    price: "₹2,499",
    description: "Learn pottery and weaving from master craftsmen beside crystal-clear mountain streams."
  },
  {
    id: 3,
    name: "Forest Heritage Trail",
    location: "Madhya Pradesh",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    duration: "4 Days",
    price: "₹3,999",
    description: "Discover ancient tribal art forms and sustainable forest practices in pristine woodlands."
  }
];

const Destinations = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking-section');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Featured Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Immerse yourself in authentic rural experiences that connect you with nature, culture, and traditional craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <Card key={destination.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="relative overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-green-600">
                  {destination.price}
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800">{destination.name}</CardTitle>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1 text-green-600" />
                    {destination.location}
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 text-amber-400 fill-current" />
                    {destination.rating}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {destination.duration}
                  </div>
                  <Button 
                    className="bg-green-600 hover:bg-green-700"
                    onClick={scrollToBooking}
                  >
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
