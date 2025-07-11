import React, { useState } from 'react';
import { Heart, Download, Users, TrendingUp, Award, MapPin, Calendar, DollarSign, FileText, ExternalLink } from 'lucide-react';

interface NGO {
  id: string;
  name: string;
  description: string;
  focus: string[];
  location: string;
  established: string;
  impact: {
    beneficiaries: number;
    projects: number;
    villages: number;
  };
  rating: number;
  image: string;
  website: string;
  documents: string[];
}

interface DonationProject {
  id: string;
  title: string;
  description: string;
  ngo: string;
  target: number;
  raised: number;
  donors: number;
  deadline: string;
  category: string;
  image: string;
  updates: {
    date: string;
    title: string;
    description: string;
  }[];
}

const DonationsPage: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('projects');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [donationAmount, setDonationAmount] = useState(500);

  const ngos: NGO[] = [
    {
      id: '1',
      name: 'Rural Development Foundation',
      description: 'Empowering rural communities through sustainable development, education, and healthcare initiatives.',
      focus: ['Education', 'Healthcare', 'Livelihood', 'Women Empowerment'],
      location: 'Andhra Pradesh, India',
      established: '2010',
      impact: {
        beneficiaries: 25000,
        projects: 150,
        villages: 85
      },
      rating: 4.8,
      image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg',
      website: 'https://rdf.org',
      documents: ['Annual Report 2023', 'Financial Audit', 'Registration Certificate', 'Impact Assessment']
    },
    {
      id: '2',
      name: 'Tribal Welfare Society',
      description: 'Preserving tribal culture while providing modern amenities and education to tribal communities.',
      focus: ['Cultural Preservation', 'Education', 'Healthcare', 'Skill Development'],
      location: 'Odisha, India',
      established: '2008',
      impact: {
        beneficiaries: 18000,
        projects: 95,
        villages: 60
      },
      rating: 4.7,
      image: 'https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg',
      website: 'https://tws.org',
      documents: ['Annual Report 2023', 'Financial Audit', 'Registration Certificate', 'Cultural Impact Study']
    },
    {
      id: '3',
      name: 'Sustainable Agriculture Initiative',
      description: 'Promoting organic farming and sustainable agricultural practices in rural India.',
      focus: ['Organic Farming', 'Water Conservation', 'Farmer Training', 'Market Access'],
      location: 'Karnataka, India',
      established: '2012',
      impact: {
        beneficiaries: 12000,
        projects: 75,
        villages: 45
      },
      rating: 4.9,
      image: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg',
      website: 'https://sai.org',
      documents: ['Annual Report 2023', 'Financial Audit', 'Registration Certificate', 'Farming Impact Report']
    }
  ];

  const donationProjects: DonationProject[] = [
    {
      id: '1',
      title: 'Digital Literacy for Rural Women',
      description: 'Providing digital literacy training to 500 rural women to enhance their livelihood opportunities.',
      ngo: 'Rural Development Foundation',
      target: 250000,
      raised: 180000,
      donors: 145,
      deadline: '2024-06-30',
      category: 'Education',
      image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg',
      updates: [
        {
          date: '2024-01-15',
          title: 'Training Centers Established',
          description: 'Successfully established 5 training centers in different villages.'
        },
        {
          date: '2024-01-10',
          title: 'First Batch Completed',
          description: '50 women completed their digital literacy training with 95% success rate.'
        }
      ]
    },
    {
      id: '2',
      title: 'Clean Water for Tribal Villages',
      description: 'Installing water purification systems in 10 tribal villages to provide access to clean drinking water.',
      ngo: 'Tribal Welfare Society',
      target: 500000,
      raised: 320000,
      donors: 89,
      deadline: '2024-08-15',
      category: 'Healthcare',
      image: 'https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg',
      updates: [
        {
          date: '2024-01-12',
          title: 'Site Survey Completed',
          description: 'Completed site surveys for all 10 villages and finalized installation plans.'
        }
      ]
    },
    {
      id: '3',
      title: 'Organic Farming Training Program',
      description: 'Training 200 farmers in organic farming techniques and providing them with organic seeds and tools.',
      ngo: 'Sustainable Agriculture Initiative',
      target: 150000,
      raised: 95000,
      donors: 67,
      deadline: '2024-05-20',
      category: 'Livelihood',
      image: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg',
      updates: [
        {
          date: '2024-01-08',
          title: 'Training Materials Ready',
          description: 'Prepared comprehensive training materials and secured organic seed suppliers.'
        }
      ]
    }
  ];

  const categories = ['all', 'Education', 'Healthcare', 'Livelihood', 'Environment', 'Women Empowerment'];

  const filteredProjects = donationProjects.filter(project =>
    selectedCategory === 'all' || project.category === selectedCategory
  );

  const generateDonationReport = () => {
    const reportData = {
      totalDonations: 1250000,
      totalProjects: 25,
      beneficiaries: 15000,
      ngosSupported: 8,
      breakdown: {
        education: 450000,
        healthcare: 380000,
        livelihood: 250000,
        environment: 170000
      }
    };

    const reportContent = `
VillageStay - Donation Impact Report
===================================

Total Donations Received: ₹${reportData.totalDonations.toLocaleString()}
Active Projects: ${reportData.totalProjects}
Direct Beneficiaries: ${reportData.beneficiaries.toLocaleString()}
NGO Partners: ${reportData.ngosSupported}

Category-wise Distribution:
- Education: ₹${reportData.breakdown.education.toLocaleString()} (${Math.round(reportData.breakdown.education/reportData.totalDonations*100)}%)
- Healthcare: ₹${reportData.breakdown.healthcare.toLocaleString()} (${Math.round(reportData.breakdown.healthcare/reportData.totalDonations*100)}%)
- Livelihood: ₹${reportData.breakdown.livelihood.toLocaleString()} (${Math.round(reportData.breakdown.livelihood/reportData.totalDonations*100)}%)
- Environment: ₹${reportData.breakdown.environment.toLocaleString()} (${Math.round(reportData.breakdown.environment/reportData.totalDonations*100)}%)

Impact Metrics:
- Villages Reached: 150+
- Women Empowered: 2,500
- Children Educated: 5,000
- Farmers Trained: 1,200
- Water Systems Installed: 45
- Healthcare Centers Supported: 20

Transparency Measures:
- All donations tracked with blockchain technology
- Monthly impact reports published
- Third-party audits conducted annually
- Real-time project updates provided
- Direct beneficiary feedback collected

Generated on: ${new Date().toLocaleDateString()}
    `;

    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'donation-impact-report.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleDonate = (projectId: string) => {
    // Mock donation process
    alert(`Thank you for your donation of ₹${donationAmount} to support rural communities!`);
  };

  const tabs = [
    { id: 'projects', label: 'Active Projects', icon: Heart },
    { id: 'ngos', label: 'NGO Partners', icon: Users },
    { id: 'impact', label: 'Impact Dashboard', icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Support Rural Communities</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Make a direct impact on rural lives through verified NGOs and transparent donation tracking
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <DollarSign className="h-6 w-6 text-emerald-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">₹12.5L</div>
            <div className="text-sm text-gray-600">Total Donations</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Heart className="h-6 w-6 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">25</div>
            <div className="text-sm text-gray-600">Active Projects</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">15,000</div>
            <div className="text-sm text-gray-600">Beneficiaries</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Award className="h-6 w-6 text-amber-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">8</div>
            <div className="text-sm text-gray-600">NGO Partners</div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                    selectedTab === tab.id
                      ? 'border-emerald-500 text-emerald-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        {selectedTab === 'projects' && (
          <div>
            {/* Category Filter */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Filter by Category</h3>
                <button
                  onClick={generateDonationReport}
                  className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Report</span>
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-emerald-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category === 'all' ? 'All Categories' : category}
                  </button>
                ))}
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredProjects.map((project) => (
                <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm rounded-full">
                        {project.category}
                      </span>
                      <span className="text-sm text-gray-500">by {project.ngo}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    
                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>₹{project.raised.toLocaleString()} raised</span>
                        <span>₹{project.target.toLocaleString()} goal</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-emerald-600 h-2 rounded-full"
                          style={{ width: `${(project.raised / project.target) * 100}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>{project.donors} donors</span>
                        <span>Deadline: {new Date(project.deadline).toLocaleDateString()}</span>
                      </div>
                    </div>

                    {/* Recent Updates */}
                    {project.updates.length > 0 && (
                      <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                        <h4 className="font-medium text-blue-900 mb-1">Latest Update</h4>
                        <p className="text-sm text-blue-800">{project.updates[0].title}</p>
                        <p className="text-xs text-blue-600">{new Date(project.updates[0].date).toLocaleDateString()}</p>
                      </div>
                    )}

                    {/* Donation Section */}
                    <div className="border-t pt-4">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="text-sm font-medium text-gray-700">Donation Amount:</span>
                        <div className="flex space-x-2">
                          {[100, 500, 1000, 2000].map((amount) => (
                            <button
                              key={amount}
                              onClick={() => setDonationAmount(amount)}
                              className={`px-3 py-1 text-sm rounded-md ${
                                donationAmount === amount
                                  ? 'bg-emerald-600 text-white'
                                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                              }`}
                            >
                              ₹{amount}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <input
                          type="number"
                          value={donationAmount}
                          onChange={(e) => setDonationAmount(parseInt(e.target.value) || 0)}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                          placeholder="Custom amount"
                        />
                        <button
                          onClick={() => handleDonate(project.id)}
                          className="bg-emerald-600 text-white px-6 py-2 rounded-md hover:bg-emerald-700 transition-colors font-medium"
                        >
                          Donate Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedTab === 'ngos' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {ngos.map((ngo) => (
              <div key={ngo.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={ngo.image}
                  alt={ngo.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{ngo.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Award className="h-4 w-4 text-yellow-400" />
                      <span className="text-sm font-medium">{ngo.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{ngo.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>{ngo.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span>Established {ngo.established}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {ngo.focus.map((area, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                      >
                        {area}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-gray-900">{ngo.impact.beneficiaries.toLocaleString()}</div>
                      <div className="text-xs text-gray-600">Beneficiaries</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">{ngo.impact.projects}</div>
                      <div className="text-xs text-gray-600">Projects</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">{ngo.impact.villages}</div>
                      <div className="text-xs text-gray-600">Villages</div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-medium text-gray-900 mb-2">Available Documents</h4>
                    <div className="space-y-1">
                      {ngo.documents.map((doc, index) => (
                        <button
                          key={index}
                          className="flex items-center space-x-2 text-sm text-blue-600 hover:text-blue-700"
                        >
                          <FileText className="h-3 w-3" />
                          <span>{doc}</span>
                          <Download className="h-3 w-3" />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-2 mt-4">
                    <button className="flex-1 bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors text-sm font-medium">
                      Support NGO
                    </button>
                    <button className="flex items-center justify-center bg-gray-100 text-gray-700 px-3 py-2 rounded-md hover:bg-gray-200 transition-colors">
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedTab === 'impact' && (
          <div className="space-y-8">
            {/* Impact Overview */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Overall Impact Dashboard</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">₹12.5L</div>
                  <div className="text-sm text-gray-600">Total Donations</div>
                  <div className="text-xs text-green-600">↑ 25% from last month</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">15,000</div>
                  <div className="text-sm text-gray-600">Lives Impacted</div>
                  <div className="text-xs text-green-600">↑ 18% from last month</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">150</div>
                  <div className="text-sm text-gray-600">Villages Reached</div>
                  <div className="text-xs text-green-600">↑ 12% from last month</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">95%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                  <div className="text-xs text-green-600">↑ 3% from last month</div>
                </div>
              </div>
            </div>

            {/* Category Breakdown */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Impact by Category</h3>
              <div className="space-y-4">
                {[
                  { category: 'Education', amount: 450000, percentage: 36, beneficiaries: 5000 },
                  { category: 'Healthcare', amount: 380000, percentage: 30, beneficiaries: 4200 },
                  { category: 'Livelihood', amount: 250000, percentage: 20, beneficiaries: 3500 },
                  { category: 'Environment', amount: 170000, percentage: 14, beneficiaries: 2300 }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-900">{item.category}</span>
                        <span className="text-sm text-gray-600">₹{item.amount.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-emerald-600 h-2 rounded-full"
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>{item.percentage}% of total</span>
                        <span>{item.beneficiaries.toLocaleString()} beneficiaries</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Transparency Report */}
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-lg p-8 text-white">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Transparency & Accountability</h3>
                <p className="text-emerald-100 mb-6 max-w-3xl mx-auto">
                  We believe in complete transparency. Every donation is tracked, every impact is measured, and every report is verified by third-party auditors.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold">100%</div>
                    <div className="text-emerald-200">Transparency</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">Monthly</div>
                    <div className="text-emerald-200">Impact Reports</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">3rd Party</div>
                    <div className="text-emerald-200">Audited</div>
                  </div>
                </div>
                <button
                  onClick={generateDonationReport}
                  className="mt-6 bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Download Full Impact Report
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DonationsPage;