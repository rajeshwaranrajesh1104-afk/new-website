import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Search, ShoppingCart, Star, Heart } from 'lucide-react';
import { openWhatsAppOrder } from '../utils/whatsapp';

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Fig Malt',
      image: 'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '₹399/-',
      originalPrice: null,
      rating: 4.8,
      reviews: 156,
      category: 'fruit',
      ingredients: ['Organic Fig', 'Almonds', 'Cashew', 'Jaggery', 'Cardamom'],
      benefits: ['Rich in nutrients & fiber', 'Supports digestion', 'Strengthens bones', 'Boosts skin health', 'Enhances immunity'],
      usage: 'Mix 1½ tsp with hot milk, stir, and enjoy. Add country sugar if desired.',
      description: 'Premium organic fig blend with traditional spices for natural energy and digestive wellness. 200g pack.'
    },
    {
      id: 2,
      name: 'Banana Flower Malt',
      image: 'https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '₹399/-',
      originalPrice: null,
      rating: 4.9,
      reviews: 203,
      category: 'wellness',
      ingredients: ['Banana Flower', 'Cashew', 'Almonds', 'Pistachio', 'Jaggery', 'Cardamom'],
      benefits: ['Regulates menstrual cycle', 'Improves enzyme activity', 'Controls muscle contractions', 'Aids digestion & kidney health'],
      usage: 'Stir 1½ tsp into hot milk for a soothing, nutrient-rich drink.',
      description: 'Ancient banana flower remedy crafted for women\'s wellness and hormonal balance. 200g pack.'
    },
    {
      id: 3,
      name: 'ABC Malt',
      image: 'https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '₹399/-',
      originalPrice: null,
      rating: 4.7,
      reviews: 189,
      category: 'signature',
      ingredients: ['Apple', 'Beetroot', 'Carrot', 'Almonds', 'Cashew', 'Country Sugar', 'Cardamom'],
      benefits: ['Rich in natural energy', 'Supports blood health', 'Great for smoothies, kheer, cakes & muffins', 'Kid-friendly nutrition'],
      usage: 'Mix with hot milk or add into smoothies & baked goods.',
      description: 'Apple, Beetroot, Carrot blend perfect for kids and families. Versatile for drinks and cooking. 200g pack.'
    },
    {
      id: 4,
      name: 'Golden Milk',
      image: 'https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '₹399/-',
      originalPrice: null,
      rating: 4.6,
      reviews: 134,
      category: 'wellness',
      ingredients: ['Turmeric', 'Saffron', 'Almonds', 'Black Pepper', 'Cardamom'],
      benefits: ['Ancient Ayurvedic immunity booster', 'Anti-inflammatory properties', 'Enhances skin glow', 'Supports relaxation & sleep'],
      usage: 'Mix 1 tsp with hot milk before bedtime for a calming wellness ritual.',
      description: 'Premium saffron turmeric blend for immunity and relaxation. New launch! 200g pack.'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'fruit', name: 'Fruit Blends' },
    { id: 'wellness', name: 'Wellness' },
    { id: 'signature', name: 'Signature' }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-16 lg:pt-20">
      {/* Header */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Shop Our Premium Malts
          </motion.h1>
          <motion.p
            className="text-xl text-emerald-100 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover our carefully crafted collection of traditional malt blends, each designed to nourish your body and soul.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-400" />
              <input
                type="text"
                placeholder="Search malts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
              />
            </div>

            {/* Categories */}
            <div className="flex space-x-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-emerald-700 text-white'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 lg:py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <Heart className="w-5 h-5 text-stone-600 hover:text-red-500 transition-colors" />
                  </button>
                  {product.originalPrice && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-lg text-sm font-medium">
                      Sale
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-stone-700">{product.rating}</span>
                    <span className="text-xs text-stone-500">({product.reviews})</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-stone-800 mb-2">{product.name}</h3>
                  <p className="text-stone-600 text-sm mb-4 leading-relaxed">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-stone-700 mb-2">Key Ingredients:</h4>
                    <div className="flex flex-wrap gap-1">
                      {product.ingredients.slice(0, 3).map((ingredient, idx) => (
                        <span
                          key={idx}
                          className="bg-stone-100 text-stone-700 text-xs px-2 py-1 rounded-full"
                        >
                          {ingredient}
                        </span>
                      ))}
                      {product.ingredients.length > 3 && (
                        <span className="bg-stone-100 text-stone-700 text-xs px-2 py-1 rounded-full">
                          +{product.ingredients.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-stone-700 mb-2">Benefits:</h4>
                    <div className="flex flex-wrap gap-1">
                      {product.benefits.map((benefit, idx) => (
                        <span
                          key={idx}
                          className="bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded-full"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-emerald-700">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-stone-500 line-through">{product.originalPrice}</span>
                      )}
                    </div>
                    <motion.button
                      onClick={() => openWhatsAppOrder(product.name)}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl flex items-center space-x-2 transition-colors font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>Order Now</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;