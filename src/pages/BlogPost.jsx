import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiClock, FiEye, FiCalendar, FiArrowLeft, FiTag } from 'react-icons/fi';
import { format } from 'date-fns';
import { blogAPI } from '../utils/api';
import SEO from '../components/SEO';
import BlogCard from '../components/BlogCard';
import LoadingSpinner from '../components/LoadingSpinner';

const BlogPost = () => {
  const { t } = useTranslation();
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const res = await blogAPI.getBySlug(slug);
        setPost(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [slug]);

  if (loading) return <LoadingSpinner fullScreen />;
  if (!post) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-700 mb-3">{t('blogPost.notFound')}</h2>
        <Link to="/blog" className="btn-primary">{t('blogPost.backToBlog')}</Link>
      </div>
    </div>
  );

  return (
    <>
      <SEO
        title={post.seo?.metaTitle || post.title}
        description={post.seo?.metaDescription || post.excerpt}
        image={post.coverImage}
        url={`/blog/${slug}`}
        type="article"
      />

      <div className="relative h-72 md:h-[420px] overflow-hidden">
        <img src={post.coverImage || 'https://images.unsplash.com/photo-1597211684565-dca64d72bdfe?w=1920'} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/80" />
        <div className="absolute inset-0 flex flex-col items-end justify-center text-white pt-16 pb-8">
          <div className="container-custom">
            <span className="badge bg-gold-500 text-white mb-3">{post.category}</span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-shadow max-w-3xl leading-tight">{post.title}</h1>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-100">
        <div className="container-custom py-4">
          <nav className="text-sm text-gray-400 mb-3">
            <Link to="/" className="hover:text-gold-500">{t('blogPost.breadHome')}</Link>
            <span className="mx-2">/</span>
            <Link to="/blog" className="hover:text-gold-500">{t('blogPost.breadBlog')}</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-600 line-clamp-1">{post.title}</span>
          </nav>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 text-xs font-bold">{post.author?.name?.charAt(0)}</div>
              <span className="font-medium text-gray-700">{post.author?.name}</span>
            </div>
            <span className="flex items-center gap-1"><FiCalendar size={13} />{post.createdAt ? format(new Date(post.createdAt), 'MMMM d, yyyy') : ''}</span>
            <span className="flex items-center gap-1"><FiClock size={13} />{post.readTime} {t('blogPost.minRead')}</span>
            <span className="flex items-center gap-1"><FiEye size={13} />{(post.views || 0).toLocaleString()} {t('blogPost.views')}</span>
          </div>
        </div>
      </div>

      <div className="py-14 bg-sand-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <article className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <p className="text-lg text-gray-600 leading-relaxed border-l-4 border-gold-400 pl-5 mb-8 italic">{post.excerpt}</p>
                <div
                  className="prose prose-lg max-w-none text-gray-700 prose-headings:font-serif prose-headings:text-primary-700 prose-a:text-gold-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-primary-700 prose-li:marker:text-gold-500 prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:leading-relaxed prose-p:mb-4"
                  dangerouslySetInnerHTML={{
                    __html: post.content
                      .replace(/^# (.+)$/gm, '<h1>$1</h1>').replace(/^## (.+)$/gm, '<h2>$1</h2>').replace(/^### (.+)$/gm, '<h3>$1</h3>')
                      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\*(.+?)\*/g, '<em>$1</em>')
                      .replace(/^- (.+)$/gm, '<li>$1</li>').replace(/(<li>.*<\/li>\n?)+/g, '<ul class="list-disc pl-6 mb-4">$&</ul>')
                      .replace(/^\d+\. (.+)$/gm, '<li>$1</li>').replace(/\n\n/g, '</p><p>')
                      .replace(/^(?!<[h|u|o|l|p])/gm, '<p>').replace(/(?<![>])$/gm, '</p>'),
                  }}
                />
              </div>

              {post.tags?.length > 0 && (
                <div className="mt-6 flex flex-wrap items-center gap-2">
                  <FiTag className="text-gray-400" size={16} />
                  {post.tags.map((tag) => (
                    <Link key={tag} to={`/blog?tag=${tag}`} className="px-3 py-1 bg-sand-100 text-gray-600 rounded-full text-sm hover:bg-gold-100 hover:text-gold-700 transition-colors">{tag}</Link>
                  ))}
                </div>
              )}

              <div className="mt-8">
                <Link to="/blog" className="flex items-center gap-2 text-gold-500 hover:text-gold-600 font-semibold text-sm transition-colors">
                  <FiArrowLeft size={16} /> {t('blogPost.backToBlog')}
                </Link>
              </div>
            </article>

            <aside className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-card text-center">
                <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 text-xl font-bold mx-auto mb-3">{post.author?.name?.charAt(0)}</div>
                <h3 className="font-semibold text-primary-700 mb-1">{post.author?.name}</h3>
                {post.author?.bio && <p className="text-gray-500 text-sm">{post.author.bio}</p>}
              </div>

              {post.relatedPosts?.length > 0 && (
                <div className="bg-white rounded-2xl p-6 shadow-card">
                  <h3 className="font-semibold text-primary-700 mb-4">{t('blogPost.relatedArticles')}</h3>
                  <div className="space-y-4">
                    {post.relatedPosts.map((rel) => <BlogCard key={rel._id} post={rel} />)}
                  </div>
                </div>
              )}

              <div className="bg-primary-700 rounded-2xl p-6 text-white text-center">
                <h3 className="font-serif text-xl font-bold mb-2">{t('blogPost.cta.title')}</h3>
                <p className="text-primary-200 text-sm mb-4">{t('blogPost.cta.desc')}</p>
                <Link to="/contact" className="btn-primary w-full justify-center">{t('blogPost.cta.btn')}</Link>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
