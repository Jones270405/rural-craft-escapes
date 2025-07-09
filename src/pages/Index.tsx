
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Destinations from "@/components/Destinations";
import Handicrafts from "@/components/Handicrafts";
import BookingSystem from "@/components/BookingSystem";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
      <Navigation />
      <Hero />
      <div id="destinations-section">
        <Destinations />
      </div>
      <Handicrafts />
      <div id="booking-section">
        <BookingSystem />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
