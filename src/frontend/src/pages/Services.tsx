import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import {
  Accessibility,
  CheckCircle2,
  Clock,
  PartyPopper,
  Star,
  Truck,
  UtensilsCrossed,
} from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: UtensilsCrossed,
    title: "Dine-In Experience",
    color: "#7A1E1E",
    headline: "Cozy, refined ambiance for every occasion",
    desc: "Step into Ratnam Restaurant and experience warm hospitality in a beautifully designed space. From intimate family dinners to large celebrations, our dine-in service offers comfort, elegance, and the finest cuisine.",
    features: [
      "Wheelchair accessible entrance and seating",
      "Air-conditioned dining hall",
      "Private seating arrangements available",
      "Live cooking stations on special occasions",
    ],
    detail: "Open daily: 10:00 AM – 10:00 PM",
    icon2: Accessibility,
  },
  {
    icon: Truck,
    title: "Takeaway & Delivery",
    color: "#D9893B",
    headline: "Hot food delivered to your doorstep",
    desc: "Can't dine in? No problem. Our takeaway and delivery service ensures your food arrives fresh, hot, and packed with the same authentic flavors. Our special packaging retains taste and temperature.",
    features: [
      "Hygienic, eco-friendly packaging",
      "Real-time order tracking",
      "Express delivery within Chodavaram",
      "Bulk takeaway for events",
    ],
    detail: "Available all day, every day",
    icon2: Clock,
  },
  {
    icon: PartyPopper,
    title: "Event Catering",
    color: "#C9A15A",
    headline: "Make your event unforgettable",
    desc: "From intimate family gatherings to large corporate events and weddings, our catering team delivers exceptional cuisine and service. We handle everything from menu planning to on-site setup.",
    features: [
      "Custom menus for every occasion",
      "Professional setup and service staff",
      "Minimum 50 to unlimited guests",
      "Competitive bulk pricing",
    ],
    detail: "Book 3+ days in advance",
    icon2: Star,
  },
];

export function Services() {
  const { openReservation } = useCart();

  return (
    <main>
      {/* Header */}
      <section
        className="py-20 text-white text-center"
        style={{
          background: "linear-gradient(135deg, #7A1E1E 0%, #4a0f0f 100%)",
        }}
      >
        <p className="text-gold font-sans text-sm uppercase tracking-widest mb-2 font-semibold">
          What We Offer
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold">
          Our Services
        </h1>
        <p className="text-white/70 mt-3 max-w-lg mx-auto">
          From dine-in to delivery to full-scale catering — we've got every
          occasion covered.
        </p>
      </section>

      {/* Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col gap-16">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
              data-ocid={`service.item.${i + 1}`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${s.color}20` }}
                >
                  <s.icon className="w-8 h-8" style={{ color: s.color }} />
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-2">
                  {s.title}
                </h2>
                <p className="text-gold font-semibold text-sm mb-4">
                  {s.headline}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {s.desc}
                </p>
                <ul className="space-y-2 mb-6">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div
                  className="flex items-center gap-2 text-sm font-semibold"
                  style={{ color: s.color }}
                >
                  <s.icon2 className="w-4 h-4" />
                  {s.detail}
                </div>
              </div>
              <div
                className={`rounded-3xl h-64 lg:h-80 flex items-center justify-center ${
                  i % 2 === 1 ? "lg:order-1" : ""
                }`}
                style={{ backgroundColor: `${s.color}15` }}
              >
                <s.icon
                  className="w-24 h-24"
                  style={{ color: `${s.color}60` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark text-white text-center px-4">
        <h2 className="font-serif text-3xl font-bold mb-3">
          Ready to experience Ratnam?
        </h2>
        <p className="text-white/70 mb-8 max-w-md mx-auto">
          Reserve your table today or contact us to discuss catering for your
          next event.
        </p>
        <Button
          size="lg"
          onClick={openReservation}
          className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
          data-ocid="services.primary_button"
        >
          Reserve a Table
        </Button>
      </section>
    </main>
  );
}
