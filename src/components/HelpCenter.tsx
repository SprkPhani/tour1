import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, Clock, MapPin, Search, ChevronDown, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const HelpCenter: React.FC = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const contactMethods = [
    {
      icon: Phone,
      title: '24/7 Phone Support',
      description: 'Call us anytime for immediate assistance',
      contact: '+91-9876543210',
      action: 'Call Now',
      color: 'bg-green-500'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get detailed help via email',
      contact: 'support@villagestay.com',
      action: 'Send Email',
      color: 'bg-blue-500'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team',
      contact: 'Available 24/7',
      action: 'Start Chat',
      color: 'bg-purple-500'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Our office location',
      contact: 'Hyderabad, Telangana',
      action: 'Get Directions',
      color: 'bg-orange-500'
    }
  ];

  const faqs = [
    {
      id: '1',
      question: 'How do I book a village stay?',
      answer: 'Booking is simple! Browse our destinations, select your preferred village, choose dates and number of guests, fill in your details, and complete the payment. You\'ll receive a confirmation email with all the details.'
    },
    {
      id: '2',
      question: 'What payment methods do you accept?',
      answer: 'We accept UPI payments (PhonePe, Google Pay, Paytm), Credit/Debit Cards (Visa, Mastercard, RuPay), Net Banking, and Digital Wallets. All payments are secure and encrypted.'
    },
    {
      id: '3',
      question: 'Can I cancel or modify my booking?',
      answer: 'Yes, you can cancel or modify your booking up to 48 hours before your check-in date. Cancellation charges may apply based on our policy. Contact our support team for assistance.'
    },
    {
      id: '4',
      question: 'What is included in the stay?',
      answer: 'Your stay includes accommodation, traditional meals, cultural activities, local guide services, and basic amenities. Specific inclusions vary by destination and are clearly mentioned in the booking details.'
    },
    {
      id: '5',
      question: 'Is it safe for solo travelers?',
      answer: 'Absolutely! We prioritize safety and have verified hosts. Our communities are welcoming and safe. We also provide 24/7 support and emergency contacts for all guests.'
    },
    {
      id: '6',
      question: 'How do I order food?',
      answer: 'You can order authentic local cuisine through our food section. Browse traditional meals, select your preferences, and place your order. Food is prepared by local families using fresh, organic ingredients.'
    },
    {
      id: '7',
      question: 'What should I pack for a village stay?',
      answer: 'Pack comfortable clothing, walking shoes, sun protection, personal toiletries, and any medications. We recommend modest clothing that respects local customs. A detailed packing list is sent with your booking confirmation.'
    },
    {
      id: '8',
      question: 'How does my payment help the community?',
      answer: '85% of your payment goes directly to local communities - hosts, guides, artisans, and local service providers. This supports sustainable tourism and helps preserve rural livelihoods and culture.'
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Help Center</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're here to help you with any questions about your VillageStay experience
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className={`w-12 h-12 ${method.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <method.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{method.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{method.description}</p>
              <p className="text-sm font-medium text-gray-900 mb-4">{method.contact}</p>
              <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors text-sm font-medium">
                {method.action}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            
            {/* Search */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Search FAQs..."
              />
            </div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFaqs.map((faq) => (
              <div key={faq.id} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {expandedFaq === faq.id ? (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {expandedFaq === faq.id && (
                  <div className="px-4 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No FAQs found matching your search.</p>
            </div>
          )}
        </div>

        {/* Emergency Contact */}
        <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
              <Phone className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-red-900">Emergency Support</h3>
              <p className="text-sm text-red-700">For urgent assistance during your stay</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="font-medium text-red-900">Emergency Hotline</p>
              <p className="text-red-700">+91-9876543210</p>
            </div>
            <div>
              <p className="font-medium text-red-900">Local Police</p>
              <p className="text-red-700">100</p>
            </div>
            <div>
              <p className="font-medium text-red-900">Medical Emergency</p>
              <p className="text-red-700">108</p>
            </div>
          </div>
        </div>

        {/* Business Hours */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Clock className="h-6 w-6 text-blue-600" />
            <h3 className="font-semibold text-blue-900">Support Hours</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-medium text-blue-900">Phone & Chat Support</p>
              <p className="text-blue-700">24/7 - Always available</p>
            </div>
            <div>
              <p className="font-medium text-blue-900">Email Support</p>
              <p className="text-blue-700">Response within 2-4 hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;