import { VideoCard } from "@/components/VideoCard";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import { ReviewsBanner } from "@/components/reviews-banner";
import { musicVideos } from "@/data/videos";
import { Link } from "wouter";
import { Play, Star, Phone, ChevronDown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useState } from "react";

export default function MusicVideos() {
  const { ref: portfolioRef, inView: portfolioInView } = useScrollAnimation();
  const { ref: processRef, inView: processInView } = useScrollAnimation();
  
  // Pagination state
  const [visibleCount, setVisibleCount] = useState(12);
  const videosPerPage = 12;
  const hasMoreVideos = visibleCount < musicVideos.length;
  
  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + videosPerPage, musicVideos.length));
  };
  
  const visibleVideos = musicVideos.slice(0, visibleCount);
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 pt-32 bg-gradient-to-br from-navy to-deep-navy text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')] bg-cover bg-center opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl drop-shadow md:text-6xl font-bold mb-6" data-testid="music-videos-title">
            Music Videos <span className="text-miami-teal drop-shadow">Portfolio</span>
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto drop-shadow leading-relaxed mb-8">
            Showcasing our creative excellence in music video production for artists across all genres
          </p>
          <div className="flex items-center justify-center gap-2 text-miami-teal">
            <Play className="w-6 h-6" />
            {/* <span className="text-lg font-semibold">{musicVideos.length}+ Music Videos Produced</span> */}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
            Creative Storytelling Through Cinematography
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            From intimate acoustic performances to high-energy urban productions, we bring your musical vision to life with cutting-edge equipment, creative direction, and professional post-production. Every video tells a unique story that connects with your audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-miami-teal hover:bg-miami-dark text-white">
              <Link href="/contact" data-testid="button-start-project">
                Start Your Music Video Project
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-2 border-miami-teal text-miami-teal hover:bg-miami-teal hover:text-white">
              <a href="tel:786-429-4511" data-testid="button-call-now">
                <Phone className="w-4 h-4 mr-2" />
                Call: 786-429-4511
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Video Portfolio Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy mb-4" data-testid="portfolio-heading">
              Our Music Video Portfolio
            </h2>
            <p className="text-xl text-gray-600">
              Professional music videos for artists worldwide - {musicVideos.length} videos and counting!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleVideos.map((video) => (
              <div key={video.id}>
                <VideoCard video={video} />
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {hasMoreVideos && (
            <div className="text-center mt-12">
              <Button
                onClick={handleLoadMore}
                size="lg"
                className="bg-miami-teal hover:bg-miami-dark text-white px-8 py-4 text-lg font-semibold group"
                data-testid="button-load-more"
              >
                <span className="mr-2">Load More Videos</span>
                <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
              </Button>
              <p className="text-gray-600 mt-4">
                Showing {visibleCount} of {musicVideos.length} videos
              </p>
            </div>
          )}

          {/* All Videos Loaded Message */}
          {!hasMoreVideos && musicVideos.length > videosPerPage && (
            <div className="text-center mt-12">
              <div className="bg-miami-teal/10  rounded-xl p-6 inline-block">
                <h3 className="text-xl font-bold text-navy mb-2">Still want to see more videos?</h3>
                <p className="text-gray-600 text-xl">
                  
                </p>
                <br />
                <Button
  onClick={() => window.open("https://vimeo.com/user27858759", "_blank")}
  size="lg"
  className="bg-miami-teal hover:bg-miami-dark  text-gray-700 hover:text-white px-8 py-4 text-lg font-semibold group"
  data-testid="button-load-more"
>
<br />
  <span className="text-center">Check Out Our Complete Video Catalogue</span>
 
</Button>

              </div>
            </div>
          )}
        </div>
      </section>

      {/* Production Process */}
      <section 
        ref={processRef}
        className={`py-20 bg-white transition-all duration-1000 ${
          processInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Our Music Video Process</h2>
            <p className="text-xl text-gray-600">From concept to final cut, we handle every detail</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group" data-testid="process-step-1">
              <div className="bg-miami-teal text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                1
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Concept Development</h3>
              <p className="text-gray-600 leading-relaxed">
                We work with you to develop a creative concept that matches your song's energy and your artistic vision.
              </p>
            </div>

            <div className="text-center group" data-testid="process-step-2">
              <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                2
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Production</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional filming with high-end equipment, lighting, and creative direction to capture your performance.
              </p>
            </div>

            <div className="text-center group" data-testid="process-step-3">
              <div className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                3
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Post-Production</h3>
              <p className="text-gray-600 leading-relaxed">
                Expert editing, color grading, and visual effects to create a polished final product that exceeds expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewsBanner />

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-navy mb-6" data-testid="cta-heading">
            Ready to Create Your Music Video?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Join the hundreds of satisfied artists who have worked with Regulus Films. Let's bring your musical vision to life with professional quality and creative excellence.
          </p>
          <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-xl p-8 shadow-lg mb-8">
            <h3 className="text-3xl font-semibold mb-8 text-center">✨Special Offers</h3>
            <ul className="text-center text-black space-y-2 max-w-2xl mx-auto">
              <li className="flex items-center">
                <span className="flex-shrink-0 w-6 h-6 flex mr-2 items-center justify-center rounded-full bg-cyan-400 text-blue-900 font-bold"> ✓ </span>
                 Price match guarantee + 10% off any written quote
              </li>
              <li className="flex items-center">
                <span className="flex-shrink-0 w-6 h-6 flex mr-2 items-center justify-center rounded-full bg-cyan-400 text-blue-900 font-bold"> ✓ </span>
                 Crypto payment accepted with bonus shooting hours
              </li>
              <li className="flex items-center">
                <span className="flex-shrink-0 w-6 h-6 flex mr-2 items-center justify-center rounded-full bg-cyan-400 text-blue-900 font-bold"> ✓ </span>
                 Custom packages available for all budgets
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-miami-teal hover:bg-miami-dark text-white">
              <Link href="/contact" data-testid="button-get-started">
                Get Started Today
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-miami-teal text-miami-teal hover:bg-miami-teal hover:text-white">
              <a href="tel:786-429-4511" data-testid="button-call-discuss">
                <Phone className="w-5 h-5 mr-2" />
                Call to Discuss: 786-429-4511
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}