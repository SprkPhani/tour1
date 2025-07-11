import React, { useState } from 'react';
import { Home, Users, Wifi, Car, UtensilsCrossed, Leaf, Shield, Star, CheckCircle, Info } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface AccommodationType {
  id: string;
  name: string;
  description: string;
  image: string;
  features: string[];
  priceRange: string;
  capacity: string;
  amenities: string[];
  culturalExperience: string[];
}

const StayInfoPage: React.FC = () => {
  const { t } = useLanguage();
  const [selectedType, setSelectedType] = useState('traditional-house');

  const accommodationTypes: AccommodationType[] = [
    {
      id: 'traditional-house',
      name: 'Traditional Village House',
      description: 'Stay with local families in authentic village homes built with traditional architecture and materials.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      features: ['Family-style accommodation', 'Traditional architecture', 'Shared meals with family', 'Cultural immersion'],
      priceRange: '₹1,500 - ₹2,500 per night',
      capacity: '2-6 guests',
      amenities: ['Clean bedding', 'Shared bathroom', 'Traditional meals', 'Family interaction', 'Cultural activities'],
      culturalExperience: ['Daily life participation', 'Traditional cooking lessons', 'Local language practice', 'Festival celebrations']
    },
    {
      id: 'eco-lodge',
      name: 'Eco-Friendly Lodge',
      description: 'Sustainable accommodations built with local materials and eco-friendly practices.',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
      features: ['Solar power', 'Rainwater harvesting', 'Organic gardens', 'Waste management'],
      priceRange: '₹2,000 - ₹3,500 per night',
      capacity: '2-4 guests',
      amenities: ['Private bathroom', 'Solar lighting', 'Organic meals', 'Nature walks', 'Environmental education'],
      culturalExperience: ['Sustainable living practices', 'Organic farming', 'Nature conservation', 'Traditional crafts']
    },
    {
      id: 'bamboo-hut',
      name: 'Bamboo Huts',
      description: 'Unique bamboo structures offering an authentic tribal living experience in forest settings.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      features: ['Bamboo construction', 'Forest location', 'Tribal architecture', 'Natural ventilation'],
      priceRange: '₹1,800 - ₹2,800 per night',
      capacity: '2-4 guests',
      amenities: ['Mosquito nets', 'Shared facilities', 'Tribal meals', 'Forest guides', 'Craft workshops'],
      culturalExperience: ['Tribal lifestyle', 'Forest wisdom', 'Traditional hunting/gathering', 'Tribal arts and crafts']
    },
    {
      id: 'farmhouse',
      name: 'Organic Farmhouse',
      description: 'Stay at working organic farms and participate in daily farming activities.',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
      features: ['Working farm', 'Organic produce', 'Farm activities', 'Animal care'],
      priceRange: '₹2,200 - ₹3,200 per night',
      capacity: '2-8 guests',
      amenities: ['Farm-fresh meals', 'Private rooms', 'Farm tours', 'Cooking classes', 'Animal interaction'],
      culturalExperience: ['Farming techniques', 'Seasonal cycles', 'Food production', 'Rural lifestyle']
    },
    {
      id: 'heritage-home',
      name: 'Heritage Home',
      description: 'Historic homes with traditional architecture, antique furnishings, and cultural significance.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      features: ['Historical significance', 'Traditional architecture', 'Antique furnishings', 'Cultural stories'],
      priceRange: '₹2,500 - ₹4,000 per night',
      capacity: '2-6 guests',
      amenities: ['Period furniture', 'Cultural tours', 'Traditional meals', 'Storytelling sessions', 'Heritage walks'],
      culturalExperience: ['Historical narratives', 'Traditional customs', 'Ancestral practices', 'Cultural preservation']
    },
    {
      id: 'monastery-stay',
      name: 'Monastery Guesthouse',
      description: 'Simple, peaceful accommodations in Buddhist monasteries with meditation and spiritual experiences.',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
      features: ['Spiritual environment', 'Meditation sessions', 'Simple living', 'Peaceful surroundings'],
      priceRange: '₹1,200 - ₹2,000 per night',
      capacity: '1-4 guests',
      amenities: ['Basic accommodation', 'Vegetarian meals', 'Meditation hall', 'Prayer sessions', 'Spiritual guidance'],
      culturalExperience: ['Buddhist practices', 'Meditation techniques', 'Spiritual discussions', 'Monastery life']
    }
  ];

  const generalAmenities = [
    { icon: Wifi, name: 'Basic WiFi', description: 'Available in common areas (speed may vary)' },
    { icon: Car, name: 'Local Transport', description: 'Arranged pickup/drop and local sightseeing' },
    { icon: UtensilsCrossed, name: 'Traditional Meals', description: 'Authentic local cuisine with fresh ingredients' },
    { icon: Users, name: 'Cultural Guide', description: 'Local guide for cultural activities and tours' },
    { icon: Leaf, name: 'Eco-Friendly', description: 'Sustainable practices and environmental consciousness' },
    { icon: Shield, name: 'Safety & Security', description: '24/7 support and emergency assistance' }
  ];

  const safetyGuidelines = [
    'All accommodations are verified and regularly inspected',
    'Host families are background-checked and trained',
    'Emergency contact numbers provided for each location',
    '24/7 customer support available',
    'First aid facilities available at all properties',
    'Local emergency services contacts provided',
    'Safety briefings conducted upon arrival',
    'Regular health and safety audits performed'
  ];

  const bookingProcess = [
    { step: 1, title: 'Choose Accommodation', description: 'Select your preferred stay type and location' },
    { step: 2, title: 'Check Availability', description: 'Verify dates and guest capacity' },
    { step: 3, title: 'Meet Your Host', description: 'Connect with your host family or property manager' },
    { step: 4, title: 'Confirm Booking', description: 'Complete payment and receive confirmation' },
    { step: 5, title: 'Prepare for Stay', description: 'Receive detailed information and packing list' },
    { step: 6, title: 'Enjoy Experience', description: 'Immerse yourself in authentic rural culture' }
  ];

  const selectedAccommodation = accommodationTypes.find(type => type.id === selectedType);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Accommodation Information</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover authentic rural accommodations that offer genuine cultural experiences while supporting local communities
          </p>
        </div>

        {/* Accommodation Types */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Types of Accommodation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {accommodationTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`p-4 rounded-lg border-2 text-left transition-colors ${
                  selectedType === type.id
                    ? 'border-emerald-500 bg-emerald-50'
                    : 'border-gray-200 hover:border-gray-300 bg-white'
                }`}
              >
                <h3 className="font-semibold text-gray-900 mb-2">{type.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{type.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-emerald-600">{type.priceRange}</span>
                  <span className="text-xs text-gray-500">{type.capacity}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Selected Accommodation Details */}
          {selectedAccommodation && (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={selectedAccommodation.image}
                    alt={selectedAccommodation.name}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedAccommodation.name}</h3>
                  <p className="text-gray-600 mb-4">{selectedAccommodation.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Features</h4>
                      <ul className="space-y-1">
                        {selectedAccommodation.features.map((feature, index) => (
                          <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-emerald-500" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Amenities</h4>
                      <ul className="space-y-1">
                        {selectedAccommodation.amenities.map((amenity, index) => (
                          <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-emerald-500" />
                            <span>{amenity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Cultural Experience</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedAccommodation.culturalExperience.map((experience, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm rounded-full"
                        >
                          {experience}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* General Amenities */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Standard Amenities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {generalAmenities.map((amenity, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <amenity.icon className="h-5 w-5 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">{amenity.name}</h3>
                </div>
                <p className="text-gray-600 text-sm">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Process */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Book Your Stay</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bookingProcess.map((step) => (
                <div key={step.step} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Safety & Security */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Safety & Security</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Our Safety Commitment</h3>
                <ul className="space-y-2">
                  {safetyGuidelines.slice(0, 4).map((guideline, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                      <Shield className="h-4 w-4 text-emerald-500 mt-0.5" />
                      <span>{guideline}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Additional Safety Measures</h3>
                <ul className="space-y-2">
                  {safetyGuidelines.slice(4).map((guideline, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                      <Shield className="h-4 w-4 text-emerald-500 mt-0.5" />
                      <span>{guideline}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Important Information */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Info className="h-6 w-6 text-blue-600 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Important Information</h3>
              <div className="text-sm text-blue-800 space-y-2">
                <p>• Check-in time: 2:00 PM - 8:00 PM | Check-out time: 8:00 AM - 11:00 AM</p>
                <p>• Advance booking recommended, especially during festival seasons</p>
                <p>• Respect local customs and dress modestly</p>
                <p>• Inform hosts about dietary restrictions or allergies in advance</p>
                <p>• Carry basic medications and personal care items</p>
                <p>• Mobile network coverage may be limited in remote areas</p>
                <p>• Weather conditions can affect activities - pack accordingly</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayInfoPage;