import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Search, ShoppingCart, Star, Heart } from 'lucide-react';

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Fig Malt',
      image: 'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '$24.99',
      originalPrice: '$29.99',
      rating: 4.8,
      reviews: 156,
      category: 'fruit',
      ingredients: ['Dried Figs', 'Almonds', 'Dates', 'Cardamom', 'Milk Powder'],
      benefits: ['Rich in fiber', 'Natural energy', 'Digestive health', 'Iron rich'],
      usage: 'Mix 2 tablespoons with warm milk or water. Stir well and enjoy.',
      description: 'A delicious blend of premium dried figs and traditional spices, perfect for natural energy and digestive wellness.'
    },
    {
      id: 2,
      name: 'Banana Flower Malt',
      image: 'https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '$22.99',
      originalPrice: '$26.99',
      rating: 4.9,
      reviews: 203,
      category: 'wellness',
      ingredients: ['Banana Flower', 'Jaggery', 'Coconut', 'Sesame Seeds', 'Cashews'],
      benefits: ['Hormonal balance', 'Women\'s health', 'Rich in minerals', 'Traditional remedy'],
      usage: 'Add 2-3 teaspoons to warm milk twice daily for best results.',
      description: 'Traditional banana flower blend specifically crafted for women\'s wellness and hormonal balance.'
    },
    {
      id: 3,
      name: 'ABC Malt',
      image: 'https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '$26.99',
      originalPrice: '$31.99',
      rating: 4.7,
      reviews: 189,
      category: 'signature',
      ingredients: ['Almonds', 'Banana', 'Coconut', 'Dates', 'Ghee', 'Cardamom'],
      benefits: ['Complete nutrition', 'Brain health', 'Energy boost', 'Immunity support'],
      usage: 'Perfect for breakfast or evening snack. Mix with milk or yogurt.',
      description: 'Our signature blend combining the goodness of almonds, banana, and coconut for complete nutrition.'
    },
    {
      id: 4,
      name: 'Golden Milk',
      image: 'https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '$21.99',
      originalPrice: '$25.99',
      rating: 4.6,
      reviews: 134,
      category: 'wellness',
      ingredients: ['Turmeric', 'Ginger', 'Cinnamon', 'Black Pepper', 'Coconut Milk Powder'],
      benefits: ['Anti-inflammatory', 'Immunity boost', 'Better sleep', 'Joint health'],
      usage: 'Mix 1 teaspoon with warm milk before bedtime for relaxation.',
      description: 'Ancient golden milk recipe enhanced with premium spices for immunity and wellness.'
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
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl flex items-center space-x-2 transition-colors font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>Add to Cart</span>
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