
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const handicrafts = [
  {
    id: 1,
    name: "Hand-woven Pashmina Shawl",
    artisan: "Kamala Devi",
    location: "Kashmir",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "₹8,999",
    originalPrice: "₹12,999",
    category: "Textiles",
    inStock: true
  },
  {
    id: 2,
    name: "Terracotta Pottery Set",
    artisan: "Raman Singh",
    location: "Rajasthan",
    image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "₹2,499",
    originalPrice: "₹3,499",
    category: "Pottery",
    inStock: true
  },
  {
    id: 3,
    name: "Bamboo Craft Collection",
    artisan: "Maya Sharma",
    location: "Assam",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "₹1,899",
    originalPrice: "₹2,499",
    category: "Woodwork",
    inStock: false
  },
  {
    id: 4,
    name: "Handmade Jewelry Set",
    artisan: "Priya Kumari",
    location: "Gujarat",
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "₹3,299",
    originalPrice: "₹4,999",
    category: "Jewelry",
    inStock: true
  }
];

const Handicrafts = () => {
  const [favorites, setFavorites] = useState<number[]>([]);
  const { toast } = useToast();

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
    toast({
      title: favorites.includes(id) ? "Removed from favorites" : "Added to favorites",
      description: "Your favorites have been updated.",
    });
  };

  const addToCart = (item: typeof handicrafts[0]) => {
    if (!item.inStock) {
      toast({
        title: "Item out of stock",
        description: "We'll notify you when this item is back in stock.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
    });
  };

  const viewDetails = (item: typeof handicrafts[0]) => {
    toast({
      title: "View Details",
      description: `Viewing details for ${item.name} by ${item.artisan}`,
    });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Authentic Handicrafts
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Support local artisans and take home unique pieces that tell the story of rural India's rich cultural heritage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {handicrafts.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2">
                  <Badge variant={item.inStock ? "default" : "secondary"} className="bg-green-600 text-white">
                    {item.inStock ? "In Stock" : "Out of Stock"}
                  </Badge>
                </div>
                <div className="absolute top-2 right-2 flex gap-2">
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="h-8 w-8 p-0 bg-white/80 hover:bg-white"
                    onClick={() => toggleFavorite(item.id)}
                  >
                    <Heart className={`h-4 w-4 ${favorites.includes(item.id) ? 'fill-red-500 text-red-500' : ''}`} />
                  </Button>
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="h-8 w-8 p-0 bg-white/80 hover:bg-white"
                    onClick={() => viewDetails(item)}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <div className="text-xs text-amber-600 font-medium mb-1">{item.category}</div>
                <CardTitle className="text-lg font-bold text-gray-800 line-clamp-2">{item.name}</CardTitle>
                <div className="text-sm text-gray-600">
                  by {item.artisan} • {item.location}
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-green-600">{item.price}</span>
                    <span className="text-sm text-gray-400 line-through">{item.originalPrice}</span>
                  </div>
                </div>
                <Button 
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                  disabled={!item.inStock}
                  onClick={() => addToCart(item)}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {item.inStock ? "Add to Cart" : "Notify Me"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white">
            View All Handicrafts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Handicrafts;
