import React from 'react';
import { ArrowRight, Star, Users, Leaf, MapPin, Calendar, Heart, Mic, Globe, Smartphone, Award, BookOpen, TrendingUp } from 'lucide-react';
import { realDestinations } from '../data/realDestinations';
import { useLanguage } from '../contexts/LanguageContext';

interface HomePageProps {
  onDestinationSelect: (destination: Destination) => void;
  onBooking: (destination: Destination) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onDestinationSelect, onBooking }) => {
  const { t } = useLanguage();

  // Use first 4 destinations from real destinations data
  const featuredDestinations = realDestinations.slice(0, 4);

  const platformFeatures = [
    {
      icon: Mic,
      title: language === 'te' ? 'వాయిస్ అసిస్టెంట్' : language === 'hi' ? 'वॉयस असिस्टेंट' : 'Voice Assistant',
      description: language === 'te' ? 'తెలుగులో మాట్లాడి బుకింగ్ చేయండి' : language === 'hi' ? 'हिंदी में बोलकर बुकिंग करें' : 'Book by speaking in your language',
      color: 'bg-purple-500'
    },
    {
      icon: Globe,
      title: language === 'te' ? 'బహుభాషా మద్దతు' : language === 'hi' ? 'बहुभाषी समर्थन' : 'Multi-Language Support',
      description: language === 'te' ? 'తెలుగు, హిందీ, ఇంగ్లీష్‌లో అందుబాటులో' : language === 'hi' ? 'तेलुगु, हिंदी, अंग्रेजी में उपलब्ध' : 'Available in Telugu, Hindi, English',
      color: 'bg-blue-500'
    },
    {
      icon: Smartphone,
      title: language === 'te' ? 'మొబైల్ ఫస్ట్' : language === 'hi' ? 'मोबाइल फर्स्ट' : 'Mobile First',
      description: language === 'te' ? 'మీ ఫోన్‌తో పూర్తి అనుభవం' : language === 'hi' ? 'आपके फोन से पूरा अनुभव' : 'Complete experience on your phone',
      color: 'bg-emerald-500'
    },
    {
      icon: Award,
      title: language === 'te' ? 'కమ్యూనిటీ సర్టిఫికేషన్' : language === 'hi' ? 'कम्युनिटी सर्टिफिकेशन' : 'Community Certification',
      description: language === 'te' ? 'ఎకో-సర్టిఫైడ్, మహిళా నేతృత్వ బ్యాడ్జ్‌లు' : language === 'hi' ? 'इको-सर्टिफाइड, महिला नेतृत्व बैज' : 'Eco-certified, Women-led badges',
      color: 'bg-amber-500'
    }
  ];
  const stats = [
    { label: t('stats.communities'), value: '250+', icon: Users },
    { label: t('stats.experiences'), value: '500+', icon: Leaf },
    { label: t('stats.travelers'), value: '15,000+', icon: Star },
    { label: t('stats.sites'), value: '100+', icon: MapPin },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      comment: 'An incredible experience! The tribal community in Araku Valley welcomed us with open arms. The coffee plantation tour was educational and the homestay was authentic.',
      avatar: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg'
    },
    {
      name: 'Rajesh Kumar',
      location: 'Delhi',
      rating: 5,
      comment: 'Lambasingi exceeded all expectations. The apple orchards, mountain views, and local farming experience gave us a perfect break from city life.',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg'
    },
    {
      name: 'Sarah Johnson',
      location: 'London',
      rating: 5,
      comment: 'As a solo female traveler, I felt completely safe and welcomed. The cultural immersion in Maredumilli was transformative and authentic.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-emerald-800 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div 
          className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg)',
            backgroundBlendMode: 'multiply'
          }}
        >
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {t('hero.title')}
              <span className="block text-amber-300">{t('hero.subtitle')}</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onDestinationSelect(realDestinations[0])}
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                {t('hero.explore')}
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                {t('hero.become_host')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                    <stat.icon className="h-8 w-8 text-emerald-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'te' ? 'అధునాతన ప్లాట్‌ఫారమ్ ఫీచర్లు' : language === 'hi' ? 'उन्नत प्लेटफॉर्म सुविधाएं' : 'Advanced Platform Features'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {language === 'te' 
                ? 'ఆధునిక సాంకేతికతతో గ్రామీణ పర్యాటకాన్ని మార్చుతున్నాము'
                : language === 'hi'
                ? 'आधुनिक तकनीक से ग्रामीण पर्यटन को बदल रहे हैं'
                : 'Transforming rural tourism with cutting-edge technology'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platformFeatures.map((feature, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('featured.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('featured.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredDestinations.map((destination) => (
              <div
                key={destination.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
                onClick={() => onDestinationSelect(destination)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={destination.images[0]}
                    alt={destination.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors">
                      <Heart className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white px-2 py-1 rounded-md text-sm font-semibold text-emerald-600">
                    ₹{destination.price}{t('common.night')}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{destination.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{destination.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-3">{destination.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <MapPin className="h-4 w-4" />
                      <span>{destination.location}</span>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onBooking(destination);
                      }}
                      className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors text-sm font-medium"
                    >
                      {t('destinations.book_now')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
               {t('sustainability.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
               {t('sustainability.description')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Leaf className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{t('sustainability.eco')}</h3>
                    <p className="text-sm text-gray-600">{t('sustainability.eco_desc')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{t('sustainability.community')}</h3>
                    <p className="text-sm text-gray-600">{t('sustainability.community_desc')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{t('sustainability.heritage')}</h3>
                    <p className="text-sm text-gray-600">{t('sustainability.heritage_desc')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Star className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{t('sustainability.authentic')}</h3>
                    <p className="text-sm text-gray-600">{t('sustainability.authentic_desc')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg"
                alt="Sustainable Tourism"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-emerald-600 opacity-10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('testimonials.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('testimonials.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-xl mb-8 text-emerald-100">
            {t('cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onDestinationSelect(featuredDestinations[0])}
              className="bg-white text-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              {t('cta.book')}
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              {t('cta.partner')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;