import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { Phone, MapPin, Globe, Star, Award, DollarSign } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-navy to-deep-navy text-white">
        <div className="absolute inset-0 bg-[url('/attached_assets/clapboard.jpg')] bg-cover bg-center opacity-35"></div>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl text-white drop-shadow md:text-6xl font-bold mb-6">
            Get In <span className="text-miami-teal">Touch</span>
          </h1>
          <p className="text-xl drop-shadow md:text-2xl text-white max-w-3xl mx-auto leading-relaxed">
            Ready to bring your vision to life? Let's discuss your project and create something amazing together.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-8">Contact Information</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center" data-testid="contact-phone">
                  <div className="bg-miami-teal rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy">Phone</div>
                    <a href="tel:786-429-4511" className="text-black drop-shadow hover:text-miami-dark transition-colors text-xl font-medium">
                      786-429-4511
                    </a>
                  </div>
                </div>

                <div className="flex items-center" data-testid="contact-location">
                  <div className="bg-miami-teal rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy">Location</div>
                    <div className="text-gray-600">Barclay's Business Center</div>
                    <div className="text-sm text-gray-500">555 NE 15th St, Miami, FL 33132</div>
                  </div>
                </div>

                <div className="flex items-center" data-testid="contact-service-area">
                  <div className="bg-miami-teal rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy">Service Area</div>
                    <div className="text-gray-600">Worldwide</div>
                  </div>
                </div>
              </div>

              {/* Special Offers */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-navy mb-4 flex items-center">
                  <Award className="w-6 h-6 text-miami-teal mr-2" />
                  Special Offers
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-500 mr-2" />
                    Price match guarantee + 10% off any written quote
                  </li>
                  <li className="flex items-center">
                    <DollarSign className="w-5 h-5 text-green-500 mr-2" />
                    Crypto payment accepted with bonus hours
                  </li>
                  <li className="flex items-center">
                    <Globe className="w-5 h-5 text-blue-500 mr-2" />
                    Custom packages for all budgets
                  </li>
                </ul>
              </div>

              {/* Why Choose Us */}
              <div className="bg-navy rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Why Choose Regulus Films?</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>✓ 200+ REAL 5-star Google reviews</li>
                  <li>✓ 20+ years of professional experience</li>
                  <li>✓ High-end equipment and professional crew</li>
                  <li>✓ Worked with biggest names in business and entertainment</li>
                  <li>✓ Worldwide service with Miami headquarters</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-8">Get Your Free Quote</h2>
              
              <div className="bg-navy rounded-xl p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy mb-6">Our Guarantee to You</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg" data-testid="guarantee-quality">
              <div className="bg-miami-teal text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Quality Guarantee</h3>
              <p className="text-gray-600">We guarantee you will be blown away by the quality of our work and professionalism.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg" data-testid="guarantee-price">
              <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Price Match + 10% Off</h3>
              <p className="text-gray-600">We'll match any written quote from a reputable company and give you an extra 10% off.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg" data-testid="guarantee-budget">
              <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">All Budgets Welcome</h3>
              <p className="text-gray-600">Don't be intimidated by our quality - we work with all budgets and create custom packages.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Don't wait - call us today at 786-429-4511 or fill out the form above to get your free quote. 
            Let's bring your creative vision to reality!
          </p>
          <a 
            href="tel:786-429-4511" 
            className="inline-flex items-center bg-miami-teal hover:bg-miami-dark  px-8 py-4 rounded-lg text-xl text-black font-semibold transition-colors"
            data-testid="button-call-now-cta"
          >
            <Phone className="w-6 text-black h-6 mr-3" />
            Call Now: 786-429-4511
          </a>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-navy mb-4">Find Our Studio</h2>
            <p className="text-lg text-gray-600">Located in Barclay's Business Center, Miami</p>
          </div>
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.2755739562853!2d-80.18668968505179!3d25.79324418361374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b692c4c5f3b1%3A0x4b5c8b4a1a9b5c8d!2s555%20NE%2015th%20St%2C%20Miami%2C%20FL%2033132!5e0!3m2!1sen!2sus!4v1642765432109!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Regulus Films Location - Barclay's Business Center"
              data-testid="contact-google-map"
            />
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center" data-testid="location-info">
              <MapPin className="w-8 h-8 text-miami-teal mx-auto mb-3" />
              <h3 className="text-lg font-bold text-navy mb-2">Address</h3>
              <p className="text-gray-600">Barclay's Business Center</p>
              <p className="text-sm text-gray-500">555 NE 15th St, Miami, FL 33132</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center" data-testid="phone-info">
              <Phone className="w-8 h-8 text-miami-teal mx-auto mb-3" />
              <h3 className="text-lg font-bold text-navy mb-2">Phone</h3>
              <a href="tel:786-429-4511" className="text-gray-700 drop-shadow hover:text-miami-dark font-semibold text-xl">
                786-429-4511
              </a>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center" data-testid="service-info">
              <Globe className="w-8 h-8 text-miami-teal mx-auto mb-3" />
              <h3 className="text-lg font-bold text-navy mb-2">Service Area</h3>
              <p className="text-gray-600">Worldwide</p>
              <p className="text-sm text-gray-500">We travel to your location</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
