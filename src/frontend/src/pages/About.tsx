import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Link } from "@tanstack/react-router";
import { Award, Heart, Users, UtensilsCrossed } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  { icon: Users, label: "Happy Families", value: "10,000+" },
  { icon: UtensilsCrossed, label: "Dishes Served", value: "500K+" },
  { icon: Award, label: "Years of Excellence", value: "15+" },
  { icon: Heart, label: "5-Star Reviews", value: "2,000+" },
];

export function About() {
  const { openReservation } = useCart();

  return (
    <main>
      {/* Header */}
      <section
        className="py-20 text-white text-center"
        style={{
          background: "linear-gradient(135deg, #1F1F1F 0%, #3a1a10 100%)",
        }}
      >
        <p className="text-gold font-sans text-sm uppercase tracking-widest mb-2 font-semibold">
          Our Story
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold">
          About Ratnam
        </h1>
        <p className="text-white/70 mt-3 max-w-xl mx-auto">
          A legacy of flavors rooted in the heart of Chodavaram.
        </p>
      </section>

      {/* Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-gold font-sans text-sm uppercase tracking-widest mb-3 font-semibold">
              Established in Chodavaram
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-5">
              Where Every Meal
              <br />
              Tells a Story
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ratnam Restaurant was born from a simple yet profound love for
              authentic South Indian cuisine. Nestled in the heart of
              Chodavaram, Andhra Pradesh, our restaurant has been a gathering
              place for families, friends, and food lovers for over a decade.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our culinary journey began with traditional Andhra recipes — the
              rich, slow-cooked biryanis, the fiery Natukodi curries, and the
              aromatic tandoori specialties that have made our region famous
              throughout India. Every dish we serve is crafted with the same
              care and passion that our founders brought to this establishment.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Today, Ratnam Restaurant stands as a testament to quality,
              authenticity, and warm hospitality. From weekday family lunches to
              wedding catering, we continue to create memories one meal at a
              time.
            </p>
            <Button
              onClick={openReservation}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
              data-ocid="about.primary_button"
            >
              Reserve a Table
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl overflow-hidden shadow-2xl aspect-square max-w-md mx-auto lg:max-w-none"
          >
            <img
              src="/assets/generated/restaurant-interior.dim_1600x900.jpg"
              alt="Ratnam Restaurant Interior"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16" style={{ backgroundColor: "#7A1E1E" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center text-white"
                data-ocid={`about.item.${i + 1}`}
              >
                <stat.icon className="w-8 h-8 text-gold mx-auto mb-3" />
                <p className="font-serif text-3xl font-bold text-gold">
                  {stat.value}
                </p>
                <p className="text-white/70 text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gold font-sans text-sm uppercase tracking-widest mb-2 font-semibold">
            Our Principles
          </p>
          <h2 className="font-serif text-3xl font-bold mb-12">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Authenticity",
                desc: "We never compromise on traditional recipes. Every spice, every technique honours the culinary heritage of Andhra Pradesh.",
              },
              {
                title: "Quality",
                desc: "We source the freshest ingredients daily, from locally grown vegetables to premium cuts of meat and seafood.",
              },
              {
                title: "Community",
                desc: "Ratnam is more than a restaurant — it's a gathering place that strengthens the bonds of family and community.",
              },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-card"
                data-ocid={`about.card.${i + 1}`}
              >
                <h3 className="font-serif text-xl font-semibold mb-3">
                  {v.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark text-white text-center px-4">
        <h2 className="font-serif text-3xl font-bold mb-3">
          Come taste the tradition
        </h2>
        <p className="text-white/70 mb-8 max-w-md mx-auto">
          We'd love to welcome you to our family. Visit us or explore our full
          menu.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={openReservation}
            className="bg-primary text-primary-foreground font-semibold"
            data-ocid="about.secondary_button"
          >
            Book a Table
          </Button>
          <Link to="/menu">
            <Button
              variant="outline"
              className="border-white text-white bg-transparent hover:bg-white hover:text-dark font-semibold"
              data-ocid="about.link"
            >
              View Menu
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
