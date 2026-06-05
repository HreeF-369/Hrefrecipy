import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ChevronLeft, Clock, User, Calendar, Share2, Printer } from "lucide-react";
import { BLOG_POSTS } from "../services/blogData";
import { useEffect } from "react";

export default function BlogPost() {
  const { id } = useParams();
  const post = BLOG_POSTS.find(p => p.id === Number(id)) || BLOG_POSTS.find(p => p.slug === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleShare = async () => {
    const url = window.location.href;
    const shareData = {
      title: post.title,
      text: `Read this article on Hreef Recipes: ${post.title}`,
      url: url,
    };

    if (navigator.share && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        alert("Article link copied to clipboard!");
      } catch (err) {
        console.error("Clipboard error:", err);
      }
    }
  };

  const handlePrint = () => {
    window.print();
  };

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
        <Link to="/blog" className="px-6 py-3 bg-brand-green text-white rounded-2xl font-bold">
          Back to Journal
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white"
    >
      {/* Header Image Section */}
      <div className="relative h-[40vh] min-h-[300px] w-full lg:h-[60vh]">
        <img 
          src={post.image} 
          alt={post.title} 
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto max-w-4xl px-4 pb-12 lg:pb-20 w-full">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 text-sm font-bold transition-colors"
            >
              <ChevronLeft size={16} />
              Back to Journal
            </Link>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 bg-brand-green text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                {post.category}
              </span>
            </div>
            <h1 className="text-3xl font-black text-white sm:text-3xl md:text-4xl lg:text-5xl lg:text-4xl md:text-5xl lg:text-6xl leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-4 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Metadata Sidebar */}
          <aside className="lg:w-64 shrink-0">
            <div className="sticky top-32 space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-brand-green flex items-center justify-center text-white font-bold">
                  H
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Author</p>
                  <p className="text-sm font-bold text-slate-900">{post.author}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 pt-8 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Published</p>
                    <p className="text-xs font-bold text-slate-700">{post.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Read Time</p>
                    <p className="text-xs font-bold text-slate-700">{post.readTime}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 pt-8 border-t border-slate-100 no-print">
                <button 
                  onClick={handleShare}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-100 text-slate-500 hover:bg-slate-50 transition-all font-bold cursor-pointer"
                >
                  <Share2 size={16} />
                  <span className="text-xs font-bold">Share</span>
                </button>
                <button 
                  onClick={handlePrint}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-100 text-slate-500 hover:bg-slate-50 transition-all font-bold cursor-pointer"
                >
                  <Printer size={16} />
                  <span className="text-xs font-bold">Print</span>
                </button>
              </div>
            </div>
          </aside>

          {/* Post Text */}
          <article className="flex-1">
            <div 
              className="prose prose-slate prose-lg max-w-none 
                prose-headings:text-brand-ink prose-headings:font-black prose-headings:tracking-tight
                prose-p:text-slate-600 prose-p:leading-relaxed
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
                prose-h2:border-b prose-h2:pb-4 prose-h2:border-slate-100
                prose-strong:text-brand-ink prose-strong:font-bold"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-16 pt-12 border-t border-slate-100">
              <div className="rounded-[2rem] bg-slate-50 p-8 text-center">
                <h3 className="text-xl font-bold text-brand-ink mb-2">Enjoyed this article?</h3>
                <p className="text-slate-500 text-sm mb-6">Discover more professional tips and healthy recipes in our full catalog.</p>
                <Link to="/recipes" className="inline-flex items-center gap-2 px-8 py-3 bg-brand-green text-white rounded-2xl font-bold shadow-lg shadow-brand-green/20 hover:scale-105 transition-transform">
                  Browse Recipes
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </motion.div>
  );
}
