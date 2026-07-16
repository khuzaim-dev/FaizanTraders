"use client";

import { Star, ArrowRight, ArrowLeft } from "lucide-react";
import { useRef } from "react";

export function CustomerReviews() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  const reviews = [
    { name: "Hassan Saeed", date: "Jul 23, 2024", car: "Suzuki ALTO", text: "Really easy to use and helped me get my dream vehicle in less than 2 Months. They also helped me with the clearance process. Very impressed by the team." },
    { name: "Usman Ali", date: "Jul 16, 2024", car: "Nissan NOTE", text: "Very beautiful blue colour! When I first saw my Nissan Note after arrival, I was really excited. The front design looks sporty and the paint still has good shine. Inside is comfortable, steering is light and it drives smoothly." },
    { name: "Tariq M.", date: "Jul 10, 2024", car: "Toyota PROBOX VAN", text: "My Toyota Probox has arrived and already doing its job. I wanted simple car, strong enough for daily work and not costly to maintain. This one is exactly that type. It starts easily, drives stable and has very spacious trunk." },
    { name: "Ali Khan", date: "Jun 28, 2024", car: "Toyota AQUA", text: "The hybrid system is perfect for fuel savings. Faizan Traders ensured the auction sheet was 100% authentic. Smooth delivery to Karachi. I will definitely be using their services again for my next vehicle import." }
  ];

  return (
    <section id="reviews" className="py-16 md:py-24 bg-white dark:bg-zinc-950 overflow-hidden border-t border-zinc-100 dark:border-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header with Arrows */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">Customer Reviews</h2>
          <div className="flex gap-2">
            <button onClick={() => scroll("left")} className="h-10 w-10 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
              <ArrowLeft className="h-4 w-4 text-zinc-600 dark:text-zinc-400" />
            </button>
            <button onClick={() => scroll("right")} className="h-10 w-10 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
              <ArrowRight className="h-4 w-4 text-zinc-600 dark:text-zinc-400" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Container */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reviews.map((rev, i) => (
             <div key={i} className="min-w-[340px] max-w-[340px] md:min-w-[400px] md:max-w-[400px] snap-start bg-zinc-50 dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 flex flex-col shadow-sm hover:shadow-md transition-shadow">
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[1,2,3,4,5].map(star => <Star key={star} className="w-5 h-5 fill-current" />)}
                  </div>
                  {/* Pakistan Flag */}
                  <img src="https://flagcdn.com/w40/pk.png" alt="Pakistan Flag" className="h-4 object-contain shadow-sm border border-zinc-200" />
                </div>
                
                <h3 className="font-bold text-zinc-900 dark:text-white mb-4 text-sm">{rev.car}</h3>
                
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-8 flex-1">
                  {rev.text}
                </p>
                
                <div className="mt-auto flex items-end justify-between">
                  <div>
                    <div className="font-medium text-sm text-zinc-900 dark:text-white">{rev.name}</div>
                    <div className="text-xs text-zinc-500 mt-1">{rev.date}</div>
                  </div>
                  <button className="text-sm font-bold flex items-center gap-1 text-zinc-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors">
                    See Full Review <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
             </div>
          ))}
        </div>

        {/* Footer Dots and Link */}
        <div className="mt-2 flex flex-col items-center gap-6">
          <div className="flex gap-2 items-center">
            <div className="h-2 w-6 rounded-full bg-blue-500"></div>
            <div className="h-1.5 w-1.5 rounded-full border border-zinc-300 dark:border-zinc-700"></div>
            <div className="h-1.5 w-1.5 rounded-full border border-zinc-300 dark:border-zinc-700"></div>
          </div>
          <button className="text-sm font-bold flex items-center gap-1 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
            View All Reviews <ArrowRight className="h-4 w-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
