import React from "react";

const ServicesPage: React.FC = () => {
  return (
    <div className="services-page text-gray-800">
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-12">Our Services</h1>

        {/* Section 1 */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <img
            src="http://themiamistudio.com/wp-content/uploads/2013/10/front-page.png"
            alt="miami video production company"
            className="rounded-lg shadow"
          />
          <div className="space-y-6">
            <div className="p-6 rounded-xl shadow bg-orange-600 text-white">
              <h2 className="text-xl font-bold mb-2">
                Corporate Video Production Miami - Music Video Production Miami
              </h2>
              <p>
                We are able to provide Video Production in Miami as well as
                anywhere in the United States or abroad. If you are an
                advertisement agency or a company doing it all yourself we can
                guide and assist you on the next steps to make sure your
                production comes out as you expect.
              </p>
            </div>
            <div className="p-6 rounded-xl shadow bg-gray-900 text-white">
              <h2 className="text-xl font-bold mb-2">Talent - Cars - Yachts</h2>
              <p>
                We work with some of the most talented and beautiful models in
                the world and have access to some of the most prestigious yachts
                and mansions in the marketplace for your Miami video production.
                If you are in need of any of these things for your commercial or
                music video, we’ve got you covered.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <img
            src="http://themiamistudio.com/wp-content/uploads/2013/10/Screen-Shot-2016-04-06-at-7.03.38-PM.png"
            alt="music production companies"
            className="rounded-lg shadow"
          />
          <div className="space-y-6">
            <div className="p-6 rounded-xl shadow bg-orange-600 text-white">
              <h2 className="text-xl font-bold mb-2">Webcasting</h2>
              <p>
                We are able to provide production companies, sporting events,
                churches, or any potential client looking to stream their show
                or event to the masses.
              </p>
            </div>
            <div className="p-6 rounded-xl shadow bg-gray-900 text-white">
              <h2 className="text-xl font-bold mb-2">Live Streaming</h2>
              <p>
                Launch live streaming video of your show to the web at the touch
                of a button. Our TriCaster 40 includes presets for the most
                common streaming profiles, in resolutions up to 720p.
              </p>
            </div>
            <div className="p-6 rounded-xl shadow bg-gray-900 text-white">
              <h2 className="text-xl font-bold mb-2">Fast &amp; Friendly Support</h2>
              <p>
                The Miami Studio is most known for our international ties to the
                marketplace. We understand that every company works on their own
                time zone, so we work on yours. If you are located outside the
                USA, feel free to Skype us at{" "}
                <span className="font-semibold">RegulusFilmz</span> or call us
                at <span className="font-semibold">1 (786) 429-4511</span> and
                we’ll gladly answer any questions.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src="http://themiamistudio.com/wp-content/uploads/2013/10/After-Effects-Iron-Man-Avengers.jpg"
            alt="music video production"
            className="rounded-lg shadow"
          />
          <div className="space-y-6">
            <div className="p-6 rounded-xl shadow bg-orange-600 text-white">
              <h2 className="text-xl font-bold mb-2">Motion Graphics</h2>
              <p>
                Bring your Corporate and Music videos to life with motion
                graphics. When it comes to After Effects let Regulus Films put
                that added touch on your final project.
              </p>
            </div>
            <div className="p-6 rounded-xl shadow bg-gray-900 text-white">
              <h2 className="text-xl font-bold mb-2">After Effects</h2>
              <p>
                After Effects is software primarily used for creating motion
                graphics and visual effects. It allows users to animate, edit,
                and compose media in 2D or 3D space.
              </p>
            </div>
            <div className="p-6 rounded-xl shadow bg-gray-900 text-white">
              <h2 className="text-xl font-bold mb-2">
                Other Production Companies’ Best Kept Secret
              </h2>
              <p>
                Many production companies outsource their productions to us
                because our prices are some of the lowest in the industry and we
                are completely okay with this. It works both ways: One, we are
                not in competition with local production companies because they
                use us anyway. Two, we stay very busy with work — it’s a win
                win. We invite you to see why everyone uses Regulus Films for
                all of their production needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
