import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'en' | 'te' | 'hi' | 'ta' | 'kn';
  setLanguage: (lang: 'en' | 'te' | 'hi' | 'ta' | 'kn') => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.destinations': 'Destinations',
    'nav.experiences': 'Experiences',
    'nav.community': 'Community',
    'nav.marketplace': 'Marketplace',
    'nav.become_host': 'Become Host',
    'nav.money_flow': 'Money Flow',
    'nav.community': 'Community',
    'nav.login': 'Login',
    'nav.dashboard': 'Dashboard',
    'nav.bookings': 'My Bookings',
    'nav.favorites': 'Favorites',
    'nav.settings': 'Settings',
    'nav.logout': 'Logout',

    // Homepage
    'hero.title': 'Discover Authentic',
    'hero.subtitle': 'Rural India',
    'hero.description': 'Connect with local communities, experience traditional culture, and contribute to sustainable tourism',
    'hero.explore': 'Explore Destinations',
    'hero.become_host': 'Become a Host',
    'hero.download_guide': 'Download Travel Guide',
    
    'stats.communities': 'Rural Communities',
    'stats.experiences': 'Sustainable Experiences',
    'stats.travelers': 'Happy Travelers',
    'stats.sites': 'Cultural Sites',

    'featured.title': 'Featured Destinations',
    'featured.description': 'Discover the hidden gems of rural India with authentic experiences that benefit local communities',

    'sustainability.title': 'Travel with Purpose',
    'sustainability.description': 'Every booking directly supports rural communities, preserves cultural heritage, and promotes sustainable tourism practices. Your journey creates lasting positive impact.',
    'sustainability.eco': 'Eco-Friendly',
    'sustainability.eco_desc': 'Carbon-neutral travel options',
    'sustainability.community': 'Community Impact',
    'sustainability.community_desc': '85% revenue to local communities',
    'sustainability.heritage': 'Cultural Heritage',
    'sustainability.heritage_desc': 'Traditional customs preserved',
    'sustainability.authentic': 'Authentic Experience',
    'sustainability.authentic_desc': 'Genuine local interactions',

    'testimonials.title': 'What Travelers Say',
    'testimonials.description': 'Real experiences from our community of conscious travelers',

    'cta.title': 'Ready to Start Your Journey?',
    'cta.description': 'Join thousands of travelers who are making a difference through responsible tourism',
    'cta.book': 'Book Your Experience',
    'cta.partner': 'Partner with Us',

    // Marketplace
    'marketplace.title': 'Cultural Marketplace',
    'marketplace.description': 'Authentic handcrafts and cultural items directly from rural artisans',
    'marketplace.handcrafts': 'Handcrafts',
    'marketplace.textiles': 'Traditional Textiles',
    'marketplace.pottery': 'Pottery & Ceramics',
    'marketplace.jewelry': 'Traditional Jewelry',
    'marketplace.food': 'Local Food Products',
    'marketplace.art': 'Folk Art',
    'marketplace.add_to_cart': 'Add to Cart',
    'marketplace.buy_now': 'Buy Now',
    'marketplace.artisan': 'Artisan',
    'marketplace.village': 'Village',

    // Money Flow
    'money_flow.title': 'Transparent Money Distribution',
    'money_flow.description': 'See exactly how your money supports rural communities',
    'money_flow.your_payment': 'Your Payment',
    'money_flow.distribution': 'Distribution Breakdown',
    'money_flow.guides': 'Local Guides',
    'money_flow.accommodation': 'Accommodation Hosts',
    'money_flow.artisans': 'Handcraft Artisans',
    'money_flow.transport': 'Local Transport',
    'money_flow.food': 'Food Providers',
    'money_flow.activities': 'Activity Coordinators',
    'money_flow.community_fund': 'Community Development Fund',
    'money_flow.platform_fee': 'Platform Maintenance',
    'money_flow.total_to_community': 'Total to Community',
    'money_flow.impact_created': 'Impact Created',

    // Host Registration
    'host.title': 'Become a Host',
    'host.subtitle': 'Share your culture and earn sustainable income',
    'host.personal_info': 'Personal Information',
    'host.property_info': 'Property Information',
    'host.cultural_offerings': 'Cultural Offerings',
    'host.verification': 'Verification',
    'host.full_name': 'Full Name',
    'host.phone': 'Phone Number',
    'host.village': 'Village/Town',
    'host.district': 'District',
    'host.state': 'State',
    'host.property_type': 'Property Type',
    'host.rooms': 'Number of Rooms',
    'host.capacity': 'Guest Capacity',
    'host.amenities': 'Amenities',
    'host.cultural_activities': 'Cultural Activities You Offer',
    'host.traditional_skills': 'Traditional Skills',
    'host.local_cuisine': 'Local Cuisine Specialties',
    'host.festivals': 'Local Festivals & Celebrations',
    'host.handicrafts': 'Handicrafts You Make/Sell',
    'host.languages': 'Languages Spoken',
    'host.experience': 'Years of Experience in Hospitality',
    'host.id_proof': 'Government ID Proof',
    'host.property_photos': 'Property Photos',
    'host.certificates': 'Certificates (if any)',
    'host.submit': 'Submit Application',

    // Common
    'common.night': '/night',
    'common.guest': 'guest',
    'common.guests': 'guests',
    'common.download': 'Download',
    'common.view_details': 'View Details',
    'common.book_now': 'Book Now',
    'common.price': 'Price',
    'common.rating': 'Rating',
    'common.reviews': 'Reviews',
    'common.location': 'Location',
    'common.activities': 'Activities',
    'common.accommodation': 'Accommodation',
    'common.sustainability': 'Sustainability',
    'common.cultural_heritage': 'Cultural Heritage',
    'common.traditional_crafts': 'Traditional Crafts',
    'common.local_guides': 'Local Guides',
    'common.authentic_experience': 'Authentic Experience',
  },
  te: {
    // Navigation
    'nav.home': 'హోమ్',
    'nav.destinations': 'గమ్యస్థానాలు',
    'nav.experiences': 'అనుభవాలు',
    'nav.community': 'కమ్యూనిటీ',
    'nav.marketplace': 'మార్కెట్‌ప్లేస్',
    'nav.become_host': 'హోస్ట్ అవ్వండి',
    'nav.money_flow': 'డబ్బు ప్రవాహం',
    'nav.community': 'కమ్యూనిటీ',
    'nav.login': 'లాగిన్',
    'nav.dashboard': 'డాష్‌బోర్డ్',
    'nav.bookings': 'నా బుకింగ్‌లు',
    'nav.favorites': 'ఇష్టమైనవి',
    'nav.settings': 'సెట్టింగ్‌లు',
    'nav.logout': 'లాగ్ అవుట్',

    // Homepage
    'hero.title': 'వాస్తవిక',
    'hero.subtitle': 'గ్రామీణ భారతాన్ని కనుగొనండి',
    'hero.description': 'స్థానిక కమ్యూనిటీలతో కనెక్ట్ అవ్వండి, సాంప్రదాయిక సంస్కృతిని అనుభవించండి మరియు స్థిరమైన పర్యాటకానికి దోహదపడండి',
    'hero.explore': 'గమ్యస్థానాలను అన్వేషించండి',
    'hero.become_host': 'హోస్ట్ అవ్వండి',
    'hero.download_guide': 'ప్రయాణ గైడ్ డౌన్‌లోడ్ చేయండి',
    
    'stats.communities': 'గ్రామీణ కమ్యూనిటీలు',
    'stats.experiences': 'స్థిరమైన అనుభవాలు',
    'stats.travelers': 'సంతోషకరమైన ప్రయాణికులు',
    'stats.sites': 'సాంస్కృతిక ప్రదేశాలు',

    'featured.title': 'ప్రత్యేక గమ్యస్థానాలు',
    'featured.description': 'స్థానిక కమ్యూనిటీలకు ప్రయోజనం చేకూర్చే వాస్తవిక అనుభవాలతో గ్రామీణ భారతదేశంలోని దాచిన రత్నాలను కనుగొనండి',

    'sustainability.title': 'ఉద్దేశ్యంతో ప్రయాణించండి',
    'sustainability.description': 'ప్రతి బుకింగ్ నేరుగా గ్రామీణ కమ్యూనిటీలకు మద్దతు ఇస్తుంది, సాంస్కృతిక వారసత్వాన్ని కాపాడుతుంది మరియు స్థిరమైన పర్యాటక పద్ధతులను ప్రోత్సాహిస్తుంది',
    'sustainability.eco': 'పర్యావరణ అనుకూలం',
    'sustainability.eco_desc': 'కార్బన్-న్యూట్రల్ ప్రయాణ ఎంపికలు',
    'sustainability.community': 'కమ్యూనిటీ ప్రభావం',
    'sustainability.community_desc': '85% ఆదాయం స్థానిక కమ్యూనిటీలకు',
    'sustainability.heritage': 'సాంస్కృతిక వారసత్వం',
    'sustainability.heritage_desc': 'సాంప్రదాయిక ఆచారాలు సంరక్షించబడ్డాయి',
    'sustainability.authentic': 'వాస్తవిక అనుభవం',
    'sustainability.authentic_desc': 'నిజమైన స్థానిక పరస్పర చర్యలు',

    'testimonials.title': 'ప్రయాణికులు చెప్పేది',
    'testimonials.description': 'మా చైతన్య ప్రయాణికుల కమ్యూనిటీ నుండి నిజమైన అనుభవాలు',

    'cta.title': 'మీ ప్రయాణాన్ని ప్రారంభించడానికి సిద్ధంగా ఉన్నారా?',
    'cta.description': 'బాధ్యతాయుత పర్యాటకం ద్వారా మార్పు తెస్తున్న వేలాది మంది ప్రయాణికులతో చేరండి',
    'cta.book': 'మీ అనుభవాన్ని బుక్ చేయండి',
    'cta.partner': 'మాతో భాగస్వామ్యం చేయండి',

    // Marketplace
    'marketplace.title': 'సాంస్కృతిక మార్కెట్‌ప్లేస్',
    'marketplace.description': 'గ్రామీణ కళాకారుల నుండి నేరుగా వాస్తవిక హస్తకళలు మరియు సాంస్కృతిక వస్తువులు',
    'marketplace.handcrafts': 'హస్తకళలు',
    'marketplace.textiles': 'సాంప్రదాయిక వస్త్రాలు',
    'marketplace.pottery': 'కుండలు & సిరామిక్స్',
    'marketplace.jewelry': 'సాంప్రదాయిక ఆభరణాలు',
    'marketplace.food': 'స్థానిక ఆహార ఉత్పత్తులు',
    'marketplace.art': 'జానపద కళ',
    'marketplace.add_to_cart': 'కార్ట్‌కు జోడించండి',
    'marketplace.buy_now': 'ఇప్పుడే కొనండి',
    'marketplace.artisan': 'కళాకారుడు',
    'marketplace.village': 'గ్రామం',

    // Money Flow
    'money_flow.title': 'పారదర్శక డబ్బు పంపిణీ',
    'money_flow.description': 'మీ డబ్బు గ్రామీణ కమ్యూనిటీలకు ఎలా మద్దతు ఇస్తుందో ఖచ్చితంగా చూడండి',
    'money_flow.your_payment': 'మీ చెల్లింపు',
    'money_flow.distribution': 'పంపిణీ వివరణ',
    'money_flow.guides': 'స్థానిక గైడ్‌లు',
    'money_flow.accommodation': 'వసతి హోస్ట్‌లు',
    'money_flow.artisans': 'హస్తకళా కళాకారులు',
    'money_flow.transport': 'స్థానిక రవాణా',
    'money_flow.food': 'ఆహార ప్రదాతలు',
    'money_flow.activities': 'కార్యకలాప సమన్వయకర్తలు',
    'money_flow.community_fund': 'కమ్యూనిటీ అభివృద్ధి ఫండ్',
    'money_flow.platform_fee': 'ప్లాట్‌ఫారమ్ నిర్వహణ',
    'money_flow.total_to_community': 'కమ్యూనిటీకి మొత్తం',
    'money_flow.impact_created': 'సృష్టించిన ప్రభావం',

    // Host Registration
    'host.title': 'హోస్ట్ అవ్వండి',
    'host.subtitle': 'మీ సంస్కృతిని పంచుకోండి మరియు స్థిరమైన ఆదాయం పొందండి',
    'host.personal_info': 'వ్యక్తిగత సమాచారం',
    'host.property_info': 'ఆస్తి సమాచారం',
    'host.cultural_offerings': 'సాంస్కృతిక సేవలు',
    'host.verification': 'ధృవీకరణ',
    'host.full_name': 'పూర్తి పేరు',
    'host.phone': 'ఫోన్ నంబర్',
    'host.village': 'గ్రామం/పట్టణం',
    'host.district': 'జిల్లా',
    'host.state': 'రాష్ట్రం',
    'host.property_type': 'ఆస్తి రకం',
    'host.rooms': 'గదుల సంఖ్య',
    'host.capacity': 'అతిథుల సామర్థ్యం',
    'host.amenities': 'సౌకర్యాలు',
    'host.cultural_activities': 'మీరు అందించే సాంస్కృతిక కార్యకలాపాలు',
    'host.traditional_skills': 'సాంప్రదాయిక నైపుణ్యాలు',
    'host.local_cuisine': 'స్థానిక వంటకాల ప్రత్యేకతలు',
    'host.festivals': 'స్థానిక పండుగలు & వేడుకలు',
    'host.handicrafts': 'మీరు తయారు చేసే/అమ్మే హస్తకళలు',
    'host.languages': 'మాట్లాడే భాషలు',
    'host.experience': 'ఆతిథ్యంలో అనుభవ సంవత్సరాలు',
    'host.id_proof': 'ప్రభుత్వ గుర్తింపు రుజువు',
    'host.property_photos': 'ఆస్తి ఫోటోలు',
    'host.certificates': 'సర్టిఫికేట్లు (ఏవైనా ఉంటే)',
    'host.submit': 'దరఖాస్తు సమర్పించండి',

    // Common
    'common.night': '/రాత్రి',
    'common.guest': 'అతిథి',
    'common.guests': 'అతిథులు',
    'common.download': 'డౌన్‌లోడ్',
    'common.view_details': 'వివరాలను చూడండి',
    'common.book_now': 'ఇప్పుడే బుక్ చేయండి',
    'common.price': 'ధర',
    'common.rating': 'రేటింగ్',
    'common.reviews': 'సమీక్షలు',
    'common.location': 'స్థానం',
    'common.activities': 'కార్యకలాపాలు',
    'common.accommodation': 'వసతి',
    'common.sustainability': 'స్థిరత్వం',
    'common.cultural_heritage': 'సాంస్కృతిక వారసత్వం',
    'common.traditional_crafts': 'సాంప్రదాయిక హస్తకళలు',
    'common.local_guides': 'స్థానిక గైడ్‌లు',
    'common.authentic_experience': 'వాస్తవిక అనుభవం',
  },
  hi: {
    // Navigation
    'nav.home': 'होम',
    'nav.destinations': 'गंतव्य',
    'nav.experiences': 'अनुभव',
    'nav.community': 'समुदाय',
    'nav.marketplace': 'बाज़ार',
    'nav.become_host': 'होस्ट बनें',
    'nav.money_flow': 'पैसे का प्रवाह',
    'nav.community': 'समुदाय',
    'nav.login': 'लॉगिन',
    'nav.dashboard': 'डैशबोर्ड',
    'nav.bookings': 'मेरी बुकिंग',
    'nav.favorites': 'पसंदीदा',
    'nav.settings': 'सेटिंग्स',
    'nav.logout': 'लॉगआउट',

    // Homepage
    'hero.title': 'प्रामाणिक',
    'hero.subtitle': 'ग्रामीण भारत की खोज करें',
    'hero.description': 'स्थानीय समुदायों से जुड़ें, पारंपरिक संस्कृति का अनुभव करें, और टिकाऊ पर्यटन में योगदान दें',
    'hero.explore': 'गंतव्यों का अन्वेषण करें',
    'hero.become_host': 'होस्ट बनें',
    'hero.download_guide': 'यात्रा गाइड डाउनलोड करें',

    // Common translations for Hindi...
    'common.night': '/रात',
    'common.guest': 'अतिथि',
    'common.guests': 'अतिथि',
    'common.download': 'डाउनलोड',
    'common.view_details': 'विवरण देखें',
    'common.book_now': 'अभी बुक करें',
  },
  ta: {
    // Navigation
    'nav.home': 'முகப்பு',
    'nav.destinations': 'இலக்குகள்',
    'nav.experiences': 'அனுபவங்கள்',
    'nav.community': 'சமூகம்',
    'nav.marketplace': 'சந்தை',
    'nav.become_host': 'புரவலர் ஆகுங்கள்',
    'nav.money_flow': 'பணப் பாய்ச்சல்',
    'nav.community': 'சமூகம்',
    'nav.login': 'உள்நுழைவு',

    // Common translations for Tamil...
    'common.night': '/இரவு',
    'common.guest': 'விருந்தினர்',
    'common.guests': 'விருந்தினர்கள்',
    'common.download': 'பதிவிறக்கம்',
  },
  kn: {
    // Navigation
    'nav.home': 'ಮುಖ್ಯ',
    'nav.destinations': 'ಗಮ್ಯಸ್ಥಾನಗಳು',
    'nav.experiences': 'ಅನುಭವಗಳು',
    'nav.community': 'ಸಮುದಾಯ',
    'nav.marketplace': 'ಮಾರುಕಟ್ಟೆ',
    'nav.become_host': 'ಆತಿಥೇಯರಾಗಿ',
    'nav.money_flow': 'ಹಣದ ಹರಿವು',
    'nav.community': 'ಸಮುದಾಯ',
    'nav.login': 'ಲಾಗಿನ್',

    // Common translations for Kannada...
    'common.night': '/ರಾತ್ರಿ',
    'common.guest': 'ಅತಿಥಿ',
    'common.guests': 'ಅತಿಥಿಗಳು',
    'common.download': 'ಡೌನ್‌ಲೋಡ್',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'te' | 'hi' | 'ta' | 'kn'>('en');

  const t = (key: string): string => {
    return translations[language][key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};