import { FaInstagram, FaVimeoV, FaFacebookF, FaYoutube } from "react-icons/fa";
import { Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-deep-navy text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6 flex justify-center">
              <img
                src="/attached_assets/regulusLogo_1755807882562.png"
                alt="Regulus Films & Entertainment Logo"
                className="h-24 w-auto"
                data-testid="footer-logo"
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Premium video production company in Miami, Florida. We create
              high-end corporate and music videos for clients worldwide.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=100059320725106"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-miami-teal hover:bg-miami-dark text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors hover-glow"
                data-testid="link-facebook"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/regulusfilmsportfolio?igsh=MWlhbXc4eWVrMmlxcg%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-miami-teal hover:bg-miami-dark text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors hover-glow"
                data-testid="link-instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@REGULUSFILMZ"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-miami-teal hover:bg-miami-dark text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors hover-glow"
                data-testid="link-youtube"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
              <a
                href="https://vimeo.com/user27858759"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-miami-teal hover:bg-miami-dark text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors hover-glow"
                data-testid="link-vimeo"
              >
                <FaVimeoV className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/music-videos"
                  className="text-gray-400 hover:text-miami-teal transition-colors"
                  data-testid="footer-link-music"
                >
                  Music Videos
                </a>
              </li>
              <li>
                <a
                  href="/corporate-videos"
                  className="text-gray-400 hover:text-miami-teal transition-colors"
                  data-testid="footer-link-corporate"
                >
                  Corporate Videos
                </a>
              </li>
              <li>
                <a
                  href="/movies"
                  className="text-gray-400 hover:text-miami-teal transition-colors"
                  data-testid="footer-link-movies"
                >
                  Movies
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-miami-teal transition-colors"
                  data-testid="footer-link-about"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-miami-teal transition-colors"
                  data-testid="footer-link-contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-3 text-gray-400">
              <p data-testid="footer-phone">
                <strong className="text-white">Phone:</strong>
                <br />
                786-429-4511
              </p>
              <p data-testid="footer-address">
                <strong className="text-white">Location:</strong>
                <br />
                Barclay's Business Center
                <br />
                555 NE 15th St
                <br />
                Miami, FL 33132
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Regulus Films & Entertainment. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Site designed by{" "}
            <a
              href="https://arcanedevs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-miami-teal hover:text-miami-dark transition-colors"
              data-testid="footer-link-designer"
            >
              Arcane Devs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
