
import { Button } from "@/components/ui/button";
import { ArrowRight, Mountain, Users, Camera } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Discover Rural
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-amber-400">
            Adventures
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in">
          Experience authentic rural life, connect with local communities, and discover traditional handicrafts in breathtaking natural settings.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg group">
            Book Your Journey
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg">
            Explore Destinations
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in">
          <div className="text-center">
            <Mountain className="h-8 w-8 mx-auto mb-2 text-green-400" />
            <div className="text-2xl font-bold">50+</div>
            <div className="text-sm opacity-80">Rural Destinations</div>
          </div>
          <div className="text-center">
            <Users className="h-8 w-8 mx-auto mb-2 text-amber-400" />
            <div className="text-2xl font-bold">1000+</div>
            <div className="text-sm opacity-80">Happy Travelers</div>
          </div>
          <div className="text-center">
            <Camera className="h-8 w-8 mx-auto mb-2 text-blue-400" />
            <div className="text-2xl font-bold">100+</div>
            <div className="text-sm opacity-80">Local Artisans</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
