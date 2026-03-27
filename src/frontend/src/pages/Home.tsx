import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Link } from "@tanstack/react-router";
import {
  Accessibility,
  ChevronRight,
  Clock,
  Home as HomeIcon,
  PartyPopper,
  Quote,
  Star,
  Truck,
  UtensilsCrossed,
} from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: UtensilsCrossed,
    title: "Authentic Flavors",
    desc: "Traditional recipes passed down through generations, cooked with the finest spices and locally sourced ingredients.",
  },
  {
    icon: HomeIcon,
    title: "Family-Friendly Ambiance",
    desc: "A warm, welcoming space designed for families — from intimate dinners to large celebrations.",
  },
  {
    icon: Truck,
    title: "Quick Delivery",
    desc: "Hot food delivered to your doorstep. Our packaging preserves the authentic taste and temperature.",
  },
  {
    icon: PartyPopper,
    title: "Catering Services",
    desc: "We handle all your event catering needs — from small gatherings to large parties and corporate events.",
  },
];

const bestsellers = [
  {
    name: "Signature Chicken Biryani",
    desc: "Slow-cooked with aromatic spices, served with our famous rich gravy and raita.",
    image: "/assets/generated/chicken-biryani.dim_800x600.jpg",
    price: 180,
  },
  {
    name: "Fry Piece Biryani",
    desc: "Crispy fried chicken pieces layered with fragrant basmati rice and caramelized onions.",
    image: "/assets/generated/fry-piece-biryani.dim_800x600.jpg",
    price: 200,
  },
  {
    name: "Traditional Natukodi",
    desc: "Country chicken slow-cooked in a rich, aromatic gravy with whole coastal spices.",
    image: "/assets/generated/natukodi.dim_800x600.jpg",
    price: 280,
  },
  {
    name: "Tandoori Wings & Prawns",
    desc: "Smoky charred wings and tiger prawns from the tandoor, served with mint chutney.",
    image: "/assets/generated/tandoori-wings-prawns.dim_800x600.jpg",
    price: 320,
  },
];

const services = [
  {
    icon: HomeIcon,
    title: "Dine-In",
    desc: "Cozy, refined ambiance with wheelchair access and comfortable seating for all occasions.",
    detail: "Open 10:00 AM – 10:00 PM",
    extraIcon: Accessibility,
  },
  {
    icon: Truck,
    title: "Takeaway & Delivery",
    desc: "Fast, hygienic packaging that retains the authentic taste and temperature of every dish.",
    detail: "Available all day",
    extraIcon: Clock,
  },
  {
    icon: PartyPopper,
    title: "Event Catering",
    desc: "Bulk orders for parties, family gatherings, and corporate events. Custom menus available.",
    detail: "Book in advance",
    extraIcon: Star,
  },
];

const testimonials = [
  {
    text: "The gravy is absolutely divine! Best biryani I've had in all of Andhra Pradesh. The slow-cooked chicken just falls apart perfectly.",
    name: "Rajesh K.",
    role: "Regular Customer",
  },
  {
    text: "Great value for money — always come here for family gatherings. The kids love the Chicken 65 and we adults can't get enough of the Natukodi.",
    name: "Priya M.",
    role: "Happy Guest",
  },
  {
    text: "Wonderful family ambiance, the kids love it too. Highly recommended for anyone visiting Chodavaram. The catering for our wedding was spectacular!",
    name: "Srinivas R.",
    role: "Event Client",
  },
];

export function Home() {
  const { openOrder, openReservation } = useCart();

  return (
    <main>
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center text-white"
        style={{ background: "#1F1F1F" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/assets/generated/restaurant-interior.dim_1600x900.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold font-sans text-sm uppercase tracking-widest mb-4 font-semibold">
              Chodavaram, Andhra Pradesh
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              Savor the True Flavors
              <br />
              <span className="text-gold">of Chodavaram</span>
            </h1>
            <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              A cherished culinary haven where tradition meets innovation.
              Multi-cuisine dining, takeaway, and catering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/menu">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-6 text-base transition-transform hover:scale-105"
                  data-ocid="hero.primary_button"
                >
                  View Menu
                  <ChevronRight className="w-5 h-5 ml-1" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                onClick={openReservation}
                className="border-white text-white bg-transparent hover:bg-white hover:text-dark font-semibold px-8 py-6 text-base transition-transform hover:scale-105"
                data-ocid="hero.secondary_button"
              >
                <Clock className="w-5 h-5 mr-2" />
                Book a Table
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Today's Special Banner */}
      <section
        className="relative py-10 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #2a1505 0%, #7A1E1E 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('/assets/generated/chicken-biryani.dim_800x600.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="bg-gold text-dark font-bold text-xs px-3 py-1 rounded-full uppercase tracking-widest animate-pulse">
              Today's Special
            </span>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                Signature Natukodi Curry
              </h3>
              <p className="text-white/70 text-sm">
                Country chicken slow-cooked in coastal spices — ₹280
              </p>
            </div>
          </div>
          <Button
            onClick={openReservation}
            className="bg-gold text-dark hover:bg-gold/90 font-semibold shrink-0"
            data-ocid="special.primary_button"
          >
            Book a Table
          </Button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background" id="why-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-gold font-sans text-sm uppercase tracking-widest mb-2 font-semibold">
              Our Promise
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
              Why Choose Us
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card-light rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow text-center group"
              >
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                  <f.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2">
                  {f.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Kolam Divider */}
      <div className="kolam-divider w-full" />

      {/* Bestsellers */}
      <section className="py-20 bg-muted/40" id="bestsellers">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-gold font-sans text-sm uppercase tracking-widest mb-2 font-semibold">
              Chef's Favourites
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
              Bestseller Dishes
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestsellers.map((dish, i) => (
              <motion.div
                key={dish.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card-light rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
                data-ocid={`bestseller.item.${i + 1}`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-base font-semibold mb-1">
                    {dish.name}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-3">
                    {dish.desc}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-primary text-lg">
                      ₹{dish.price}
                    </span>
                    <Button
                      size="sm"
                      onClick={() =>
                        openOrder({ name: dish.name, price: dish.price })
                      }
                      className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs"
                      data-ocid={`bestseller.primary_button.${i + 1}`}
                    >
                      Order Now
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/menu">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
                data-ocid="bestseller.secondary_button"
              >
                Explore Full Menu
                <ChevronRight className="w-5 h-5 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        className="py-20"
        style={{ backgroundColor: "#7A1E1E" }}
        id="services"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-gold font-sans text-sm uppercase tracking-widest mb-2 font-semibold">
              How We Serve
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Our Services
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-8 shadow-lg group hover:-translate-y-1 transition-transform"
                data-ocid={`service.item.${i + 1}`}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
                  style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                >
                  <s.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3 text-white">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4 text-white/80">
                  {s.desc}
                </p>
                <div className="flex items-center gap-2 text-xs font-semibold text-gold">
                  <s.extraIcon className="w-4 h-4" />
                  {s.detail}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-gold font-sans text-sm uppercase tracking-widest mb-2 font-semibold">
              What People Say
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
              Guest Testimonials
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card-light rounded-2xl p-7 shadow-card"
                data-ocid={`testimonial.item.${i + 1}`}
              >
                <Quote className="w-8 h-8 text-gold mb-4" />
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                    <span className="font-serif font-bold text-gold text-sm">
                      {t.name[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    <Star className="w-3.5 h-3.5 fill-gold text-gold" />
                    <Star className="w-3.5 h-3.5 fill-gold text-gold" />
                    <Star className="w-3.5 h-3.5 fill-gold text-gold" />
                    <Star className="w-3.5 h-3.5 fill-gold text-gold" />
                    <Star className="w-3.5 h-3.5 fill-gold text-gold" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
