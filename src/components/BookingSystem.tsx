
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Users, MapPin, Clock, Check } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const experiences = [
  { id: "village-stay", name: "Village Homestay Experience", price: 2999, duration: "3 Days" },
  { id: "craft-workshop", name: "Handicraft Workshop", price: 1999, duration: "1 Day" },
  { id: "nature-trail", name: "Guided Nature Trail", price: 1499, duration: "1 Day" },
  { id: "cultural-tour", name: "Cultural Heritage Tour", price: 3999, duration: "4 Days" },
  { id: "farming-experience", name: "Traditional Farming Experience", price: 2499, duration: "2 Days" }
];

const BookingSystem = () => {
  const [selectedExperience, setSelectedExperience] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [guests, setGuests] = useState("2");
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const { toast } = useToast();

  const selectedExp = experiences.find(exp => exp.id === selectedExperience);
  const totalPrice = selectedExp ? selectedExp.price * parseInt(guests) : 0;

  const handleBooking = () => {
    if (!selectedExperience || !selectedDate || !customerInfo.name || !customerInfo.email || !customerInfo.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Booking Confirmed!",
      description: `Your ${selectedExp?.name} booking for ${guests} guests has been confirmed for ${format(selectedDate, "PPP")}.`,
    });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Book Your Rural Experience
          </h2>
          <p className="text-xl text-gray-600">
            Choose your adventure and create unforgettable memories in rural India.
          </p>
        </div>

        <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-gray-800">Reserve Your Spot</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Experience Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="experience">Select Experience</Label>
                <Select value={selectedExperience} onValueChange={setSelectedExperience}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose your experience" />
                  </SelectTrigger>
                  <SelectContent>
                    {experiences.map((exp) => (
                      <SelectItem key={exp.id} value={exp.id}>
                        <div className="flex justify-between items-center w-full">
                          <span>{exp.name}</span>
                          <span className="text-green-600 font-semibold ml-4">₹{exp.price}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="guests">Number of Guests</Label>
                <Select value={guests} onValueChange={setGuests}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} {num === 1 ? "Guest" : "Guests"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Date Selection */}
            <div className="space-y-2">
              <Label>Select Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !selectedDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) => date < new Date()}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Customer Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={customerInfo.name}
                  onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                  placeholder="Enter your full name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={customerInfo.email}
                  onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                value={customerInfo.phone}
                onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                placeholder="Enter your phone number"
              />
            </div>

            {/* Booking Summary */}
            {selectedExp && (
              <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-4 text-gray-800">Booking Summary</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-green-600" />
                        <span>{selectedExp.name}</span>
                      </div>
                      <span className="font-semibold">₹{selectedExp.price}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-blue-600" />
                        <span>{guests} Guests</span>
                      </div>
                      <span>× {guests}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-amber-600" />
                        <span>Duration</span>
                      </div>
                      <span>{selectedExp.duration}</span>
                    </div>
                    <hr className="border-gray-300" />
                    <div className="flex justify-between items-center text-lg font-bold text-green-600">
                      <span>Total Amount</span>
                      <span>₹{totalPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Book Button */}
            <Button 
              onClick={handleBooking}
              className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-6 text-lg font-semibold"
              size="lg"
            >
              <Check className="mr-2 h-5 w-5" />
              Confirm Booking - ₹{totalPrice.toLocaleString()}
            </Button>

            <p className="text-sm text-gray-500 text-center">
              By booking, you agree to our terms and conditions. Cancellation policy applies.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BookingSystem;
