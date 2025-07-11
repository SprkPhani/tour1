import React from 'react';
import { Mountain, User, Menu, X, Heart, Calendar, Settings, Globe, Users, Award, BookOpen } from 'lucide-react';
import { User as UserType } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  user: UserType | null;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage, user, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = React.useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = React.useState(false);
  const [isCommunityMenuOpen, setIsCommunityMenuOpen] = React.useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { id: 'home', label: t('nav.home') },
    { id: 'destinations', label: t('nav.destinations') },
    { id: 'experiences', label: t('nav.experiences') },
    { id: 'marketplace', label: t('nav.marketplace') },
  ];

  const communityItems = [
    { 
      id: 'community-onboarding', 
      label: 'Community Onboarding', 
      badge: '👥',
      description: 'Empowerment & Training'
    },
    { 
      id: 'host-portal', 
      label: 'Host Portal', 
      badge: '🏠',
      description: 'Easy Registration & Management'
    },
    { 
      id: 'capacity-building', 
      label: 'Capacity Building', 
      badge: '📚',
      description: 'Training & Certification'
    },
    { 
      id: 'eco-certified', 
      label: 'Eco-Certified Hosts', 
      badge: '🌱',
      description: 'Sustainable Tourism Leaders'
    },
    { 
      id: 'women-led', 
      label: 'Women-Led Initiatives', 
      badge: '👩‍💼',
      description: 'Female Entrepreneurs'
    },
    { 
      id: 'tribal-heritage', 
      label: 'Tribal Heritage', 
      badge: '🏺',
      description: 'Indigenous Culture Preservation'
    }
  ];

  const languages = [
    { code: 'en', name: 'English', native: 'English' },
    { code: 'te', name: 'Telugu', native: 'తెలుగు' },
    { code: 'hi', name: 'Hindi', native: 'हिंदी' },
    { code: 'ta', name: 'Tamil', native: 'தமிழ்' },
    { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            <Mountain className="h-8 w-8 text-emerald-600" />
            <span className="font-bold text-xl text-gray-800">VillageStay</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-emerald-600 bg-emerald-50'
                    : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Community Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsCommunityMenuOpen(!isCommunityMenuOpen)}
                className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
              >
                <Users className="h-4 w-4" />
                <span>Community</span>
              </button>

              {isCommunityMenuOpen && (
                <div className="absolute left-0 mt-2 w-80 bg-white rounded-md shadow-lg py-2 z-50 border">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <h3 className="font-semibold text-gray-900">Community Ecosystem</h3>
                    <p className="text-xs text-gray-600">Empowering rural communities through technology</p>
                  </div>
                  {communityItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setCurrentPage(item.id);
                        setIsCommunityMenuOpen(false);
                      }}
                      className="w-full flex items-start space-x-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-lg">{item.badge}</span>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 text-sm">{item.label}</div>
                        <div className="text-xs text-gray-600">{item.description}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Side Menu */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="flex items-center space-x-1 p-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                <Globe className="h-4 w-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-700 uppercase">
                  {language}
                </span>
              </button>

              {isLanguageMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as any);
                        setIsLanguageMenuOpen(false);
                      }}
                      className={`flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 ${
                        language === lang.code ? 'text-emerald-600 bg-emerald-50' : 'text-gray-700'
                      }`}
                    >
                      <span className="font-medium">{lang.native}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Become Host Button */}
            <button
              onClick={() => setCurrentPage('become-host')}
              className="hidden md:block bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 transition-colors text-sm font-medium"
            >
              {t('nav.become_host')}
            </button>

            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 transition-colors"
                >
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <span className="hidden sm:block text-sm font-medium text-gray-700">
                    {user.name}
                  </span>
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <button
                      onClick={() => {
                        setCurrentPage('dashboard');
                        setIsUserMenuOpen(false);
                      }}
                      className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <User className="h-4 w-4" />
                      <span>{t('nav.dashboard')}</span>
                    </button>
                    <button
                      onClick={() => {
                        setCurrentPage('bookings');
                        setIsUserMenuOpen(false);
                      }}
                      className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <Calendar className="h-4 w-4" />
                      <span>{t('nav.bookings')}</span>
                    </button>
                    <button
                      onClick={() => {
                        setCurrentPage('favorites');
                        setIsUserMenuOpen(false);
                      }}
                      className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <Heart className="h-4 w-4" />
                      <span>{t('nav.favorites')}</span>
                    </button>
                    <button
                      onClick={() => {
                        setCurrentPage('settings');
                        setIsUserMenuOpen(false);
                      }}
                      className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <Settings className="h-4 w-4" />
                      <span>{t('nav.settings')}</span>
                    </button>
                    <hr className="my-1" />
                    <button
                      onClick={() => {
                        onLogout();
                        setIsUserMenuOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      {t('nav.logout')}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => setCurrentPage('login')}
                className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors"
              >
                {t('nav.login')}
              </button>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    currentPage === item.id
                      ? 'text-emerald-600 bg-emerald-50'
                      : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Community Items */}
              <div className="border-t pt-2 mt-2">
                <p className="px-3 py-1 text-xs font-semibold text-gray-500 uppercase">Community</p>
                {communityItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.id);
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center space-x-2 w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
                  >
                    <span>{item.badge}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
              
              <button
                onClick={() => {
                  setCurrentPage('become-host');
                  setIsMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium bg-amber-500 text-white hover:bg-amber-600 transition-colors"
              >
                {t('nav.become_host')}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;