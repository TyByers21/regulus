import { Footer } from "@/components/footer";
import { Phone, MapPin, Globe, Mail, Star, Award, DollarSign } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 pt-32 bg-gradient-to-br from-navy to-deep-navy text-white">
        <div className="absolute inset-0 bg-[url('/attached_assets/clapboard.jpg')] bg-cover bg-center opacity-35"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow">
            Get In <span className="text-miami-teal">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed drop-shadow">
            Ready to bring your vision to life? Let’s discuss your project and create something amazing together.
          </p>
        </div>
      </section>

      {/* Contact Information - Uniform Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="bg-navy rounded-xl p-6 shadow text-center">
              <div className="bg-miami-teal w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-miami-teal mb-2">Phone</h3>
              <a
                href="tel:786-429-4511"
                className="text-lg font-medium text-gray-200 hover:text-miami-dark transition-colors"
              >
                786-429-4511
              </a>
            </div>

            {/* Location */}
            <div className="bg-navy rounded-xl p-6 shadow text-center">
              <div className="bg-miami-teal w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-miami-teal mb-2">Location</h3>
              <p className="text-gray-200">Barclay’s Business Center</p>
              <p className="text-sm text-gray-500">555 NE 15th St, Miami, FL 33132</p>
            </div>

            {/* Service Area */}
            <div className="bg-navy rounded-xl p-6 shadow text-center">
              <div className="bg-miami-teal w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-miami-teal mb-2">Service Area</h3>
              <p className="text-gray-200">Worldwide</p>
              <p className="text-sm text-gray-500">We travel to your location</p>
            </div>

            {/* Emails */}
            <div className="bg-navy rounded-xl p-6 shadow text-center md:col-span-2 lg:col-span-3">
              <div className="bg-miami-teal w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-miami-teal mb-2">Email</h3>
              <div className="flex flex-col space-y-2">
                <a
                  href="mailto:gary@musicvideoproduction.guru"
                  className="text-xl text-gray-200 hover:text-white transition-colors"
                >
                  gary@musicvideoproduction.guru
                </a>
                <a
                  href="mailto:regulusfilms@themiamistudio.com"
                  className="text-xl text-gray-200 hover:text-white transition-colors"
                >
                  regulusfilms@themiamistudio.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-8 text-center">Special Offers</h2>
          <ul className="space-y-4 text-lg text-gray-700 max-w-2xl mx-auto">
            <li className="flex items-center justify-center">
              <Star className="w-6 h-6 text-yellow-500 mr-2" />
              Price match guarantee + 10% off any written quote
            </li>
            <li className="flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-500 mr-2" />
              Crypto payment accepted with bonus hours
            </li>
            <li className="flex items-center justify-center">
              <Globe className="w-6 h-6 text-blue-500 mr-2" />
              Custom packages for all budgets
            </li>
          </ul>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose Regulus Films?</h2>
          <ul className="space-y-3 text-lg text-gray-300">
            <li>✓ 200+ REAL 5-star Google reviews</li>
            <li>✓ 20+ years of professional experience</li>
            <li>✓ High-end equipment and professional crew</li>
            <li>✓ Worked with biggest names in business and entertainment</li>
            <li>✓ Worldwide service with Miami headquarters</li>
          </ul>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-6 text-center">Find Our Studio</h2>
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
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
