import React, { useState } from 'react';
import { Users, Award, BookOpen, CheckCircle, Play, Download, MessageCircle, Globe, Smartphone } from 'lucide-react';

const CommunityOnboardingPage: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState('overview');

  const onboardingModules = [
    {
      id: 'overview',
      title: 'Community Empowerment Overview',
      icon: Users,
      badge: '👥',
      duration: '15 mins',
      description: 'Understanding the VillageStay ecosystem and your role in sustainable tourism',
      completed: true
    },
    {
      id: 'digital-literacy',
      title: 'Digital Literacy Basics',
      icon: Smartphone,
      badge: '📱',
      duration: '30 mins',
      description: 'Learn to use smartphones, apps, and digital payment systems',
      completed: true
    },
    {
      id: 'hospitality',
      title: 'Hospitality Excellence',
      icon: Award,
      badge: '⭐',
      duration: '45 mins',
      description: 'Best practices for welcoming guests and creating memorable experiences',
      completed: false
    },
    {
      id: 'storytelling',
      title: 'Cultural Storytelling',
      icon: BookOpen,
      badge: '📚',
      duration: '25 mins',
      description: 'Share your heritage and traditions with visitors effectively',
      completed: false
    },
    {
      id: 'sustainability',
      title: 'Sustainable Practices',
      icon: Globe,
      badge: '🌱',
      duration: '35 mins',
      description: 'Environmental conservation and responsible tourism practices',
      completed: false
    }
  ];

  const achievements = [
    { badge: '🎓', title: 'Digital Pioneer', description: 'Completed digital literacy training' },
    { badge: '🌟', title: 'Host Excellence', description: 'Achieved 4.8+ rating from guests' },
    { badge: '🌱', title: 'Eco Champion', description: 'Implemented sustainable practices' },
    { badge: '👑', title: 'Community Leader', description: 'Mentored 5+ new hosts' }
  ];

  const supportChannels = [
    {
      title: 'AI Chatbot Support',
      description: 'Get instant answers in your local language',
      icon: MessageCircle,
      available: '24/7',
      languages: ['Telugu', 'Hindi', 'English']
    },
    {
      title: 'Voice Support',
      description: 'Call for assistance in your preferred language',
      icon: Smartphone,
      available: '9 AM - 9 PM',
      languages: ['Telugu', 'Hindi', 'English']
    },
    {
      title: 'Community Mentors',
      description: 'Connect with experienced hosts in your area',
      icon: Users,
      available: 'On Request',
      languages: ['Local Dialects']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <Users className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Community Onboarding & Empowerment</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering rural communities through comprehensive training, digital literacy, and sustainable tourism practices
          </p>
        </div>

        {/* Progress Overview */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Your Learning Journey</h2>
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">2/5</div>
                <div className="text-sm text-gray-600">Modules Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">40%</div>
                <div className="text-sm text-gray-600">Progress</div>
              </div>
            </div>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
            <div className="bg-gradient-to-r from-emerald-500 to-blue-500 h-3 rounded-full" style={{ width: '40%' }}></div>
          </div>
        </div>

        {/* Training Modules */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Training Modules</h2>
            <div className="space-y-4">
              {onboardingModules.map((module) => (
                <div
                  key={module.id}
                  className={`bg-white rounded-lg shadow-md p-6 cursor-pointer transition-all ${
                    selectedModule === module.id ? 'ring-2 ring-emerald-500' : 'hover:shadow-lg'
                  }`}
                  onClick={() => setSelectedModule(module.id)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                        <span className="text-xl">{module.badge}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{module.title}</h3>
                        <p className="text-sm text-gray-600">{module.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {module.completed ? (
                        <CheckCircle className="h-6 w-6 text-emerald-500" />
                      ) : (
                        <Play className="h-6 w-6 text-blue-500" />
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{module.description}</p>
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      module.completed 
                        ? 'bg-emerald-100 text-emerald-700' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {module.completed ? 'Completed' : 'Start Learning'}
                    </span>
                    <button className="text-emerald-600 hover:text-emerald-700 font-medium text-sm">
                      {module.completed ? 'Review' : 'Begin Module'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Achievements */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Achievements</h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-2xl">{achievement.badge}</span>
                    <div>
                      <div className="font-medium text-gray-900">{achievement.title}</div>
                      <div className="text-sm text-gray-600">{achievement.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Support Channels */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Get Support</h3>
              <div className="space-y-4">
                {supportChannels.map((channel, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <channel.icon className="h-5 w-5 text-emerald-600" />
                      <div className="font-medium text-gray-900">{channel.title}</div>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{channel.description}</p>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Available: {channel.available}</span>
                      <span>{channel.languages.join(', ')}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Community Impact */}
        <div className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-xl p-8 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Community Impact</h2>
            <p className="text-emerald-100 mb-8 max-w-3xl mx-auto">
              Together, we're building a sustainable future for rural tourism while preserving our cultural heritage
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold">2,500+</div>
                <div className="text-emerald-200">Hosts Trained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">150+</div>
                <div className="text-emerald-200">Villages Connected</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">₹50L+</div>
                <div className="text-emerald-200">Community Earnings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">95%</div>
                <div className="text-emerald-200">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityOnboardingPage;