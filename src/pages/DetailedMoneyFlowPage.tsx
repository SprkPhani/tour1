import React, { useState } from 'react';
import { TrendingUp, Users, Building, Palette, Car, UtensilsCrossed, Calendar, Settings, Download, ArrowRight, Award, Leaf } from 'lucide-react';

interface Stakeholder {
  id: string;
  name: string;
  type: 'individual' | 'group' | 'organization';
  role: string;
  village: string;
  state: string;
  earnings: number;
  performance: {
    rating: number;
    reviews: number;
    completedProjects: number;
  };
  tags: string[];
  specialties: string[];
  contact: {
    phone: string;
    email?: string;
  };
  bankDetails: {
    accountNumber: string;
    ifsc: string;
    bankName: string;
  };
  transactions: {
    date: string;
    amount: number;
    source: string;
    type: 'booking' | 'marketplace' | 'bonus';
  }[];
}

interface Community {
  id: string;
  name: string;
  village: string;
  state: string;
  population: number;
  households: number;
  primaryOccupation: string[];
  monthlyIncome: number;
  totalEarnings: number;
  performance: {
    rating: number;
    sustainabilityScore: number;
    culturalPreservation: number;
    touristSatisfaction: number;
  };
  tags: string[];
  facilities: string[];
  challenges: string[];
  achievements: string[];
}

const DetailedMoneyFlowPage: React.FC = () => {
  const [selectedView, setSelectedView] = useState('stakeholders');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedStakeholder, setSelectedStakeholder] = useState<string | null>(null);

  const stakeholders: Stakeholder[] = [
    {
      id: '1',
      name: 'Ravi Kumar',
      type: 'individual',
      role: 'Village Guide',
      village: 'Araku Valley',
      state: 'Andhra Pradesh',
      earnings: 45000,
      performance: {
        rating: 4.8,
        reviews: 156,
        completedProjects: 89
      },
      tags: ['Eco-Friendly', 'Cultural Expert', 'Top Performer'],
      specialties: ['Coffee Plantation Tours', 'Tribal Culture', 'Nature Walks'],
      contact: {
        phone: '+91-9876543210',
        email: 'ravi.guide@villagestay.com'
      },
      bankDetails: {
        accountNumber: '****1234',
        ifsc: 'SBIN0001234',
        bankName: 'State Bank of India'
      },
      transactions: [
        { date: '2024-01-15', amount: 2500, source: 'Tourist Group Booking', type: 'booking' },
        { date: '2024-01-10', amount: 1800, source: 'Cultural Tour', type: 'booking' },
        { date: '2024-01-05', amount: 500, source: 'Performance Bonus', type: 'bonus' }
      ]
    },
    {
      id: '2',
      name: 'Lakshmi Devi',
      type: 'individual',
      role: 'Homestay Host',
      village: 'Lambasingi',
      state: 'Andhra Pradesh',
      earnings: 38000,
      performance: {
        rating: 4.9,
        reviews: 98,
        completedProjects: 67
      },
      tags: ['Heritage Specialist', 'Organic Farming', 'Women Entrepreneur'],
      specialties: ['Traditional Cooking', 'Organic Farming', 'Handicrafts'],
      contact: {
        phone: '+91-9876543211'
      },
      bankDetails: {
        accountNumber: '****5678',
        ifsc: 'HDFC0001234',
        bankName: 'HDFC Bank'
      },
      transactions: [
        { date: '2024-01-12', amount: 3200, source: 'Family Homestay', type: 'booking' },
        { date: '2024-01-08', amount: 2800, source: 'Couple Stay', type: 'booking' },
        { date: '2024-01-03', amount: 1200, source: 'Cooking Class', type: 'booking' }
      ]
    },
    {
      id: '3',
      name: 'Padma Reddy',
      type: 'individual',
      role: 'Kalamkari Artist',
      village: 'Srikalahasti',
      state: 'Andhra Pradesh',
      earnings: 28000,
      performance: {
        rating: 4.7,
        reviews: 134,
        completedProjects: 45
      },
      tags: ['Traditional Artist', 'Cultural Heritage', 'Master Craftsperson'],
      specialties: ['Kalamkari Painting', 'Natural Dyes', 'Art Workshops'],
      contact: {
        phone: '+91-9876543212'
      },
      bankDetails: {
        accountNumber: '****9012',
        ifsc: 'ICIC0001234',
        bankName: 'ICICI Bank'
      },
      transactions: [
        { date: '2024-01-14', amount: 4500, source: 'Kalamkari Workshop', type: 'marketplace' },
        { date: '2024-01-09', amount: 3200, source: 'Art Sales', type: 'marketplace' },
        { date: '2024-01-04', amount: 2800, source: 'Custom Painting', type: 'marketplace' }
      ]
    },
    {
      id: '4',
      name: 'Tribal Craft Collective',
      type: 'group',
      role: 'Artisan Group',
      village: 'Maredumilli',
      state: 'Andhra Pradesh',
      earnings: 52000,
      performance: {
        rating: 4.6,
        reviews: 89,
        completedProjects: 34
      },
      tags: ['Tribal Heritage', 'Sustainable Crafts', 'Community Enterprise'],
      specialties: ['Bamboo Crafts', 'Tribal Jewelry', 'Natural Fiber Weaving'],
      contact: {
        phone: '+91-9876543213'
      },
      bankDetails: {
        accountNumber: '****3456',
        ifsc: 'AXIS0001234',
        bankName: 'Axis Bank'
      },
      transactions: [
        { date: '2024-01-13', amount: 8500, source: 'Craft Exhibition', type: 'marketplace' },
        { date: '2024-01-07', amount: 6200, source: 'Bulk Order', type: 'marketplace' },
        { date: '2024-01-02', amount: 4800, source: 'Workshop Fees', type: 'booking' }
      ]
    }
  ];

  const communities: Community[] = [
    {
      id: '1',
      name: 'Araku Valley Tribal Community',
      village: 'Araku Valley',
      state: 'Andhra Pradesh',
      population: 2500,
      households: 450,
      primaryOccupation: ['Coffee Farming', 'Tourism', 'Handicrafts'],
      monthlyIncome: 185000,
      totalEarnings: 2220000,
      performance: {
        rating: 4.8,
        sustainabilityScore: 92,
        culturalPreservation: 88,
        touristSatisfaction: 94
      },
      tags: ['Eco-Friendly', 'Cultural Heritage', 'Sustainable Tourism', 'Organic Farming'],
      facilities: ['Community Center', 'Health Clinic', 'School', 'Organic Certification'],
      challenges: ['Seasonal Income Variation', 'Limited Internet Connectivity'],
      achievements: ['UNESCO Recognition', 'Organic Coffee Certification', 'Zero Waste Village']
    },
    {
      id: '2',
      name: 'Lambasingi Hill Community',
      village: 'Lambasingi',
      state: 'Andhra Pradesh',
      population: 1800,
      households: 320,
      primaryOccupation: ['Apple Farming', 'Tourism', 'Dairy'],
      monthlyIncome: 142000,
      totalEarnings: 1704000,
      performance: {
        rating: 4.7,
        sustainabilityScore: 89,
        culturalPreservation: 85,
        touristSatisfaction: 91
      },
      tags: ['Mountain Tourism', 'Organic Farming', 'Climate Resilient'],
      facilities: ['Weather Station', 'Cold Storage', 'Tourist Information Center'],
      challenges: ['Climate Change Impact', 'Market Access'],
      achievements: ['Best Hill Station Award', 'Climate Adaptation Model', 'Women SHG Success']
    },
    {
      id: '3',
      name: 'Maredumilli Forest Community',
      village: 'Maredumilli',
      state: 'Andhra Pradesh',
      population: 3200,
      households: 580,
      primaryOccupation: ['Forest Conservation', 'Eco-Tourism', 'NTFP Collection'],
      monthlyIncome: 198000,
      totalEarnings: 2376000,
      performance: {
        rating: 4.9,
        sustainabilityScore: 95,
        culturalPreservation: 92,
        touristSatisfaction: 96
      },
      tags: ['Forest Conservation', 'Biodiversity Hotspot', 'Tribal Culture', 'Eco-Tourism'],
      facilities: ['Forest Research Center', 'Eco-Lodge', 'Medicinal Plant Garden'],
      challenges: ['Human-Wildlife Conflict', 'Forest Regulations'],
      achievements: ['Forest Conservation Award', 'Biodiversity Protection', 'Eco-Tourism Model']
    }
  ];

  const generateStakeholderReport = () => {
    const reportContent = `
VillageStay - Detailed Stakeholder Money Flow Report
==================================================

EXECUTIVE SUMMARY
-----------------
Total Stakeholders: ${stakeholders.length}
Total Monthly Earnings: ₹${stakeholders.reduce((sum, s) => sum + s.earnings, 0).toLocaleString()}
Average Performance Rating: ${(stakeholders.reduce((sum, s) => sum + s.performance.rating, 0) / stakeholders.length).toFixed(1)}

INDIVIDUAL STAKEHOLDER BREAKDOWN
--------------------------------
${stakeholders.map(stakeholder => `
${stakeholder.name} (${stakeholder.role})
- Location: ${stakeholder.village}, ${stakeholder.state}
- Monthly Earnings: ₹${stakeholder.earnings.toLocaleString()}
- Performance Rating: ${stakeholder.performance.rating}/5
- Completed Projects: ${stakeholder.performance.completedProjects}
- Specialties: ${stakeholder.specialties.join(', ')}
- Tags: ${stakeholder.tags.join(', ')}
- Recent Transactions:
${stakeholder.transactions.slice(0, 3).map(t => `  • ${t.date}: ₹${t.amount} from ${t.source}`).join('\n')}
`).join('\n')}

COMMUNITY PERFORMANCE ANALYSIS
------------------------------
${communities.map(community => `
${community.name}
- Population: ${community.population.toLocaleString()}
- Monthly Community Income: ₹${community.monthlyIncome.toLocaleString()}
- Sustainability Score: ${community.performance.sustainabilityScore}/100
- Cultural Preservation: ${community.performance.culturalPreservation}/100
- Tourist Satisfaction: ${community.performance.touristSatisfaction}/100
- Key Achievements: ${community.achievements.join(', ')}
- Current Challenges: ${community.challenges.join(', ')}
`).join('\n')}

MONEY FLOW TRANSPARENCY
-----------------------
• All transactions are recorded in real-time
• Monthly payments processed through verified bank accounts
• Performance-based bonuses distributed quarterly
• Community development fund: 8% of total revenue
• Platform fee: 7% for technology and support

IMPACT METRICS
--------------
• Direct beneficiaries: ${stakeholders.length} individuals/groups
• Indirect beneficiaries: ${communities.reduce((sum, c) => sum + c.population, 0).toLocaleString()} community members
• Average income increase: 340% compared to traditional occupations
• Women participation: 45% of stakeholders
• Youth engagement: 32% of stakeholders under 30

Generated on: ${new Date().toLocaleDateString()}
    `;

    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'detailed-stakeholder-money-flow-report.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const getTagColor = (tag: string) => {
    const colors: { [key: string]: string } = {
      'Eco-Friendly': 'bg-green-100 text-green-800',
      'Cultural Expert': 'bg-purple-100 text-purple-800',
      'Top Performer': 'bg-yellow-100 text-yellow-800',
      'Heritage Specialist': 'bg-blue-100 text-blue-800',
      'Women Entrepreneur': 'bg-pink-100 text-pink-800',
      'Traditional Artist': 'bg-indigo-100 text-indigo-800',
      'Master Craftsperson': 'bg-amber-100 text-amber-800',
      'Tribal Heritage': 'bg-orange-100 text-orange-800',
      'Sustainable Crafts': 'bg-emerald-100 text-emerald-800',
      'Community Enterprise': 'bg-teal-100 text-teal-800'
    };
    return colors[tag] || 'bg-gray-100 text-gray-800';
  };

  const filteredStakeholders = stakeholders.filter(stakeholder => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'top-performers') return stakeholder.performance.rating >= 4.7;
    if (selectedFilter === 'eco-friendly') return stakeholder.tags.includes('Eco-Friendly');
    if (selectedFilter === 'cultural') return stakeholder.tags.some(tag => tag.includes('Cultural') || tag.includes('Heritage'));
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Village Stakeholder Ecosystem</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Detailed money flow and performance tracking of all village stakeholders and communities
          </p>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex space-x-4">
              <button
                onClick={() => setSelectedView('stakeholders')}
                className={`px-4 py-2 rounded-md font-medium ${
                  selectedView === 'stakeholders'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Individual Stakeholders
              </button>
              <button
                onClick={() => setSelectedView('communities')}
                className={`px-4 py-2 rounded-md font-medium ${
                  selectedView === 'communities'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Community Performance
              </button>
            </div>

            <div className="flex items-center space-x-4">
              {selectedView === 'stakeholders' && (
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="all">All Stakeholders</option>
                  <option value="top-performers">Top Performers</option>
                  <option value="eco-friendly">Eco-Friendly</option>
                  <option value="cultural">Cultural Heritage</option>
                </select>
              )}
              
              <button
                onClick={generateStakeholderReport}
                className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                <Download className="h-4 w-4" />
                <span>Download Report</span>
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        {selectedView === 'stakeholders' ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Stakeholders List */}
            <div className="lg:col-span-2 space-y-6">
              {filteredStakeholders.map((stakeholder) => (
                <div
                  key={stakeholder.id}
                  className={`bg-white rounded-lg shadow-md p-6 cursor-pointer transition-all ${
                    selectedStakeholder === stakeholder.id ? 'ring-2 ring-emerald-500' : 'hover:shadow-lg'
                  }`}
                  onClick={() => setSelectedStakeholder(stakeholder.id)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{stakeholder.name}</h3>
                      <p className="text-gray-600">{stakeholder.role}</p>
                      <p className="text-sm text-gray-500">{stakeholder.village}, {stakeholder.state}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-emerald-600">₹{stakeholder.earnings.toLocaleString()}</div>
                      <div className="text-sm text-gray-500">Monthly Earnings</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">{stakeholder.performance.rating}</div>
                      <div className="text-xs text-gray-600">Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">{stakeholder.performance.reviews}</div>
                      <div className="text-xs text-gray-600">Reviews</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">{stakeholder.performance.completedProjects}</div>
                      <div className="text-xs text-gray-600">Projects</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {stakeholder.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`px-2 py-1 text-xs rounded-full font-medium ${getTagColor(tag)}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-medium text-gray-900 mb-2">Specialties</h4>
                    <div className="flex flex-wrap gap-1">
                      {stakeholder.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stakeholder Details */}
            <div className="lg:col-span-1">
              {selectedStakeholder ? (
                <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
                  {(() => {
                    const stakeholder = stakeholders.find(s => s.id === selectedStakeholder);
                    if (!stakeholder) return null;

                    return (
                      <>
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Detailed Information</h3>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium text-gray-900 mb-2">Contact Information</h4>
                            <p className="text-sm text-gray-600">Phone: {stakeholder.contact.phone}</p>
                            {stakeholder.contact.email && (
                              <p className="text-sm text-gray-600">Email: {stakeholder.contact.email}</p>
                            )}
                          </div>

                          <div>
                            <h4 className="font-medium text-gray-900 mb-2">Bank Details</h4>
                            <p className="text-sm text-gray-600">Account: {stakeholder.bankDetails.accountNumber}</p>
                            <p className="text-sm text-gray-600">IFSC: {stakeholder.bankDetails.ifsc}</p>
                            <p className="text-sm text-gray-600">Bank: {stakeholder.bankDetails.bankName}</p>
                          </div>

                          <div>
                            <h4 className="font-medium text-gray-900 mb-2">Recent Transactions</h4>
                            <div className="space-y-2">
                              {stakeholder.transactions.slice(0, 5).map((transaction, index) => (
                                <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded-md">
                                  <div>
                                    <p className="text-sm font-medium text-gray-900">₹{transaction.amount}</p>
                                    <p className="text-xs text-gray-600">{transaction.source}</p>
                                  </div>
                                  <div className="text-right">
                                    <p className="text-xs text-gray-500">{transaction.date}</p>
                                    <span className={`px-2 py-1 text-xs rounded-full ${
                                      transaction.type === 'booking' ? 'bg-blue-100 text-blue-800' :
                                      transaction.type === 'marketplace' ? 'bg-green-100 text-green-800' :
                                      'bg-yellow-100 text-yellow-800'
                                    }`}>
                                      {transaction.type}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })()}
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Select a stakeholder to view detailed information</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {communities.map((community) => (
              <div key={community.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{community.name}</h3>
                      <p className="text-gray-600">{community.village}, {community.state}</p>
                      <p className="text-sm text-gray-500">
                        {community.population.toLocaleString()} people • {community.households} households
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-emerald-600">₹{community.monthlyIncome.toLocaleString()}</div>
                      <div className="text-sm text-gray-500">Monthly Community Income</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{community.performance.rating}</div>
                      <div className="text-sm text-blue-800">Overall Rating</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">{community.performance.sustainabilityScore}</div>
                      <div className="text-sm text-green-800">Sustainability Score</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">{community.performance.culturalPreservation}</div>
                      <div className="text-sm text-purple-800">Cultural Preservation</div>
                    </div>
                    <div className="text-center p-4 bg-amber-50 rounded-lg">
                      <div className="text-2xl font-bold text-amber-600">{community.performance.touristSatisfaction}</div>
                      <div className="text-sm text-amber-800">Tourist Satisfaction</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Primary Occupations</h4>
                      <div className="space-y-1">
                        {community.primaryOccupation.map((occupation, index) => (
                          <span key={index} className="block text-sm text-gray-600">• {occupation}</span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Community Tags</h4>
                      <div className="flex flex-wrap gap-1">
                        {community.tags.map((tag, index) => (
                          <span
                            key={index}
                            className={`px-2 py-1 text-xs rounded-full font-medium ${getTagColor(tag)}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Key Facilities</h4>
                      <div className="space-y-1">
                        {community.facilities.map((facility, index) => (
                          <span key={index} className="block text-sm text-gray-600">• {facility}</span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Major Achievements</h4>
                      <div className="space-y-1">
                        {community.achievements.map((achievement, index) => (
                          <span key={index} className="block text-sm text-green-600">🏆 {achievement}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {community.challenges.length > 0 && (
                    <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                      <h4 className="font-medium text-yellow-900 mb-2">Current Challenges</h4>
                      <div className="space-y-1">
                        {community.challenges.map((challenge, index) => (
                          <span key={index} className="block text-sm text-yellow-800">⚠️ {challenge}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Summary Statistics */}
        <div className="mt-12 bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-xl p-8 text-white">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ecosystem Impact Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold">₹{stakeholders.reduce((sum, s) => sum + s.earnings, 0).toLocaleString()}</div>
                <div className="text-emerald-200">Total Monthly Earnings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{communities.reduce((sum, c) => sum + c.population, 0).toLocaleString()}</div>
                <div className="text-emerald-200">People Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{(stakeholders.reduce((sum, s) => sum + s.performance.rating, 0) / stakeholders.length).toFixed(1)}</div>
                <div className="text-emerald-200">Average Performance</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-emerald-200">Transparency</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedMoneyFlowPage;