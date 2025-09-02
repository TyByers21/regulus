import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { ReviewsBanner } from "@/components/reviews-banner";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { corporateVideos } from "@/data/videos";
import { VideoCard } from '../components/VideoCard';

// ===================== EXISTING PAGES ===================== //

// All Budgets Welcomed Page
export function AllBudgetsWelcomed() {
  const { ref: sectionRef, inView } = useScrollAnimation();

  return (
    <div className="min-h-screen pt-32">
      <section
        ref={sectionRef}
        className={`py-16 max-w-5xl mx-auto px-4 transition-all duration-1000 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-4xl text-center font-bold text-navy mb-6">
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
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Call Us Today At <strong>786-429-4511</strong>. We provide video production services and you can easily find us on google with keywords like Miami video Production | Video Production Miami | Miami video company | Miami video production services | video production fort lauderdale | film production companies in miami | Corporate video production miami | Video production companies in miami | Miami film production companies | Music video production miami | Best video companies in miami | Miami videographer | miami video productions .
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
    <div className="min-h-screen  pt-32">


      <section
        ref={sectionRef}
        className={`py-16 max-w-5xl mx-auto px-4 transition-all duration-1000 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-3xl text-center font-bold text-navy mb-6">
          Miami’s Best Music Video Production Company – Trends & Insights
        </h1>
        <h3 className="text-center text-2xl font-bold stroke-orange-700">Best Miami Music Video Production Company – Changing Video Shoot Trends</h3>
        <br />
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

        <p>For Miami Video Production, Visit us : https://musicvideoproduction.guru/miami-music-video-production/ </p>

        <p>For Corporate Video Production, Visit us : https://musicvideoproduction.guru/corporate-video-production/</p>

        <p>For Music Video Production, Visit us : https://musicvideoproduction.guru/miami-music-video-production/</p>
        <br/>
        <h1 className="text-3xl text-center font-bold text-navy mb-6">Creative and Stylish Cinematography At It's Finest.</h1>

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
    <div className="min-h-screen pt-32">

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
            src="/uploads/2019/02/UpCity-Badge-Transparent-BG-07-11-2018-1-e1550024650204.png"
            alt="Miami video production badge – professional videographers Miami"
            width={235}
            height={235}
            loading="lazy"
          />
          <img
            src="/uploads/2021/07/miami-video-production-companies.png"
            alt="Regulus Films – Miami video production company"
            width={225}
            height={235}
            loading="lazy"
          />
          <img
            src="/uploads/2021/07/Music-Video-Directors.png"
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
            src="/uploads/2018/07/IMG_6161.jpg"
            alt="Color grading example 1 – Miami video production company"
            loading="lazy"
          />
          <img
            src="/uploads/2018/07/IMG_6162.jpg"
            alt="Color grading example 2 – professional videographers Miami"
            loading="lazy"
          />
          <img
            src="/uploads/2018/07/IMG_6163.jpg"
            alt="Color grading example 3 – Miami video production services"
            loading="lazy"
          />
          <img
            src="/uploads/2018/07/IMG_6164.jpg"
            alt="Color grading example 4 – cinematic video editing Miami"
            loading="lazy"
          />
          <img
            src="/uploads/2018/07/IMG_6165.jpg"
            alt="Color grading example 5 – creative post production Miami"
            loading="lazy"
          />
          <img
            src="/uploads/2018/07/IMG_6166.jpg"
            alt="Color grading example 6 – high quality video production Miami"
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
    const { ref: portfolioRef, inView: portfolioInView } = useScrollAnimation();

  return (
    <div className="min-h-screen  pt-32">

      <section
        ref={sectionRef}
        className={`py-16 max-w-6xl text-center mx-auto px-4 transition-all duration-1000 ${
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
            
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
                            <VideoCard2 video={video} />
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
    <div className="min-h-screen  pt-32">

      <section
        ref={sectionRef}
        className={`py-16 max-w-6xl mx-auto text-center px-4 transition-all duration-1000 ${
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
              className="text-orange-500"
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
            Our creativity and knowledge of <strong>Video Production</strong> sets us apart from other Florida video production companies. U.S. and international clients appreciate our flexible, creative, and affordable{" "}
            <a
              className="text-orange-500"
              href="https://musicvideoproduction.guru/miami-video-production-services/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Music Video Production Services
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

// Music Video Production Company Atlanta
export function MusicVideoProductionCompanyAtlanta() {
  const { ref: sectionRef, inView } = useScrollAnimation();

  return (
    <div className="min-h-screen  pt-32">
      <section
        ref={sectionRef}
        className={`py-16 max-w-5xl mx-auto px-4 transition-all duration-1000 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-4xl text-center font-bold text-navy mb-6">
          Music Video Production Company Atlanta
        </h1>
<h2 className="text-center text-xl font-bold">Music Video Production Companies Atlanta – Hire #Regulus #Films Music Video Directors Atlanta-Call Us today for a Free Quote 786-262-5972</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          <strong>Regulus Films</strong> and <strong>The Miami Studio</strong> proudly extend our{" "}
          <em>music video production services</em> to Atlanta, GA. Our Atlanta music video
          production team delivers cinematic visuals, professional crews, and unmatched creativity.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          From concept to final cut, we bring the same award-winning expertise trusted in Miami to
          Atlanta artists and brands. Our portfolio includes music videos, commercials, and branded
          content filmed in Atlanta’s vibrant locations.
        </p>

     

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Atlanta Artist Spotlight Video</h3>
            <div className="relative w-full pt-[56.25%]">
              <iframe
                className="absolute inset-0 w-full h-full rounded-xl"
                src="https://player.vimeo.com/video/156696737"
                title="Atlanta music video production example"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        <h2 className="font-bold">About the Company</h2>
         <p>Welcome to Regulus Films, one of the leading creative <strong>production companies in Atlanta GA</strong>. We are here to fulfill your dreams by providing the trendy video production. There are lot of talented people who want to achieve success by creating music videos like Hollywood. Also there are some people who want to make their corporate videos to promote their business. Whether you are a small artist or a small business owner, we understand that at times you have budget constraints but at the same you don’t want to compromise with the quality of your video production because that will be a ladder for your success and your career growth. So we plan the budget keeping your constraints in mind and work closely as a team to deliver the best video production quality. We have a group of Directors, Producers, Cinematographers and Makeup artists, hence making us the <strong>top production company in Atlanta</strong>.Let Us Share Your Brand’s Story Through Our Creative, Cinematic Videos. Free Consultation. {" "}
            <a
              className="text-orange-500"
              href="https://musicvideoproduction.guru/"
              target="_blank"
              rel="noopener noreferrer"
            ><strong>Regulus Films</strong> </a>is one of the reputed video companies in Atlanta. We are <strong>#1 Studio in Atlanta for{" "}
            <a
              className="text-orange-500"
              href="https://musicvideoproduction.guru/"
              target="_blank"
              rel="noopener noreferrer"
            > Music Video Production.</a></strong></p>
         <h2 className="font-bold">Services -</h2>
         <ul className="list-disc list-outside ml-6 space-y-2">
         <li>We not only deal in <strong>Atlanta video production</strong> but also throughout the United States.</li>
         <li>We are only the <strong>production company in Atlanta</strong> that provide music or <strong>corporate videos</strong> with high quality, good production and affordable price.</li>
         <li>We have luxury cars, models, and yachts available for <strong>video production</strong>.</li>
         </ul>
          <p>We are known for our high end music video production services. We have worked with many artists and business owners to create their music videos and corporate videos. We have a team of experienced professionals who are passionate about their work and strive to deliver the best results. Our team is dedicated to making your vision a reality. We use the latest technology and equipment to ensure that your video is of the highest quality. We also offer a wide range of services including script writing, storyboarding, casting, location scouting, and post-production editing. We are committed to providing our clients with the best possible service and ensuring that they are completely satisfied with the final product.</p>

          <p>Whether you’ve got a project that’s ready to shoot or you’re starting from just a concept, we bring your vision to life. Creating a video for your brand or event can be daunting as there are so many steps involved, and, in some cases, you need someone to handle the whole thing from start to finish. You need not to worry because we are one stop <strong>Atlanta video production company</strong> which facilitates every phase of <strong>video production</strong>. You can rely on us and pick our creative brains for the <strong>best music video production Atlanta</strong>.</p>
          <p>We are passionate about {" "}
            <a
              className="text-orange-500"
              href="https://musicvideoproduction.guru/"
              target="_blank"
              rel="noopener noreferrer"
            >  Video Production</a> and rest assured that we will take your video to a level better than you ever imagined. Contact us right away for any <strong>music video production in Atlanta</strong> and leverage the creativity of <strong>#1 Atlanta production company</strong>. Get a custom {" "}
            <a
              className="text-orange-500"
              href="/video-production-miami-film-production-companies/"
              target="_blank"
              rel="noopener noreferrer"
            > corporate video production</a> quote within your budget. Hire what you need: full crew, casting, location , scouting and production manager. Call Today.</p>
        </div>

        <p className="text-lg text-gray-700 leading-relaxed mt-6">
          Call <strong>786-429-4511</strong> today or visit{" "}
          <strong>musicvideoproduction.guru</strong> to discuss your Atlanta music video project.
        </p>

        <div className="text-center mt-8">
          <Button
            asChild
            size="lg"
            className="bg-miami-teal text-white hover:bg-miami-dark"
          >
            <Link href="/contact">Request an Atlanta Quote</Link>
          </Button>
        </div>
      </section>

      <ReviewsBanner />
      <Footer />
    </div>
  );
}

// Music Video Production Company Los Angeles
export function MusicVideoProductionCompanyLosAngeles() {
  const { ref: sectionRef, inView } = useScrollAnimation();

  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <div className="container mx-auto pt-32 px-6 md:px-12 max-w-7xl">
        
        {/* Heading */}
        <h1 className="text-3xl text-center md:text-4xl font-bold mb-6">
          Music Video Production Company Los Angeles
        </h1>
        <p className="mb-6 text-lg text-center font-semibold text-blue-700">
          Call Us today for a Free Quote: 786-262-5972
        </p>

        {/* Embedded Video */}
                <div className="flex justify-center mb-8">
  <div className="w-full max-w-[640px] aspect-video rounded-lg shadow-md overflow-hidden">
    <iframe
      className="w-full h-full"
      src="https://player.vimeo.com/video/322817247"
      frameBorder="0"
      allow="autoplay; fullscreen"
      allowFullScreen
    ></iframe>
  </div>
</div>


        {/* Intro Paragraph */}
        <p className="mb-6 text-gray-700 leading-relaxed">
          <strong>Music Video Production Los Angeles</strong>:{" "}
          <a
            href="https://musicvideoproduction.guru/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Regulus Films
          </a>{" "}
          is a professional{" "}
          <strong>music video production company in Los Angeles</strong>{" "}
          providing visually stunning and engaging content that captures 
          the hearts of your audience. Our goal is to produce world-class 
          music videos while keeping budgets reasonable, making us the 
          perfect choice for projects of any size. Our talented crew 
          brings years of experience to music videos, short films, TV 
          commercials, and corporate videos. We’ll take your vision from 
          dream to reality with top-level production talent.
        </p>

        {/* Services Section */}
        <h2 className="text-2xl font-bold mb-4">Services</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          <li>
            We not only deal in <strong>video production LA</strong>, but also in 
            New York, Miami, Atlanta, and across the U.S.
          </li>
          <li>
            We are the only <strong>Los Angeles production company </strong> 
             that provides full production services from pre-production to 
            post-production at an affordable price.
          </li>
          <li>
            We offer luxury cars, models, and yachts to enhance your video 
            production.
          </li>
        </ul>

        {/* Full Service Section */}
        <p className="mb-6 text-gray-700 leading-relaxed">
          There are lot of things involved while creating videos and it would be challenging for you to handle all things from start to finish. Not a problem, we are truly a one stop shop for{" "}
          <strong>video productions Los Angeles</strong>, handling every 
          aspect of pre-production and post-production. Using the latest 
          software and equipment, we bring your vision to life with 
          creativity, teamwork, and technical expertise.
        </p>

        {/* Closing CTA */}
        <p className="mb-6 text-gray-700 leading-relaxed">
          Are you ready to work with the best{" "}
          <strong>Los Angeles production company</strong>? Let’s talk today 
          and delight your customers with professional, engaging video 
          content. Get a tailored{" "}
          <a
            href="https://musicvideoproduction.guru/miami-video-production/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            music video production quote
          </a>{" "}
          that fits your budget and experience why Regulus Films is the{" "}
          #1{" "}
          <a
            href="https://musicvideoproduction.guru/music-video-production-companies-in-miami/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            video production company in Los Angeles
          </a>
          .
        </p>
      </div>

      {/* Reviews & Footer */}
      <ReviewsBanner />
      <Footer />
    </div>
  );
}



// Miami Video Production
export function MiamiVideoProduction() {
  const { ref: sectionRef, inView } = useScrollAnimation();
  return (
    <div className="min-h-screen  pt-32">

      <section ref={sectionRef} className={`py-16 max-w-5xl mx-auto px-4 transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
       <section>
       <h1 className="text-4xl text-center font-bold text-navy mb-4">Miami Video Production</h1>
       <br/>
       <h1 className="text-2xl font-bold text-navy mb-4 text-center">Miami Video Production | Video Production Miami Like Regulus is Known For it’s Professionalism .</h1>
       <p className="font-bold">Miami Video Production, Video Production Miami | Video Production Company in Miami</p>
      <p className=" text-gray-700 leading-relaxed mb-4">
         – #Regulus #Films, <strong>Miami Video Production Company</strong> offers Music Video Production Services Miami, Florida. #RegulusFilms is one of Best #Miami #Video #Production #Companies|{" "}
        <a
          href="https://musicvideoproduction.guru/miami-video-production-company/"
          target="_blank"
          
          className="text-orange-500 hover:underline"
        >
          Miami Video Production
        </a>{" "}
        Company | Music #Video #Production #Companies #Miami | #Miami #Video #Production #Services
        | #Music #Video #Directors. We Specialize In High End Best Music Video Production that will
        surly get any artist seen by the big wigs in the industry.
      </p>

      <p>
        When making a video for music that you have created,{" "}
        <strong>
          <a
            href="https://musicvideoproduction.guru/music-video-companies/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:underline"
          >
            Music Video Production Companies
          </a>
        </strong>{" "}
        such as ours specialize in developing high quality video for the Internet and network
        broadcast. We also coverage live shows, video post production editing, and the writing
        treatments. Regulus Films is Known as one of the{" "}
        <strong>Best Music Video Production Companies in Miami</strong>.
      </p>

      <p>
        Music video creation is our passion and we consider it an art. As for any undertaking,
        creation of music videos starts with appropriate planning and design and the understanding
        of what our client vision is. A choice must be made regarding the kind theme, location,
        models and so much more and thats why we are experts in the creation of music videos.
        Depending on the type of music video being developed, music video companies such as ours
        determine the equipment, lights and crew which may be needed for shooting the video
        according to the clients needs and wants. When a person search for{" "}
        <a
          href="https://musicvideoproduction.guru/music-video-production-miami"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>Music Video Production Companies in Miami</strong>
        </a>
        .
      </p>

      <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg">
  <iframe
    src="https://player.vimeo.com/video/192165825"
    className="absolute top-0 left-0 w-full h-full"
    frameBorder="0"
    allowFullScreen
  />
</div>

      <p>
        They often find our company to be the best for their project. So when looking for{" "}
        <strong>
          <span style={{ textDecoration: "underline" }}>
            Music Video Production Companies in Miami
          </span>
        </strong>{" "}
        call Regulus Films and see what all the hypes about.
      </p>

      <p>
        Clients normally wonder why{" "}
        <span style={{ textDecoration: "underline" }}>
          Miami music production companies in Miami
        </span>{" "}
        is one of the first choices people make when wanting to do some great video production? It
        &#8217;s simple really lots of sunshine and the atmosphere of making it big!. Regulus Films
        has crews in New York City, Los Angeles, Dallas TX, Atlanta GA and of course Miami Fl .{" "}
        <strong>
          Since 2000, When a person mention- Music Video Production Companies, Regulus is at the top
          of the list.
        </strong>{" "}
        With many of our music videos making it to networks such as BET, MTV, VH1 and so many more
        its no wonder why we are the preferred choice of <b><i>indie and Major artist alike.</i></b>{" "}
        Now what are you waiting for? Dig deeper into our site and see what a real{" "}
        <a
          href="/music-video-companies/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>
            <span style={{ textDecoration: "underline" }}>Miami video production company</span>
          </strong>
        </a>{" "}
        looks like.
      </p>
<br/>
      <p>
        If you feeling overwhelmed by a stressful situation to find the best music video production
        company for your project, give your stress wings and let it fly away because we are the best
        to provide{" "}
        <strong>
          <a
            href="/miami-video-production-services/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:underline"
          >
            Miami video production services
          </a>
        </strong>
        . This is not something we say, behind this a huge list of clients with wide variety of
        music video production that makes us superior from other music video production companies.
        Being hard is not enough for any <strong>music video production</strong>; you must be smart
        enough to make your project appealing and viral. And each{" "}
        <strong>music video director</strong> working with us is smart enough to provide you such
        platform. Contact us now and make us as your first choice for best{" "}
        <strong>
          <a
            href="https://www.productionhub.com/directory/profiles/production-companies-video/us/florida/miami"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:underline"
          >
            video production Miami
          </a>
        </strong>
        .
      </p>
<br/>
      <h2 className="text-2xl font-bold text-navy mb-4">Top-Notch Miami Video Production Services – Regulus Films</h2>

      <p style={{ textAlign: "justify" }}>
        They say – “Actions speak louder than words” and being the top-notch{" "}
        <strong>Miami Video Production Company</strong>, we at Regulus Films sets the perfect
        example for this. We are creative commercial <strong>video production Miami</strong> experts
        providing <strong>video production services</strong> for any corporate video, commercial,
        music video, training video, real estate showcase video or marketing needs you may have. At
        Regulus <strong>Video Production Miami</strong>, the ardent cinematographers and filmmakers
        create top-notch media products with a cinematic look, giving you film quality without any
        hidden cost. Starting from the creative brainstorming followed by actual production to all
        the post production stuff, we stay with you until you are satisfied. Our job is to put full
        creativity behind every project and our mission is to satisfy you with the final video
        production.
      </p>

      <p style={{ textAlign: "justify" }}>
        According to the recent study, video is the fastest way to tell your audience how you can
        help them to grow their business. Also the videos have emerged as the best marketing tool to
        increase the ROI of business. So if you are not having a video yet, you are losing your
        business over time as videos connect, educate customers, and sell better than any other
        medium. Stop wondering and contact #Regulus #Films right now as we are full service award
        winning{" "}
        <a
          href="/miami-video-production-services/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>Miami video production company</strong>
        </a>
        . Once the <strong>video production</strong> is done, start telling your business stories to
        your customers and increase your business brand value.
      </p>

      <p style={{ textAlign: "justify" }}>
        We suggest you not to create video by your own and not to choose any amateur{" "}
        <strong>video production Miami service</strong> provider. People trust us because we are
        transparent and welcome any budget. <strong>Contact us today at +1 (786) 429-4511</strong>{" "}
        to find the best <strong>Miami Video Production</strong> package for your next{" "}
        <strong>video production</strong>.
      </p>

      <h3>Tips At Different Stages Of Music Video Production in Miami</h3>

      <p style={{ textAlign: "justify" }}>
        Video content plays an important role in your inbound marketing. According to the Google
        statistics, 90% of the internet traffic is expected to be video. To engage the audience on
        your videos can be challenging, considering one-third of the audience is not interested and
        leave the video after 30 seconds. Approximately one-third loses their interest while
        watching video and consequently leaves the video. So your video must be good enough to
        engage the audience with full interest and it’s not possible without the quality in the
        content, presentation, production and the valuable information. And it’s not possible
        without the professional music video production company in Miami.
      </p>
<br/>
<p className="font-bold">Pre-Production Tips:</p>
<ul className="list-disc list-outside ml-6 space-y-2">
  <li>Be creative and don’t try to copy others.</li>
  <li>Plan everything properly during this phase from writing a script to creating a storyboard.</li>
  <li>Cast the actors and actresses for your project very carefully.</li>
  <li>Use proper sets and don’t try to fool your audience by simulating the set.</li>
</ul>

<p className="font-bold mt-6">Production Tips:</p>
<ul className="list-disc list-outside ml-6 space-y-2">
  <li>Be careful while recording sounds because 90% of videos go wrong with poor sound recording quality.</li>
  <li>Set up the lights properly to avoid any unwanted shadows.</li>
  <li>Use a tripod to prevent camera movement.</li>
  <li>Make sure the camera is in focus.</li>
  <li>Obey the rule of thirds while shooting video.</li>
</ul>




      <p>
        Still amateur in music video production, hire the professional Miami video production
        companies like{" "}
        <a
          href="https://www.productionhub.com/profiles/details/216807"
          target="_blank"
          rel="noopener noreferrer"
        >
          Regulus Films
        </a>{" "}
        and get the quality video done without any stress.
      </p>

      <h4>
        Read Why Regulus Films &#8211;{" "}
        <a
          href="http://regulusfilms.weebly.com/blog/regulus-films-miami-video-production-company"
          target="_blank"
          rel="noopener noreferrer"
        >
          Miami Video Production
        </a>{" "}
        Company is best in Video Production.
      </h4>
    </section>
        <div className="text-center mt-8">
          <Button asChild size="lg" className="bg-miami-teal text-white hover:bg-miami-dark">
            <Link href="/contact">Get a Miami Quote</Link>
          </Button>
        </div>
      </section>
      <ReviewsBanner />
      <Footer />
    </div>
  );
}

import { CheckCircle } from "lucide-react";
import { title } from "process";
import { VideoCard2 } from "@/components/VideoCard2";

export default function MiamiVideoProductionMain() {
  return (
    <div
      id="main-content"
      className="wrap max-w-full ha-waypoint"
      data-animate-up="ha-header-hide"
      data-animate-down="ha-header-small"
    >
      <a className="ut-offset-anchor" id="to-main-content" />


      <section className="bg-gray-50 pt-32 py-16 ">
        <div className="container max-w-full mx-auto px-6 lg:px-12">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">
              Miami Video Production Company
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Regulus Films creates captivating music videos, commercials, and
              brand films that engage, inspire, and bring your vision to life.
            </p>
          </header>

          <div className="max-w-6xl mx-auto prose prose-lg text-gray-700">
            <h2>Looking for an expert Miami Video Production Company?
Miami Video Production Company | Miami Video Production | Video Production Miami | film Video Production Company Miami | Music Video Production Company</h2>
            <p>
              Regulus Films, a{" "}
              <a
                href="https://musicvideoproduction.guru/music-video-production-companies-in-miami/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 underline"
              >
                Music Video Production Company in Miami, FL
              </a>
              , is a group of ambitious and creative storytellers recognized as
              one of the <strong>best video production companies in Miami</strong>.
            </p>
            <p>
            Besides music videos, this <strong>Miami video production company</strong> as well creates commercials, brand films, and documentaries, to list a few, and justifies itself as a capable contender amongest <strong>Miami Film production companies</strong>. Given the attention to precision and detailed approach to videos, this {" "}
              <a
                href="/florida-video-production-company/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 underline"
              >
                music video production house in Miami, Fl
              </a> never fails to bring out the best of you in the films. They tie together all the elements which as per you could have never worked together, in order to turn your dream video into a reality.</p>

            <p>
              Beyond music videos, our team also produces commercials, brand
              films, and documentaries. With a detailed, cinematic approach, we
              transform concepts into stunning visual stories.
            </p>
            <p>In case you are looking for someone to make a music video of highest quality for you, you need to avail the <a
                href="https://musicvideoproduction.guru/miami-music-video-production/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 underline"
              >
                Miami music video production services
              </a> from Regulus Films.

Now the question arises that why should you go for Regulus Films from amongst many Miami <strong> video production companies in Miami?</strong></p>

            <h2>Why Choose Regulus Films?</h2>
            <ul className="space-y-3">
              {[
                "Cinematic and stylish cinematography",
                "Talented directors, cinematographers, and producers",
                "Flexible to accommodate all budgets",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2>How We Help Bring Your Vision to Life</h2>
            <ul className="space-y-3">
              {[
                "Scouting the perfect filming locations",
                "Green screen production for unique visuals",
                "Vehicle rentals for your sequences",
                "Casting talent and extras",
                "Professional costumes, makeup, and styling",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p>
              Whether your dream is a cinematic music video or a professional
              brand film, our team ensures every detail is perfected.
            </p>

            <p className="mt-8 font-semibold">
              Ready to start your project?{" "}
              <a
                href="https://musicvideoproduction.guru/contact-us/"
                className="text-blue-600 underline"
              >
                Contact us today
              </a>{" "}
              or call <span className="text-gray-900">786-429-4511</span>.
            </p>
          </div>
        </div>
      </section>

      <section
        id="contact-section"
        data-effect="fadeIn"
        className="animated contact-section dark py-12"
      >
        <div className="grid-container parallax-content text-center text-white">
          <h2 className="text-3xl font-bold mb-2">
            Creative and Stylish Cinematography At Its Finest
          </h2>
          <p className="text-lg">Call Us Today At: 786-429-4511</p>
        </div>
      </section>

      <ReviewsBanner />
      <Footer />
    </div>
  );
}


// Movies Page

export  function MoviesPage() {
  return (
    <div className="wrap ha-waypoint" id="main-content">
      <a className="ut-offset-anchor" id="to-main-content" />

      {/* Movies Section */}
      <section className="bg-gray-50 pt-32 py-32">
        <div className="container mx-auto max-w-5xl px-6 lg:px-12">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">Movies</h1>
            <p className="text-lg text-gray-600 max-w-5xl mx-auto">
              When you hire <strong>Regulus Films and Entertainment</strong>, you
              are hiring the best. In this section, you’ll find{" "}
              <span className="font-semibold">
                movies directed by our extremely talented team
              </span>
              .
            </p>
          </header>

          {/* Content */}
          <div className="max-w-5xl mx-auto prose prose-lg text-gray-700">
            <p>
              At Regulus Films, our passion lies in telling stories through
              captivating cinema. Each project is crafted with precision,
              creativity, and attention to detail — making sure your vision is
              translated beautifully on screen.
            </p>

            <p>
              From independent films to feature-length projects, our directors,
              cinematographers, and production crew deliver{" "}
              <strong>world-class results</strong> that stand out in both style
              and substance.
            </p>

            <p>
              Explore our portfolio below and see why Regulus Films is
              recognized as a leader in{" "}
              <span className="font-semibold">Miami film production</span>.
            </p>
<div className="entry-content">
      <p>
        When you hire Regulus Films and Entertainment you are hiring the best!
        Here in this section you will you find movies directed by the extremely
        talented Antwan Smith. Antwan is one of the best directors that we have
        employed with us so If you are looking for a great director that is easy
        to work with and can take your ideal and convey it to film then please
        do not hesitate to contact us today at 786-429-4511 ext 305.
      </p>

      <p>
        <iframe
          src="https://player.vimeo.com/video/255802338"
 className="w-full h-96"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </p>

      <p>
        <iframe
          src="https://player.vimeo.com/video/255813964"
        className="w-full h-96"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </p>

      <h1>
        <span style={{ color: "#000000" }}>
          Bloodline 2007
          <br />
          <iframe
            src="https://player.vimeo.com/video/255817309"
           className="w-full h-96"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </span>
      </h1>
    </div>
            
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-black text-white py-16 text-center">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold mb-4">
            Creative Cinematography at Its Finest
          </h2>
          <p className="text-lg">
            Ready to start your next movie project? Call us today at{" "}
            <span className="font-semibold">786-429-4511</span>
          </p>
        </div>
      </section>

      <ReviewsBanner />
      <Footer />
    </div>
  );
}



// Music Video Production
export function MusicVideoProduction() {
  const { ref: sectionRef, inView } = useScrollAnimation();
  return (
    <div className="min-h-screen">

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 max-w-5xl pt-32">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Music Video Production Companies In Miami</h1>
        {/* Video */}
        <div className="flex justify-center mb-8">
          <iframe
            className="w-full md:w-[640px] h-[360px] rounded-lg shadow-md"
            src="https://player.vimeo.com/video/202152748?title=0&byline=0&portrait=0"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Regulus Films – An Unbeatable Miami Video Production | Video Production Miami Company
        </h1>

        {/* Paragraph */}
        <p className="mb-6 text-gray-700 leading-relaxed">
          Anybody can craft a video today just like anyone can inscribe an ad or
          design a brochure. Knowing how to create a video delivering a
          significant message that resonates with your target viewers – that is
          what is valuable and that is what production should be paying for.
          Many{" "}
          <a
            href="https://musicvideoproduction.guru"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 underline"
          >
            Miami video production companies
          </a>{" "}
          are producing award-winning videos. The problem is that following
          awards they have no thought whether the video sold a product or
          service. Some awards even don’t bother with what was actually conveyed
          through the video.
        </p>

        <p className="mb-6 text-gray-700 leading-relaxed">
          Moreover, awards compel attention and traffic to a video but that
          traffic may or may not be your target audiences. The main objective for
          corporate video is to sell a client’s product, service, or idea.
          Hence, the most victorious videos are the ones that vend both ideas and
          products and are of the highest quality. Among various Miami Video
          Production Companies, Regulus Films is in eminence to offer the most
          powerful scheme to allure more and more clients at a simple pace. We
          will show the products and services in the way clients love to see and
          accept.
        </p>

        {/* Subheading */}
        <h2 className="text-2xl font-semibold mb-4">
          Video Production Miami | Video Production Companies in Miami | Miami Video Production
        </h2>

        <p className="mb-6 text-gray-700 leading-relaxed">
          We, the{" "}
          <a
            href="https://musicvideoproduction.guru"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 underline"
          >
            Miami Video Production Company
          </a>{" "}
          comprise a unique blend of talented innovative minds that have deep
          content, business-related, and broadcast production experience and are
          known for stylish Miami film cinematography. Our company is a
          combination of directors, cinematographers, film producers, and makeup
          artists that share a love of craftsmanship in the work we do.
        </p>

        <p className="mb-6 text-gray-700 leading-relaxed">
          We believe that persistent attention makes the distinction between
          good and great. We take care of all the changing video technology like
          hardware, software, and delivery systems that offer the best
          production. Through Regulus Films, clients acquire corporate video
          production that saves money while delivering high-quality results to
          reach business goals.
        </p>
      </div>

      {/* Reviews & Footer */}
      <ReviewsBanner />
      <Footer />
    </div>
  );
}


export function MusicVideoProductionMiami() {
  return (
    <div id="main-content" className="wrap ha-waypoint">
      <a className="ut-offset-anchor" id="to-main-content" />
      {/* Main Content */}
      <section className="bg-gray-50 pt-32 py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">
              Music Video Production Companies in Miami
            </h1>
          </header>

          <div className="max-w-6xl mx-auto prose prose-lg text-gray-700">
            <p className="text-center">
              <iframe
                src="https://player.vimeo.com/video/202152748?title=0&byline=0&portrait=0"
                className="w-full h-96"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </p>

            <h1 className="text-4xl font-bold text-navy text-center mb-4">
              Regulus Films – An Unbeatable Miami Video Production | Video
              Production Miami Company
            </h1>
            <p>
              Anybody can craft a video today just like anyone can inscribe an ad
              or design a brochure. Knowing how to create a video delivering a
              significant message that resonates with your target viewers – that
              is what is valuable and that is what production should be
              paying for. Many{" "}
              <a
                href="https://musicvideoproduction.guru"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:underline"
              >
                miami video production companies
              </a>{" "}
              are producing award-winning videos. The problem is that following
              awards they have no thought whether the video sold a product or
              service. Some awards even don’t bothered what was actually conveyed through the video. Moreover, awards compel attention and traffic to a video but that traffic may or may not be your target audiences. The main objective for corporate video is to sell client’s product, service or idea. Hence, the most victorious videos are the ones that vend both ideas and products and are of highest quality. Among various Miami Video Production Companies, Regulus films is in eminence to offer most powerful scheme to allure more and more clients at a simple pace. We will show the products and services in the way clients love to see and accept.
            </p>

            <h2>
              Video Production Miami | Video Production Companies in Miami |
              Miami Video Production Miami
            </h2>
            <p>
              We, the{" "}
              <a
                href="https://musicvideoproduction.guru"
                target="_blank"
                rel="noopener noreferrer"
                  className="text-orange-500 hover:underline"
              >
                Miami Video Production Company
              </a>{" "}
              comprise of a unique blend of talented innovative minds that have
              deep content, business-related, and broadcast production
              experience and is known for stylish Miami film cinematography. Our company is a combination of directors, cinematographers, film producers and makeup artist that have a shared love of craftsmanship in the work we do. We believe that a persistent attention makes the distinction between good and great. We will take care of all the changing video technology like hardware, software, and delivery systems that offer best production. Through Regulus Films, regulars acquire the corporate video production that will help them to save a lot and offer quality result to reach business goal.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-black text-white py-16 text-center">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold mb-4">
            Creative and Stylish Cinematography At Its Finest.
          </h2>
          <p className="text-lg">
            Call Us Today At: <span className="font-semibold">786-429-4511</span>
          </p>
        </div>
      </section>
      <ReviewsBanner />
      <Footer />
    </div>
  );
}

// Music Video Production Company New York
export function MusicVideoProductionCompanyNewYork() {
  const { ref: sectionRef, inView } = useScrollAnimation();

  return (
    <div className="min-h-screen pt-32">
      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* Heading */}
        <h1 className="text-3xl text-center md:text-4xl font-bold mb-6">
          Music Video Production Companies New York – Hire #Regulus #Films Music Video Directors in New York
        </h1>
        <p className="mb-6 text-center text-lg font-semibold text-blue-700">
          Call Us today for a Free Quote: 786-262-5972
        </p>

        {/* Embedded Video */}
        <div className="flex justify-center mb-8">
  <div className="w-full max-w-[640px] aspect-video rounded-lg shadow-md overflow-hidden">
    <iframe
      className="w-full h-full"
      src="https://player.vimeo.com/video/298485055"
      frameBorder="0"
      allow="autoplay; fullscreen"
      allowFullScreen
    ></iframe>
  </div>
</div>


        {/* Intro Paragraph */}
        <p className="mb-6 text-gray-700 leading-relaxed">
          Talent can be found all over the world, and many people wish to 
          climb the stairs of success through it. Artists are building their 
          own brands by creating unique music videos, while businesses often 
          look for corporate videos to advertise their products. Budgets can 
          sometimes be a barrier, but if you’re looking for an affordable{" "}
          <a
            href="https://musicvideoproduction.guru/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            <strong>Regulus Films</strong>
          </a>{" "}
          is the right stop for you in New York.
        </p>

        {/* About Section */}
        <h2 className="text-2xl font-bold mb-4">About the Company</h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Regulus Films is well known for cinematic and trendy filmmaking. 
          We understand that new artists or small business owners may not 
          have the budget for high-end productions, but maintaining good 
          quality is essential for growth. That’s why we plan budgets with 
          clients in mind and work as a team to deliver strong, professional 
          productions.
        </p>

        <p className="mb-6 text-gray-700 leading-relaxed">
          As a leading production company in the U.S., Regulus has become 
          recognized as a strong{" "}
          <strong>New York Music Video Production Company</strong>. With a 
          powerful combination of directors, producers, cinematographers, and 
          makeup artists, we make professional video production affordable.
        </p>

        <p className="mb-6 text-gray-700 leading-relaxed">
          Our <strong>Music Video Directors in New York</strong> are highly 
          skilled and can deliver quality productions on a variety of budgets.
        </p>

        {/* Services Section */}
        <h2 className="text-2xl font-bold mb-4">Services</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          We provide a wide range of services:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          <li>
            Branches across the U.S., so you can create music or corporate 
            videos in New York, Miami, Atlanta, or Texas.
          </li>
          <li>
            Skilled <strong>New York music video directors</strong> who 
            balance affordability with quality.
          </li>
          <li>
            Access to luxury cars, models, and yachts for video shoots.
          </li>
          <li>
            Full-service production: color grading, 3D graphics, and animation.
          </li>
        </ul>

        {/* Closing Paragraph */}
        <p className="mb-6 text-gray-700 leading-relaxed">
          If you’re planning a high-quality music or corporate video at an 
          affordable price, Regulus Films is the right place for you. We’ll 
          produce videos that fulfill your creative vision while staying 
          within your budget. Call us today for your next{" "}
          <a
            href="https://musicvideoproduction.guru/music-video-production-miami/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Music Video Production in Miami
          </a>{" "}
          , New York, or beyond: <strong>786-429-4511</strong>.
        </p>
      </div>

      {/* Reviews & Footer */}
      <ReviewsBanner />
      <Footer />
    </div>
  );
}


// Music Video Companies page

export  function MusicVideoCompaniesPage() {
  return (
    <div id="main-content" className="wrap ha-waypoint">
      <a className="ut-offset-anchor" id="to-main-content" />
      {/* Main Content */}
      <section className="bg-gray-50 py-16 pt-32">
        <div className="container mx-auto max-w-6xl px-6 lg:px-12">
          <header className="text-center  mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">
              Music Video Companies
            </h1>
            <p className="text-lg font-semibold text-gray-700">
              Regulus Films: Transforming Dreams To A Visual Reality
            </p>
          </header>

          <div className="max-w-5xl mx-auto prose prose-lg text-gray-700">
            <p className="text-center">
              <iframe
                className="w-full h-96 rounded-md"
                src="//www.youtube.com/embed/MedTAEaTcHw"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </p>

            <p>
              <strong>Regulus Films</strong> is a leading Video and Film Production
              Company in Miami that does music video production for all types of
              budgets, high or low. We are #1{" "}
              <a
                href="https://musicvideoproduction.guru/music-video-production-miami"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500"
              >
                music video production company
              </a>{" "}
              specialized in Corporate, Educational, TV, 3D Graphics, Animation
              and Music Video Production in Miami, Florida, New York and all
              across US.
            </p>

            <p>We believe in letting our work speak for itself!</p>

            <p>
              At Regulus, we have been creating all{" "}
              <a
                href="https://musicvideoproduction.guru/music-videos/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500"
              >
                types of music videos
              </a>
              , be it of any genre, we assist you with making your song into a
              film. Wondering how? We help you in some of the following ways:
            </p>

            <ul>
              <li>Doing the legwork for finding right locations for the shoot</li>
              <li>Using green screen for certain sequences</li>
              <li>Hiring talent extras</li>
              <li>Picking up costumes, makeup</li>
            </ul>

            <p>
              We work with a mission, that is, to be one of the finest music
              video companies and prepare the highest quality videos. Since we
              stand amongst premier music video production companies, we aim at
              pursuing excellence and working with integrity. From song to its
              development to the final product which is an amazing music video,
              we are by your side throughout.
            </p>

            <h2>Why Us?</h2>
            <p>
              A music video is generally created for promotion purposes – music
              or the artist, or both. Given that this{" "}
              <strong>Music Video Production Company</strong> like ours has been
              able to stand beyond other companies hands down. We can provide to
              you creative music video directors, high-end cameras, functional
              studios, lights and everything else from A-Z. We prove to be the
              best choice if you are looking for a{" "}
              <strong>
                Music Video Production Company in Florida, Miami or New York
              </strong>
              . What else do we have for you? Our love for music and impeccably
              produced music videos!
            </p>

            <h2>How Can Regulus Assist You?</h2>
            <p>
              Besides turning your dream into a finely made visual reality, we
              also host your video on social media platforms, such as YouTube,
              Vimeo and many others platforms. Our staff delivers your video in
              a variety of formats to fit your needs.
            </p>

            <h2>Benefits With Us?</h2>
            <p>
              There are many{" "}
              <a
                href="https://musicvideoproduction.guru/miami-video-production-services/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>Miami Video Production Companies</strong>
              </a>
              , online music production sites, professional recording studios
              and online recording studios, but what is distinct about us is
              that we give each of our clients that intimate relationship that
              you deserve.
            </p>

            <p>
              <strong>With us you get:</strong>
            </p>
            <ul>
              <li>Complete attention</li>
              <li>Guaranteed satisfaction</li>
              <li>Beneficial relationship</li>
              <li>Specialist music video director</li>
              <li>Trained and skilled staff</li>
              <li>State-of-the-art equipment</li>
              <li>Memorable and useful content</li>
              <li>Enjoyable experience</li>
            </ul>

            <p>
              <a
                href="https://musicvideoproduction.guru/music-video-directors-in-miami/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hire Music Video Director
              </a>
              , Just Call us at <strong>786-429-4511</strong> and speak to one of
              our producers today!
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-black text-white py-16 text-center">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold mb-4">
            Creative and Stylish Cinematography At Its Finest.
          </h2>
          <p className="text-lg">
            Call Us Today At: <span className="font-semibold">786-429-4511</span>
          </p>
        </div>
      </section>

      <ReviewsBanner />
      <Footer />
    </div>
  );
}

// Packages
export  function PackagesPage() {
  return (
    <div id="main-content" className="wrap ha-waypoint">
      <a className="ut-offset-anchor" id="to-main-content" />
      {/* Main Content */}
      <section className="bg-gray-50 pt-32 py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center space-y-6">
            {/* Badges */}
            <div className="flex flex-wrap justify-center gap-6">
              <img
                src="https://musicvideoproduction.guru/wp-content/uploads/2019/02/UpCity-Badge-Transparent-BG-07-11-2018-1-e1550024650204.png"
                alt="Miami Video Production Badge"
                width={250}
                height={250}
              />
              <img
                src="https://musicvideoproduction.guru/wp-content/uploads/2019/09/badge-2019-local-excellence-full-e1567895448794.png"
                alt="Music Video Directors Badge"
                width={250}
                height={250}
              />
            </div>

            <h1 className="text-4xl font-bold text-gray-900">786-429-4511</h1>

            <p className="max-w-3xl mx-auto text-lg text-gray-700">
              When you hire <strong>Regulus Films</strong> you are not just hiring
              some guy with a camera & his friend to help out — you are hiring a{" "}
              <strong>fully staffed professional production team</strong> where
              each person has a specific job to do in order to bring your video
              to its maximum potential...
            </p>

            <h2 className="text-2xl font-semibold text-blue-700">
              Only Production Company in Florida with over 200 REAL 5 Star Google
              Reviews! We Also Travel Worldwide!
            </h2>
            <h3 className="text-xl font-semibold text-green-700">
              We Have Many Packages To Choose From and Can Create One Within Your
              Budget. Call Us Today! 786-429-4511
            </h3>
            <h3 className="text-xl font-semibold text-rose-900">
              We Will Match Any Written Quote From a “Reputable Production
              Company” and Give You an Extra 10% Off.
            </h3>

            {/* Crypto Section */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-800">
                Along With Traditional Methods Of Payment, Regulus Films Also
                Accepts Crypto Currencies As Payment. Pay With Crypto and Get
                Hours Added To Your Shoot Free.
              </h4>
              <img
                src="https://musicvideoproduction.guru/wp-content/uploads/2019/01/Screen-Shot-2019-01-02-at-4.55.46-PM.png"
                alt="Companies that accept Crypto"
                className="mx-auto"
                width={725}
                height={97}
              />
            </div>
          </div>

          {/* Diamond Package */}
          <div className="mt-16 text-center space-y-6">
            <h1 className="text-3xl font-bold text-yellow-700">
              Diamond Music Video Examples
            </h1>
            <p>
              Diamond Quality Example — we have many examples of this quality:
            </p>
            <div className="space-y-8">
              <iframe
                src="https://player.vimeo.com/video/220217177"
                width="560"
                height="315"
                frameBorder="0"
                allowFullScreen
                className="mx-auto"
              ></iframe>
              <iframe
                src="https://player.vimeo.com/video/213939736"
                width="560"
                height="315"
                frameBorder="0"
                allowFullScreen
                className="mx-auto"
              ></iframe>
            </div>
            <p>
              Different props, location, and talent will cause the budget to
              fluctuate. Please call us for more info.
            </p>
          </div>

          {/* Platinum Package */}
          <div className="mt-16 text-center space-y-6">
            <h1 className="text-3xl font-bold text-yellow-700">
              Platinum Music Video Examples
            </h1>
            <h2 className="text-2xl font-semibold text-red-600">
              *** Our Most Popular Package ***
            </h2>
            <div className="space-y-8">
              <iframe
                src="https://player.vimeo.com/video/216103631"
                width="560"
                height="315"
                frameBorder="0"
                allowFullScreen
                className="mx-auto"
              ></iframe>
              <iframe
                src="https://player.vimeo.com/video/95622524"
                width="560"
                height="315"
                frameBorder="0"
                allowFullScreen
                className="mx-auto"
              ></iframe>
            </div>
            <p>
              Different props, location, and talent will cause the budget to
              fluctuate. Please call us for more info.
            </p>
          </div>

          {/* Gold Package */}
          <div className="mt-16 text-center space-y-6">
            <h1 className="text-3xl font-bold text-yellow-700">
              Gold Music Video Examples
            </h1>
            <h2 className="text-2xl font-semibold text-red-600">
              *** Our 2nd Most Popular Package ***
            </h2>
            <div className="space-y-8">
              <iframe
                src="https://player.vimeo.com/video/265839882"
                width="560"
                height="315"
                frameBorder="0"
                allowFullScreen
                className="mx-auto"
              ></iframe>
              <iframe
                src="https://player.vimeo.com/video/268820264"
                width="560"
                height="315"
                frameBorder="0"
                allowFullScreen
                className="mx-auto"
              ></iframe>
            </div>
            <p>
              Different props, location, and talent will cause the budget to
              fluctuate. Please call us for more info.
            </p>
          </div>

          {/* Silver Package */}
          <div className="mt-16 text-center space-y-6">
            <h1 className="text-3xl font-bold text-yellow-700">
              Silver Music Video Examples
            </h1>
            <div className="space-y-8">
              <iframe
                src="https://player.vimeo.com/video/218561883"
                width="560"
                height="315"
                frameBorder="0"
                allowFullScreen
                className="mx-auto"
              ></iframe>
              <iframe
                src="https://player.vimeo.com/video/219622672"
                width="560"
                height="315"
                frameBorder="0"
                allowFullScreen
                className="mx-auto"
              ></iframe>
            </div>
            <p>
              Different props, location, and talent will cause the budget to
              fluctuate. Please call us for more info.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-black text-white py-16 text-center">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold mb-4">
            Creative and Stylish Cinematography At Its Finest.
          </h2>
          <p className="text-lg">
            Call Us Today At: <span className="font-semibold">786-429-4511</span>
          </p>
        </div>
      </section>

      <ReviewsBanner />
      <Footer />
    </div>
  );
}

//Phantom Camera

export function PhantomCameraPage() {
  return (
    <> 
      {/* Main Content */}
      <main className="container pt-40 mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto">
          {/* Video */}
          <div className="aspect-video w-full mb-8">
            <iframe
              src="https://player.vimeo.com/video/17600290?title=0&byline=0&portrait=0&color=ff0179"
              width="640"
              height="360"
              frameBorder="0"
              allowFullScreen
              className="w-full h-full"
              title="Phantom Flex 2.5K Demo"
            />
          </div>

          {/* Title */}
          <h1
            className="text-center text-3xl md:text-4xl font-bold mb-6"
            style={{ color: "#cd9b1d" }}
          >
            The Phantom Flex 2.5K
          </h1>

          {/* Body */}
          <div className="prose max-w-none">
          
            <p>
              The Phantom Flex 2.5k is a state of the art digital cinematic
              camera that delivers unmatched flexibility and quality imagery in
              high speed capture. This revolutionary camera can shoot anywhere
              between 5 frames per second (fps) to more than 10,750 (fps). The
              Phantom Flex provides two different user customized shooting modes
              which can be changed to the shooting environment.
            </p>

            <p>
              In standard mode, the Phantom Flex is similar to just about any
              other Phantom Digital camera. However, it is a powerhouse with the
              capability to shoot resolutions up to 2560×1600 pixels from 10 fps
              up to 1,455 fps. As the resolution goes down, the maximum speed
              increases with speeds and resolutions up to 25,760 fps and
              1920×1080.
            </p>

            <p>
              In Phantom HQ Mode, the camera delivers higher dynamic range, low
              noise, repeatable shots at all settings, electronic image stability
              for stable blacks, and repeatable shots that don’t require pre-shot
              black references. The Phantom Flex supports a wide variety of
              workflows including video, raw digital, and hybrid workflows to
              provide maximum flexibility and control.
            </p>

            {/* Package Includes */}
            <h2 className="mt-10">Phantom Flex 2.5K Camera Package Includes:</h2>
            <ul className="list-disc pl-6">
              <li>Phantom Flex 2K Body featuring 32GB internal RAM</li>
              <li>Canon and PL Mount</li>
              <li>A Certified Phantom Tech</li>
              <li>512 Gb Cinemag</li>
              <li>Phantom PCU2 Wireless Control Unit – Bluetooth</li>
              <li>Anton Battery Hytron Power System (4 Batteries and Charger)</li>
              <li>Arri Bridgeplate &amp; Phantom Bottom Plate (15mm and 19mm)</li>
              <li>Matte Box and Filter Set (IR, ND)</li>
              <li>
                Portable Handheld Package – Riser, Shoulder Mount, Rail System
              </li>
              <li>Follow Focus (ARRI or REDROCK)</li>
              <li>Phantom Power Supply</li>
              <li>10GB/Sec Cinemag Reader</li>
              <li>Dedicated Apple Computer and Thunderbolt Transfer System</li>
              <li>7 Inch SMALL HD SDI Monitor</li>
              <li>17 Inch SDI Panasonic Monitor</li>
              <li>Sachtler Tripod</li>
            </ul>

            {/* Camera Overview */}
            <h2 className="mt-10">Camera Overview:</h2>
            <ul className="list-disc pl-6">
              <li>35mm depth-of-field</li>
              <li>35mm field-of-view at 2560×1440</li>
              <li>2.5K RAW Capture — Up to 2,560fps at 1920×1080</li>
              <li>12-bit pixel depth — 800 ISO rating</li>
              <li>
                HQ Mode provides ultimate image stability under changing shooting
                conditions
              </li>
              <li>
                Internal mechanical shutter for hands-free and remote Black
                Balances
              </li>
            </ul>
          </div>
        </article>
      </main>

      {/* Reviews & Footer */}
      <ReviewsBanner />
      <Footer />
    </>
  );
};

export function RedDragonPage(){
  return (
    <>   
      {/* Main Content */}
      <main className="container mx-auto pt-32 px-4 py-12">
        <article className="prose max-w-5xl mx-auto">
          {/* Video */}
          <div className="aspect-video w-full mb-8">
            <iframe
              src="https://player.vimeo.com/video/104575759?title=0&byline=0&portrait=0&color=ff0179"
              width="560"
              height="315"
              frameBorder="0"
              allowFullScreen
              className="w-full h-full"
              title="RED DRAGON Rentals"
            />
          </div>

          <p>
            <strong>RED DRAGON Rentals – In Miami Florida USA</strong>
          </p>

          <p>
            Every 6K frame is a 19 megapixel RAW image, which is up to 9x more
            pixels than 1080p HD. The amount of picture detail found in a 6K
            image goes beyond that of 35mm, comparing only to 65mm in image
            density. This means more precise VFX plates, reframing flexibility,
            and less aliasing artifacts and moiré. Even when outputting 6K
            footage to 4K or HD, your images will be cleaner and crisper
            compared to those captured at lower resolutions. When it comes to
            resolution, bigger is better.
          </p>

          <p>
            Our RED DRAGON Rental comes with everything a professional DP or
            Cinematographer will need for a shoot. Plus a number of add-ons if
            required. We also have the connections to provide any prime lens set
            or zoom lens you may need on a shoot. Simply Inquire.
          </p>

          <p>
            Anamorphic Lenses + Leica lenses + MOVI M10 + Wireless Monitoring +
            Wireless FF + Arri Superspeeds
          </p>
          <p>
            If you are interested in renting or using us to shoot on this
            camera, contact us for pricing today.
          </p>

          {/* Production Package */}
          <h2 className="mt-10">Production Package Includes:</h2>
          <ul className="list-disc pl-6">
            <li>RED DRAGON-X w/ PL Mount or Canon EF Mount</li>
            <li>SONY OLED 17 inch Pro Director’s Monitor w/ Stand</li>
            <li>Matthews High Hat</li>
            <li>Touch LCD (5.6 inch) w/ Camera Hood</li>
            <li>ARRI LMB-25 Clamp On Matte Box – 3-filter holder</li>
            <li>6 RED VOLT Batteries with 2 Chargers</li>
            <li>REDMOTE</li>
            <li>IR/ND Filters 0.9, 1.2, 1.5 + TRUECUT IR Filter</li>
            <li>2 × 256 GB SSD Cards w/ SSD Reader</li>
            <li>Sachtler 20 – 100mm Ball</li>
            <li>ARRI FF4 Follow Focus</li>
            <li>
              RED BRICK Battery Package w/ Battery Mount, 2 RED Bricks, Charger,
              AC Power
            </li>
            <li>RED Handheld Rig with Carbon Fiber Rail Set</li>
            <li>RED Side Handle (DSMC)</li>
            <li>Sachtler Fluid Head Tripod – 3 Stage</li>
            <li>RED EVF w/ Zacuto Mount</li>
          </ul>

          <p>
            <em>
              1st AC, 2nd AC, and DIT available upon request –
              RegulusFilms@TheMiamiStudio.com
            </em>
          </p>

          {/* Additionals */}
          <h2 className="mt-10">Additionals with RED DRAGON Rental:</h2>
          <ul className="list-disc pl-6">
            <li>7 inch SMALLHD Monitor</li>
            <li>
              Arri Super Speed Lens Set F1.3 (18mm – 25mm – 35mm – 50mm – 85mm)
            </li>
            <li>Wireless Video System (3 receivers, 1 Transmitter)</li>
            <li>REDROCK Swingaway Matte Box – 2 Filter Holder</li>
            <li>
              Leica R Lens Set – Canon Mount / 80mm Fronts / Focus Gears
              (28mm–135mm)
            </li>
            <li>
              ServiceVision FIZ “Scorpio” Remote Wireless Follow Focus (3
              motors)
            </li>
            <li>KOWA Anamorphic Lens Set – (40mm, 50mm, 75mm, 100mm)</li>
            <li>MOVI M10 Setup – Full Package</li>
            <li>
              REDROCK MicroRemote Wireless Follow Focus Kit with Heden Motor
            </li>
            <li>
              Wireless Video System – With Director’s Monitor Yoke and AC/Focus
              Puller Monitor Kit
            </li>
            <li>Production Car Mount</li>
            <li>RED Zoom 18–85mm T2.8</li>
          </ul>

          <p>
            * Other lens options available <br />
            ** Crew and full Services Available — Director of Photography,
            Camera Operators, Directors, Producer, DIT, AC and Production
            Assistant available upon request!
          </p>

          {/* About */}
          <h2 className="mt-10">About the RED DRAGON</h2>
          <p>
            Shooting at 6K resolution and RAW format, armed with the 6K RED
            DRAGON sensor, you can easily capture over 9x more pixels than HD
            alone. Unrivaled detail and impressive native exposure eclipse 35mm
            film in both latitude and image density. Industry leading specs
            distinguish the EPIC DRAGON as a model for image innovation, helming
            the evolution of digital cinema technology. Call Us or email us to
            Rent the RED DRAGON Today.
          </p>
        </article>
      </main>

      {/* Reviews & Footer */}
      <ReviewsBanner />
      <Footer />
    </>
  );
};

// Miami Video Production Services

export function MiamiVideoProductionServices()  {
  return (
    <div className="flex pt-32 text-center flex-col min-h-screen">
      {/* Main Content */}
      <main className="flex-1 container mx-auto px-6 py-12 prose prose-lg max-w-6xl">
      <h1>Miami Video Production Services</h1>
      <h2>Miami Video Production | Miami Video Production Services – Regulus Films</h2>
        <p>
          Regulus Films –{" "}
          <a
            href="http://musicvideoproduction.guru/miami-music-video-production/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:underline"
          >
            Miami video production company
          </a>{" "}
          that puts full creativity, talent, experience and passion behind every
          project.
        </p>

        <p>
          Regulus Films is a film &amp; Video Production Company located in
          Miami, Florida with a focus in Commercials, TV commercials, Business
          Videos.
        </p>

        <h4>How Regulus Films, #1 Miami Video Production Company help your business?</h4>
        <p>
          You can’t deny the fact that videos create a drastic effect on human
          mind. Different gestures contain a wealth of information you want to
          communicate to someone. Video enables you to tell your story OR
          services to your customers in a much simpler way. Even according to a
          research video creates more than 70% impact to the customer’s mind.
          It’s only a video which can create a lasting effect on potential
          customers.
        </p>

        <p>
          Having only a video can’t help you to reach your customers. YouTube is
          most widely used after Google, which means you can target your
          potential customers from here. So once you are done with your video,
          post it on YouTube. After publishing the video on YouTube, optimize it
          with the help of digital marketing company to place it on the top of
          the Google so that customers can find you easily.
        </p>

        <p>
          Regulus Films, #1{" "}
          <a
            href="http://musicvideoproduction.guru/music-video-production-companies-in-miami/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:underline"
          >
            Miami Video Production Company
          </a>{" "}
          is ready to help you to tell your story to your customers.
        </p>

        {/* Embedded YouTube Video */}
        <div className="my-8 flex justify-center">
          <iframe
            src="//www.youtube.com/embed/uv8ukq9hrfU"
         
            frameBorder="0"
            allowFullScreen
            className="rounded-xl  h-screen w-full shadow-lg"
          ></iframe>
        </div>

        <p>
          <a
            href="http://musicvideoproduction.guru/music-video-directors-in-miami/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:underline"
          >
            Music Video Directors in Miami
          </a>{" "}
          | Regulus Films | Music Video Directors | Music Video Directors in
          Miami
        </p>

        <p>
          Regulus Films is one of the best leading production companies when it
          comes to music{" "}
          <a
            href="http://www.wattpad.com/80446626-regulus-films-miami-music-video-production-company"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:underline"
          >
            video production Miami
          </a>
          .
        </p>

        <p>
          <strong>Regulus Films</strong> – Video Production Miami | Miami Video
          Production |{" "}
          <a
            href="http://musicvideoproduction.guru/music-video-production-miami/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:underline"
          >
            Music Video Production Companies
          </a>{" "}
          | Corporate Video Production Miami | Video Production Companies in
          Miami. Contact{" "}
          <a
            href="http://musicvideoproduction.guru/regulus-films/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:underline"
          >
            Regulus Films
          </a>{" "}
          now for <strong>affordable Miami video production</strong> and start
          promoting your business! Call <strong>786-429-4511</strong> Now!
        </p>
      </main>

      {/* Reviews Banner */}
      <ReviewsBanner />

      {/* Footer */}
      <Footer />
    </div>
  );
};

// Music Video Directors In Miami

export  function MusicVideoDirectorsMiamiPage() {
  return (
    <div className="flex pt-32 flex-col min-h-screen">
       {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12 prose prose-lg">
      <h1 className="text-4xl font-bold text-center">Music Video Directors in Miami</h1>

      <h2 className="text-center font-bold">Affordable Music Video Directors in Miami-
Call Us today for a Free Quote 786-429-4511</h2>
        <h2 className="text-md">MYTH #1: Film Video Production is Expensive.</h2>
        <p className="">
          Incorrect! Regulus Films has many different packages that can fit any
          budget large or small.
        </p>

        <h2 className="text-md">
          MYTH #2: You need to live near Hollywood, New York, or London, to work
          with a Music Video Director.
        </h2>
        <p>
          Incorrect! Regulus Films is a traveling crew. We travel all around the
          United States for clients who can’t get to Miami. Our{" "}
          <span className="underline">best music video directors in Miami</span> often
          go directly to the artist’s location to create a visual masterpiece.
          <strong> Music Video Directors in Miami</strong> come from all over the world work with Regulus because of our
          international reputation.
        </p>

        <img
          src="/uploads/2014/08/Screen-Shot-2014-09-11-at-1.00.39-PM.png"
          alt="Music Video Directors in Miami"
          className="rounded-2xl shadow-lg mx-auto my-8"
        />

        <h2 className="text-md">
          MYTH #3: Music Video Director production is a hopeless business to
          break into.
        </h2>
        <p>
          Incorrect! If you’re looking to be a Video Director, go for it! With a
          little creativity and determination, you can do it. If not, Regulus
          Films is here to do the hard work for you. We’re a coalition of some
          of the best{" "}
          <span className="underline">music video directors</span> in the
          industry.
        </p>

        <div className="aspect-w-16 aspect-h-9 my-8">
          <iframe
            src="https://player.vimeo.com/video/286964151"
            className="w-full h-96 rounded-lg"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>

        <h2 className="text-md">MYTH #4: Music Production is very hard to understand.</h2>
        <p>
          Incorrect! Everything feels difficult at first, but at Regulus we’re
          happy to answer any and all questions about music video production.
          Remember: a true <strong>Music Video Director</strong> keeps an open
          mind and thinks outside the box. That’s why we’re well known in the
          marketplace for creative and stylish productions.
        </p>

        <img
          src="https://musicvideoproduction.guru/wp-content/uploads/2014/08/Screen-Shot-2014-09-11-at-12.58.16-PM.png"
          alt="Music Video Directors in Miami"
          className="rounded-2xl shadow-lg mx-auto my-8"
        />

        <p>
          YES! More than ever, there’s a demand for{" "}
          <a
            href="https://musicvideoproduction.guru/music-video-production-miami/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:underline"
          >
            Miami music video production
          </a>
          . This creates a fantastic opportunity for creative, up-and-coming
          directors. The importance of originality and quality work is greater
          now than ever before.
        </p>
      </main>

      {/* Reviews */}
      <ReviewsBanner />

      {/* Footer */}
      <Footer />
    </div>
  );
}


//Music Video Production Companies Miami

export  function MusicVideoProductionCompanies() {
  return (
    <div className="flex pt-32 flex-col min-h-screen">
         {/* Main Content */}
      <main className="flex-1 bg-white py-12">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <h1 className="text-4xl text-center md:text-4xl font-bold mb-6">
            Music Video Production Companies Miami
          </h1>
          <h1 className="text-2xl text-center font-bold mb-6">
            Choosing The Best <strong>Music Video Production Miami</strong> Companies
          </h1>

          <p className="mb-6 font-semibold">
            After you’ve finished your due diligence in the searching phase, it’s
            time to hire a capable and creative Music Video Production Company to
            execute your vision.
          </p>

          {/* YouTube Video */}
          <div className="flex justify-center mb-8">
            <iframe
              className="w-full h-96 rounded-lg shadow-md"
              src="//www.youtube.com/embed/MUT_yPPcdvs"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>

          <p className="mb-6">
            You should locate an organization that not only comprehends your
            vision, but also can take your thoughts into a top-notch degree
            through today’s top technology and expertise. Try to find an
            organization that can provide you more than just a single cameraman
            calling himself a company.{" "}
            <strong>Regulus Films</strong> is a group of skillful and creative
            employees using the newest techniques in editing and{" "}
            <a
              href="https://musicvideoproduction.guru/miami-music-video-production/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600"
            >
              Music Video Production Miami
            </a>{" "}
            technology.
          </p>

          <p className="mb-6">
            There have already been many new improvements in video editing, video
            capture technology, and ways that video is delivered such as
            interactive videos online.
          </p>

          {/* Image with caption */}
          <figure className="mb-8 text-center">
            <img
              src="https://musicvideoproduction.guru/wp-content/uploads/2014/08/Screen-Shot-2014-09-11-at-1.04.11-PM.png"
              alt="Music Video Production Miami, Fl"
              className="rounded-lg shadow-lg mx-auto"
            />
            <figcaption className="text-sm text-gray-600 mt-2">
              Music Video Production Miami, Fl
            </figcaption>
          </figure>

          {/* Bulleted List */}
          <ul className="list-disc pl-8 space-y-4 mb-8">
            <li>
              <strong>
                Below are a few ideas to keep in mind when seeking out the best 
                {" "}<u>Film Production Miami</u> Company to work with:
              </strong>
            </li>
            <li>
              Select a company that you trust and enjoy working with.{" "}
              <strong>Music Video Production Miami</strong> is a creative
              process—find a team you love collaborating with.
            </li>
            <li>
              <strong>
                Look for a firm knowledgeable about the newest developments in{" "}
                <a
                  href="https://musicvideoproduction.guru/miami-music-video-production/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-600"
                >
                  Video Production Miami
                </a>
                .
              </strong>{" "}
              These improvements may save you time and money while helping your
              video stand out.
            </li>
            <li>
              <strong>Review their past work and track record.</strong> Even if
              their style doesn’t perfectly match yours, ensure they can adapt to
              your vision.
            </li>
            <li>
              <strong>
                Work with a company experienced in broadcasting videos.
              </strong>{" "}
              They should understand your marketing goals and audience, and
              reflect that in your video.
            </li>
            <li>
              <strong>Discuss budget openly.</strong> Don’t just choose the
              cheapest option—quality matters when your brand’s reputation is at
              stake.
            </li>
          </ul>

          {/* Second Image with caption */}
          <figure className="mb-8 text-center">
            <img
              src="https://musicvideoproduction.guru/wp-content/uploads/2014/08/Screen-Shot-2014-09-11-at-1.00.39-PM.png"
              alt="Miami Music Video Production Companies"
              className="rounded-lg shadow-lg mx-auto"
            />
            <figcaption className="text-sm text-gray-600 mt-2">
              Miami Music Video Production Companies
            </figcaption>
          </figure>

          <p className="mb-6">
            There are several factors to consider when selecting the right{" "}
            <span className="underline">Music Video Production Company</span>.
            Once you find the proper fit, the process flows smoothly—and you’ll
            end up with a powerful and engaging video. When we say “they,” we
            mean <strong>Regulus Films and Entertainment</strong>!
          </p>
        </div>
      </main>

      {/* Reviews + Footer */}
      <ReviewsBanner />
      <Footer />
    </div>
  );
}

// Video Production Miami Film Production Companies
// Film Production Companies Page
export function FilmProductionCompanies() {
  const { ref: sectionRef, inView } = useScrollAnimation();

  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <div className="container pt-32 mx-auto px-6 md:px-12 max-w-5xl">
        {/* Heading */}
        <h1 className="text-4xl text-center md:text-4xl font-bold mb-6">
          Video Production – Miami Film Production Companies
        </h1>
        <h1 className="text-2xl text-center md:text-2xl font-bold mb-6">
          Best Film Production Companies in Miami
        </h1>

        {/* Intro Paragraph */}
        <p className="mb-6 text-gray-700 leading-relaxed">
          Amusement comes in many different forms, and in every genre of 
          entertainment, there are two groups of individuals: the{" "}
          <strong>Miami Film Video Production companies</strong> and the 
          consumer audience. The regular crowd member will judge the picture 
          they see based on memories of pain, pleasure, and feelings, while 
          acknowledging unique performers they’ve seen before. Yet, even the 
          best performer is just one part of what makes a truly satisfying 
          entertainment experience.
        </p>

        {/* Embedded Video */}
        <div className="flex justify-center mb-8">
          <iframe
            className="w-full h-96 rounded-lg shadow-md"
            src="https://www.youtube.com/embed/MUT_yPPcdvs"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        {/* Paragraphs */}
        <p className="mb-6 text-gray-700 leading-relaxed font-semibold">
          I am not attempting to downplay the need for the performer. Anyone 
          who has acted in live theatre will tell you how essential the players are.
        </p>

        <p className="mb-6 text-gray-700 leading-relaxed">
          <strong>Film production companies in Miami</strong> are the 
          performers, but there are also numerous supporting roles: set 
          designers, costume creators, and makeup artists. While these people 
          prepare everything before the curtain rises, once the performance 
          begins, it’s the performer who must carry the show.
        </p>

        {/* Image with Caption */}
        <div className="my-8 text-center">
          <a href="https://musicvideoproduction.guru/wp-content/uploads/2018/09/log-transparent-background-1024x751.png">
            <img
              src="https://musicvideoproduction.guru/wp-content/uploads/2018/09/log-transparent-background-1024x751.png"
              alt="Miami film production companies"
              className="mx-auto rounded-lg shadow-md w-[443px] h-[325px] object-contain"
            />
          </a>
          <p className="text-sm text-gray-600 mt-2">
            <a
              href="https://musicvideoproduction.guru/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Video Production Miami
            </a>{" "}
            film production companies
          </p>
        </div>

        {/* More Paragraphs */}
        <p className="mb-6 text-gray-700 leading-relaxed font-semibold">
          The performer’s occupation begins months or even years before a movie 
          reaches the box office.
        </p>

        <p className="mb-6 text-gray-700 leading-relaxed">
          While <strong>Miami film production companies</strong> are not always 
          recognized in the history of film, the toughest and most 
          underappreciated jobs in Hollywood are often behind the scenes—those 
          who work beyond the glamour of the camera.
        </p>

        <p className="mb-6 text-gray-700 leading-relaxed">
          If you’ve got digital media experience with{" "}
          <strong>film production companies in Miami</strong>, along with 
          educational and professional qualifications, then networking can be 
          the key to landing the job you want in{" "}
          <strong>film production Miami</strong>.
        </p>
      </div>

      {/* Reviews & Footer */}
      <ReviewsBanner />
      <Footer />
    </div>
  );
}


//Regulus Films

// Regulus Films (Miami) Page
export function RegulusFilms() {
  return (
    <div className="min-h-screen pt-32">
      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        
        {/* Heading */}
        <h1 className="text-3xl text-center md:text-4xl font-bold mb-6">Regulus Films</h1>

        {/* Intro Paragraph */}
        <p className="mb-6 text-gray-700 leading-relaxed">
          Miami! Awesome city — and that’s the biggest reason we are proud 
          to be a Miami-based <strong>Music Video Production Company</strong>. 
          We frequently travel worldwide to create music videos at affordable 
          costs. In addition, we provide <strong>Miami Florida RED EPIC 
          rentals</strong> and <strong>RED Camera Rentals</strong>. Rent a 
          full production package with RED EPIC rentals, including cinema 
          packages and camera support at competitive prices.
        </p>

        {/* About Section */}
        <p className="mb-6 text-gray-700 leading-relaxed">
          <strong>Regulus Films</strong> is one of the leading{" "}
          <a
            href="http://www.themiamistudio.com/media/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            full-service music video production companies in Miami
          </a>
          , Florida. Founded by creative director Gary Brown, Regulus 
          Films brings together a talented team of professional directors, 
          photographers, producers, and editors. With this combination of 
          experience, we deliver high-quality videos at affordable prices.
        </p>

        {/* Experience Section */}
        <p className="mb-6 text-gray-700 leading-relaxed">
          We’ve worked on shooting music videos, live content, and behind-the-scenes 
          footage for numerous artists. Our creative team handles editing and 
          every other aspect of production, ensuring your project is smooth and 
          professional from start to finish.
        </p>

        {/* Call to Action */}
        <p className="mb-6 text-lg font-semibold text-blue-700">
          Call us today for your next Music Video: <span className="font-bold">786-429-4511</span>
        </p>
      </div>

      {/* Reviews & Footer */}
      <ReviewsBanner />
      <Footer />
    </div>
  );
}

// About Regulus Page
export function AboutRegulus() {
  return (
    <div className="min-h-screen pt-32">
      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl text-center font-bold mb-6">About Regulus</h1>

        {/* Intro Paragraph */}
        <p className="mb-6 text-gray-700 leading-relaxed text-justify">
          <strong>Regulus Films</strong> is well known for our cinematic and stylish 
          Miami Video Production Services. We top the list of{" "}
          <a
            href="https://musicvideoproduction.guru/video-production-miami-film-production-companies/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            film production companies in Miami
          </a>{" "}
          as our company is a coalition of directors, cinematographers, film producers, 
          and makeup artists that can accommodate any size budget. It takes a team 
          to create a beautiful music video production, and that’s exactly what we deliver. 
          We are a full-service Miami video production company passionate about video 
          production from start to end.
        </p>

        {/* Services */}
        <p className="mb-6 text-gray-700 leading-relaxed">
          Our services include: Miami Video Production | Corporate Video Production | 
          Film Production Companies in Miami | Music Video Production | Video Production 
          Fort Lauderdale | Miami Videographer | Best Video Companies in Miami.
        </p>

        {/* Subheading */}
        <h2 className="text-2xl font-semibold mb-4">
          Achieve Quality Video Production with Regulus Films
        </h2>

        {/* Facts Section */}
        <p className="mb-6 text-gray-700 leading-relaxed">
          With the vast improvement in mobile devices, video has started dominating 
          search engines and social media. Let’s look at some facts below:
        </p>
        <ul className="list-disc list-inside mb-6 text-gray-700 leading-relaxed">
          <li>Video views on mobile devices have increased 5× in the past three years.</li>
          <li>YouTube has become the most popular search engine for videos, with half of its traffic from mobile only.</li>
          <li>80% of online visitors watch video content compared to just 20% who read text.</li>
          <li>Video content has much higher potential to go viral.</li>
          <li>Videos are more engaging and provide more information in less time.</li>
        </ul>

        {/* Quality Section */}
        <p className="mb-6 text-gray-700 leading-relaxed text-justify">
          Looking at the facts above, you might be thinking of creating video content 
          to showcase your product and services. But remember: if you compromise with 
          quality, your video will be of no use. To ensure high-quality video production, 
          you must hire a Miami video production company capable of creating videos that 
          leave a lasting impression.
        </p>

        <p className="mb-6 text-gray-700 leading-relaxed">
          <a
            href="https://themiamistudio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Regulus Films - #1 Miami Video Production
          </a>{" "}
          has decades of experience and provides expert consulting to help you 
          avoid pitfalls and create a solid structure early in the process. 
          Our job is to stay on top of current technology, trends, and styles 
          so your video stands out.
        </p>

        {/* Call to Action */}
        <p className="mb-6 text-lg font-semibold text-blue-700">
          Contact us at <span className="font-bold">786-429-4511</span> for any{" "}
          <a
            href="https://musicvideoproduction.guru/regulus-films-best-miami-video-production-company/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Miami video production
          </a>{" "}
          needs, and let us help you create powerful, engaging videos that 
          grow your brand.
        </p>
      </div>

      {/* Parallax Callout Section */}
      <section className="bg-gray-900 text-white py-12 text-center">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Creative and Stylish Cinematography At Its Finest.
          </h2>
          <p className="text-lg">
            Call Us Today At: <span className="font-bold">786-429-4511</span>
          </p>
        </div>
      </section>

      {/* Reviews & Footer */}
      <ReviewsBanner />
      <Footer />
    </div>
  );
}


// Video Production Miami Page
export function VideoProductionMiami() {
  return (
    <div className="min-h-screen pt-32">
      {/* Main Content */}
      <div className="container text-center mx-auto px-6 md:px-12 max-w-5xl">
        
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Video Production Miami</h1>

        {/* Intro Paragraph */}
        <p className="mb-6 text-gray-700 leading-relaxed">
          When browsing the web for <strong>Miami Music Video Production</strong>, 
          people are often surprised at the level of production we provide. 
          Clients often think it costs an arm and a leg for great{" "}
          <span className="underline">Miami Music Video Production</span> — but 
          that’s not the case.
        </p>

        {/* Embedded Video */}
        <div className="mb-6 aspect-video">
          <iframe
            src="https://www.youtube.com/embed/MUT_yPPcdvs"
            title="Miami Music Video Production"
            allowFullScreen
            className="w-full h-full rounded-lg shadow-md"
          />
        </div>

        {/* Budget-Friendly Section */}
        <p className="mb-6 text-gray-700 leading-relaxed">
          While it’s true that you get what you pay for, we often work with client 
          budgets as much as possible while never sacrificing quality. Here are some 
          techniques we use to maximize impact:
        </p>

        {/* Techniques List */}
        <ul className="list-disc list-inside mb-6 text-gray-700 leading-relaxed space-y-2">
          <li><strong>#1. Slow motion</strong> creates a deep emotional impact for music videos or commercials.</li>
          <li><strong>#2. Smooth camera movement</strong> adds substance and production value to any scene.</li>
          <li><strong>#3. Stable camera work</strong> draws the audience into action sequences like walking, running, or skating.</li>
          <li>
            <strong>#4. Airborne footage with drones</strong> allows us to capture shots once only possible with planes 
            or helicopters. Learn more about our{" "}
            <a
              href="http://musicvideoproduction.guru/miami-video-production-services/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600"
            >
              Miami video production services
            </a>.
          </li>
          <li><strong>#5. Color correction</strong> ensures your video has professional-grade tone and vibrancy.</li>
        </ul>

        {/* Image Example */}
        <div className="mb-6 text-center">
          <a
            href="http://musicvideoproduction.guru/wp-content/uploads/2014/08/Screen-Shot-2014-09-11-at-1.00.39-PM.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="http://musicvideoproduction.guru/wp-content/uploads/2014/08/Screen-Shot-2014-09-11-at-1.00.39-PM.png"
              alt="Miami Music Video Production"
              className="rounded-lg shadow-md mx-auto"
            />
          </a>
          <p className="mt-2 text-sm text-gray-500">Miami Music Video Production</p>
        </div>

        {/* Mobile Video Importance */}
        <h2 className="text-2xl font-semibold mb-4">Cellular Video</h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Mobile video consumption is skyrocketing. Companies must optimize 
          their videos for smartphones and tablets to ensure smooth playback 
          and accessibility.
        </p>

        {/* Email Marketing */}
        <p className="mb-6 text-gray-700 leading-relaxed">
          <strong>Email us at Regulusfilms@themiamistudio.com</strong> for Video Production Miami.  
          Video in email marketing has proven to be highly effective — with over 
          65% of marketers using video in email campaigns. With advancements in 
          HTML5, embedded video is becoming more common and engaging.
        </p>

        {/* Explainer Videos */}
        <h2 className="text-2xl font-semibold mb-4">Explainer Videos</h2>
        <div className="mb-6 text-center">
          <a
            href="http://musicvideoproduction.guru/wp-content/uploads/2014/08/Screen-Shot-2014-09-11-at-1.04.11-PM.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="http://musicvideoproduction.guru/wp-content/uploads/2014/08/Screen-Shot-2014-09-11-at-1.04.11-PM.png"
              alt="Music Video Production Miami, FL"
              className="rounded-lg shadow-md mx-auto"
            />
          </a>
          <p className="mt-2 text-sm text-gray-500">Music Video Production Miami, FL</p>
        </div>

        <p className="mb-6 text-gray-700 leading-relaxed">
          Explainer videos are short, clear, and engaging — usually found front 
          and center on company homepages. They effectively describe what a 
          business does and how a product works in a captivating way.
        </p>

        {/* Closing CTA */}
        <p className="mb-6 text-lg font-semibold text-blue-700">
          Not sure where to start? Give us a call today at{" "}
          <span className="font-bold">786-429-4511</span> and let our team 
          handle your next production.
        </p>
      </div>

      {/* Parallax Callout Section */}
      <section className="bg-gray-900 text-white py-12 text-center">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Creative and Stylish Cinematography At Its Finest.
          </h2>
          <p className="text-lg">
            Call Us Today At: <span className="font-bold">786-429-4511</span>
          </p>
        </div>
      </section>

      {/* Reviews & Footer */}
      <ReviewsBanner />
      <Footer />
    </div>
  );
}


// Music Video Promotion Page
export function MusicVideoPromotion() {
  return (
    <div className="min-h-screen pt-32">
      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          Music Video Promotion
        </h1>

        <p className="text-center text-lg mb-6">
          ***This is live feed from our Music Video Channel on TV. Our Music
          video channel provides artists a new outlet for promotion that is seen
          by millions of viewers worldwide. Our TV channel is on over 200
          million connected devices such as Roku, Android TV, Amazon Fire, Apple
          TV, Smart TVs and many others. We provide you guaranteed TV placement
          playing your music video once every 4 hours, 24 hours a day for 1
          month. If you need more aggressive marketing, we have bigger packages.
          The price for this package mentioned above is only $300. If you would
          like to see your music video on TV please contact us today!***
        </p>

        {/* Video Embed */}
        <div className="relative pb-[56.25%] h-0 mb-8">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://embed.cdn01.net/player.php?responsive=1&skinColor=000000&autoStart=0&playlistPos=inside&playlistSize=350&tvButtonID=regulus&id=17330&type=live&playerVersion=2"
            frameBorder="0"
            allowFullScreen
          />
        </div>

        <h2 className="text-2xl font-semibold text-center mt-8">
          Search for our channel Today. MVC
        </h2>

        <p className="text-center text-blue-600 mt-10 text-lg font-medium">
          Call us today and let’s make your music video shine worldwide.
        </p>
      </div>

      {/* Parallax Callout Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Creative and Stylish Cinematography At Its Finest.
          </h2>
          <p className="text-lg">Call Us Today At: 786-429-4511</p>
        </div>
      </section>

      {/* Reviews + Footer */}
      <ReviewsBanner />
      <Footer />
    </div>
  )
}

// BehindTheScenes.tsx

export function BehindTheScenes() {
  const videos = [
    { title: "Symphony / Crazy B - Behind The Scenes", src: "https://player.vimeo.com/video/591818131?h=e4d4756449" },
    { title: "Emmanuel / It’s Not Me - Behind The Scenes", src: "https://player.vimeo.com/video/277899466" },
    { title: "Tim Terrentino / Million Dollar Dream - Behind The Scenes", src: "https://player.vimeo.com/video/167973403" },
    { title: "Dmage Ft: Paulo Cabonda / Boa Vibe - Behind the Scenes", src: "https://player.vimeo.com/video/116920449" },
    { title: "Hannah / Lots Out - Behind the Scenes", src: "https://player.vimeo.com/video/117008080" },
    { title: "KAL / What I Need Is Love - Behind the Scenes", src: "https://www.youtube.com/embed/ZmH-X2ye0Sw?rel=0" },
    { title: "Stylez / Employer - Behind the Scenes", src: "https://www.youtube.com/embed/vpF7449E3Sk?rel=0" },
    { title: "Shaton / Gone - Behind the Scenes", src: "https://www.youtube.com/embed/R29Ek-joxLs?rel=0" },
    { title: "Kewyane / Nobody - Behind the Scenes", src: "https://www.youtube.com/embed/Npuztz2S7NU?rel=0" },
    { title: "Peter G / Too Much - Behind the Scenes", src: "https://www.youtube.com/embed/Iwjer63uj9U?rel=0" },
    { title: "Sy’Rai / Good Time - Behind the Scenes", src: "https://www.youtube.com/embed/KwzasXXP7Zs" },
    { title: "Ibrahim / Amina - Behind the Scenes", src: "https://www.youtube.com/embed/NstllhkUNNA?rel=0" },
    { title: "Robert Wayne - Behind the Scenes", src: "https://www.youtube.com/embed/OO4Xap811XA?rel=0" },
    { title: "Champain Life / Taking Off - Behind the Scenes", src: "https://www.youtube.com/embed/-MrKQoEpnyk?rel=0" },
    { title: "Kimbell Hooker / Sexy Senorita - Behind the Scenes", src: "https://www.youtube.com/embed/_OXows4SYyI?rel=0" },
    { title: "ChizMac / That Action - Behind the Scenes", src: "https://www.youtube.com/embed/he4FlmY_JDo?rel=0" },
    { title: "Prinz / The One - Behind the Scenes", src: "https://www.youtube.com/embed/mas0TP64FBQ?rel=0" },
    { title: "Zaena / Come Get It - Behind the Scenes", src: "https://www.youtube.com/embed/UFr_xmtfjyY" },
    { title: "Joe Squires / Come Home - Behind the Scenes", src: "https://www.youtube.com/embed/N-TcUBurLAI?rel=0" },
    { title: "Dave Wayne / Guy Like Me - Behind the Scenes", src: "https://www.youtube.com/embed/l9Boy-4WScE?rel=0" },
    { title: "J R Pinchers Fet. Amanda / Strong Temtations - Behind the Scenes", src: "https://www.youtube.com/embed/mdBAwBhe13Y?rel=0" },
    { title: "Ysimonis / Donald Duck - Behind the Scenes", src: "https://www.youtube.com/embed/xgzLAYkTQ3w?rel=0" },
    { title: "Santa Baby - Behind the Scenes", src: "https://www.youtube.com/embed/52oMsW4Snh4" },
    { title: "I’m Just Trying 2 Chill - Behind the Scenes", src: "https://www.youtube.com/embed/XPENS9TPsFg" },
    { title: "Loyalty Now - Behind the Scenes", src: "https://www.youtube.com/embed/fqjDFJmI9DE?rel=0" },
    { title: "Tears Fall Now - Behind the Scenes", src: "https://www.youtube.com/embed/Yzl__yAqTG4" },
    { title: "Turn Me On - Behind the Scenes", src: "https://www.youtube.com/embed/kKU-k1MlOeM?rel=0" },
    { title: "NeckBreaker - Behind the Scenes", src: "https://www.youtube.com/embed/LMiDsgmPWKI" },
    { title: "Kopiko - Behind the Scenes", src: "https://www.youtube.com/embed/KOEixl0m6eQ" },
    { title: "Conmigo Quiere - Behind the Scenes", src: "https://www.youtube.com/embed/2LgchqfqBT4" },
    { title: "TOP - Behind the Scenes", src: "https://www.youtube.com/embed/NyTqIEAxaPI" },
    { title: "Oluwa - Behind the Scenes", src: "https://www.youtube.com/embed/8k4B4oP0NJ0" },
    { title: "Padon - Behind the Scenes", src: "https://www.youtube.com/embed/8TNf7tc4WeM" },
    { title: "Hunt Me Down - Behind the Scenes", src: "https://www.youtube.com/embed/i7MAf28zLDs" },
    { title: "It Feels Good - Behind the Scenes", src: "https://www.youtube.com/embed/gZfIB-bStqc" },
    { title: "Dusk Til Dawn - Behind the Scenes", src: "https://www.youtube.com/embed/82sSVSfE_3I" },
    { title: "I WONI - Behind the Scenes", src: "https://www.youtube.com/embed/gi_5UEfXtnk" },
    { title: "100 MPH - Behind the Scenes", src: "https://www.youtube.com/embed/QAj1asOx_bw" },
    { title: "Let Me Be Your B*tch - Behind the Scenes", src: "https://www.youtube.com/embed/-V8ifiyOr8Y?rel=0" },
    { title: "Extra Clip", src: "https://www.youtube.com/embed/WSx9dGdltGc" },
    { title: "Yes I’m Is - Behind the Scenes", src: "https://www.youtube.com/embed/PO14iOJDcW4" },
    { title: "BIZ - Behind the Scenes", src: "https://www.youtube.com/embed/BSJGJrCmQzs" },
    { title: "Sweet Palm Wine - Behind the Scenes", src: "https://www.youtube.com/embed/z3I6uain0BE?rel=0" },
    { title: "Segarra feat. Busta Rhymes / 5150 - Behind the Scenes", src: "https://www.youtube.com/embed/DbPr8l1tuTg?rel=0" },
    { title: "Not The Life - Behind the Scenes", src: "https://www.youtube.com/embed/LbE2ZlTQ9KA?rel=0" },
    { title: "Drop It - Behind the Scenes", src: "https://www.youtube.com/embed/Ccn5lVQ4zB0?rel=0" },
    { title: "Jack - Behind the Scenes", src: "https://www.youtube.com/embed/r8STmvJ5qI4?rel=0" },
    { title: "Luna Llena - Behind the Scenes", src: "https://www.youtube.com/embed/BGHnafN3E-4?rel=0" },
    { title: "Mother I - Behind the Scenes", src: "https://www.youtube.com/embed/9L4RMgvL4oU" },
  ]

  return (
    <div className="min-h-screen pt-32">
      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">
          Behind the Scenes
        </h1>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <img
            src="https://musicvideoproduction.guru/wp-content/uploads/2019/02/UpCity-Badge-Transparent-BG-07-11-2018-1-e1550024650204.png"
            alt="Miami Video Production"
            width={235}
            height={235}
            className="rounded-lg shadow-md"
          />
          <img
            src="https://musicvideoproduction.guru/wp-content/uploads/2021/07/miami-video-production-companies.png"
            alt="Regulus Films"
            width={225}
            height={235}
            className="rounded-lg shadow-md"
          />
          <img
            src="https://musicvideoproduction.guru/wp-content/uploads/2021/07/Music-Video-Directors.png"
            alt="High end video companies in Miami"
            width={234}
            height={234}
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Videos */}
        <div className="space-y-16">
          {videos.map((video, i) => (
            <div key={i}>
              <h2 className="text-2xl font-semibold mb-4 text-center">
                {video.title}
              </h2>
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                  src={video.src}
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Parallax Callout Section */}
      <section className="bg-gray-900 text-white py-16 mt-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Creative and Stylish Cinematography At Its Finest.
          </h2>
          <p className="text-lg">Call Us Today At: 786-429-4511</p>
        </div>
      </section>

      {/* Reviews + Footer */}
      <ReviewsBanner />
      <Footer />
    </div>
  )
}

// FortLauderdaleVideoProduction.tsx

export function FortLauderdaleVideoProduction() {
  return (
    <div className="min-h-screen pt-32">
      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          Fort Lauderdale Video Production | Video Production Fort Lauderdale
        </h1>

        <p className="text-lg mb-6 text-justify">
          <strong>Regulus Films</strong> – A leader in video production &amp;
          video marketing. Based in Fort Lauderdale and Miami with a reach
          through Florida, across the country and around the world, we commit
          our full talent and energy to each assignment, creating imaginative
          and inventive videos that stay focused on your goals and true to your
          message.
        </p>

        <h2 className="text-2xl font-semibold text-center my-8">
          Video Production Fort Lauderdale
        </h2>

        <p className="mb-6">
          From creative brainstorming to post production, we see projects
          through from start to finish. And we stay on the job until you are
          completely satisfied – guaranteed. We believe our work speaks for
          itself. Visit our <strong>Music Video Page</strong> to see why we have been rated as one of the{" "}
          <a
            href="https://musicvideoproduction.guru/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            <strong>Best Video Companies</strong>
          </a>{" "}
           in the U.S. and why you must hire us for your next
          video production Fort Lauderdale.
        </p>

        <p className="mb-6">
          Still wondering why your business needs video production? YouTube is
          the 2nd largest search engine after Google, which means with the help
          of video presence on YouTube you can reach an entire community of
          consumers you weren’t otherwise marketing to. Google also ranks
          quality YouTube videos very high. Businesses often have complicated
          processes that can be explained in a self-contained, shareable video.
          Video is the easiest and fastest way to show your audience why they
          should do business with you. The experience video provides will turn
          them into loyal customers. Share your story, answer questions, and be
          a valuable resource for your potential customers.
        </p>

        <p className="mb-6">
          Brand Storytelling is a powerful way to give your audience a sense of
          your brand’s purpose and values. There is no better way to demonstrate
          a problem being solved than with video. As a full-service creative{" "}
          <strong>video production Fort Lauderdale</strong> agency, let us help
          you tell your brand story. We see projects through from start to
          finish and stay until you are completely satisfied.
        </p>

        <p className="mb-6">
          Our team of superb directors, cinematographers, film producers, and
          makeup artists produces videos that are creative, distinctive, and
          effective for TV commercials, marketing, and public relations
          campaigns in all budgets. The play button of your video can be the
          best way to increase client conversions. With over a decade of
          experience as a{" "}
          <a
            href="https://musicvideoproduction.guru/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Miami Video Production
          </a>
          , we’re here for businesses big or small. If you have a product that
          needs to be shown in video,{" "}
          <a
            href="https://musicvideoproduction.guru/contact-us/"
            className="text-blue-600 underline"
          >
            contact us today
          </a>
          .
        </p>
      </div>

      {/* Parallax Callout Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Creative and Stylish Cinematography At Its Finest.
          </h2>
          <p className="text-lg">Call Us Today At: 786-429-4511</p>
        </div>
      </section>

      {/* Reviews + Footer */}
      <ReviewsBanner />
      <Footer />
    </div>
  )
}


