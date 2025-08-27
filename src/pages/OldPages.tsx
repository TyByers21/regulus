import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { ReviewsBanner } from "@/components/reviews-banner";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

// ===================== EXISTING PAGES ===================== //

// All Budgets Welcomed Page
export function AllBudgetsWelcomed() {
  const { ref: sectionRef, inView } = useScrollAnimation();

  return (
    <div className="min-h-screen">
      <HeroSection />

      <section
        ref={sectionRef}
        className={`py-16 max-w-5xl mx-auto px-4 transition-all duration-1000 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-4xl font-bold text-navy mb-6">
          All Budgets Welcomed – Miami Video Production
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          At <strong>Regulus Films</strong> and <strong>The Miami Studio</strong>, we believe that every artist and business deserves stunning video production, no matter their budget. Our philosophy is simple: creativity should never be limited by cost.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Whether you’re an independent artist, a startup, or a major brand, our team works with you to design a customized production plan that maximizes impact without breaking the bank.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Our transparent pricing ensures you know exactly what you’re getting, and our decades of experience mean you’ll always get high-quality results. We’re trusted by hundreds of clients worldwide through <strong>musicvideoproduction.guru</strong>.
        </p>

        <div className="text-center mt-8">
          <Button asChild size="lg" className="bg-miami-teal text-white hover:bg-miami-dark">
            <Link href="/contact">Request a Free Quote</Link>
          </Button>
        </div>
      </section>

      <ReviewsBanner />
      <Footer />
    </div>
  );
}

// Miami Best Music Video Production Company Trends Page
export function MiamiBestVideoTrends() {
  const { ref: sectionRef, inView } = useScrollAnimation();

  return (
    <div className="min-h-screen">
      <HeroSection />

      <section
        ref={sectionRef}
        className={`py-16 max-w-5xl mx-auto px-4 transition-all duration-1000 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-4xl font-bold text-navy mb-6">
          Miami’s Best Music Video Production Company – Trends & Insights
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          The music video industry in Miami is constantly evolving, and <strong>Regulus Films</strong> has remained at the forefront by embracing new trends, technology, and creative storytelling.
        </p>
        <h2 className="text-2xl font-semibold text-navy mt-8 mb-4">
          Current Trends in Music Video Production
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>High-concept visuals blending cinematic storytelling with music performance.</li>
          <li>Drone cinematography showcasing Miami’s vibrant cityscape and beaches.</li>
          <li>Immersive 3D visuals and creative green screen production.</li>
          <li>Behind-the-scenes content for fan engagement on social media.</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          At <strong>The Miami Studio</strong>, we combine these innovations with our proven production formula to deliver unforgettable music videos that stand out globally.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Discover more at <strong>musicvideoproduction.guru</strong> or connect with our creative team to explore how we can bring your next music video project to life.
        </p>

        <div className="text-center mt-8">
          <Button asChild size="lg" className="bg-purple-600 text-white hover:bg-purple-700">
            <Link href="/music-videos">View Music Videos</Link>
          </Button>
        </div>
      </section>

      <ReviewsBanner />
      <Footer />
    </div>
  );
}

// ===================== REFACTORED OLD PAGES ===================== //

// Color Grading
export function ColorGrading() {
  const { ref: sectionRef, inView } = useScrollAnimation();

  return (
    <div className="min-h-screen">
      <HeroSection />
      <section
        ref={sectionRef}
        className={`py-16 max-w-6xl mx-auto px-4 transition-all duration-1000 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-4xl font-bold text-navy mb-6">Color Grading</h1>

        {/* Badges Row */}
        <div className="flex flex-wrap items-center gap-4 mb-8 justify-center">
          <img
            src="https://musicvideoproduction.guru/wp-content/uploads/2019/02/UpCity-Badge-Transparent-BG-07-11-2018-1-e1550024650204.png"
            alt="Miami video production badge – professional videographers Miami"
            width={235}
            height={235}
            loading="lazy"
          />
          <img
            src="https://musicvideoproduction.guru/wp-content/uploads/2021/07/miami-video-production-companies.png"
            alt="Regulus Films – Miami video production company"
            width={225}
            height={235}
            loading="lazy"
          />
          <img
            src="https://musicvideoproduction.guru/wp-content/uploads/2021/07/Music-Video-Directors.png"
            alt="High end video companies in Miami – music video production services"
            width={234}
            height={234}
            loading="lazy"
          />
        </div>

        {/* Intro Copy */}
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Thank you for visiting our site! Here in this section you will find just a few examples of some color grading that we can provide to you to give your videos that extra punch. Did you know there is a difference between color correction and color grading? Color correction is usually done first because raw footage—say from a RED camera—tends to be over-saturated; levels must be balanced so the image matches what the human eye sees. Once blacks and whites are correct, other colors fall into place.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Color grading is the next step—this is where our colorist shapes the mood and visual style of your piece. While optional for realistic content, the right grade by the right team can heighten narrative and production value dramatically. If you’re looking for a <em>Miami video production company</em> that delivers cinematic results, call us at <strong>786-429-4511</strong>. We offer <em>music video production services</em>, brand films, and <em>corporate video production Miami</em> businesses trust.
        </p>

        {/* Full Before/After Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src="https://musicvideoproduction.guru/wp-content/uploads/2018/07/IMG_6161.jpg"
            alt="Color grading example 1 – Miami video production company"
            loading="lazy"
          />
          <img
            src="https://musicvideoproduction.guru/wp-content/uploads/2018/07/IMG_6162.jpg"
            alt="Color grading example 2 – professional videographers Miami"
            loading="lazy"
          />
          <img
            src="https://musicvideoproduction.guru/wp-content/uploads/2018/07/IMG_6163.jpg"
            alt="Color grading example 3 – Miami video production services"
            loading="lazy"
          />
          <img
            src="https://musicvideoproduction.guru/wp-content/uploads/2018/07/IMG_6164.jpg"
            alt="Color grading example 4 – cinematic video editing Miami"
            loading="lazy"
          />
          <img
            src="https://musicvideoproduction.guru/wp-content/uploads/2018/07/IMG_6165.jpg"
            alt="Color grading example 5 – creative post production Miami"
            loading="lazy"
          />
          <img
            src="https://musicvideoproduction.guru/wp-content/uploads/2018/07/IMG_6166.jpg"
            alt="Color grading example 6 – high quality video production Miami"
            loading="lazy"
          />
          <img
            src="https://musicvideoproduction.guru/wp-content/uploads/2018/07/IMG_6167.jpg"
            alt="Color grading example 7 – Regulus Films Miami"
            loading="lazy"
          />
          <img
            src="https://musicvideoproduction.guru/wp-content/uploads/2018/07/IMG_6168.jpg"
            alt="Color grading example 8 – Miami post production studio"
            loading="lazy"
          />
          <img
            src="https://musicvideoproduction.guru/wp-content/uploads/2018/07/IMG_6169.jpg"
            alt="Color grading example 9 – music video production services"
            loading="lazy"
          />
          <img
            src="https://musicvideoproduction.guru/wp-content/uploads/2018/07/IMG_6170.jpg"
            alt="Color grading example 10 – film production Miami"
            loading="lazy"
          />
          <img
            src="https://musicvideoproduction.guru/wp-content/uploads/2018/07/IMG_6171.jpg"
            alt="Color grading example 11 – Miami videographers"
            loading="lazy"
          />
          <img
            src="https://musicvideoproduction.guru/wp-content/uploads/2018/07/IMG_6157.jpg"
            alt="Color grading example 12 – professional video production Miami"
            loading="lazy"
          />
        </div>

        <div className="text-center mt-10">
          <Button asChild size="lg" className="bg-miami-teal text-white hover:bg-miami-dark">
            <Link href="/contact">Request a Color Grading Quote</Link>
          </Button>
        </div>
      </section>
      <ReviewsBanner />
      <Footer />
    </div>
  );
}


// Corporate Video Production Miami
export function CorporateVideoProductionMiami() {
  const { ref: sectionRef, inView } = useScrollAnimation();

  return (
    <div className="min-h-screen">
      <HeroSection />
      <section
        ref={sectionRef}
        className={`py-16 max-w-5xl mx-auto px-4 transition-all duration-1000 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-4xl font-bold text-navy mb-2">Corporate Video Production Miami</h1>
        <h1 className="text-2xl font-semibold text-navy mb-6">786-429-4511</h1>

        <div className="flex flex-wrap items-center gap-4 mb-8 justify-center">
          <img
            src="https://musicvideoproduction.guru/wp-content/uploads/2019/02/UpCity-Badge-Transparent-BG-07-11-2018-1-e1550024650204.png"
            alt="Miami video production badge – corporate video production Miami"
            width={235}
            height={235}
            loading="lazy"
          />
          <img
            src="https://musicvideoproduction.guru/wp-content/uploads/2021/07/miami-video-production-companies.png"
            alt="Regulus Films – Miami corporate video production company"
            width={225}
            height={235}
            loading="lazy"
          />
          <img
            src="https://musicvideoproduction.guru/wp-content/uploads/2021/07/Music-Video-Directors.png"
            alt="High end video companies in Miami"
            width={234}
            height={234}
            loading="lazy"
          />
        </div>

        <div className="prose prose-gray max-w-none">
          <div className="not-prose text-base md:text-lg text-gray-700 leading-relaxed space-y-4 mb-8">
            <div className="font-semibold text-xl">Corporate Video Examples</div>
            <p>
              Here on this page you will find a few examples of production that we can provide to you or your clients. We work with the best cinematographers in the industry to deliver a high-end, clean, and classy look that gets you recognition by your audience. Whether you are an advertising agency or a small to medium size business, our <em>professional videographers in Miami</em> have you covered. If you need a commercial video producer in Miami, call us today. To see our larger catalog, visit our{" "}
              <a href="https://vimeo.com/user27858759" target="_blank" rel="noopener noreferrer">Vimeo</a> or{" "}
              <a href="https://www.youtube.com/user/REGULUSRECORDS" target="_blank" rel="noopener noreferrer">YouTube</a>.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h1 className="text-xl font-semibold mb-2">Rethink Web Commercial</h1>
              <div className="relative w-full pt-[56.25%]">
                <iframe
                  className="absolute inset-0 w-full h-full rounded-xl"
                  src="https://player.vimeo.com/video/156696737"
                  title="Rethink Web Commercial – corporate video production Miami"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>

            <div>
              <h1 className="text-xl font-semibold mb-2">Macaroni Grill TV Commercial</h1>
              <div className="relative w-full pt-[56.25%]">
                <iframe
                  className="absolute inset-0 w-full h-full rounded-xl"
                  src="https://player.vimeo.com/video/156696736"
                  title="Macaroni Grill TV Commercial – corporate video production Miami"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>

            <div>
              <h1 className="text-xl font-semibold mb-2">Corporate Skit</h1>
              <div className="relative w-full pt-[56.25%]">
                <iframe
                  className="absolute inset-0 w-full h-full rounded-xl"
                  src="https://player.vimeo.com/video/156696735"
                  title="Corporate Skit – corporate video production Miami"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>

            <div>
              <h1 className="text-xl font-semibold mb-2">Off Commercial</h1>
              <div className="relative w-full pt-[56.25%]">
                <iframe
                  className="absolute inset-0 w-full h-full rounded-xl"
                  src="https://player.vimeo.com/video/156696734"
                  title="Off Commercial – corporate video production Miami"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>

            <div>
              <h1 className="text-xl font-semibold mb-2">NCI Shipping Web Commercial</h1>
              <div className="relative w-full pt-[56.25%]">
                <iframe
                  className="absolute inset-0 w-full h-full rounded-xl"
                  src="https://player.vimeo.com/video/156696733"
                  title="NCI Shipping Web Commercial – corporate video production Miami"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <Button asChild size="lg" className="bg-miami-teal text-white hover:bg-miami-dark">
            <Link href="/contact">Interested in getting some high end production done? Contact us here for more information!</Link>
          </Button>
        </div>
      </section>
      <ReviewsBanner />
      <Footer />
    </div>
  );
}

// Florida Video Production Company
export function FloridaVideoProductionCompany() {
  const { ref: sectionRef, inView } = useScrollAnimation();

  return (
    <div className="min-h-screen">
      <HeroSection />
      <section
        ref={sectionRef}
        className={`py-16 max-w-5xl mx-auto px-4 transition-all duration-1000 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-4xl font-bold text-navy mb-6">Florida Video Production Company</h1>

        <p className="text-lg text-center text-gray-800 mb-4 font-semibold">
          Regulus Films – Best Florida Video Production Company
        </p>

        <div className="text-lg text-gray-700 leading-relaxed space-y-4">
          <p>
            <strong>Best Florida Video Production Companies:</strong> Regulus Films is known for{" "}
            <a
              className="underline"
              href="https://musicvideoproduction.guru/music-video-production-miami"
              target="_blank"
              rel="noopener noreferrer"
            >
              Music Video Production
            </a>{" "}
            throughout the U.S. Many artists assume they can’t afford our services at first glance, but we can accommodate a wide range of budgets. Your first video matters—the first impression is everything—so don’t leave your project to a single camera operator. It takes a team to create beautiful, high-end, cinematic production. Our company is a coalition of experienced directors, cinematographers, producers, and makeup artists who have completed hundreds of projects in Florida and beyond.
          </p>

          <div className="relative w-full pt-[56.25%]">
            <iframe
              className="absolute inset-0 w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/WmyLnJ2a-3Q"
              title="Regulus Films Florida video production"
              loading="lazy"
              allowFullScreen
            />
          </div>

          <p>
            Our creativity and knowledge of <strong>video production</strong> sets us apart from other Florida video production companies. U.S. and international clients appreciate our flexible, creative, and affordable{" "}
            <a
              className="underline"
              href="https://musicvideoproduction.guru/miami-video-production-services/"
              target="_blank"
              rel="noopener noreferrer"
            >
              music video production services
            </a>
            . We deliver extraordinary results on time and on budget. If you’re seeking a trusted <em>Miami video production company</em> for brand films or <em>music video production services</em>, we’re here to help.
          </p>

          <p className="font-medium">Call Us Today At: 786-429-4511 for any music video production services at an affordable price!</p>
        </div>

        <div className="text-center mt-10">
          <Button asChild size="lg" className="bg-miami-teal text-white hover:bg-miami-dark">
            <Link href="/contact">Get a Free Florida Video Production Quote</Link>
          </Button>
        </div>
      </section>
      <ReviewsBanner />
      <Footer />
    </div>
  );
}
