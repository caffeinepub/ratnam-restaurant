import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCart } from "@/context/CartContext";
import { Plus, ShoppingBag } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

type MenuItem = {
  name: string;
  desc: string;
  price: number;
  image?: string;
  isVeg?: boolean;
};

const menuData: { category: string; items: MenuItem[] }[] = [
  {
    category: "Biryani",
    items: [
      {
        name: "Signature Chicken Biryani",
        desc: "Slow-cooked with aromatic spices, served with raita",
        price: 180,
        image: "/assets/generated/chicken-biryani.dim_800x600.jpg",
        isVeg: false,
      },
      {
        name: "Fry Piece Biryani",
        desc: "Crispy fried chicken with fragrant rice",
        price: 200,
        image: "/assets/generated/fry-piece-biryani.dim_800x600.jpg",
        isVeg: false,
      },
      {
        name: "Mutton Biryani",
        desc: "Tender mutton pieces with dum-cooked rice",
        price: 220,
        image: "/assets/generated/mutton-biryani.dim_800x600.jpg",
        isVeg: false,
      },
      {
        name: "Egg Biryani",
        desc: "Classic preparation with masala eggs",
        price: 120,
        image: "/assets/generated/chicken-biryani.dim_800x600.jpg",
        isVeg: false,
      },
      {
        name: "Veg Biryani",
        desc: "Garden-fresh vegetables with basmati",
        price: 100,
        image: "/assets/generated/palak-paneer.dim_800x600.jpg",
        isVeg: true,
      },
    ],
  },
  {
    category: "Natukodi",
    items: [
      {
        name: "Traditional Natukodi Curry",
        desc: "Rich gravy with whole spices",
        price: 280,
        image: "/assets/generated/natukodi.dim_800x600.jpg",
        isVeg: false,
      },
      {
        name: "Natukodi Fry",
        desc: "Dry preparation with coastal spices",
        price: 260,
        image: "/assets/generated/natukodi.dim_800x600.jpg",
        isVeg: false,
      },
      {
        name: "Natukodi Biryani",
        desc: "Country chicken biryani, special recipe",
        price: 220,
        image: "/assets/generated/natukodi.dim_800x600.jpg",
        isVeg: false,
      },
    ],
  },
  {
    category: "Tandoori",
    items: [
      {
        name: "Tandoori Wings",
        desc: "Smoky charred wings with mint chutney",
        price: 240,
        image: "/assets/generated/tandoori-wings-prawns.dim_800x600.jpg",
        isVeg: false,
      },
      {
        name: "Tandoori Prawns",
        desc: "Tiger prawns with tandoor marinade",
        price: 320,
        image: "/assets/generated/tandoori-wings-prawns.dim_800x600.jpg",
        isVeg: false,
      },
      {
        name: "Chicken Tikka",
        desc: "Boneless tikka with bell peppers",
        price: 260,
        image: "/assets/generated/chicken-tikka.dim_800x600.jpg",
        isVeg: false,
      },
      {
        name: "Paneer Tikka",
        desc: "Soft paneer with tandoori marinade",
        price: 180,
        image: "/assets/generated/palak-paneer.dim_800x600.jpg",
        isVeg: true,
      },
    ],
  },
  {
    category: "Curries",
    items: [
      {
        name: "Butter Chicken",
        desc: "Creamy tomato-based curry",
        price: 220,
        image: "/assets/generated/butter-chicken.dim_800x600.jpg",
        isVeg: false,
      },
      {
        name: "Dal Makhani",
        desc: "Slow-cooked black lentils",
        price: 140,
        image: "/assets/generated/palak-paneer.dim_800x600.jpg",
        isVeg: true,
      },
      {
        name: "Palak Paneer",
        desc: "Cottage cheese in spinach gravy",
        price: 160,
        image: "/assets/generated/palak-paneer.dim_800x600.jpg",
        isVeg: true,
      },
      {
        name: "Fish Curry",
        desc: "Fresh catch in coconut gravy",
        price: 280,
        image: "/assets/generated/fish-curry.dim_800x600.jpg",
        isVeg: false,
      },
    ],
  },
  {
    category: "Starters",
    items: [
      {
        name: "Chicken 65",
        desc: "Spicy deep-fried chicken",
        price: 160,
        image: "/assets/generated/chicken-65.dim_800x600.jpg",
        isVeg: false,
      },
      {
        name: "Gobi Manchurian",
        desc: "Crispy cauliflower in manchurian sauce",
        price: 120,
        isVeg: true,
      },
      {
        name: "Prawn Fry",
        desc: "Fresh prawns with coastal masala",
        price: 280,
        image: "/assets/generated/tandoori-wings-prawns.dim_800x600.jpg",
        isVeg: false,
      },
      {
        name: "Veg Spring Rolls",
        desc: "Crispy rolls with sweet chili dip",
        price: 100,
        isVeg: true,
      },
    ],
  },
  {
    category: "Breads & Rice",
    items: [
      {
        name: "Butter Naan",
        desc: "Soft buttery flatbread",
        price: 30,
        isVeg: true,
      },
      {
        name: "Garlic Naan",
        desc: "Naan with roasted garlic",
        price: 40,
        isVeg: true,
      },
      { name: "Roti", desc: "Whole wheat flatbread", price: 20, isVeg: true },
      {
        name: "Steam Rice",
        desc: "Perfectly cooked white rice",
        price: 40,
        isVeg: true,
      },
      {
        name: "Jeera Rice",
        desc: "Fragrant cumin-tempered rice",
        price: 80,
        isVeg: true,
      },
    ],
  },
  {
    category: "Desserts",
    items: [
      {
        name: "Double Ka Meetha",
        desc: "Traditional Hyderabadi bread pudding",
        price: 80,
        image: "/assets/generated/hyderabadi-dessert.dim_800x600.jpg",
        isVeg: true,
      },
      { name: "Kheer", desc: "Creamy rice pudding", price: 70, isVeg: true },
      {
        name: "Gulab Jamun (2 pcs)",
        desc: "Classic syrup-soaked dumplings",
        price: 60,
        isVeg: true,
      },
    ],
  },
];

export function Menu() {
  const { addItem, openOrder, cartItems } = useCart();
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set());
  const [filter, setFilter] = useState<"all" | "veg" | "nonveg">("all");
  const totalItems = cartItems.reduce((s, i) => s + i.quantity, 0);

  const handleAdd = (item: { name: string; price: number }) => {
    addItem(item);
    setAddedItems((prev) => new Set(prev).add(item.name));
    setTimeout(() => {
      setAddedItems((prev) => {
        const next = new Set(prev);
        next.delete(item.name);
        return next;
      });
    }, 1500);
  };

  const filterItems = (items: MenuItem[]) => {
    if (filter === "veg") return items.filter((i) => i.isVeg);
    if (filter === "nonveg") return items.filter((i) => !i.isVeg);
    return items;
  };

  return (
    <main>
      {/* Page Header */}
      <section
        className="py-20 text-white text-center relative"
        style={{
          background: "linear-gradient(135deg, #1F1F1F 0%, #3a2a1a 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('/assets/generated/chicken-biryani.dim_800x600.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10">
          <p className="text-gold font-sans text-sm uppercase tracking-widest mb-2 font-semibold">
            Explore
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold">
            Our Menu
          </h1>
          <p className="text-white/70 mt-3 max-w-lg mx-auto">
            Crafted with passion, served with love. Discover authentic flavors
            from our kitchen.
          </p>
        </div>
      </section>

      {/* Floating cart button */}
      {totalItems > 0 && (
        <div className="sticky top-20 z-40 flex justify-end px-4 sm:px-8 py-3">
          <Button
            onClick={() => openOrder()}
            className="bg-primary text-primary-foreground shadow-lg font-semibold"
            data-ocid="menu.open_modal_button"
          >
            <ShoppingBag className="w-4 h-4 mr-2" />
            View Order ({totalItems} items)
          </Button>
        </div>
      )}

      {/* Menu Tabs */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Veg/Non-Veg Filter */}
        <div className="flex justify-center gap-3 mb-8">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
              filter === "all"
                ? "bg-foreground text-background"
                : "border-border text-muted-foreground"
            }`}
            data-ocid="menu.tab"
          >
            All
          </button>
          <button
            type="button"
            onClick={() => setFilter("veg")}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all flex items-center gap-1.5 ${
              filter === "veg"
                ? "bg-green-600 text-white border-green-600"
                : "border-green-600 text-green-600"
            }`}
            data-ocid="menu.tab"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block" />
            Veg
          </button>
          <button
            type="button"
            onClick={() => setFilter("nonveg")}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all flex items-center gap-1.5 ${
              filter === "nonveg"
                ? "bg-orange-600 text-white border-orange-600"
                : "border-orange-600 text-orange-600"
            }`}
            data-ocid="menu.tab"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 inline-block" />
            Non-Veg
          </button>
        </div>

        <Tabs defaultValue="Biryani">
          <TabsList
            className="flex flex-wrap gap-2 h-auto bg-transparent mb-10 justify-center"
            data-ocid="menu.tab"
          >
            {menuData.map((cat) => (
              <TabsTrigger
                key={cat.category}
                value={cat.category}
                className="rounded-full border border-border data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary px-5 py-2 font-sans text-sm font-medium transition-all"
                data-ocid="menu.tab"
              >
                {cat.category}
              </TabsTrigger>
            ))}
          </TabsList>

          {menuData.map((cat) => {
            const filtered = filterItems(cat.items);
            return (
              <TabsContent key={cat.category} value={cat.category}>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                  {filtered.length === 0 && (
                    <p
                      className="col-span-full text-center text-muted-foreground py-10"
                      data-ocid="menu.empty_state"
                    >
                      No {filter === "veg" ? "vegetarian" : "non-vegetarian"}{" "}
                      items in this category.
                    </p>
                  )}
                  {filtered.map((item, idx) => {
                    const inCart = cartItems.find((c) => c.name === item.name);
                    const justAdded = addedItems.has(item.name);
                    return (
                      <div
                        key={item.name}
                        className="glass-card-light rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all hover:-translate-y-0.5 flex flex-col group"
                        data-ocid={`menu.item.${idx + 1}`}
                      >
                        {item.image && (
                          <div className="aspect-[16/9] overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />
                          </div>
                        )}
                        <div className="p-4 flex-1 flex flex-col">
                          <div className="flex items-center gap-2 mb-1">
                            <span
                              className={`w-3 h-3 rounded-sm flex-shrink-0 border-2 ${item.isVeg ? "border-green-600" : "border-orange-600"}`}
                              style={{
                                background: item.isVeg ? "#22c55e" : "#ea580c",
                                borderRadius: "2px",
                              }}
                            />
                            <h3 className="font-serif text-base font-semibold">
                              {item.name}
                            </h3>
                            {inCart && (
                              <Badge className="bg-primary/10 text-primary text-xs shrink-0">
                                {inCart.quantity} in cart
                              </Badge>
                            )}
                          </div>
                          <p className="text-muted-foreground text-xs leading-relaxed mb-3 flex-1">
                            {item.desc}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-primary">
                              ₹{item.price}
                            </span>
                            <Button
                              size="sm"
                              onClick={() => handleAdd(item)}
                              className={`shrink-0 transition-all ${
                                justAdded
                                  ? "bg-green-500 text-white"
                                  : "bg-primary text-primary-foreground hover:bg-primary/90"
                              }`}
                              data-ocid={`menu.primary_button.${idx + 1}`}
                            >
                              {justAdded ? (
                                "Added!"
                              ) : (
                                <>
                                  <Plus className="w-4 h-4 mr-1" />
                                  Add
                                </>
                              )}
                            </Button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              </TabsContent>
            );
          })}
        </Tabs>
      </section>
    </main>
  );
}
