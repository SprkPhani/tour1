import React, { useState } from 'react';
import { Search, Filter, Star, MapPin, Heart, Grid, List } from 'lucide-react';
import { realDestinations } from '../data/realDestinations';
import { useLanguage } from '../contexts/LanguageContext';

interface DestinationsPageProps {
  onDestinationSelect: (destination: Destination) => void;
  onBooking: (destination: Destination) => void;
}

const DestinationsPage: React.FC<DestinationsPageProps> = ({ onDestinationSelect, onBooking }) => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');


  const filteredDestinations = realDestinations.filter(destination => {
    const matchesSearch = destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         destination.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         destination.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = selectedFilter === 'all' || 
                         (selectedFilter === 'budget' && destination.price <= 2500) ||
                         (selectedFilter === 'premium' && destination.price > 3000) ||
                         (selectedFilter === 'top-rated' && destination.rating >= 4.7);
    
    const matchesPrice = destination.price >= priceRange[0] && destination.price <= priceRange[1];
    
    return matchesSearch && matchesFilter && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('destinations.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('destinations.description')}
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            {/* Search */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('destinations.search')}
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder={t('destinations.search_placeholder')}
                />
              </div>
            </div>

            {/* Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('destinations.filter')}
              </label>
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="all">{t('destinations.all')}</option>
                <option value="budget">{t('destinations.budget')}</option>
                <option value="premium">{t('destinations.premium')}</option>
                <option value="top-rated">{t('destinations.top_rated')}</option>
              </select>
            </div>

            {/* View Mode */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('destinations.view')}
              </label>
              <div className="flex rounded-md shadow-sm">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-2 text-sm font-medium rounded-l-md border ${
                    viewMode === 'grid'
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-3 py-2 text-sm font-medium rounded-r-md border-t border-r border-b ${
                    viewMode === 'list'
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Price Range */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('destinations.price_range')}: ₹{priceRange[0]} - ₹{priceRange[1]}
            </label>
            <div className="flex items-center space-x-4">
              <input
                type="range"
                min="0"
                max="5000"
                step="100"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                className="flex-1 accent-emerald-600"
              />
              <input
                type="range"
                min="0"
                max="5000"
                step="100"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="flex-1 accent-emerald-600"
              />
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            {filteredDestinations.length} {t('destinations.found')}
          </p>
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-600">{t('destinations.sort')}</span>
          </div>
        </div>

        {/* Destinations Grid/List */}
        <div className={`${
          viewMode === 'grid'
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
            : 'space-y-6'
        }`}>
          {filteredDestinations.map((destination) => (
            <div
              key={destination.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group ${
                viewMode === 'list' ? 'flex' : ''
              }`}
              onClick={() => onDestinationSelect(destination)}
            >
              <div className={`relative overflow-hidden ${
                viewMode === 'list' ? 'w-64 flex-shrink-0' : ''
              }`}>
                <img
                  src={destination.images[0]}
                  alt={destination.name}
                  className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
                    viewMode === 'list' ? 'w-full h-full' : 'w-full h-48'
                  }`}
                />
                <div className="absolute top-4 right-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      // Add to favorites functionality
                    }}
                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors"
                  >
                    <Heart className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 bg-white px-2 py-1 rounded-md text-sm font-semibold text-emerald-600">
                  ₹{destination.price}{t('common.night')}
                </div>
              </div>
              
              <div className="p-6 flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{destination.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{destination.rating}</span>
                    <span className="text-sm text-gray-500">({destination.reviews})</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-1 text-sm text-gray-500 mb-3">
                  <MapPin className="h-4 w-4" />
                  <span>{destination.location}</span>
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-2">{destination.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {destination.activities.slice(0, 3).map((activity, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full"
                    >
                      {activity}
                    </span>
                  ))}
                  {destination.activities.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      +{destination.activities.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    {destination.hostInfo.name}
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

        {filteredDestinations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">{t('destinations.no_results')}</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedFilter('all');
                setPriceRange([0, 5000]);
              }}
              className="mt-4 text-emerald-600 hover:text-emerald-700 font-medium"
            >
              {t('destinations.clear_filters')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DestinationsPage;