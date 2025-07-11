import React, { useState } from 'react';
import { BookOpen, Award, Users, CheckCircle, Play, Download, Star, TrendingUp, Globe, Smartphone } from 'lucide-react';

const CapacityBuildingPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('hospitality');

  const trainingCategories = [
    {
      id: 'hospitality',
      title: 'Hospitality Excellence',
      icon: Star,
      badge: '⭐',
      modules: 8,
      duration: '6 hours',
      description: 'Master the art of welcoming guests and creating unforgettable experiences'
    },
    {
      id: 'hygiene',
      title: 'Hygiene & Safety',
      icon: CheckCircle,
      badge: '🧼',
      modules: 6,
      duration: '4 hours',
      description: 'Essential hygiene practices and safety protocols for guest accommodation'
    },
    {
      id: 'storytelling',
      title: 'Cultural Storytelling',
      icon: BookOpen,
      badge: '📚',
      modules: 5,
      duration: '3 hours',
      description: 'Share your heritage and traditions through compelling narratives'
    },
    {
      id: 'sustainability',
      title: 'Sustainable Practices',
      icon: Globe,
      badge: '🌱',
      modules: 7,
      duration: '5 hours',
      description: 'Environmental conservation and responsible tourism implementation'
    },
    {
      id: 'digital',
      title: 'Digital Skills',
      icon: Smartphone,
      badge: '📱',
      modules: 10,
      duration: '8 hours',
      description: 'Master digital tools, online booking systems, and social media marketing'
    }
  ];

  const certificationLevels = [
    {
      level: 'Bronze',
      requirements: ['Complete 3 training modules', 'Pass basic assessment', 'Host 5 guests'],
      badge: '🥉',
      benefits: ['Basic Host Badge', 'Platform Listing', 'Community Access']
    },
    {
      level: 'Silver',
      requirements: ['Complete 6 training modules', '4.5+ rating', 'Host 20 guests'],
      badge: '🥈',
      benefits: ['Silver Host Badge', 'Priority Listing', 'Marketing Support']
    },
    {
      level: 'Gold',
      requirements: ['Complete all modules', '4.8+ rating', 'Host 50 guests'],
      badge: '🥇',
      benefits: ['Gold Host Badge', 'Featured Listing', 'Revenue Bonus']
    },
    {
      level: 'Platinum',
      requirements: ['Mentor other hosts', '4.9+ rating', 'Community leadership'],
      badge: '💎',
      benefits: ['Platinum Badge', 'Ambassador Status', 'Special Recognition']
    }
  ];

  const specialCertifications = [
    {
      title: 'Eco-Certified Host',
      badge: '🌱',
      description: 'Verified sustainable and eco-friendly practices',
      requirements: ['Solar/renewable energy', 'Waste management', 'Water conservation', 'Organic farming']
    },
    {
      title: 'Women-Led Initiative',
      badge: '👩‍💼',
      description: 'Female entrepreneur recognition and support',
      requirements: ['Women-owned business', 'Community impact', 'Leadership training', 'Mentorship program']
    },
    {
      title: 'Heritage Keeper',
      badge: '🏺',
      description: 'Cultural preservation and traditional knowledge sharing',
      requirements: ['Cultural activities', 'Traditional crafts', 'Local history', 'Language preservation']
    },
    {
      title: 'Digital Pioneer',
      badge: '💻',
      description: 'Advanced digital skills and online presence',
      requirements: ['Social media mastery', 'Online marketing', 'Digital payments', 'Tech mentoring']
    }
  ];

  const trainingModules = {
    hospitality: [
      { title: 'Guest Welcome Protocols', duration: '45 min', completed: true },
      { title: 'Room Preparation Standards', duration: '30 min', completed: true },
      { title: 'Cultural Sensitivity Training', duration: '60 min', completed: false },
      { title: 'Conflict Resolution', duration: '40 min', completed: false },
      { title: 'Guest Feedback Management', duration: '35 min', completed: false }
    ],
    hygiene: [
      { title: 'Basic Hygiene Principles', duration: '40 min', completed: true },
      { title: 'Food Safety Standards', duration: '50 min', completed: false },
      { title: 'Cleaning Protocols', duration: '45 min', completed: false },
      { title: 'Health & Safety Guidelines', duration: '35 min', completed: false }
    ],
    storytelling: [
      { title: 'Narrative Techniques', duration: '40 min', completed: false },
      { title: 'Cultural Context Sharing', duration: '45 min', completed: false },
      { title: 'Interactive Storytelling', duration: '35 min', completed: false },
      { title: 'Digital Storytelling Tools', duration: '30 min', completed: false }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-2xl">📚</span>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Capacity Building Toolkit</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive training modules, certification programs, and skill development resources for rural tourism excellence
          </p>
        </div>

        {/* Training Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {trainingCategories.map((category) => (
            <div
              key={category.id}
              className={`bg-white rounded-lg shadow-md p-6 cursor-pointer transition-all ${
                selectedCategory === category.id ? 'ring-2 ring-purple-500 shadow-lg' : 'hover:shadow-lg'
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-2xl">{category.badge}</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
                  <p className="text-sm text-gray-600">{category.modules} modules • {category.duration}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-purple-600 font-medium">View Modules</span>
                <Play className="h-4 w-4 text-purple-600" />
              </div>
            </div>
          ))}
        </div>

        {/* Training Modules Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              {trainingCategories.find(c => c.id === selectedCategory)?.title} Modules
            </h2>
            <div className="space-y-4">
              {(trainingModules[selectedCategory as keyof typeof trainingModules] || []).map((module, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      module.completed ? 'bg-emerald-100' : 'bg-gray-100'
                    }`}>
                      {module.completed ? (
                        <CheckCircle className="h-5 w-5 text-emerald-600" />
                      ) : (
                        <Play className="h-5 w-5 text-gray-600" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{module.title}</h4>
                      <p className="text-sm text-gray-600">{module.duration}</p>
                    </div>
                  </div>
                  <button className={`px-4 py-2 rounded-md text-sm font-medium ${
                    module.completed 
                      ? 'bg-emerald-100 text-emerald-700' 
                      : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                  }`}>
                    {module.completed ? 'Review' : 'Start'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Progress</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">65%</div>
                  <div className="text-sm text-gray-600">Overall Completion</div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-xl font-bold text-emerald-600">12</div>
                    <div className="text-xs text-gray-600">Completed</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-blue-600">6</div>
                    <div className="text-xs text-gray-600">In Progress</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Support</h3>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="font-medium text-blue-900 text-sm">24/7 Chatbot</div>
                  <div className="text-xs text-blue-700">Get instant help in Telugu/Hindi</div>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <div className="font-medium text-green-900 text-sm">Voice Assistant</div>
                  <div className="text-xs text-green-700">Speak your questions naturally</div>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <div className="font-medium text-purple-900 text-sm">Human Support</div>
                  <div className="text-xs text-purple-700">Connect with experts</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certification Levels */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Certification Levels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificationLevels.map((cert, index) => (
              <div key={index} className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="text-4xl mb-4">{cert.badge}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{cert.level}</h3>
                <div className="space-y-2 mb-4">
                  <h4 className="font-medium text-gray-700 text-sm">Requirements:</h4>
                  {cert.requirements.map((req, idx) => (
                    <div key={idx} className="text-xs text-gray-600">• {req}</div>
                  ))}
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-700 text-sm">Benefits:</h4>
                  {cert.benefits.map((benefit, idx) => (
                    <div key={idx} className="text-xs text-emerald-600">✓ {benefit}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Special Certifications */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Special Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specialCertifications.map((cert, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-2xl">{cert.badge}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{cert.title}</h3>
                    <p className="text-sm text-gray-600">{cert.description}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-700">Requirements:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {cert.requirements.map((req, idx) => (
                      <div key={idx} className="text-sm text-gray-600 flex items-center">
                        <CheckCircle className="h-3 w-3 text-emerald-500 mr-2" />
                        {req}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Impact */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Building Stronger Communities</h2>
            <p className="text-purple-100 mb-8 max-w-3xl mx-auto">
              Our capacity building programs have empowered thousands of rural hosts to create sustainable livelihoods while preserving their cultural heritage.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold">3,500+</div>
                <div className="text-purple-200">Hosts Trained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">1,200+</div>
                <div className="text-purple-200">Certified Hosts</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">95%</div>
                <div className="text-purple-200">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">₹2Cr+</div>
                <div className="text-purple-200">Community Earnings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapacityBuildingPage;