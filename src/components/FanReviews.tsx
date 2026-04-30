import { useRef, useState, useEffect } from "react";
import { Star, StarHalf, ChevronLeft, ChevronRight, BadgeCheck } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function FanReviews() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft) < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const reviews = [
    {
      name: "Jessica M.",
      rating: 5,
      review: "Absolutely game changing! The Start Cooking mode makes preparing complex meals a breeze. Never lost my place again.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces"
    },
    {
      name: "David L.",
      rating: 4.5,
      review: "The meal planner helps me stay on track with my fitness goals. Combined with the fitness recipes, I hit my macros perfectly.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces"
    },
    {
      name: "Sarah K.",
      rating: 5,
      review: "The automatic grocery list generator is a lifesaver. It groups items by aisle and saves me at least 30 minutes every Sunday.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=faces"
    },
    {
      name: "Mike T.",
      rating: 4.5,
      review: "I love the diverse selection of high-protein fitness meals. Really wish there were a few more vegan options, but overall excellent.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces"
    },
    {
      name: "Emily R.",
      rating: 5,
      review: "Start Cooking mode perfectly times the steps for me. I managed to make a complicated Thanksgiving dinner without stressing out!",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces"
    },
    {
      name: "James H.",
      rating: 5,
      review: "Being able to add an entire week's worth of meals to my grocery list with one click is magic. Highly recommend to busy parents.",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=faces"
    },
    {
      name: "Olivia B.",
      rating: 4.5,
      review: "The fitness recipes are completely satisfying and actually taste amazing. Not just boring chicken and rice!",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces"
    },
    {
      name: "Marcus W.",
      rating: 5,
      review: "I've tried numerous cooking apps, but the interactive cooking mode here is unparalleled. It's like having a chef right next to you.",
      avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop&crop=faces"
    },
    {
      name: "Chloe D.",
      rating: 4.5,
      review: "Generating my weekly grocery list from the planner saves me so much mental energy. Only taking off half a star because I want more dessert recipes!",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=faces"
    },
    {
      name: "Ethan G.",
      rating: 5,
      review: "I finally hit my protein goals thanks to the macro breakdowns and meal planner. The entire platform feels incredibly premium.",
      avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop&crop=faces"
    }
  ];

  return (
    <section className="space-y-8 py-12 relative w-full">
      <div className="text-center px-4">
        <h2 className="font-display text-2xl md:text-3xl font-black text-brand-ink">What Our Fans Say</h2>
        <p className="mt-2 font-bold text-slate-400 uppercase tracking-widest text-[10px] md:text-xs">
          Join thousands of happy home chefs
        </p>
      </div>

      <div className="relative -mx-4 md:mx-0">
        {canScrollLeft && (
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 flex items-center justify-start pointer-events-none">
            <button 
              className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-xl flex items-center justify-center text-slate-400 pointer-events-auto hover:text-slate-600 hover:scale-110 active:scale-95 transition-all ml-2 md:ml-4"
              onClick={() => {
                scrollContainerRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
              }}
              aria-label="Scroll reviews left"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        )}

        <div 
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex overflow-x-auto pb-8 pt-4 px-4 md:px-2 gap-4 md:gap-6 scrollbar-hide snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {reviews.map((review, idx) => (
            <div 
              key={idx} 
              className="snap-center shrink-0 w-[80%] sm:w-[320px] md:w-[350px] bg-white border border-slate-100 rounded-2xl p-6 md:p-8 flex flex-col gap-4 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => {
                  const full = i + 1 <= Math.floor(review.rating);
                  const half = i + 1 > Math.floor(review.rating) && i < Math.ceil(review.rating);
                  
                  if (full) {
                    return <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-amber-400 fill-amber-400" />;
                  } else if (half) {
                    return <StarHalf key={i} className="w-4 h-4 md:w-5 md:h-5 text-amber-400 fill-amber-400" />;
                  } else {
                    return <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-slate-200" />;
                  }
                })}
              </div>
              <p className="text-slate-600 text-sm md:text-base italic leading-relaxed line-clamp-3">
                "{review.review}"
              </p>
              <div className="mt-auto flex items-center gap-3 pt-4 border-t border-slate-50">
                <img src={review.avatar} alt={review.name} className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-100 object-cover" />
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-slate-900 text-sm md:text-base">{review.name}</span>
                    <BadgeCheck className="w-4 h-4 text-brand-green" />
                  </div>
                  <span className="text-[10px] md:text-xs text-slate-400 font-bold uppercase tracking-wider">Verified User</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {canScrollRight && (
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 flex items-center justify-end pointer-events-none">
            <button 
              className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-xl flex items-center justify-center text-slate-400 pointer-events-auto hover:text-slate-600 hover:scale-110 active:scale-95 transition-all mr-2 md:mr-4"
              onClick={() => {
                scrollContainerRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
              }}
              aria-label="Scroll reviews right"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
