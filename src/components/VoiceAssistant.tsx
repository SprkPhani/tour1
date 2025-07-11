import React, { useState, useRef, useEffect } from 'react';
import { Mic, MicOff, Volume2, VolumeX, MessageCircle, X, Send, Bot, User, Globe, Navigation } from 'lucide-react';
import { useSpeechSynthesis, useSpeechRecognition } from 'react-speech-kit';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { useLanguage } from '../contexts/LanguageContext';

interface VoiceMessage {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  language: string;
}

interface VoiceAssistantProps {
  onNavigate: (page: string, data?: any) => void;
  onFilterUpdate: (filters: any) => void;
}

const VoiceAssistant: React.FC<VoiceAssistantProps> = ({ onNavigate, onFilterUpdate }) => {
  const { language, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [messages, setMessages] = useState<VoiceMessage[]>([
    {
      id: '1',
      text: language === 'te' 
        ? 'నమస్కారం! నేను మీ VillageStay AI సహాయకుడిని. నేను బుకింగ్‌లు, గమ్యస్థానాలు, సాంస్కృతిక సమాచారం మరియు నావిగేషన్‌తో సహాయం చేయగలను. మీరు తెలుగు, హిందీ లేదా ఇంగ్లీష్‌లో నాతో మాట్లాడవచ్చు!'
        : language === 'hi'
        ? 'नमस्ते! मैं आपका VillageStay AI सहायक हूं। मैं बुकिंग, गंतव्य, सांस्कृतिक जानकारी और नेवीगेशन में मदद कर सकता हूं। आप हिंदी, तेलुगु या अंग्रेजी में मुझसे बात कर सकते हैं!'
        : 'Hello! I\'m your VillageStay AI assistant. I can help you with bookings, destinations, cultural information, and navigation. You can speak to me in Hindi, Telugu, or English!',
      isBot: true,
      timestamp: new Date(),
      language: language
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize Gemini AI
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || 'your-gemini-api-key');
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const { speak, cancel, speaking } = useSpeechSynthesis();
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result: string) => {
      setInputText(result);
      handleVoiceInput(result);
    },
    onError: (error: any) => {
      console.error('Speech recognition error:', error);
    }
  });

  useEffect(() => {
    setIsSpeaking(speaking);
  }, [speaking]);

  useEffect(() => {
    setIsListening(listening);
  }, [listening]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const detectLanguage = (text: string): string => {
    // Simple language detection based on script
    if (/[\u0900-\u097F]/.test(text)) return 'hi'; // Hindi
    if (/[\u0C00-\u0C7F]/.test(text)) return 'te'; // Telugu
    if (/[\u0B80-\u0BFF]/.test(text)) return 'ta'; // Tamil
    if (/[\u0C80-\u0CFF]/.test(text)) return 'kn'; // Kannada
    return 'en'; // Default to English
  };

  const getGeminiResponse = async (prompt: string, userLanguage: string): Promise<string> => {
    try {
      setIsProcessing(true);
      
      const contextPrompt = `
        You are a helpful AI assistant for VillageStay, a rural tourism platform in India. 
        You help users with:
        - Finding and booking rural destinations
        - Cultural information about villages
        - Navigation and travel planning
        - Sustainable tourism practices
        - Local experiences and activities
        - Community onboarding and host portal information
        - Capacity building and training programs
        - Certification systems and badges
        - Revenue tracking and transparent payments
        - Multi-language support and voice assistance
        
        Available destinations include:
        - Araku Valley (Andhra Pradesh) - Coffee plantations, tribal culture
        - Lambasingi (Andhra Pradesh) - Hill station, apple orchards
        - Maredumilli (Andhra Pradesh) - Forests, temples, tribal lifestyle
        - Papikondalu (Andhra Pradesh) - River gorge, boat rides
        - Hampi Village (Karnataka) - Heritage site, ancient ruins
        - Kumbakonam Villages (Tamil Nadu) - Temple culture, classical arts
        - Spiti Valley Villages (Himachal Pradesh) - High-altitude desert, monasteries
        - Majuli Island Villages (Assam) - River island, Assamese culture
        - Khajuraho Villages (Madhya Pradesh) - UNESCO heritage temples
        - Kumaon Hill Villages (Uttarakhand) - Mountain culture, terraced fields
        
        Community Features:
        - Community Onboarding & Empowerment (👥): Training and support for rural communities
        - Host Portal (🏠): Mobile-first registration, voice onboarding, transparent revenue tracking
        - Capacity Building (📚): Training modules for hospitality, hygiene, storytelling, sustainability
        - Certification System: Eco-certified, Women-led, Heritage Keeper, Digital Pioneer badges
        - Multi-language support: Telugu, Hindi, English, Tamil, Kannada
        - Voice-based assistance and registration
        - Blockchain and cloud security for data protection
        - Docker and Kubernetes for scalable infrastructure
        
        Navigation commands you can handle:
        - "go to destinations" or "show destinations" -> navigate to destinations page
        - "book [destination name]" -> navigate to booking for that destination
        - "show marketplace" -> navigate to marketplace
        - "money flow" or "impact" -> navigate to money flow page
        - "become host" -> navigate to host registration
        - "food order" -> navigate to food ordering
        - "help" -> navigate to help center
        - "community onboarding" -> navigate to community-onboarding
        - "host portal" -> navigate to host-portal
        - "capacity building" -> navigate to capacity-building
        - "training" or "certification" -> navigate to capacity-building
        
        Filter commands:
        - "filter by [state]" -> apply state filter
        - "show heritage sites" -> filter by heritage type
        - "cultural experiences" -> filter by cultural type
        - "eco-friendly stays" -> filter by sustainability
        
        User's message: "${prompt}"
        Respond in ${userLanguage === 'hi' ? 'Hindi' : userLanguage === 'te' ? 'Telugu' : 'English'}.
        
        If the user asks for navigation, start your response with "NAVIGATE:" followed by the page name.
        If the user asks for filtering, start your response with "FILTER:" followed by the filter criteria.
        If the user asks about a specific destination, provide detailed information about that place.
        If the user asks about community features, host portal, or training, provide comprehensive information.
        
        For Telugu responses, use proper Telugu script and natural language.
        For Hindi responses, use proper Devanagari script and natural language.
      `;

      const result = await model.generateContent(contextPrompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error('Gemini AI error:', error);
      return userLanguage === 'hi' 
        ? 'माफ करें, मुझे कुछ तकनीकी समस्या हो रही है। कृपया फिर से कोशिश करें।'
        : userLanguage === 'te'
        ? 'క్షమించండి, నాకు కొంత సాంకేతిక సమస్య ఉంది. దయచేసి మళ్లీ ప్రయత్నించండి.'
        : 'Sorry, I\'m experiencing some technical issues. Please try again.';
    } finally {
      setIsProcessing(false);
    }
  };

  const handleVoiceInput = async (text: string) => {
    if (!text.trim()) return;

    const detectedLang = detectLanguage(text);
    const userMessage: VoiceMessage = {
      id: Date.now().toString(),
      text: text,
      isBot: false,
      timestamp: new Date(),
      language: detectedLang
    };

    setMessages(prev => [...prev, userMessage]);

    // Get AI response
    const aiResponse = await getGeminiResponse(text, detectedLang);
    
    // Handle navigation commands
    if (aiResponse.startsWith('NAVIGATE:')) {
      const page = aiResponse.replace('NAVIGATE:', '').trim().toLowerCase();
      handleNavigation(page, text);
    }
    
    // Handle filter commands
    if (aiResponse.startsWith('FILTER:')) {
      const filterCriteria = aiResponse.replace('FILTER:', '').trim();
      handleFiltering(filterCriteria);
    }

    const botMessage: VoiceMessage = {
      id: (Date.now() + 1).toString(),
      text: aiResponse.replace(/^(NAVIGATE:|FILTER:)/, '').trim(),
      isBot: true,
      timestamp: new Date(),
      language: detectedLang
    };

    setMessages(prev => [...prev, botMessage]);

    // Speak the response
    if (detectedLang !== 'en') {
      // For non-English, use appropriate voice
      speak({ 
        text: botMessage.text, 
        voice: getVoiceForLanguage(detectedLang)
      });
    } else {
      speak({ text: botMessage.text });
    }
  };

  const getVoiceForLanguage = (lang: string) => {
    const voices = speechSynthesis.getVoices();
    switch (lang) {
      case 'hi':
        return voices.find(voice => voice.lang.includes('hi')) || voices[0];
      case 'te':
        return voices.find(voice => voice.lang.includes('te')) || voices[0];
      case 'ta':
        return voices.find(voice => voice.lang.includes('ta')) || voices[0];
      default:
        return voices.find(voice => voice.lang.includes('en')) || voices[0];
    }
  };

  const handleNavigation = (page: string, originalText: string) => {
    const lowerText = originalText.toLowerCase();
    
    if (lowerText.includes('destination') || lowerText.includes('places') || lowerText.includes('గమ్యస్థానాలు')) {
      onNavigate('destinations');
    } else if (lowerText.includes('marketplace') || lowerText.includes('shop') || lowerText.includes('మార్కెట్')) {
      onNavigate('marketplace');
    } else if (lowerText.includes('money') || lowerText.includes('impact') || lowerText.includes('flow') || lowerText.includes('డబ్బు')) {
      onNavigate('money-flow');
    } else if (lowerText.includes('host') || lowerText.includes('become') || lowerText.includes('హోస్ట్')) {
      onNavigate('become-host');
    } else if (lowerText.includes('food') || lowerText.includes('order') || lowerText.includes('ఆహారం')) {
      onNavigate('food-order');
    } else if (lowerText.includes('help') || lowerText.includes('support') || lowerText.includes('సహాయం')) {
      onNavigate('help');
    } else if (lowerText.includes('donation') || lowerText.includes('దానం')) {
      onNavigate('donations');
    } else if (lowerText.includes('map') || lowerText.includes('మ్యాప్')) {
      onNavigate('india-map');
    } else if (lowerText.includes('community onboarding') || lowerText.includes('కమ్యూనిటీ')) {
      onNavigate('community-onboarding');
    } else if (lowerText.includes('host portal') || lowerText.includes('హోస్ట్ పోర్టల్')) {
      onNavigate('host-portal');
    } else if (lowerText.includes('capacity building') || lowerText.includes('training') || lowerText.includes('శిక్షణ')) {
      onNavigate('capacity-building');
    }
  };

  const handleFiltering = (criteria: string) => {
    const filters: any = {};
    
    if (criteria.includes('heritage')) {
      filters.type = 'heritage';
    } else if (criteria.includes('cultural')) {
      filters.type = 'cultural';
    } else if (criteria.includes('eco')) {
      filters.sustainability = 'eco-friendly';
    } else if (criteria.includes('andhra')) {
      filters.state = 'Andhra Pradesh';
    } else if (criteria.includes('karnataka')) {
      filters.state = 'Karnataka';
    } else if (criteria.includes('tamil')) {
      filters.state = 'Tamil Nadu';
    }
    
    onFilterUpdate(filters);
  };

  const handleSendMessage = () => {
    if (inputText.trim()) {
      handleVoiceInput(inputText);
      setInputText('');
    }
  };

  const startListening = () => {
    if (listening) {
      stop();
    } else {
      listen({ 
        lang: language === 'hi' ? 'hi-IN' : language === 'te' ? 'te-IN' : 'en-US',
        interimResults: false 
      });
    }
  };

  const toggleSpeaking = () => {
    if (speaking) {
      cancel();
    }
  };

  const quickActions = language === 'te' 
    ? ['గమ్యస్థానాలు చూపించు', 'అరకు వ్యాలీ బుక్ చేయి', 'వారసత్వ ప్రదేశాలు', 'ఆహార ఆర్డర్']
    : language === 'hi'
    ? ['गंतव्य दिखाएं', 'अराकू वैली बुक करें', 'विरासत स्थल', 'खाना ऑर्डर करें']
    : ['Show destinations', 'Book Araku Valley', 'Heritage sites', 'Food ordering'];

  return (
    <>
      {/* Voice Assistant Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-20 right-6 w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center ${
          isOpen ? 'scale-0' : 'scale-100'
        }`}
      >
        <Bot className="h-6 w-6" />
      </button>

      {/* Voice Assistant Window */}
      <div className={`fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-lg shadow-2xl z-50 flex flex-col transition-all duration-300 ${
        isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
      }`}>
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bot className="h-6 w-6" />
            <div>
              <h3 className="font-semibold">VillageStay AI Assistant</h3>
              <p className="text-xs text-purple-100">
                {isListening 
                  ? (language === 'te' ? 'వింటున్నాను...' : language === 'hi' ? 'सुन रहा हूं...' : 'Listening...') 
                  : isProcessing 
                  ? (language === 'te' ? 'ప్రాసెస్ చేస్తున్నాను...' : language === 'hi' ? 'प्रोसेसिंग...' : 'Processing...') 
                  : (language === 'te' ? 'సహాయానికి సిద్ధం' : language === 'hi' ? 'मदद के लिए तैयार' : 'Ready to help')
                }
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={startListening}
              className={`p-2 rounded-full transition-colors ${
                isListening ? 'bg-red-500 hover:bg-red-600' : 'bg-white/20 hover:bg-white/30'
              }`}
            >
              {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
            </button>
            <button
              onClick={toggleSpeaking}
              className={`p-2 rounded-full transition-colors ${
                isSpeaking ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-white/20 hover:bg-white/30'
              }`}
            >
              {isSpeaking ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Language Indicator */}
        <div className="px-4 py-2 bg-gray-50 border-b flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Globe className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600">
              {language === 'hi' ? 'हिंदी में बोल रहे हैं' : language === 'te' ? 'తెలుగులో మాట్లాడుతున్నారు' : 'Speaking in English'}
            </span>
          </div>
          {isListening && (
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          )}
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`flex items-start space-x-2 max-w-[80%] ${
                message.isBot ? 'flex-row' : 'flex-row-reverse space-x-reverse'
              }`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  message.isBot ? 'bg-purple-100' : 'bg-blue-100'
                }`}>
                  {message.isBot ? (
                    <Bot className="h-4 w-4 text-purple-600" />
                  ) : (
                    <User className="h-4 w-4 text-blue-600" />
                  )}
                </div>
                <div className={`p-3 rounded-lg ${
                  message.isBot 
                    ? 'bg-gray-100 text-gray-800' 
                    : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                }`}>
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.isBot ? 'text-gray-500' : 'text-purple-100'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            </div>
          ))}
          
          {isProcessing && (
            <div className="flex justify-start">
              <div className="flex items-start space-x-2">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <Bot className="h-4 w-4 text-purple-600" />
                </div>
                <div className="bg-gray-100 p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Actions */}
        <div className="px-4 py-2 border-t border-gray-200">
          <p className="text-xs text-gray-500 mb-2">
            {language === 'te' ? 'త్వరిత చర్యలు:' : language === 'hi' ? 'त्वरित कार्य:' : 'Quick actions:'}
          </p>
          <div className="flex flex-wrap gap-1">
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={() => handleVoiceInput(action)}
                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full hover:bg-gray-200 transition-colors"
              >
                {action}
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder={
                language === 'te' 
                  ? 'మీ సందేశాన్ని టైప్ చేయండి లేదా మాట్లాడండి...'
                  : language === 'hi'
                  ? 'अपना संदेश टाइप करें या बोलें...'
                  : 'Type or speak your message...'
              }
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-sm"
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputText.trim()}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-2 rounded-lg hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VoiceAssistant;