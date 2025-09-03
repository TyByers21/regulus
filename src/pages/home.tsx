import { HeroSection } from "@/components/hero-section";
import { VideoCard } from "@/components/VideoCard";
import { ReviewsBanner } from "@/components/reviews-banner";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { featuredVideos } from "@/data/videos";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Play, Award, Users, Zap, Star, Shield, TrendingUp, CheckCircle, MapPin, Phone, Globe } from "lucide-react";
import HeroImage from "@/components/hero-image";

export default function Home() {
  const { ref: featuredRef, inView: featuredInView } = useScrollAnimation();
  const { ref: servicesRef, inView: servicesInView } = useScrollAnimation();
  const { ref: statsRef, inView: statsInView } = useScrollAnimation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroImage />

      {/* Awards & Credentials Section */}
      <section className="py-16 bg-gradient-to-br from-navy to-deep-navy text-white relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-miami-teal/20 rounded-full px-6 py-2 mb-4">
              <Star className="w-5 h-5 text-miami-teal mr-2" />
              <span className="text-miami-teal font-semibold">Miami's #1 Video Production Team</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="awards-heading">
              Your Trusted Video <span className="text-miami-teal">Production Experts</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              With decades of combined experience, we're your strategic partners in creating exceptional video content. 
              From concept to delivery, we ensure your vision becomes reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center group hover:bg-white/10 transition-all duration-300">
              <div className="bg-miami-teal rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Expert Consultation</h3>
              <p className="text-gray-300 leading-relaxed">
                Our seasoned professionals identify potential pitfalls early, ensuring your project stays on track and exceeds expectations.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center group hover:bg-white/10 transition-all duration-300">
              <div className="bg-miami-teal rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Cutting-Edge Innovation</h3>
              <p className="text-gray-300 leading-relaxed">
                We stay ahead of the curve with the latest technology, trends, and creative techniques in video production.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center group hover:bg-white/10 transition-all duration-300">
              <div className="bg-miami-teal rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Proven Success Formula</h3>
              <p className="text-gray-300 leading-relaxed">
                Decades of experience have taught us how to build solid foundations that prevent costly mistakes and deliver outstanding results.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center bg-miami-teal/10 rounded-full px-8 py-3 border border-miami-teal/30">
              <Award className="w-6 h-6 text-miami-teal mr-3" />
              <span className="text-lg font-semibold">Trusted by 500+ clients worldwide • 1000+ videos produced</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Videos Section */}
      <section 
        ref={featuredRef}
        className={`py-20 bg-gray-50 transition-all duration-1000 ${
          featuredInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="featured-heading">
              Featured Work
            </h2>
            <p className="text-xl text-gray-600">Showcasing our latest and greatest productions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVideos.slice(0, 6).map((video, index) => (
              <div
                key={video.id}
                className={`transition-all duration-500 ${
                  featuredInView 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <VideoCard video={video} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-gradient-to-r from-miami-teal to-miami-dark shadow-lg shadow-miami-teal/30 hover:to-miami-teal text-white shadow-lg shadow-miami-teal/30 scale-105 text-white hover:text-black">
              <Link href="/music-videos" data-testid="button-view-all-work">
                View All Our Work
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section 
        ref={statsRef}
        className={`py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white transition-all duration-1000 ${
          statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="flex justify-center mb-4">
                <Play className="w-12 h-12 text-teal-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-3xl font-bold mb-2" data-testid="stat-videos">1000+</div>
              <p className="text-gray-300">Videos Produced</p>
            </div>
            <div className="group">
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12 text-teal-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-3xl font-bold mb-2" data-testid="stat-clients">500+</div>
              <p className="text-gray-300">Happy Clients</p>
            </div>
            <div className="group">
              <div className="flex justify-center mb-4">
                <Award className="w-12 h-12 text-teal-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-3xl font-bold mb-2" data-testid="stat-awards">15+</div>
              <p className="text-gray-300">Industry Awards</p>
            </div>
            <div className="group">
              <div className="flex justify-center mb-4">
                <Zap className="w-12 h-12 text-teal-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-3xl font-bold mb-2" data-testid="stat-years">20+</div>
              <p className="text-gray-300">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section 
        ref={servicesRef}
        className={`py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden transition-all duration-1000 ${
          servicesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Clean light textured background overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-teal-50/50"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.03) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="services-heading">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">Professional video production for every need</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Music Videos Card */}
            <div className="group bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/20">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/attached_assets/musicVideo_1755807886658.jpg" 
                  alt="Music Video Production"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Music Videos</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Creative storytelling meets cutting-edge cinematography. We bring your musical vision to life with stunning visuals and professional production quality.
                </p>
                <Button asChild className="bg-purple-500 hover:bg-purple-600 text-white">
                  <Link href="/music-videos" data-testid="button-music-videos">
                    View Music Videos
                  </Link>
                </Button>
              </div>
            </div>

            {/* Corporate Videos Card */}
            <div className="group bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/20">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/attached_assets/golf.jpg" 
                  alt="Corporate Video Production"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Corporate Videos</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Professional content that drives business results. From commercials to training videos, we create compelling corporate content that engages your audience.
                </p>
                <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
                  <Link href="/corporate-videos" data-testid="button-corporate-videos">
                    View Corporate Work
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <ReviewsBanner />

      {/* Location Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy mb-4">Find Our Miami Studio</h2>
            <p className="text-xl text-gray-600">Located in the heart of Miami, serving clients worldwide</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Map */}
            <div className="order-2 lg:order-1">
              <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.2755739562853!2d-80.18668968505179!3d25.79324418361374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b692c4c5f3b1%3A0x4b5c8b4a1a9b5c8d!2s555%20NE%2015th%20St%2C%20Miami%2C%20FL%2033132!5e0!3m2!1sen!2sus!4v1642765432109!5m2!1sen!2sus"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Regulus Films Location - Barclay's Business Center"
                  data-testid="location-google-map"
                />
              </div>
            </div>
            
            {/* Location Info */}
            <div className="order-1 lg:order-2">
              <div className="space-y-8">
                <div className="flex items-start" data-testid="location-address">
                  <div className="bg-miami-teal rounded-full w-14 h-14 flex items-center justify-center mr-6 flex-shrink-0">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-navy mb-2">Studio Address</h3>
                    <p className="text-lg text-gray-700 font-medium">Barclay's Business Center</p>
                    <p className="text-gray-600">555 NE 15th St, Miami, FL 33132</p>
                  </div>
                </div>

                <div className="flex items-start" data-testid="location-phone">
                  <div className="bg-green-500 rounded-full w-14 h-14 flex items-center justify-center mr-6 flex-shrink-0">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-navy mb-2">Contact Us</h3>
                    <a href="tel:786-429-4511" className="text-lg text-miami-teal hover:text-miami-dark font-semibold transition-colors">
                      786-429-4511
                    </a>
                    <p className="text-gray-600 mt-1">Call us for immediate assistance</p>
                  </div>
                </div>

                <div className="flex items-start" data-testid="location-service-area">
                  <div className="bg-orange-500 rounded-full w-14 h-14 flex items-center justify-center mr-6 flex-shrink-0">
                    <Globe className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-navy mb-2">Service Area</h3>
                    <p className="text-lg text-gray-700 font-medium">Worldwide</p>
                    <p className="text-gray-600">We travel to your location anywhere in the world</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6" data-testid="cta-heading">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl mb-8 text-gray-200 leading-relaxed">
            Let's bring your vision to life with professional video production that exceeds expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 hover:bg-gray-100 text-lg px-8 py-4">
              <Link href="/contact" data-testid="button-get-started">
                Get Started Today
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-white text-blue-600 hover:bg-gray-100 hover:bg-white hover:text-teal-600 text-lg px-8 py-4">
              <Link href="/about" data-testid="button-learn-more">
                Learn More About Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}