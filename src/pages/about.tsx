import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Footer } from "@/components/footer";
import {
  Phone,
  Star,
  Globe,
  Award,
  Users,
  Video,
  Camera,
  Trophy,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function About() {
  const { ref: textRef, inView: textInView } = useScrollAnimation();
  const { ref: featuresRef, inView: featuresInView } = useScrollAnimation();
  const { ref: expertiseRef, inView: expertiseInView } = useScrollAnimation();
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-navy to-deep-navy text-white">
        <div className="absolute inset-0 bg-[url('/attached_assets/miami-bridge.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl drop-shadow md:text-6xl font-bold mb-6" data-testid="about-title">
              About <span className="text-miami-teal drop-shadow" style={{
                textShadow: '0 0 20px rgba(20, 184, 166, 0.5), 0 0 40px rgba(20, 184, 166, 0.3)',
                filter: 'drop-shadow(0 0 8px rgba(20, 184, 166, 0.4))'
              }}>Regulus Films</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto drop-shadow leading-relaxed">
              Miami's premier video production company with over 20 years of
              experience creating exceptional content for artists and businesses
              worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div 
              ref={textRef}
              className={`transition-all duration-1000 ${
                textInView 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-10'
              }`}
            >
              <h2 className="text-4xl font-bold text-navy mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We are a high-end corporate and music video production company
                that loves working with creative businesses and talented
                artists. We have worked with some of the biggest names in the
                business and are here to help bring your creative vision into
                reality.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We work with all budgets, so please don't be intimidated by the
                quality of our work and think that you cannot afford us! Simply
                give us a call at 786-429-4511 and let's discuss your project.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We have many packages to choose from and we are also able to
                create a package within your budget. We guarantee that you will
                be blown away by our work!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-miami-teal hover:bg-miami-dark text-white"
                >
                  <a href="tel:786-429-4511" data-testid="button-call-us">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Us Today
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-miami-teal text-miami-teal hover:bg-miami-teal hover:text-white"
                >
                  <Link href="/contact" data-testid="button-get-quote">
                    Get Free Quote
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="attached_assets/smoke-camera.jpg"
                alt="Professional video production crew at work"
                className="rounded-xl shadow-2xl"
                data-testid="img-production-crew"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-xl animate-pulse-glow">
                <div className="text-3xl font-bold text-navy">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section 
        ref={featuresRef}
        className={`py-20 bg-gray-50 transition-all duration-1000 ${
          featuresInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">
              Why Choose Regulus Films?
            </h2>
            <p className="text-xl text-gray-600">
              What sets us apart from other production companies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center" data-testid="feature-reviews">
              <div className="bg-miami-teal text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">
                200+ Five Star Reviews
              </h3>
              <p className="text-gray-600">
                Only production company in Florida with over 200 REAL 5-star
                Google reviews
              </p>
            </div>

            <div className="text-center" data-testid="feature-worldwide">
              <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">
                Worldwide Service
              </h3>
              <p className="text-gray-600">
                We travel worldwide and work with all budgets to bring your
                vision to life
              </p>
            </div>

            <div className="text-center" data-testid="feature-guarantee">
              <div className="bg-yellow-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">
                Price Match Guarantee
              </h3>
              <p className="text-gray-600">
                We'll match any written quote from a reputable company and give
                you an extra 10% off
              </p>
            </div>

            <div className="text-center" data-testid="feature-crypto">
              <div className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">
                Crypto Payments
              </h3>
              <p className="text-gray-600">
                Pay with cryptocurrency and get bonus hours added to your shoot
                free
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section 
        ref={expertiseRef}
        className={`py-20 bg-white transition-all duration-1000 ${
          expertiseInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Our Expertise</h2>
            <p className="text-xl text-gray-600">
              Professional video production services across multiple industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
              data-testid="expertise-music"
            >
              <div className="bg-miami-teal text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Video className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">
                Music Videos
              </h3>
              <p className="text-gray-600">
                Creative storytelling and cutting-edge cinematography for
                artists of all genres and styles.
              </p>
            </div>

            <div
              className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
              data-testid="expertise-corporate"
            >
              <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">
                Corporate Videos
              </h3>
              <p className="text-gray-600">
                Professional corporate content including commercials, training
                videos, and brand storytelling.
              </p>
            </div>

            <div
              className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
              data-testid="expertise-equipment"
            >
              <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Camera className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">
                High-End Equipment
              </h3>
              <p className="text-gray-600">
                State-of-the-art cameras, lighting, and post-production
                equipment for superior quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Image */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Professional Team</h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Our experienced team of directors, cinematographers, and editors
                work together to create exceptional video content that exceeds
                your expectations.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                With over 20 years in the industry, we've built relationships
                with some of the biggest names in business and entertainment,
                bringing that expertise to every project.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-miami-teal hover:bg-miami-dark text-white"
              >
                <Link href="/contact" data-testid="button-work-with-us">
                  Work With Us
                </Link>
              </Button>
            </div>
            <div>
              <img
                src="attached_assets/corporate2.jpg"
                alt="Professional video production team"
                className="rounded-xl shadow-2xl"
                data-testid="img-team"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-navy mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Contact us today to discuss your vision and get a free quote. We
            guarantee you'll be blown away by our work!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-miami-teal hover:bg-miami-dark text-white"
            >
              <a href="tel:786-429-4511" data-testid="button-call-now">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: 786-429-4511
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-miami-teal text-miami-teal hover:bg-miami-teal hover:text-white"
            >
              <Link href="/contact" data-testid="button-get-free-quote">
                Get Free Quote
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
