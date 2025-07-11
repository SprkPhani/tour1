import React, { useState } from 'react';
import { Plus, Minus, ShoppingCart, Star, Clock, Leaf, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  prepTime: string;
  isVeg: boolean;
  isOrganic: boolean;
  servings: number;
  ingredients: string[];
  chef: {
    name: string;
    village: string;
    specialty: string;
  };
}

interface CartItem extends FoodItem {
  quantity: number;
}

const FoodOrderPage: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'breakfast', name: 'Traditional Breakfast' },
    { id: 'lunch', name: 'Regional Thali' },
    { id: 'dinner', name: 'Dinner Specials' },
    { id: 'snacks', name: 'Local Snacks' },
    { id: 'beverages', name: 'Traditional Drinks' },
    { id: 'sweets', name: 'Regional Sweets' }
  ];

  const foodItems: FoodItem[] = [
    {
      id: '1',
      name: 'Araku Valley Coffee & Breakfast',
      description: 'Fresh organic coffee with traditional millet pancakes, local honey, and seasonal fruits',
      price: 180,
      image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg',
      category: 'breakfast',
      rating: 4.8,
      prepTime: '15-20 mins',
      isVeg: true,
      isOrganic: true,
      servings: 1,
      ingredients: ['Organic Coffee', 'Millet Flour', 'Local Honey', 'Seasonal Fruits'],
      chef: {
        name: 'Lakshmi Devi',
        village: 'Araku Valley',
        specialty: 'Traditional Tribal Cuisine'
      }
    },
    {
      id: '2',
      name: 'Andhra Village Thali',
      description: 'Complete traditional meal with rice, dal, vegetables, pickle, papad, and curd',
      price: 320,
      image: 'https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg',
      category: 'lunch',
      rating: 4.9,
      prepTime: '25-30 mins',
      isVeg: true,
      isOrganic: true,
      servings: 1,
      ingredients: ['Organic Rice', 'Toor Dal', 'Seasonal Vegetables', 'Homemade Pickle', 'Fresh Curd'],
      chef: {
        name: 'Ravi Kumar',
        village: 'Lambasingi',
        specialty: 'Andhra Traditional Cooking'
      }
    },
    {
      id: '3',
      name: 'Bamboo Chicken Curry',
      description: 'Traditional tribal chicken cooked in bamboo with aromatic spices and herbs',
      price: 450,
      image: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg',
      category: 'dinner',
      rating: 4.7,
      prepTime: '45-60 mins',
      isVeg: false,
      isOrganic: true,
      servings: 2,
      ingredients: ['Free-range Chicken', 'Bamboo', 'Traditional Spices', 'Forest Herbs'],
      chef: {
        name: 'Venu Tribal Cook',
        village: 'Maredumilli',
        specialty: 'Tribal Bamboo Cooking'
      }
    },
    {
      id: '4',
      name: 'Pesarattu & Ginger Chutney',
      description: 'Crispy green gram crepes with spicy ginger chutney and coconut sambar',
      price: 150,
      image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg',
      category: 'snacks',
      rating: 4.6,
      prepTime: '20-25 mins',
      isVeg: true,
      isOrganic: true,
      servings: 1,
      ingredients: ['Green Gram', 'Fresh Ginger', 'Coconut', 'Traditional Spices'],
      chef: {
        name: 'Padma Reddy',
        village: 'Papikondalu',
        specialty: 'Andhra Breakfast Items'
      }
    },
    {
      id: '5',
      name: 'Organic Buttermilk',
      description: 'Fresh churned buttermilk with curry leaves, ginger, and traditional spices',
      price: 60,
      image: 'https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg',
      category: 'beverages',
      rating: 4.5,
      prepTime: '5-10 mins',
      isVeg: true,
      isOrganic: true,
      servings: 1,
      ingredients: ['Fresh Curd', 'Curry Leaves', 'Ginger', 'Rock Salt'],
      chef: {
        name: 'Srinivas Family',
        village: 'Horsley Hills',
        specialty: 'Dairy Products'
      }
    },
    {
      id: '6',
      name: 'Pootharekulu Sweet',
      description: 'Traditional Andhra sweet made with rice paper, jaggery, and dry fruits',
      price: 200,
      image: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg',
      category: 'sweets',
      rating: 4.8,
      prepTime: '10-15 mins',
      isVeg: true,
      isOrganic: false,
      servings: 4,
      ingredients: ['Rice Paper', 'Jaggery', 'Cashews', 'Almonds', 'Ghee'],
      chef: {
        name: 'Madhavi Sweet Maker',
        village: 'Atreyapuram',
        specialty: 'Traditional Sweets'
      }
    }
  ];

  const filteredItems = foodItems.filter(item => 
    selectedCategory === 'all' || item.category === selectedCategory
  );

  const addToCart = (item: FoodItem) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === itemId);
      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map(cartItem =>
          cartItem.id === itemId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      } else {
        return prevCart.filter(cartItem => cartItem.id !== itemId);
      }
    });
  };

  const getCartItemQuantity = (itemId: string) => {
    const item = cart.find(cartItem => cartItem.id === itemId);
    return item ? item.quantity : 0;
  };

  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Authentic Village Cuisine</h1>
              <p className="text-gray-600 mt-2">Order traditional meals prepared by local families</p>
            </div>
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center space-x-2"
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Cart</span>
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Categories */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Food Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 flex space-x-2">
                  {item.isVeg && (
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Veg
                    </span>
                  )}
                  {item.isOrganic && (
                    <span className="bg-emerald-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                      <Leaf className="h-3 w-3" />
                      <span>Organic</span>
                    </span>
                  )}
                </div>
                <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-md">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{item.rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
                
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{item.prepTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>Serves {item.servings}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-900 mb-1">Chef: {item.chef.name}</p>
                  <p className="text-xs text-gray-600">{item.chef.village} • {item.chef.specialty}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold text-emerald-600">₹{item.price}</div>
                  
                  {getCartItemQuantity(item.id) === 0 ? (
                    <button
                      onClick={() => addToCart(item)}
                      className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors text-sm font-medium"
                    >
                      Add to Cart
                    </button>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="font-medium text-gray-900 min-w-[20px] text-center">
                        {getCartItemQuantity(item.id)}
                      </span>
                      <button
                        onClick={() => addToCart(item)}
                        className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center hover:bg-emerald-700 transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Modal */}
        {isCartOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[80vh] overflow-y-auto">
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Your Order</h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>

              <div className="p-6">
                {cart.length === 0 ? (
                  <div className="text-center py-8">
                    <ShoppingCart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">Your cart is empty</p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-4 mb-6">
                      {cart.map((item) => (
                        <div key={item.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 object-cover rounded-md"
                          />
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900 text-sm">{item.name}</h4>
                            <p className="text-sm text-gray-600">₹{item.price} each</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="font-medium text-gray-900 min-w-[20px] text-center text-sm">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => addToCart(item)}
                              className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center hover:bg-emerald-700 transition-colors"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-semibold text-gray-900">Total</span>
                        <span className="text-xl font-bold text-emerald-600">₹{getTotalAmount()}</span>
                      </div>
                      
                      <button className="w-full bg-emerald-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                        Place Order
                      </button>
                      
                      <p className="text-xs text-gray-500 text-center mt-2">
                        Estimated delivery: 30-45 minutes
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodOrderPage;