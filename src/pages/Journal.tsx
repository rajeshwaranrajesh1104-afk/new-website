import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const Journal = () => {
  const articles = [
    {
      id: 1,
      slug: 'benefits-of-traditional-malts',
      title: 'The Science Behind Traditional Malt Benefits',
      excerpt: 'Discover how ancient wisdom meets modern nutrition science in our carefully crafted malt blends.',
      image: 'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Dr. Naveena Sharma',
      date: '2025-01-15',
      readTime: '5 min read',
      category: 'Nutrition'
    },
    {
      id: 2,
      slug: 'womens-wellness-banana-flower',
      title: 'Banana Flower: A Traditional Remedy for Women\'s Health',
      excerpt: 'Explore the remarkable benefits of banana flower and why it\'s been treasured in traditional medicine for centuries.',
      image: 'https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Priya Patel',
      date: '2025-01-12',
      readTime: '4 min read',
      category: 'Wellness'
    },
    {
      id: 3,
      slug: 'golden-milk-immunity-booster',
      title: 'Golden Milk: Your Daily Immunity Booster',
      excerpt: 'Learn why turmeric-based golden milk has become the go-to wellness drink for families worldwide.',
      image: 'https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Dr. Raj Kumar',
      date: '2025-01-10',
      readTime: '3 min read',
      category: 'Immunity'
    },
    {
      id: 4,
      slug: 'sustainable-sourcing-practices',
      title: 'Our Commitment to Sustainable Sourcing',
      excerpt: 'How we work with local farmers to ensure the highest quality ingredients while supporting communities.',
      image: 'https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Sustainable Team',
      date: '2025-01-08',
      readTime: '6 min read',
      category: 'Sustainability'
    },
    {
      id: 5,
      slug: 'family-nutrition-busy-lifestyle',
      title: 'Family Nutrition in a Busy Lifestyle',
      excerpt: 'Practical tips for maintaining family wellness when time is limited and schedules are packed.',
      image: 'https://images.pexels.com/photos/4253687/pexels-photo-4253687.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Family Nutrition Team',
      date: '2025-01-05',
      readTime: '7 min read',
      category: 'Family'
    },
    {
      id: 6,
      slug: 'fig-health-benefits',
      title: 'Figs: Nature\'s Powerhouse of Nutrients',
      excerpt: 'Uncover the incredible health benefits of figs and why they\'re the star ingredient in our most popular malt.',
      image: 'https://images.pexels.com/photos/4198017/pexels-photo-4198017.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Nutrition Expert',
      date: '2025-01-03',
      readTime: '4 min read',
      category: 'Ingredients'
    }
  ];

  const categories = ['All', 'Nutrition', 'Wellness', 'Immunity', 'Sustainability', 'Family', 'Ingredients'];

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
            Insights, recipes, and wellness wisdom to support your journey to better health
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
                className="px-6 py-2 rounded-full text-sm font-medium transition-colors bg-stone-100 text-stone-700 hover:bg-emerald-100 hover:text-emerald-700"
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
              Subscribe to our newsletter for the latest wellness insights, recipes, and health tips delivered to your inbox.
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