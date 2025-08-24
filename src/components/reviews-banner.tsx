import { Star } from "lucide-react";
import "./reviews-banner.css"; // custom CSS for smooth infinite loop

export function ReviewsBanner() {
  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Absolutely phenomenal work! Regulus Films exceeded every expectation for our corporate video.",
    },
    {
      name: "Mike Rodriguez",
      rating: 5,
      text: "Professional, creative, and delivered exactly what we envisioned. Highly recommend!",
    },
    {
      name: "Jessica Chen",
      rating: 5,
      text: "The music video they produced was stunning. Every detail was perfect.",
    },
    {
      name: "David Thompson",
      rating: 5,
      text: "Top-notch production quality and excellent customer service throughout the entire process.",
    },
    {
      name: "Maria Garcia",
      rating: 5,
      text: "Regulus Films brought our brand story to life in ways we never imagined possible.",
    },
    {
      name: "Alex Park",
      rating: 5,
      text: "From concept to final edit, they were professional and creative every step of the way.",
    },
    {
      name: "Rachel Kim",
      rating: 5,
      text: "The team was incredibly talented and made the whole experience seamless and enjoyable.",
    },
    {
      name: "James Wilson",
      rating: 5,
      text: "Outstanding video production company. They deliver on time and exceed expectations.",
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2
            className="text-4xl font-bold text-miami-teal mb-2"
            style={{
              textShadow:
                "0 0 20px rgba(20, 184, 166, 0.5), 0 0 40px rgba(20, 184, 166, 0.3), 0 0 60px rgba(20, 184, 166, 0.2)",
              filter: "drop-shadow(0 0 8px rgba(20, 184, 166, 0.4))",
            }}
          >
            What Our Clients Say
          </h2>
          <p className="text-gray-300">
            Over 200 five-star Google reviews from satisfied clients
          </p>
        </div>

        {/* Seamless Infinite Scroll with gradient masks */}
        <div className="relative w-full overflow-hidden">
          {/* left gradient */}
          <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-slate-800 to-transparent pointer-events-none z-10" />
          {/* right gradient */}
          <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-slate-900 to-transparent pointer-events-none z-10" />

          <div className="flex animate-marquee space-x-6">
            {[...reviews, ...reviews].map((review, index) => (
              <div
                key={`review-${index}`}
                className="flex-shrink-0 w-80 bg-miami-teal rounded-xl p-6 shadow-lg hover-lift"
              >
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-black/80 drop-shadow-md">
                    Google Review
                  </span>
                </div>
                <p className="text-black mb-4 leading-relaxed">
                  "{review.text}"
                </p>
                <div className="font-semibold text-black italic">
                  - {review.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href="https://share.google/DVN5aMaVSxtq3Xj9i"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-miami-teal hover:text-miami-dark font-semibold transition-colors"
          >
            View All 200+ Google Reviews
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
