import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Link, useLocation } from "@tanstack/react-router";
import {
  CalendarDays,
  Menu,
  ShoppingBag,
  UtensilsCrossed,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Menu", to: "/menu" },
  { label: "Services", to: "/services" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openOrder, openReservation, cartItems } = useCart();
  const location = useLocation();
  const totalItems = cartItems.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <header className="sticky top-0 z-50 glass-header text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
            data-ocid="nav.link"
          >
            <UtensilsCrossed className="w-7 h-7 text-gold" />
            <span className="font-serif text-xl lg:text-2xl font-bold text-gold tracking-wide">
              Ratnam
            </span>
            <span className="hidden sm:inline text-white/70 font-sans text-sm ml-1">
              Restaurant
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-sans text-sm font-medium transition-colors duration-200 hover:text-gold ${
                  location.pathname === link.to ? "text-gold" : "text-white/80"
                }`}
                data-ocid="nav.link"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              onClick={() => openOrder()}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold relative"
              data-ocid="order.open_modal_button"
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              Order Online
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-dark text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>
            <Button
              variant="outline"
              onClick={openReservation}
              className="border-secondary text-secondary bg-transparent hover:bg-secondary hover:text-white font-semibold"
              data-ocid="reservation.open_modal_button"
            >
              <CalendarDays className="w-4 h-4 mr-2" />
              Reserve a Table
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-dark border-t border-white/10"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`font-sans text-base py-1 transition-colors ${
                    location.pathname === link.to
                      ? "text-gold"
                      : "text-white/80"
                  }`}
                  onClick={() => setMobileOpen(false)}
                  data-ocid="nav.link"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-2 border-t border-white/10">
                <Button
                  onClick={() => {
                    openOrder();
                    setMobileOpen(false);
                  }}
                  className="bg-primary text-primary-foreground w-full"
                  data-ocid="order.open_modal_button"
                >
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Order Online {totalItems > 0 && `(${totalItems})`}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    openReservation();
                    setMobileOpen(false);
                  }}
                  className="border-secondary text-secondary w-full"
                  data-ocid="reservation.open_modal_button"
                >
                  <CalendarDays className="w-4 h-4 mr-2" />
                  Reserve a Table
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
