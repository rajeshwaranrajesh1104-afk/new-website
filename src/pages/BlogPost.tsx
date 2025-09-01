import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowLeft, Share2 } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();

  // Sample blog post data - in a real app, this would be fetched based on the slug
  const post = {
    title: 'The Science Behind Traditional Malt Benefits',
    content: `
      <p>Traditional malt preparations have been a cornerstone of nutrition across cultures for thousands of years. What our ancestors knew intuitively, modern science is now proving through rigorous research and analysis.</p>
      
      <h3>The Nutritional Powerhouse</h3>
      <p>Malts are essentially sprouted grains that have been dried and ground. This process, known as malting, activates enzymes that break down complex starches into simpler sugars, making nutrients more bioavailable. The result is a nutrient-dense powder that's easy to digest and packed with essential vitamins and minerals.</p>
      
      <h3>Key Benefits Backed by Science</h3>
      <p><strong>Enhanced Digestibility:</strong> The malting process pre-digests proteins and carbohydrates, making them easier for our bodies to absorb. This is particularly beneficial for children, elderly individuals, and those with sensitive digestive systems.</p>
      
      <p><strong>Rich in B Vitamins:</strong> Malted grains are excellent sources of B-complex vitamins, including thiamine, riboflavin, and niacin. These vitamins are essential for energy metabolism, nervous system function, and overall cellular health.</p>
      
      <p><strong>Mineral Absorption:</strong> The malting process increases the bioavailability of minerals like iron, zinc, and magnesium. These minerals play crucial roles in immune function, wound healing, and energy production.</p>
      
      <h3>Traditional Wisdom Meets Modern Life</h3>
      <p>At Soul Sip Malts, we honor these traditional preparation methods while adapting them for modern convenience. Our instant malt mixes retain all the nutritional benefits of traditional preparation while fitting seamlessly into busy lifestyles.</p>
      
      <p>Each of our blends is carefully formulated to provide maximum nutritional benefit while maintaining the authentic taste and quality that generations have treasured. We believe that wellness shouldn't be complicated – it should be as simple as mixing a spoonful of tradition into your daily routine.</p>
    `,
    image: 'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Dr. Naveena Sharma',
    date: '2025-01-15',
    readTime: '5 min read',
    category: 'Nutrition'
  };

  return (
    <div className="pt-16 lg:pt-20">
      {/* Header */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-stone-100 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/journal"
              className="inline-flex items-center space-x-2 text-emerald-700 hover:text-emerald-800 font-medium mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Journal</span>
            </Link>
            
            <div className="mb-6">
              <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-3xl lg:text-5xl font-bold text-stone-800 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-stone-600 mb-8">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
              <button className="flex items-center space-x-2 text-emerald-700 hover:text-emerald-800 transition-colors">
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 lg:h-96 object-cover rounded-2xl shadow-lg mb-12"
            />
            
            <div 
              className="prose prose-lg max-w-none prose-stone prose-headings:text-stone-800 prose-h3:text-2xl prose-h3:font-bold prose-h3:mt-8 prose-h3:mb-4 prose-p:text-stone-600 prose-p:leading-relaxed prose-p:mb-6 prose-strong:text-stone-800"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 lg:py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-stone-800 mb-4">
              Related Articles
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Golden Milk: Your Daily Immunity Booster',
                image: 'https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=400',
                slug: 'golden-milk-immunity-booster'
              },
              {
                title: 'Banana Flower: A Traditional Remedy for Women\'s Health',
                image: 'https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=400',
                slug: 'womens-wellness-banana-flower'
              },
              {
                title: 'Family Nutrition in a Busy Lifestyle',
                image: 'https://images.pexels.com/photos/4253687/pexels-photo-4253687.jpeg?auto=compress&cs=tinysrgb&w=400',
                slug: 'family-nutrition-busy-lifestyle'
              }
            ].map((article, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-stone-800 mb-4 group-hover:text-emerald-700 transition-colors">
                    {article.title}
                  </h3>
                  <Link
                    to={`/journal/${article.slug}`}
                    className="text-emerald-700 hover:text-emerald-800 font-medium text-sm flex items-center space-x-1 transition-colors"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;