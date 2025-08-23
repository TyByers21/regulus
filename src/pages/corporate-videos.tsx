import { VideoCard } from "@/components/VideoCard";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import { ReviewsBanner } from "@/components/reviews-banner";
import { corporateVideos } from "@/data/videos";
import { Link } from "wouter";
import { Award, Building, Users, TrendingUp, Phone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function CorporateVideos() {
  const { ref: portfolioRef, inView: portfolioInView } = useScrollAnimation();
  const { ref: servicesRef, inView: servicesInView } = useScrollAnimation();
  const { ref: statsRef, inView: statsInView } = useScrollAnimation();
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-black text-white">
        <div className="absolute inset-0 bg-[url('attached_assets/corporate2.jpg')] bg-cover bg-center opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl drop-shadow-lg text-shadow-lg md:text-6xl font-bold mb-6" data-testid="corporate-videos-title">
            Corporate Video <span className="text-cyan-400">Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl drop-shadow-md text-shadow-md mx-auto leading-relaxed mb-8">
            Professional corporate content that drives results, engages audiences, and elevates your brand
          </p>
          <div className="flex items-center justify-center gap-2 text-cyan-300 text-shadow-md drop-shadow-lg">
            <Building className="w-6 h-6" />
            <span className="text-lg font-semibold">Trusted by 200+ Companies Worldwide</span>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section 
        ref={servicesRef}
        className={`py-20 bg-white transition-all duration-1000 ${
          servicesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Corporate Video Services</h2>
            <p className="text-xl text-gray-600">Comprehensive video solutions for your business needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Building className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">Brand Videos</h3>
              <p className="text-gray-600">Tell your company story and showcase your values with compelling brand narratives.</p>
            </div>

            <div className="text-center group">
              <div className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">Training Videos</h3>
              <p className="text-gray-600">Effective training content that educates, engages, and improves employee performance.</p>
            </div>

            <div className="text-center group">
              <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">Promotional Videos</h3>
              <p className="text-gray-600">Drive sales and engagement with promotional content that converts viewers into customers.</p>
            </div>

            <div className="text-center group">
              <div className="bg-purple-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">Event Coverage</h3>
              <p className="text-gray-600">Professional event documentation and highlights that capture your important moments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section 
        ref={statsRef}
        className={`py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white transition-all duration-1000 ${
          statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-3xl font-bold mb-2" data-testid="stat-corporate-clients">200+</div>
              <p className="text-gray-300">Corporate Clients</p>
            </div>
            <div className="group">
              <div className="text-3xl font-bold mb-2" data-testid="stat-corporate-videos">250+</div>
              <p className="text-gray-300">Corporate Videos</p>
            </div>
            <div className="group">
              <div className="text-3xl font-bold mb-2" data-testid="stat-industries">25+</div>
              <p className="text-gray-300">Industries Served</p>
            </div>
            <div className="group">
              <div className="text-3xl font-bold mb-2" data-testid="stat-satisfaction">99%</div>
              <p className="text-gray-300">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Videos Portfolio */}
      <section 
        ref={portfolioRef}
        className={`py-20 bg-gray-50 transition-all duration-1000 ${
          portfolioInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy mb-4" data-testid="portfolio-heading">
              Our Corporate Video Portfolio
            </h2>
            <p className="text-xl text-gray-600">Examples of our professional corporate video production</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {corporateVideos.map((video, index) => (
              <div
                key={video.id}
                className={`transition-all duration-500 ${
                  portfolioInView 
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
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/contact" data-testid="button-view-more">
                Discuss Your Corporate Project
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Why Choose Regulus Films for Corporate Videos?</h2>
            <p className="text-xl text-gray-600">Professional excellence that drives business results</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-navy mb-4">Professional Quality</h3>
              <p className="text-gray-600">High-end equipment and expert crew ensure broadcast-quality results for your corporate content.</p>
            </div>

            <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-navy mb-4">Fast Turnaround</h3>
              <p className="text-gray-600">We understand business timelines and deliver your corporate videos on schedule, every time.</p>
            </div>

            <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-navy mb-4">Strategic Approach</h3>
              <p className="text-gray-600">Our videos are designed to achieve your business objectives and engage your target audience.</p>
            </div>

            <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-navy mb-4">Full-Service Production</h3>
              <p className="text-gray-600">From concept development to final delivery, we handle every aspect of your video production.</p>
            </div>

            <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-navy mb-4">Competitive Pricing</h3>
              <p className="text-gray-600">Premium quality at competitive rates with flexible packages to fit any budget.</p>
            </div>

            <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-navy mb-4">Proven Results</h3>
              <p className="text-gray-600">Our corporate videos have helped hundreds of companies achieve their marketing and training goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewsBanner />

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6" data-testid="cta-heading">
            Ready to Elevate Your Corporate Content?
          </h2>
          <p className="text-xl mb-8 text-gray-200 leading-relaxed">
            Let's create compelling corporate videos that tell your story, engage your audience, and drive business results.
          </p>
          <div className="bg-white/10 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">Corporate Video Packages</h3>
            <ul className="text-left text-gray-200 space-y-2 max-w-2xl mx-auto">
              <li className="flex items-center">
                <span className="text-cyan-400 mr-2">✓</span>
                Custom quotes for enterprise clients
              </li>
              <li className="flex items-center">
                <span className="text-cyan-400 mr-2">✓</span>
                Volume discounts for multiple videos
              </li>
              <li className="flex items-center">
                <span className="text-cyan-400 mr-2">✓</span>
                Dedicated project management
              </li>
              <li className="flex items-center">
                <span className="text-cyan-400 mr-2">✓</span>
                Fast turnaround guaranteed
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/contact" data-testid="button-get-corporate-quote">
                Get Corporate Quote
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-blue-600 hover:bg-gray-100 hover:bg-white hover:text-blue-600">
              <a href="tel:786-429-4511" data-testid="button-call-corporate">
                <Phone className="text-blue-600 hover:bg-gray-100 w-5 h-5 mr-2" />
                Call: 786-429-4511
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