import React, { useState } from 'react';
import { ArrowLeft, Star, MapPin, Calendar, Users, Heart, Share2, Camera, Leaf, Globe, Award, Download, Navigation } from 'lucide-react';
import { Destination } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { generateDestinationPDF } from '../utils/pdfGenerator';

interface DestinationDetailPageProps {
  destination: Destination;
  onBooking: (destination: Destination) => void;
}

const DestinationDetailPage: React.FC<DestinationDetailPageProps> = ({ 
  destination, 
  onBooking 
}) => {
  const { t } = useLanguage();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedTab, setSelectedTab] = useState('overview');

  const images = [
    destination.images[0],
    'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg',
    'https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg',
    'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg'
  ];

  const reviews = [
    {
      id: '1',
      userName: 'Priya Sharma',
      rating: 5,
      comment: 'An incredible experience! The tribal community welcomed us with open arms. The coffee plantation tour was educational and the homestay was authentic.',
      date: new Date('2024-01-15'),
      avatar: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg'
    },
    {
      id: '2',
      userName: 'Rajesh Kumar',
      rating: 5,
      comment: 'Exceeded all expectations. The mountain views, local farming experience, and warm hospitality made this trip unforgettable.',
      date: new Date('2024-01-10'),
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg'
    },
    {
      id: '3',
      userName: 'Sarah Johnson',
      rating: 4,
      comment: 'As a solo female traveler, I felt completely safe and welcomed. The cultural immersion was transformative and authentic.',
      date: new Date('2024-01-05'),
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
    }
  ];

  const tabs = [
    { id: 'overview', label: t('detail.overview') || 'Overview' },
    { id: 'activities', label: t('detail.activities') || 'Activities' },
    { id: 'accommodation', label: t('detail.accommodation') || 'Stay' },
    { id: 'sustainability', label: t('detail.sustainability') || 'Impact' },
    { id: 'reviews', label: t('detail.reviews') || 'Reviews' }
  ];

  const handleDownloadGuide = () => {
    generateDestinationPDF(destination);
  };

  const openGoogleMaps = () => {
    // Mock coordinates - in real app, these would come from destination data
    const coordinates = getDestinationCoordinates(destination.name);
    const url = `https://www.google.com/maps/dir/?api=1&destination=${coordinates.lat},${coordinates.lng}&travelmode=driving`;
    window.open(url, '_blank');
  };

  const getDestinationCoordinates = (name: string) => {
    const coords: { [key: string]: { lat: number; lng: number } } = {
      'Araku Valley': { lat: 18.3273, lng: 82.8739 },
      'Lambasingi': { lat: 17.9500, lng: 82.5833 },
      'Maredumilli': { lat: 17.7333, lng: 81.4500 },
      'Papikondalu': { lat: 17.4500, lng: 81.1000 },
      'Hampi Village': { lat: 15.3350, lng: 76.4600 },
      'Kumbakonam Villages': { lat: 10.9601, lng: 79.3788 },
      'Spiti Valley Villages': { lat: 32.2432, lng: 78.0414 },
      'Majuli Island Villages': { lat: 26.9500, lng: 94.2167 },
      'Khajuraho Villages': { lat: 24.8318, lng: 79.9199 },
      'Kumaon Hill Villages': { lat: 29.5971, lng: 79.6593 }
    };
    return coords[name] || { lat: 20.5937, lng: 78.9629 };
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => window.history.back()}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>{t('detail.back') || 'Back to destinations'}</span>
            </button>
            <div className="flex items-center space-x-2">
              <button
                onClick={handleDownloadGuide}
                className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                <Download className="h-4 w-4" />
                <span>{t('common.download') || 'Download'} Guide</span>
              </button>
              <button
                onClick={openGoogleMaps}
                className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                <Navigation className="h-4 w-4" />
                <span>Get Directions</span>
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900">
                <Share2 className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-red-500">
                <Heart className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
          <div className="lg:col-span-2">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <img
                src={images[selectedImageIndex]}
                alt={destination.name}
                className="w-full h-full object-cover"
              />
              <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
                <Camera className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
            {images.slice(1, 4).map((image, index) => (
              <div
                key={index}
                className="relative aspect-video rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setSelectedImageIndex(index + 1)}
              >
                <img
                  src={image}
                  alt={`${destination.name} ${index + 2}`}
                  className="w-full h-full object-cover hover:opacity-75 transition-opacity"
                />
                {index === 2 && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="text-white font-semibold">+5 more</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2">
            {/* Title and Rating */}
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{destination.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">{destination.rating}</span>
                  <span className="text-gray-600">({destination.reviews} {t('common.reviews') || 'reviews'})</span>
                </div>
                <div className="flex items-center space-x-1 text-gray-600">
                  <MapPin className="h-5 w-5" />
                  <span>{destination.location}</span>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200 mb-6">
              <nav className="flex space-x-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedTab(tab.id)}
                    className={`py-2 px-1 border-b-2 font-medium text-sm ${
                      selectedTab === tab.id
                        ? 'border-emerald-500 text-emerald-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="space-y-6">
              {selectedTab === 'overview' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {t('detail.about') || 'About this destination'}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{destination.description}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {t('detail.host') || 'Your host'}
                    </h3>
                    <div className="flex items-start space-x-4 bg-gray-50 p-4 rounded-lg">
                      <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{destination.hostInfo.name}</h4>
                        <p className="text-sm text-gray-600 mb-2">{destination.hostInfo.experience}</p>
                        <div className="flex flex-wrap gap-2">
                          {destination.hostInfo.languages.map((lang, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-white text-gray-700 text-xs rounded-full"
                            >
                              {lang}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedTab === 'activities' && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {t('detail.what_do') || "What you'll do"}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {destination.activities.map((activity, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200"
                      >
                        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                          <Calendar className="h-4 w-4 text-emerald-600" />
                        </div>
                        <span className="text-gray-700">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedTab === 'accommodation' && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {t('detail.where_stay') || "Where you'll stay"}
                  </h3>
                  <div className="space-y-4">
                    {destination.accommodation.map((acc, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-gray-200"
                      >
                        <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                          <Users className="h-5 w-5 text-amber-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{acc}</h4>
                          <p className="text-sm text-gray-600">Authentic rural accommodation</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedTab === 'sustainability' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      {t('detail.sustainability_impact') || 'Sustainability Impact'}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 bg-green-50 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <Leaf className="h-5 w-5 text-green-600" />
                          <span className="font-medium text-green-900">
                            {t('detail.environmental') || 'Environmental'}
                          </span>
                        </div>
                        <p className="text-sm text-green-700">{destination.sustainability.carbonFootprint}</p>
                      </div>
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <Users className="h-5 w-5 text-blue-600" />
                          <span className="font-medium text-blue-900">
                            {t('detail.community_impact') || 'Community'}
                          </span>
                        </div>
                        <p className="text-sm text-blue-700">{destination.sustainability.communityImpact}</p>
                      </div>
                      <div className="p-4 bg-purple-50 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <Globe className="h-5 w-5 text-purple-600" />
                          <span className="font-medium text-purple-900">
                            {t('detail.cultural') || 'Cultural'}
                          </span>
                        </div>
                        <p className="text-sm text-purple-700">{destination.sustainability.culturalPreservation}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Award className="h-5 w-5 text-amber-600" />
                      <span className="font-medium text-amber-900">
                        {t('detail.certified') || 'Certified Sustainable Tourism'}
                      </span>
                    </div>
                    <p className="text-sm text-amber-700">
                      {t('detail.certified_desc') || 'This destination meets our strict sustainability criteria and contributes to local community development.'}
                    </p>
                  </div>
                </div>
              )}

              {selectedTab === 'reviews' && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {t('detail.guest_reviews') || 'Guest reviews'}
                  </h3>
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div key={review.id} className="border-b border-gray-200 pb-6">
                        <div className="flex items-start space-x-4">
                          <img
                            src={review.avatar}
                            alt={review.userName}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="font-semibold text-gray-900">{review.userName}</span>
                              <div className="flex">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                                ))}
                              </div>
                              <span className="text-sm text-gray-500">
                                {review.date.toLocaleDateString()}
                              </span>
                            </div>
                            <p className="text-gray-600">{review.comment}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl font-bold text-gray-900">
                  ₹{destination.price}
                  <span className="text-sm font-normal text-gray-600">
                    {t('common.night') || '/night'}
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{destination.rating}</span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="grid grid-cols-2 gap-2">
                  <div className="border border-gray-300 rounded-lg p-3">
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      {t('detail.checkin') || 'CHECK-IN'}
                    </label>
                    <input
                      type="date"
                      className="w-full text-sm border-0 p-0 focus:ring-0"
                      defaultValue={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div className="border border-gray-300 rounded-lg p-3">
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      {t('detail.checkout') || 'CHECK-OUT'}
                    </label>
                    <input
                      type="date"
                      className="w-full text-sm border-0 p-0 focus:ring-0"
                      defaultValue={new Date(Date.now() + 86400000).toISOString().split('T')[0]}
                    />
                  </div>
                </div>

                <div className="border border-gray-300 rounded-lg p-3">
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    {t('detail.guests') || 'GUESTS'}
                  </label>
                  <select className="w-full text-sm border-0 p-0 focus:ring-0">
                    <option>1 {t('common.guest') || 'guest'}</option>
                    <option>2 {t('common.guests') || 'guests'}</option>
                    <option>3 {t('common.guests') || 'guests'}</option>
                    <option>4 {t('common.guests') || 'guests'}</option>
                    <option>5+ {t('common.guests') || 'guests'}</option>
                  </select>
                </div>
              </div>

              <button
                onClick={() => onBooking(destination)}
                className="w-full bg-emerald-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
              >
                {t('detail.reserve') || 'Reserve'}
              </button>

              <p className="text-center text-sm text-gray-600 mt-2">
                {t('detail.not_charged') || "You won't be charged yet"}
              </p>

              <div className="mt-6 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>₹{destination.price} x 2 nights</span>
                  <span>₹{destination.price * 2}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>{t('detail.service_fee') || 'Service fee'}</span>
                  <span>₹{Math.round(destination.price * 0.1)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>{t('detail.community_contribution') || 'Community contribution'}</span>
                  <span>₹{Math.round(destination.price * 0.05)}</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between font-semibold">
                  <span>{t('detail.total') || 'Total'}</span>
                  <span>₹{destination.price * 2 + Math.round(destination.price * 0.15)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailPage;