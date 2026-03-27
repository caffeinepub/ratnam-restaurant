import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { motion } from "motion/react";

export function Contact() {
  const { openReservation, openOrder } = useCart();

  return (
    <main>
      {/* Header */}
      <section
        className="py-20 text-white text-center"
        style={{
          background: "linear-gradient(135deg, #1F1F1F 0%, #2a1a0a 100%)",
        }}
      >
        <p className="text-gold font-sans text-sm uppercase tracking-widest mb-2 font-semibold">
          Get In Touch
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold">
          Contact Us
        </h1>
        <p className="text-white/70 mt-3 max-w-lg mx-auto">
          We're here to help. Reach out for reservations, catering inquiries, or
          just to say hello.
        </p>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-2xl font-bold mb-8">Find Us</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Our Address</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Near Kandarpa Colony, Near Axis Bank,
                    <br />
                    State Highway 38, Chodavaram,
                    <br />
                    Andhra Pradesh 531036
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Opening Hours</p>
                  <p className="text-muted-foreground text-sm">
                    Monday – Sunday
                  </p>
                  <p className="font-medium">10:00 AM – 10:00 PM</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Phone</p>
                  <p className="text-muted-foreground text-sm">
                    +91 92474 79945
                  </p>
                  <p className="text-muted-foreground text-sm">
                    +91 XXXXX XXXXX
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <p className="text-muted-foreground text-sm">
                    info@ratnamrestaurant.in
                  </p>
                  <p className="text-muted-foreground text-sm">
                    catering@ratnamrestaurant.in
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="font-semibold mb-3">Follow Us</p>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full bg-dark text-white flex items-center justify-center hover:bg-gold transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-dark text-white flex items-center justify-center hover:bg-gold transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="w-10 h-10 rounded-full bg-dark text-white flex items-center justify-center hover:bg-gold transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-2xl font-bold mb-8">
              Quick Actions
            </h2>
            <div className="space-y-4">
              <div className="glass-card-light rounded-2xl p-6 shadow-card">
                <h3 className="font-serif text-lg font-semibold mb-2">
                  Reserve a Table
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Book your spot for dine-in. We accommodate groups of all sizes
                  with prior reservation.
                </p>
                <Button
                  onClick={openReservation}
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold w-full"
                  data-ocid="contact.primary_button"
                >
                  Book Now
                </Button>
              </div>
              <div className="glass-card-light rounded-2xl p-6 shadow-card">
                <h3 className="font-serif text-lg font-semibold mb-2">
                  Order Online
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Place your order for dine-in, takeaway, or home delivery right
                  from our website.
                </p>
                <Button
                  onClick={() => openOrder()}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold w-full"
                  data-ocid="contact.secondary_button"
                >
                  Order Now
                </Button>
              </div>
              <div className="glass-card-light rounded-2xl p-6 shadow-card">
                <h3 className="font-serif text-lg font-semibold mb-2">
                  Catering Inquiry
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Planning an event? Contact us for custom menus, pricing, and
                  availability.
                </p>
                <a href="mailto:catering@ratnamrestaurant.in">
                  <Button
                    variant="outline"
                    className="border-gold text-gold hover:bg-gold hover:text-dark font-semibold w-full"
                    data-ocid="contact.secondary_button"
                  >
                    Send Inquiry
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="w-full h-80 mt-0">
        <iframe
          title="Ratnam Restaurant Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.5!2d82.2!3d17.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37b8c3e5f3e5f3%3A0x3f3f3f3f3f3f3f3f!2sChodavaram%2C%20Andhra%20Pradesh%20531036!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </main>
  );
}
