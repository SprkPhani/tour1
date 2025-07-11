import React, { useState } from 'react';
import { Smartphone, Camera, Upload, TrendingUp, Award, MessageCircle, Globe, CheckCircle, AlertCircle, DollarSign } from 'lucide-react';

const HostPortalPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [registrationData, setRegistrationData] = useState({
    personalInfo: {
      name: '',
      phone: '',
      village: '',
      language: 'te'
    },
    propertyInfo: {
      type: '',
      rooms: '',
      capacity: ''
    },
    media: {
      photos: [],
      videos: []
    }
  });

  const registrationSteps = [
    {
      step: 1,
      title: 'Personal Information',
      description: 'Basic details about you and your location',
      icon: Smartphone
    },
    {
      step: 2,
      title: 'Property Details',
      description: 'Information about your accommodation',
      icon: Camera
    },
    {
      step: 3,
      title: 'Media Upload',
      description: 'Photos and videos of your property',
      icon: Upload
    },
    {
      step: 4,
      title: 'Verification',
      description: 'Document verification and approval',
      icon: CheckCircle
    }
  ];

  const features = [
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Complete registration using just your smartphone',
      color: 'bg-blue-500'
    },
    {
      icon: Globe,
      title: 'Multi-Language Support',
      description: 'Available in Telugu, Hindi, English, and local dialects',
      color: 'bg-green-500'
    },
    {
      icon: MessageCircle,
      title: 'Voice-Based Onboarding',
      description: 'Speak in your language, we\'ll handle the rest',
      color: 'bg-purple-500'
    },
    {
      icon: DollarSign,
      title: 'Commission-Free Booking',
      description: 'Keep 95% of your earnings, only 5% platform fee',
      color: 'bg-emerald-500'
    },
    {
      icon: TrendingUp,
      title: 'Revenue Tracking',
      description: 'Real-time earnings and transparent payment system',
      color: 'bg-orange-500'
    },
    {
      icon: Award,
      title: 'Certification System',
      description: 'Earn badges for quality, sustainability, and excellence',
      color: 'bg-red-500'
    }
  ];

  const certificationBadges = [
    { badge: '🌱', title: 'Eco-Certified', description: 'Sustainable practices verified' },
    { badge: '👩‍💼', title: 'Women-Led', description: 'Female entrepreneur initiative' },
    { badge: '🏺', title: 'Heritage Keeper', description: 'Cultural preservation champion' },
    { badge: '⭐', title: 'Super Host', description: '4.8+ rating with 50+ reviews' },
    { badge: '🎓', title: 'Trained Professional', description: 'Completed all training modules' },
    { badge: '🤝', title: 'Community Leader', description: 'Mentoring other hosts' }
  ];

  const revenueData = {
    thisMonth: 15750,
    lastMonth: 12300,
    totalEarnings: 89500,
    bookings: 23,
    rating: 4.8,
    reviews: 67
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center">
              <span className="text-2xl">🏠</span>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Host Portal</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Easy registration and management for rural hosts. Start your journey with mobile-friendly tools and multi-language support.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className={`w-12 h-12 ${feature.color} rounded-full flex items-center justify-center mb-4`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Registration Process */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Simple Registration Process</h2>
          
          {/* Progress Steps */}
          <div className="flex items-center justify-between mb-8">
            {registrationSteps.map((step) => (
              <div key={step.step} className="flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                  currentStep >= step.step 
                    ? 'bg-emerald-500 text-white' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  <step.icon className="h-6 w-6" />
                </div>
                <div className="text-center">
                  <div className="font-medium text-gray-900 text-sm">{step.title}</div>
                  <div className="text-xs text-gray-600">{step.description}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Voice Registration */}
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
            <div className="flex items-center space-x-3 mb-4">
              <MessageCircle className="h-6 w-6 text-purple-600" />
              <h3 className="text-lg font-semibold text-purple-900">Voice-Based Registration</h3>
            </div>
            <p className="text-purple-800 mb-4">
              Speak in Telugu, Hindi, or English. Our AI will help you complete the registration process step by step.
            </p>
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
              🎤 Start Voice Registration (తెలుగులో మాట్లాడండి)
            </button>
          </div>

          {/* Mobile Upload */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Camera className="h-6 w-6 text-blue-600" />
              <h3 className="text-lg font-semibold text-blue-900">Mobile Photo/Video Upload</h3>
            </div>
            <p className="text-blue-800 mb-4">
              Use your smartphone to capture and upload photos and videos of your property. Our AI will help optimize them for better visibility.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                📸 Take Photos
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                🎥 Record Video
              </button>
            </div>
          </div>
        </div>

        {/* Revenue Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Revenue Dashboard</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center p-4 bg-emerald-50 rounded-lg">
                <div className="text-2xl font-bold text-emerald-600">₹{revenueData.thisMonth.toLocaleString()}</div>
                <div className="text-sm text-emerald-800">This Month</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">₹{revenueData.totalEarnings.toLocaleString()}</div>
                <div className="text-sm text-blue-800">Total Earnings</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">{revenueData.bookings}</div>
                <div className="text-sm text-purple-800">Bookings</div>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <div className="text-2xl font-bold text-yellow-600">{revenueData.rating}</div>
                <div className="text-sm text-yellow-800">Rating</div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Transparent Revenue Breakdown</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Guest Payment:</span>
                  <span className="font-medium">₹{revenueData.thisMonth.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Platform Fee (5%):</span>
                  <span className="font-medium text-red-600">-₹{Math.round(revenueData.thisMonth * 0.05).toLocaleString()}</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span className="font-semibold">Your Earnings:</span>
                  <span className="font-bold text-emerald-600">₹{Math.round(revenueData.thisMonth * 0.95).toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Certification Badges */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Certifications</h3>
            <div className="space-y-3">
              {certificationBadges.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-xl">{cert.badge}</span>
                  <div>
                    <div className="font-medium text-gray-900 text-sm">{cert.title}</div>
                    <div className="text-xs text-gray-600">{cert.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-xl p-8 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">24/7 Host Support</h2>
            <p className="text-emerald-100 mb-8 max-w-3xl mx-auto">
              Get help in your preferred language through multiple channels. We're here to support your hosting journey.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <MessageCircle className="h-8 w-8 mx-auto mb-2" />
                <div className="font-semibold">AI Chatbot</div>
                <div className="text-emerald-200 text-sm">Instant answers in Telugu/Hindi</div>
              </div>
              <div className="text-center">
                <Smartphone className="h-8 w-8 mx-auto mb-2" />
                <div className="font-semibold">Voice Support</div>
                <div className="text-emerald-200 text-sm">Call in your language</div>
              </div>
              <div className="text-center">
                <Award className="h-8 w-8 mx-auto mb-2" />
                <div className="font-semibold">Mentor Network</div>
                <div className="text-emerald-200 text-sm">Connect with experienced hosts</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostPortalPage;