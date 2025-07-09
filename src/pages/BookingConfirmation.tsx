
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar, Users, MapPin, Phone, Mail, User } from "lucide-react";
import { format } from "date-fns";

interface BookingData {
  id: string;
  experience_name: string;
  selected_date: string;
  guests: number;
  total_price: number;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  status: string;
}

const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [bookingData, setBookingData] = useState<BookingData | null>(null);

  useEffect(() => {
    const data = location.state?.bookingData;
    if (data) {
      setBookingData(data);
    } else {
      navigate('/');
    }
  }, [location.state, navigate]);

  if (!bookingData) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-16 w-16 text-green-600" />
            </div>
            <CardTitle className="text-3xl text-gray-800 mb-2">
              Booking Confirmed!
            </CardTitle>
            <p className="text-gray-600">
              Thank you for choosing Rural Craft Escapes. Your booking has been successfully confirmed.
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Booking Details */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
              <h3 className="font-semibold text-lg mb-4 text-gray-800">Booking Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium">{bookingData.experience_name}</p>
                    <p className="text-sm text-gray-600">Experience</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">{format(new Date(bookingData.selected_date), "PPP")}</p>
                    <p className="text-sm text-gray-600">Date</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-amber-600" />
                  <div>
                    <p className="font-medium">{bookingData.guests} Guests</p>
                    <p className="text-sm text-gray-600">Party Size</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-5 w-5 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">₹</span>
                  </div>
                  <div>
                    <p className="font-medium">₹{bookingData.total_price.toLocaleString()}</p>
                    <p className="text-sm text-gray-600">Total Amount</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Information */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-4 text-gray-800">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <User className="h-5 w-5 text-gray-600" />
                  <span>{bookingData.customer_name}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gray-600" />
                  <span>{bookingData.customer_email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gray-600" />
                  <span>{bookingData.customer_phone}</span>
                </div>
              </div>
            </div>

            {/* Booking ID */}
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-sm text-gray-600">Booking Reference</p>
              <p className="font-mono text-sm font-medium">{bookingData.id}</p>
            </div>

            {/* Next Steps */}
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
              <h3 className="font-semibold text-lg mb-2 text-amber-800">What's Next?</h3>
              <ul className="text-sm text-amber-700 space-y-1">
                <li>• You will receive a confirmation email shortly</li>
                <li>• Our team will contact you 24 hours before your experience</li>
                <li>• Please bring a valid ID and arrive 15 minutes early</li>
                <li>• Feel free to contact us if you have any questions</li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={() => navigate('/')}
                className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
              >
                Back to Home
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.print()}
                className="flex-1"
              >
                Print Confirmation
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BookingConfirmation;
