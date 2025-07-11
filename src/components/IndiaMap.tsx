import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Icon } from 'leaflet';
import { MapPin, Navigation, Star, Filter, Search } from 'lucide-react';
import { realDestinations } from '../data/realDestinations';
import 'leaflet/dist/leaflet.css';

interface MapDestination {
  id: string;
  name: string;
  location: string;
  coordinates: [number, number];
  state: string;
  type: string[];
  rating: number;
  price: number;
  image: string;
  description: string;
}

interface IndiaMapProps {
  onDestinationSelect: (destination: any) => void;
  onBooking: (destination: any) => void;
}

const IndiaMap: React.FC<IndiaMapProps> = ({ onDestinationSelect, onBooking }) => {
  const [selectedState, setSelectedState] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [mapDestinations, setMapDestinations] = useState<MapDestination[]>([]);

  // Map destinations with coordinates
  const destinationsWithCoords: MapDestination[] = [
    {
      id: '1',
      name: 'Araku Valley',
      location: 'Visakhapatnam, Andhra Pradesh',
      coordinates: [18.3273, 82.8739],
      state: 'Andhra Pradesh',
      type: ['cultural', 'eco-friendly', 'tribal'],
      rating: 4.8,
      price: 2500,
      image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg',
      description: 'Coffee plantations and tribal culture'
    },
    {
      id: '2',
      name: 'Lambasingi',
      location: 'Chintapalli, Andhra Pradesh',
      coordinates: [17.9500, 82.5833],
      state: 'Andhra Pradesh',
      type: ['heritage', 'eco-friendly', 'mountain'],
      rating: 4.7,
      price: 3200,
      image: 'https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg',
      description: 'Kashmir of Andhra Pradesh'
    },
    {
      id: '3',
      name: 'Maredumilli',
      location: 'East Godavari, Andhra Pradesh',
      coordinates: [17.7333, 81.4500],
      state: 'Andhra Pradesh',
      type: ['cultural', 'eco-friendly', 'forest'],
      rating: 4.9,
      price: 2800,
      image: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg',
      description: 'Pristine forests and tribal lifestyle'
    },
    {
      id: '4',
      name: 'Papikondalu',
      location: 'Godavari River, Andhra Pradesh',
      coordinates: [17.4500, 81.1000],
      state: 'Andhra Pradesh',
      type: ['adventure', 'eco-friendly', 'river'],
      rating: 4.6,
      price: 3500,
      image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg',
      description: 'Grand Canyon of India'
    },
    {
      id: '5',
      name: 'Hampi Village',
      location: 'Ballari, Karnataka',
      coordinates: [15.3350, 76.4600],
      state: 'Karnataka',
      type: ['heritage', 'cultural', 'ancient'],
      rating: 4.8,
      price: 2200,
      image: 'https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg',
      description: 'UNESCO World Heritage site'
    },
    {
      id: '6',
      name: 'Kumbakonam Villages',
      location: 'Thanjavur, Tamil Nadu',
      coordinates: [10.9601, 79.3788],
      state: 'Tamil Nadu',
      type: ['heritage', 'cultural', 'temple'],
      rating: 4.5,
      price: 1800,
      image: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg',
      description: 'Temple town culture'
    },
    {
      id: '7',
      name: 'Spiti Valley Villages',
      location: 'Lahaul and Spiti, Himachal Pradesh',
      coordinates: [32.2432, 78.0414],
      state: 'Himachal Pradesh',
      type: ['adventure', 'cultural', 'mountain'],
      rating: 4.9,
      price: 4500,
      image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg',
      description: 'High-altitude desert villages'
    },
    {
      id: '8',
      name: 'Majuli Island Villages',
      location: 'Jorhat, Assam',
      coordinates: [26.9500, 94.2167],
      state: 'Assam',
      type: ['cultural', 'eco-friendly', 'island'],
      rating: 4.7,
      price: 2600,
      image: 'https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg',
      description: 'World\'s largest river island'
    },
    {
      id: '9',
      name: 'Khajuraho Villages',
      location: 'Chhatarpur, Madhya Pradesh',
      coordinates: [24.8318, 79.9199],
      state: 'Madhya Pradesh',
      type: ['heritage', 'cultural', 'ancient'],
      rating: 4.6,
      price: 2100,
      image: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg',
      description: 'UNESCO World Heritage temples'
    },
    {
      id: '10',
      name: 'Kumaon Hill Villages',
      location: 'Almora, Uttarakhand',
      coordinates: [29.5971, 79.6593],
      state: 'Uttarakhand',
      type: ['cultural', 'eco-friendly', 'mountain'],
      rating: 4.8,
      price: 2900,
      image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg',
      description: 'Traditional Kumaoni culture'
    }
  ];

  const states = [
    'all',
    'Andhra Pradesh',
    'Karnataka',
    'Tamil Nadu',
    'Himachal Pradesh',
    'Assam',
    'Madhya Pradesh',
    'Uttarakhand'
  ];

  const types = [
    'all',
    'heritage',
    'cultural',
    'eco-friendly',
    'adventure',
    'ancient',
    'tribal',
    'mountain',
    'forest',
    'river',
    'island',
    'temple'
  ];

  useEffect(() => {
    let filtered = destinationsWithCoords;

    if (selectedState !== 'all') {
      filtered = filtered.filter(dest => dest.state === selectedState);
    }

    if (selectedType !== 'all') {
      filtered = filtered.filter(dest => dest.type.includes(selectedType));
    }

    if (searchTerm) {
      filtered = filtered.filter(dest =>
        dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dest.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dest.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setMapDestinations(filtered);
  }, [selectedState, selectedType, searchTerm]);

  // Custom marker icon
  const createCustomIcon = (type: string[]) => {
    let color = '#10b981'; // default green
    if (type.includes('heritage')) color = '#f59e0b';
    if (type.includes('adventure')) color = '#ef4444';
    if (type.includes('cultural')) color = '#8b5cf6';

    return new Icon({
      iconUrl: `data:image/svg+xml;base64,${btoa(`
        <svg width="25" height="35" viewBox="0 0 25 35" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.5 0C5.6 0 0 5.6 0 12.5C0 21.9 12.5 35 12.5 35S25 21.9 25 12.5C25 5.6 19.4 0 12.5 0Z" fill="${color}"/>
          <circle cx="12.5" cy="12.5" r="6" fill="white"/>
        </svg>
      `)}`,
      iconSize: [25, 35],
      iconAnchor: [12.5, 35],
      popupAnchor: [0, -35]
    });
  };

  const openGoogleMaps = (destination: MapDestination) => {
    const [lat, lng] = destination.coordinates;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore Rural India</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover authentic village experiences across India. Click on any location to explore and book your cultural journey.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Search destinations..."
              />
            </div>

            {/* State Filter */}
            <div>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
              >
                {states.map(state => (
                  <option key={state} value={state}>
                    {state === 'all' ? 'All States' : state}
                  </option>
                ))}
              </select>
            </div>

            {/* Type Filter */}
            <div>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
              >
                {types.map(type => (
                  <option key={type} value={type}>
                    {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Results Count */}
            <div className="flex items-center justify-center bg-emerald-50 rounded-md px-4 py-2">
              <span className="text-emerald-700 font-medium">
                {mapDestinations.length} destinations found
              </span>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="h-[600px]">
            <MapContainer
              center={[20.5937, 78.9629]} // Center of India
              zoom={5}
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              
              {mapDestinations.map((destination) => (
                <Marker
                  key={destination.id}
                  position={destination.coordinates}
                  icon={createCustomIcon(destination.type)}
                >
                  <Popup>
                    <div className="w-64 p-2">
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-32 object-cover rounded-lg mb-3"
                      />
                      <h3 className="font-bold text-gray-900 mb-1">{destination.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{destination.location}</p>
                      <p className="text-xs text-gray-500 mb-3">{destination.description}</p>
                      
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium">{destination.rating}</span>
                        </div>
                        <span className="text-sm font-bold text-emerald-600">₹{destination.price}/night</span>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-3">
                        {destination.type.slice(0, 3).map((type, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full"
                          >
                            {type}
                          </span>
                        ))}
                      </div>

                      <div className="flex space-x-2">
                        <button
                          onClick={() => {
                            const fullDestination = realDestinations.find(d => d.name === destination.name);
                            if (fullDestination) onDestinationSelect(fullDestination);
                          }}
                          className="flex-1 bg-emerald-600 text-white px-3 py-2 rounded-md text-xs font-medium hover:bg-emerald-700 transition-colors"
                        >
                          View Details
                        </button>
                        <button
                          onClick={() => openGoogleMaps(destination)}
                          className="flex items-center justify-center bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition-colors"
                        >
                          <Navigation className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>

        {/* Legend */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Map Legend</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-emerald-500 rounded-full"></div>
              <span className="text-sm text-gray-700">Eco-friendly</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-amber-500 rounded-full"></div>
              <span className="text-sm text-gray-700">Heritage Sites</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <span className="text-sm text-gray-700">Adventure</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
              <span className="text-sm text-gray-700">Cultural</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndiaMap;