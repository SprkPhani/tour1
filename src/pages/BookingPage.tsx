import React, { useState } from 'react';
import { Calendar, Users, CreditCard, Shield, ArrowLeft, CheckCircle, Info, Smartphone } from 'lucide-react';
import { Destination, User } from '../types';
import PaymentModal from '../components/PaymentModal';

interface BookingPageProps {
  destination: Destination;
  user: User | null;
  onBookingComplete: () => void;
}

const BookingPage: React.FC<BookingPageProps> = ({ destination, user, onBookingComplete }) => {
  const [bookingData, setBookingData] = useState({
    checkIn: new Date().toISOString().split('T')[0],
    checkOut: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
    guests: 2,
    specialRequests: '',
    paymentMethod: 'card',
    emergencyContact: {
      name: '',
      phone: '',
      relation: ''
    }
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
  });

  const calculateTotal = () => {
    const nights = Math.ceil(
      (new Date(bookingData.checkOut).getTime() - new Date(bookingData.checkIn).getTime()) / (1000 * 3600 * 24)
    );
    const subtotal = destination.price * nights;
    const serviceFee = Math.round(subtotal * 0.1);
    const communityContribution = Math.round(subtotal * 0.05);
    return {
      nights,
      subtotal,
      serviceFee,
      communityContribution,
      total: subtotal + serviceFee + communityContribution
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowPaymentModal(true);
    }
  };

  const handlePaymentSuccess = () => {
    onBookingComplete();
  };

  const handleInputChange = (field: string, value: any) => {
    setBookingData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const pricing = calculateTotal();

  const steps = [
    { number: 1, title: 'Trip Details', icon: Calendar },
    { number: 2, title: 'Guest Information', icon: Users },
    { number: 3, title: 'Payment', icon: CreditCard }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => window.history.back()}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back</span>
          </button>
          <h1 className="text-2xl font-bold text-gray-900">Complete your booking</h1>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  currentStep >= step.number
                    ? 'bg-emerald-600 border-emerald-600 text-white'
                    : 'border-gray-300 text-gray-400'
                }`}>
                  {currentStep > step.number ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    <step.icon className="h-5 w-5" />
                  )}
                </div>
                <span className={`ml-2 text-sm font-medium ${
                  currentStep >= step.number ? 'text-emerald-600' : 'text-gray-400'
                }`}>
                  {step.title}
                </span>
                {step.number < steps.length && (
                  <div className={`w-16 h-0.5 ml-4 ${
                    currentStep > step.number ? 'bg-emerald-600' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Trip Details */}
              {currentStep === 1 && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-6">Your trip details</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Check-in date
                      </label>
                      <input
                        type="date"
                        value={bookingData.checkIn}
                        onChange={(e) => handleInputChange('checkIn', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Check-out date
                      </label>
                      <input
                        type="date"
                        value={bookingData.checkOut}
                        onChange={(e) => handleInputChange('checkOut', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of guests
                    </label>
                    <select
                      value={bookingData.guests}
                      onChange={(e) => handleInputChange('guests', parseInt(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <option key={num} value={num}>{num} guest{num > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Special requests (optional)
                    </label>
                    <textarea
                      value={bookingData.specialRequests}
                      onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Any dietary restrictions, accessibility needs, or special occasions..."
                    />
                  </div>

                  <div className="bg-amber-50 p-4 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <Info className="h-5 w-5 text-amber-600 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-amber-900">Cultural Sensitivity</h3>
                        <p className="text-sm text-amber-700 mt-1">
                          Please respect local customs and traditions. Your host will provide guidance on appropriate behavior and dress codes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Guest Information */}
              {currentStep === 2 && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-6">Guest information</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Primary guest name
                      </label>
                      <input
                        type="text"
                        value={user?.name || ''}
                        disabled
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email address
                      </label>
                      <input
                        type="email"
                        value={user?.email || ''}
                        disabled
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                      />
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="font-medium text-gray-900 mb-4">Emergency contact</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Contact name
                        </label>
                        <input
                          type="text"
                          value={bookingData.emergencyContact.name}
                          onChange={(e) => handleInputChange('emergencyContact', {
                            ...bookingData.emergencyContact,
                            name: e.target.value
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Relationship
                        </label>
                        <input
                          type="text"
                          value={bookingData.emergencyContact.relation}
                          onChange={(e) => handleInputChange('emergencyContact', {
                            ...bookingData.emergencyContact,
                            relation: e.target.value
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                          placeholder="e.g., spouse, parent, friend"
                          required
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone number
                        </label>
                        <input
                          type="tel"
                          value={bookingData.emergencyContact.phone}
                          onChange={(e) => handleInputChange('emergencyContact', {
                            ...bookingData.emergencyContact,
                            phone: e.target.value
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Payment */}
              {currentStep === 3 && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-6">Payment Summary</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-medium text-gray-900 mb-3">Payment Methods Available</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-center space-x-2 p-3 bg-white rounded-md border">
                          <Smartphone className="h-5 w-5 text-purple-600" />
                          <div>
                            <p className="font-medium text-sm">UPI Payment</p>
                            <p className="text-xs text-gray-500">PhonePe, GPay, Paytm</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 p-3 bg-white rounded-md border">
                          <CreditCard className="h-5 w-5 text-blue-600" />
                          <div>
                            <p className="font-medium text-sm">Cards</p>
                            <p className="text-xs text-gray-500">Visa, Mastercard, RuPay</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 p-3 bg-white rounded-md border">
                          <Shield className="h-5 w-5 text-green-600" />
                          <div>
                            <p className="font-medium text-sm">Net Banking</p>
                            <p className="text-xs text-gray-500">All major banks</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <h3 className="font-medium text-emerald-900 mb-2">Total Amount: ₹{pricing.total}</h3>
                      <p className="text-sm text-emerald-700">
                        85% of your payment (₹{Math.round(pricing.total * 0.85)}) goes directly to the local community
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-blue-900">Secure & Trusted</h3>
                        <p className="text-sm text-blue-700 mt-1">
                          All payments are processed securely. Your booking is protected with our guarantee.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => currentStep > 1 && setCurrentStep(currentStep - 1)}
                  className={`px-6 py-2 rounded-md font-medium ${
                    currentStep === 1
                      ? 'invisible'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-emerald-600 text-white rounded-md font-medium hover:bg-emerald-700"
                >
                  {currentStep === 3 ? 'Proceed to Payment' : 'Continue'}
                </button>
              </div>
            </form>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
              <h3 className="font-semibold text-gray-900 mb-4">Booking summary</h3>
              
              <div className="flex space-x-4 mb-4">
                <img
                  src={destination.images[0]}
                  alt={destination.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <h4 className="font-medium text-gray-900">{destination.name}</h4>
                  <p className="text-sm text-gray-600">{destination.location}</p>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Check-in:</span>
                  <span>{new Date(bookingData.checkIn).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Check-out:</span>
                  <span>{new Date(bookingData.checkOut).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Guests:</span>
                  <span>{bookingData.guests}</span>
                </div>
                <div className="flex justify-between">
                  <span>Nights:</span>
                  <span>{pricing.nights}</span>
                </div>
              </div>

              <hr className="my-4" />

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>₹{destination.price} × {pricing.nights} nights</span>
                  <span>₹{pricing.subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Service fee</span>
                  <span>₹{pricing.serviceFee}</span>
                </div>
                <div className="flex justify-between">
                  <span>Community contribution</span>
                  <span>₹{pricing.communityContribution}</span>
                </div>
              </div>

              <hr className="my-4" />

              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>₹{pricing.total}</span>
              </div>

              <div className="mt-4 text-xs text-gray-500">
                <p>By booking, you agree to our terms and conditions and privacy policy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <PaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        amount={pricing.total}
        onPaymentSuccess={handlePaymentSuccess}
      />
    </div>
  );
};

export default BookingPage;