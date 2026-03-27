import { createContext, useContext, useState } from "react";

export interface CartItem {
  name: string;
  quantity: number;
  price: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (name: string) => void;
  updateQty: (name: string, qty: number) => void;
  clearCart: () => void;
  isOrderOpen: boolean;
  openOrder: (prefillItem?: Omit<CartItem, "quantity">) => void;
  closeOrder: () => void;
  isReservationOpen: boolean;
  openReservation: () => void;
  closeReservation: () => void;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  const addItem = (item: Omit<CartItem, "quantity">) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.name === item.name);
      if (existing) {
        return prev.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i,
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeItem = (name: string) =>
    setCartItems((prev) => prev.filter((i) => i.name !== name));

  const updateQty = (name: string, qty: number) => {
    if (qty <= 0) {
      removeItem(name);
      return;
    }
    setCartItems((prev) =>
      prev.map((i) => (i.name === name ? { ...i, quantity: qty } : i)),
    );
  };

  const clearCart = () => setCartItems([]);

  const openOrder = (prefillItem?: Omit<CartItem, "quantity">) => {
    if (prefillItem) addItem(prefillItem);
    setIsOrderOpen(true);
  };

  const closeOrder = () => setIsOrderOpen(false);
  const openReservation = () => setIsReservationOpen(true);
  const closeReservation = () => setIsReservationOpen(false);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        removeItem,
        updateQty,
        clearCart,
        isOrderOpen,
        openOrder,
        closeOrder,
        isReservationOpen,
        openReservation,
        closeReservation,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
