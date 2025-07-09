
import Hero from "@/components/Hero";
import Destinations from "@/components/Destinations";
import Handicrafts from "@/components/Handicrafts";
import BookingSystem from "@/components/BookingSystem";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
      <Hero />
      <Destinations />
      <Handicrafts />
      <BookingSystem />
      <Footer />
    </div>
  );
};

export default Index;
