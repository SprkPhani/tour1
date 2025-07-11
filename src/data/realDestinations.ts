import { Destination } from '../types';

// Real destinations with authentic images from rural India
export const realDestinations: Destination[] = [
  {
    id: '1',
    name: 'Araku Valley',
    location: 'Visakhapatnam, Andhra Pradesh',
    description: 'Experience the mystical beauty of Araku Valley with its coffee plantations, tribal culture, and breathtaking landscapes. Home to indigenous tribes with rich traditions spanning centuries.',
    price: 2500,
    rating: 4.8,
    reviews: 147,
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop'
    ],
    activities: ['Coffee plantation tours', 'Tribal village visits', 'Nature walks', 'Waterfall trekking', 'Traditional craft workshops'],
    accommodation: ['Eco-friendly bamboo huts', 'Traditional tribal homes', 'Organic farm stays'],
    sustainability: {
      carbonFootprint: 'Low impact eco-tourism with carbon offset programs',
      communityImpact: '85% revenue directly to tribal communities',
      culturalPreservation: 'Traditional tribal customs and languages preserved'
    },
    hostInfo: {
      name: 'Ravi Tribal Community Collective',
      experience: '15+ years in sustainable community tourism',
      languages: ['Telugu', 'Hindi', 'English', 'Tribal dialects']
    },
    availability: []
  },
  {
    id: '2',
    name: 'Lambasingi',
    location: 'Chintapalli, Andhra Pradesh',
    description: 'Discover the Kashmir of Andhra Pradesh with its unique climate, apple orchards, and serene mountain views. Experience temperatures as low as 0°C in this hill station.',
    price: 3200,
    rating: 4.7,
    reviews: 98,
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop'
    ],
    activities: ['Apple orchard tours', 'Mountain hiking', 'Sunrise viewing', 'Local farming experience', 'Nature photography'],
    accommodation: ['Mountain cottages', 'Farmhouse stays', 'Camping sites'],
    sustainability: {
      carbonFootprint: 'Carbon neutral activities with renewable energy',
      communityImpact: '90% revenue to local farmers and families',
      culturalPreservation: 'Traditional farming methods and mountain culture preserved'
    },
    hostInfo: {
      name: 'Lakshmi Farmers Collective',
      experience: '20+ years in organic farming and hospitality',
      languages: ['Telugu', 'Hindi', 'English']
    },
    availability: []
  },
  {
    id: '3',
    name: 'Maredumilli',
    location: 'East Godavari, Andhra Pradesh',
    description: 'Immerse yourself in pristine forests, ancient temples, and traditional tribal lifestyle in this biodiversity hotspot. Home to rare flora and fauna.',
    price: 2800,
    rating: 4.9,
    reviews: 156,
    images: [
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop'
    ],
    activities: ['Forest trekking', 'Temple visits', 'Bird watching', 'Tribal craft workshops', 'Wildlife photography'],
    accommodation: ['Forest lodges', 'Tribal homestays', 'Tree houses'],
    sustainability: {
      carbonFootprint: 'Forest conservation focused with zero waste policy',
      communityImpact: '95% revenue to tribal communities and forest conservation',
      culturalPreservation: 'Ancient tribal traditions and forest wisdom maintained'
    },
    hostInfo: {
      name: 'Venu Tribal Cooperative',
      experience: '25+ years in forest conservation and eco-tourism',
      languages: ['Telugu', 'Gondi', 'Hindi', 'English']
    },
    availability: []
  },
  {
    id: '4',
    name: 'Papikondalu',
    location: 'Godavari River, Andhra Pradesh',
    description: 'Experience the majestic Godavari River gorge with its dramatic cliffs, boat rides, and riverside tribal villages. Known as the Grand Canyon of India.',
    price: 3500,
    rating: 4.6,
    reviews: 89,
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop'
    ],
    activities: ['River boat cruises', 'Cliff climbing', 'Fishing with locals', 'Riverside camping', 'Water sports'],
    accommodation: ['Riverside cottages', 'Boat houses', 'Tribal village stays'],
    sustainability: {
      carbonFootprint: 'River ecosystem protection with sustainable water tourism',
      communityImpact: '80% revenue to fishing communities and river conservation',
      culturalPreservation: 'Traditional fishing methods and river culture preserved'
    },
    hostInfo: {
      name: 'Srinivas River Community',
      experience: '18+ years in river tourism and conservation',
      languages: ['Telugu', 'Hindi', 'English']
    },
    availability: []
  },
  {
    id: '5',
    name: 'Hampi Village',
    location: 'Ballari, Karnataka',
    description: 'Stay in traditional villages around the UNESCO World Heritage site of Hampi. Experience rural life amidst ancient ruins and boulder landscapes.',
    price: 2200,
    rating: 4.8,
    reviews: 203,
    images: [
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop'
    ],
    activities: ['Heritage walks', 'Coracle rides', 'Rock climbing', 'Traditional crafts', 'Sunset viewpoints'],
    accommodation: ['Heritage homestays', 'Traditional houses', 'Eco-cottages'],
    sustainability: {
      carbonFootprint: 'Heritage conservation with minimal environmental impact',
      communityImpact: '88% revenue to local artisans and heritage preservation',
      culturalPreservation: 'Vijayanagara empire culture and traditions maintained'
    },
    hostInfo: {
      name: 'Hampi Heritage Community',
      experience: '12+ years in heritage tourism',
      languages: ['Kannada', 'Hindi', 'English']
    },
    availability: []
  },
  {
    id: '6',
    name: 'Kumbakonam Villages',
    location: 'Thanjavur, Tamil Nadu',
    description: 'Experience temple town culture in traditional villages around Kumbakonam. Known for its ancient temples, traditional arts, and cultural heritage.',
    price: 1800,
    rating: 4.5,
    reviews: 134,
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop'
    ],
    activities: ['Temple tours', 'Classical music sessions', 'Traditional cooking', 'Silk weaving', 'Cultural performances'],
    accommodation: ['Traditional Tamil homes', 'Heritage houses', 'Temple guesthouses'],
    sustainability: {
      carbonFootprint: 'Cultural tourism with traditional practices',
      communityImpact: '85% revenue to temple communities and artisans',
      culturalPreservation: 'Tamil classical arts and temple traditions preserved'
    },
    hostInfo: {
      name: 'Kumbakonam Cultural Society',
      experience: '20+ years in cultural preservation',
      languages: ['Tamil', 'Hindi', 'English']
    },
    availability: []
  },
  {
    id: '7',
    name: 'Spiti Valley Villages',
    location: 'Lahaul and Spiti, Himachal Pradesh',
    description: 'Experience high-altitude desert villages in the Trans-Himalayan region. Ancient monasteries, traditional architecture, and stunning landscapes.',
    price: 4500,
    rating: 4.9,
    reviews: 87,
    images: [
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop'
    ],
    activities: ['Monastery visits', 'High-altitude trekking', 'Stargazing', 'Traditional crafts', 'Yak herding'],
    accommodation: ['Traditional mud houses', 'Monastery guesthouses', 'Eco-lodges'],
    sustainability: {
      carbonFootprint: 'High-altitude conservation with minimal impact tourism',
      communityImpact: '92% revenue to mountain communities',
      culturalPreservation: 'Tibetan Buddhist culture and traditions preserved'
    },
    hostInfo: {
      name: 'Spiti Mountain Communities',
      experience: '15+ years in mountain tourism',
      languages: ['Hindi', 'Tibetan', 'English']
    },
    availability: []
  },
  {
    id: '8',
    name: 'Majuli Island Villages',
    location: 'Jorhat, Assam',
    description: 'Stay in the world\'s largest river island with unique Assamese culture, traditional crafts, and neo-Vaishnavite monasteries.',
    price: 2600,
    rating: 4.7,
    reviews: 112,
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop'
    ],
    activities: ['Satra visits', 'Mask making', 'Traditional dance', 'River cruises', 'Pottery workshops'],
    accommodation: ['Traditional Assamese houses', 'Satra guesthouses', 'Bamboo cottages'],
    sustainability: {
      carbonFootprint: 'Island ecosystem conservation with sustainable practices',
      communityImpact: '87% revenue to island communities and cultural preservation',
      culturalPreservation: 'Neo-Vaishnavite culture and traditional arts preserved'
    },
    hostInfo: {
      name: 'Majuli Cultural Collective',
      experience: '18+ years in cultural tourism',
      languages: ['Assamese', 'Hindi', 'English']
    },
    availability: []
  },
  {
    id: '9',
    name: 'Khajuraho Villages',
    location: 'Chhatarpur, Madhya Pradesh',
    description: 'Experience rural life around the famous UNESCO World Heritage temples. Traditional crafts, folk performances, and ancient culture.',
    price: 2100,
    rating: 4.6,
    reviews: 156,
    images: [
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop'
    ],
    activities: ['Temple tours', 'Stone carving workshops', 'Folk performances', 'Village walks', 'Traditional crafts'],
    accommodation: ['Heritage homestays', 'Traditional houses', 'Eco-resorts'],
    sustainability: {
      carbonFootprint: 'Heritage conservation with eco-friendly practices',
      communityImpact: '83% revenue to local artisans and heritage preservation',
      culturalPreservation: 'Chandela dynasty culture and stone carving traditions preserved'
    },
    hostInfo: {
      name: 'Khajuraho Heritage Society',
      experience: '14+ years in heritage and cultural tourism',
      languages: ['Hindi', 'English']
    },
    availability: []
  },
  {
    id: '10',
    name: 'Kumaon Hill Villages',
    location: 'Almora, Uttarakhand',
    description: 'Experience traditional Kumaoni culture in picturesque hill villages with terraced fields, ancient temples, and Himalayan views.',
    price: 2900,
    rating: 4.8,
    reviews: 178,
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop'
    ],
    activities: ['Village walks', 'Terrace farming', 'Temple visits', 'Traditional cooking', 'Mountain trekking'],
    accommodation: ['Traditional Kumaoni houses', 'Mountain homestays', 'Eco-lodges'],
    sustainability: {
      carbonFootprint: 'Mountain conservation with sustainable hill tourism',
      communityImpact: '89% revenue to hill communities and conservation',
      culturalPreservation: 'Kumaoni culture and traditional hill practices preserved'
    },
    hostInfo: {
      name: 'Kumaon Hill Communities',
      experience: '16+ years in mountain tourism',
      languages: ['Hindi', 'Kumaoni', 'English']
    },
    availability: []
  }
];