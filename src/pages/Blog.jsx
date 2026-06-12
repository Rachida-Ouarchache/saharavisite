import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FiSearch } from 'react-icons/fi';
import { blogAPI } from '../utils/api';
import BlogCard from '../components/BlogCard';
import SEO from '../components/SEO';
import LoadingSpinner from '../components/LoadingSpinner';

const Blog = () => {
  const { t } = useTranslation();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  const categories = [
    { value: 'All', labelKey: 'blog.categories.all' },
    { value: 'Travel Tips', labelKey: 'blog.categories.tips' },
    { value: 'Destinations', labelKey: 'blog.categories.destinations' },
    { value: 'Culture', labelKey: 'blog.categories.culture' },
    { value: 'Food', labelKey: 'blog.categories.food' },
    { value: 'Adventure', labelKey: 'blog.categories.adventure' },
    { value: 'Photography', labelKey: 'blog.categories.photography' },
  ];

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const params = { page, limit: 9 };
        if (category !== 'All') params.category = category;
        if (search) params.search = search;
        const res = await blogAPI.getAll(params);
        setPosts(res.data || []);
        setTotal(res.total || 0);
        setPages(res.pages || 1);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [category, page, search]);

  const handleCategory = (cat) => { setCategory(cat); setPage(1); };

  return (
    <>
      <SEO
        title="Morocco Travel Blog – Tips, Guides & Inspiration"
        description="Read Sahara Visite's Morocco travel blog. Expert travel tips, destination guides, cultural insights, and food recommendations for your Moroccan journey."
        url="/blog"
      />

      <div className="relative h-64 md:h-72 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1534126511673-b6899657816a?w=1920" alt="Morocco Blog" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/60 to-primary-700/80" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center pt-16">
          <p className="section-subtitle text-gold-400 mb-3">{t('blog.hero.label')}</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold mb-2">{t('blog.hero.title')}</h1>
          <p className="text-white/80">{t('blog.hero.articles', { count: total })}</p>
        </div>
      </div>

      <div className="bg-white border-b border-gray-100 sticky top-[64px] z-30 shadow-sm">
        <div className="container-custom py-4">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={15} />
              <input
                type="text"
                placeholder={t('blog.search')}
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                className="input-field pl-9 py-2 text-sm w-60"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map(({ value, labelKey }) => (
                <button
                  key={value}
                  onClick={() => handleCategory(value)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${category === value ? 'bg-primary-700 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  {t(labelKey)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="py-14 bg-sand-50 min-h-[50vh]">
        <div className="container-custom">
          {loading ? (
            <LoadingSpinner text={t('blog.loading')} />
          ) : posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg mb-4">{t('blog.noResults')}</p>
              <button onClick={() => { setCategory('All'); setSearch(''); }} className="btn-primary">{t('blog.clearFilters')}</button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                {posts.map((post) => <BlogCard key={post._id} post={post} />)}
              </div>
              {pages > 1 && (
                <div className="flex items-center justify-center gap-2">
                  {Array.from({ length: pages }, (_, i) => i + 1).map((p) => (
                    <button key={p} onClick={() => setPage(p)} className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${p === page ? 'bg-primary-700 text-white' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}`}>{p}</button>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;
