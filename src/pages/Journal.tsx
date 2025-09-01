import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const Journal = () => {
  const articles = [
    {
      id: 1,
      slug: 'nutrient-beverages-modern-health-solution',
      title: 'Nutrient Beverages: The Modern Answer to Health Challenges',
      excerpt: 'In today\'s world, our plates are often full but our bodies remain undernourished. Discover how functional malts can fight modern health challenges with traditional wisdom.',
      image: 'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Dr. Naveena Sharma',
      date: '2025-01-15',
      readTime: '6 min read',
      category: 'Health'
    },
    {
      id: 2,
      slug: 'fig-malt-superfood-drink',
      title: 'Why Fig Malt is the Superfood Drink Your Body Needs',
      excerpt: 'Packed with fiber, calcium, and natural antioxidants, Fig Malt delivers slow-release energy and real nutrition for all ages.',
      image: 'https://images.pexels.com/photos/4198017/pexels-photo-4198017.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Nutrition Expert',
      date: '2025-01-12',
      readTime: '4 min read',
      category: 'Nutrition'
    },
    {
      id: 3,
      slug: 'banana-flower-womens-health-secret',
      title: 'Banana Flower: The Ancient Secret for Women\'s Health',
      excerpt: 'For centuries, banana flower has been treasured for women\'s wellness. Rich in iron and fiber, it helps regulate cycles and promotes overall health.',
      image: 'https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Women\'s Health Specialist',
      date: '2025-01-10',
      readTime: '5 min read',
      category: 'Women\'s Health'
    },
    {
      id: 4,
      slug: 'abc-malt-kids-nutrition-hack',
      title: 'ABC Malt – The Smart Way to Sneak Nutrition into Kids\' Meals',
      excerpt: 'Kids love sweets, but nutrition often takes a backseat. ABC Malt blends fruits, nuts, and natural sweetness into a colorful, tasty mix that kids enjoy.',
      image: 'https://images.pexels.com/photos/4253687/pexels-photo-4253687.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Family Nutrition Team',
      date: '2025-01-08',
      readTime: '4 min read',
      category: 'Kids Nutrition'
    },
    {
      id: 5,
      slug: 'golden-milk-ayurvedic-bedtime-ritual',
      title: 'Golden Milk: The Ayurvedic Bedtime Drink That Heals from Within',
      excerpt: 'Turmeric and saffron have been trusted for generations to fight inflammation, relax the body, and improve sleep quality.',
      image: 'https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Ayurveda Specialist',
      date: '2025-01-05',
      readTime: '5 min read',
      category: 'Ayurveda'
    },
    {
      id: 6,
      slug: 'storage-tips-malt-freshness',
      title: 'Keeping Your Malts Fresh: Essential Storage Tips',
      excerpt: 'Learn the best practices for storing your malt mixes to maintain freshness, nutrition, and flavor for longer periods.',
      image: 'https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Quality Team',
      date: '2025-01-03',
      readTime: '3 min read',
      category: 'Tips'
    }
  ];

  const categories = ['All', 'Health', 'Nutrition', 'Women\'s Health', 'Kids Nutrition', 'Ayurveda', 'Tips'];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Header */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-stone-100 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl lg:text-5xl font-bold text-stone-800 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Wellness Journal
          </motion.h1>
          <motion.p
            className="text-xl text-stone-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Insights, recipes, and wellness wisdom to support your journey to better health and traditional nutrition
          </motion.p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-colors bg-stone-100 text-stone-700 hover:bg-emerald-100 hover:text-emerald-700"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 lg:py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={article.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-stone-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-stone-800 mb-3 group-hover:text-emerald-700 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-stone-600 text-sm mb-4 leading-relaxed">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-stone-400" />
                      <span className="text-sm text-stone-600">{article.author}</span>
                    </div>
                    <Link
                      to={`/journal/${article.slug}`}
                      className="text-emerald-700 hover:text-emerald-800 font-medium text-sm flex items-center space-x-1 transition-colors"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Storage Instructions */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-stone-800 mb-4">
              Storage Instructions for Maximum Freshness
            </h2>
            <p className="text-lg text-stone-600">
              Follow these simple guidelines to maintain the quality and nutrition of your malt mixes
            </p>
          </motion.div>
          
          <motion.div
            className="bg-emerald-50 rounded-2xl p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-800">Transfer to Clean Container</h4>
                    <p className="text-stone-600 text-sm">Use a clean, dry, airtight container for storage</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-800">Use Dry Spoon Only</h4>
                    <p className="text-stone-600 text-sm">Always use a completely dry spoon to prevent moisture</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-800">Store in Cool Place</h4>
                    <p className="text-stone-600 text-sm">Keep away from direct sunlight and heat sources</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-800">No Chemicals or Preservatives</h4>
                    <p className="text-stone-600 text-sm">Our natural products stay fresh with proper storage</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Stay Updated with Wellness Tips
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest wellness insights, traditional recipes, and health tips delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl text-stone-800 focus:ring-2 focus:ring-emerald-300 focus:outline-none"
              />
              <button className="bg-white text-emerald-700 hover:bg-stone-100 px-6 py-3 rounded-xl font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Journal;