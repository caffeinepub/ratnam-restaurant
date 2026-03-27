import { Link } from "@tanstack/react-router";
import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  UtensilsCrossed,
} from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "",
  );

  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <UtensilsCrossed className="w-6 h-6 text-gold" />
              <span className="font-serif text-xl font-bold text-gold">
                Ratnam Restaurant
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              A cherished culinary haven in Chodavaram where tradition meets
              innovation. Multi-cuisine dining, takeaway, and catering.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-gold mb-4">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {[
                { label: "Home", to: "/" },
                { label: "Menu", to: "/menu" },
                { label: "Services", to: "/services" },
                { label: "About Us", to: "/about" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/60 text-sm hover:text-gold transition-colors"
                    data-ocid="nav.link"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Address */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-gold mb-4">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex gap-3 text-sm text-white/60">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>
                  Near Kandarpa Colony, Near Axis Bank,
                  <br />
                  State Highway 38, Chodavaram,
                  <br />
                  Andhra Pradesh 531036
                </span>
              </li>
              <li className="flex gap-3 text-sm text-white/60">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex gap-3 text-sm text-white/60">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span>info@ratnamrestaurant.in</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Hours & Social */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-gold mb-4">
              Opening Hours
            </h3>
            <div className="flex gap-3 text-sm text-white/60 mb-6">
              <Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <div>
                <p>Monday – Sunday</p>
                <p className="text-white/80 font-medium">10:00 AM – 10:00 PM</p>
              </div>
            </div>
            <h3 className="font-serif text-lg font-semibold text-gold mb-3">
              Follow Us
            </h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white/60 hover:text-gold transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/60 hover:text-gold transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-white/60 hover:text-gold transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/40">
          <span>© {year} Ratnam Restaurant. All rights reserved.</span>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/60 transition-colors"
          >
            Built with ❤️ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
