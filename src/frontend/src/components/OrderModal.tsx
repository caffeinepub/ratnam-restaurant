import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useCart } from "@/context/CartContext";
import { useActor } from "@/hooks/useActor";
import { CheckCircle2, Loader2, Minus, Plus, Trash2 } from "lucide-react";
import { useState } from "react";

export function OrderModal() {
  const {
    isOrderOpen,
    closeOrder,
    cartItems,
    updateQty,
    removeItem,
    clearCart,
  } = useCart();
  const { actor } = useActor();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [deliveryType, setDeliveryType] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const total = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor) return;
    if (cartItems.length === 0) {
      setError("Please add items to your order.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const order = {
        customerName: name,
        phoneNumber: phone,
        deliveryType,
        notes,
        items: cartItems.map(
          (i) => [i.name, BigInt(i.quantity)] as [string, bigint],
        ),
      };
      await actor.submitOrder(order);
      setSuccess(true);
      clearCart();
    } catch {
      setError("Failed to submit order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    closeOrder();
    setTimeout(() => {
      setSuccess(false);
      setError("");
      setName("");
      setPhone("");
      setDeliveryType("");
      setNotes("");
    }, 300);
  };

  return (
    <Dialog open={isOrderOpen} onOpenChange={handleClose}>
      <DialogContent
        className="max-w-lg max-h-[90vh] overflow-y-auto bg-card"
        data-ocid="order.dialog"
      >
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-foreground">
            Your Order
          </DialogTitle>
        </DialogHeader>

        {success ? (
          <div className="text-center py-10" data-ocid="order.success_state">
            <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="font-serif text-xl font-semibold mb-2">
              Order Placed!
            </h3>
            <p className="text-muted-foreground">
              Thank you! We'll prepare your order shortly.
            </p>
            <Button
              onClick={handleClose}
              className="mt-6 bg-primary text-primary-foreground"
            >
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Cart Items */}
            {cartItems.length === 0 ? (
              <div
                className="text-center py-8 text-muted-foreground"
                data-ocid="order.empty_state"
              >
                <p>No items in your order yet.</p>
                <p className="text-sm mt-1">Go to the menu to add dishes!</p>
              </div>
            ) : (
              <div className="space-y-3">
                {cartItems.map((item, idx) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between gap-3 bg-muted p-3 rounded-lg"
                    data-ocid={`order.item.${idx + 1}`}
                  >
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">
                        {item.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        ₹{item.price} each
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => updateQty(item.name, item.quantity - 1)}
                        className="w-7 h-7 rounded-full bg-card border flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                        data-ocid={`order.secondary_button.${idx + 1}`}
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-6 text-center font-semibold text-sm">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQty(item.name, item.quantity + 1)}
                        className="w-7 h-7 rounded-full bg-card border flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                        data-ocid={`order.primary_button.${idx + 1}`}
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        type="button"
                        onClick={() => removeItem(item.name)}
                        className="w-7 h-7 rounded-full text-destructive hover:bg-destructive hover:text-white transition-colors flex items-center justify-center"
                        data-ocid={`order.delete_button.${idx + 1}`}
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                    <span className="font-semibold text-sm w-16 text-right">
                      ₹{item.price * item.quantity}
                    </span>
                  </div>
                ))}
                <div className="flex justify-between font-semibold pt-2 border-t border-border">
                  <span>Total</span>
                  <span className="text-primary">₹{total}</span>
                </div>
              </div>
            )}

            {/* Form Fields */}
            <div className="space-y-4 pt-2 border-t border-border">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor="order-name">Your Name *</Label>
                  <Input
                    id="order-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full name"
                    required
                    data-ocid="order.input"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="order-phone">Phone Number *</Label>
                  <Input
                    id="order-phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 XXXXX XXXXX"
                    required
                    data-ocid="order.input"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <Label>Delivery Type *</Label>
                <Select
                  value={deliveryType}
                  onValueChange={setDeliveryType}
                  required
                >
                  <SelectTrigger data-ocid="order.select">
                    <SelectValue placeholder="Select delivery type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Dine-In">Dine-In</SelectItem>
                    <SelectItem value="Takeaway">Takeaway</SelectItem>
                    <SelectItem value="Delivery">Delivery</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1">
                <Label htmlFor="order-notes">Special Notes</Label>
                <Textarea
                  id="order-notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Allergies, spice level, special requests..."
                  rows={3}
                  data-ocid="order.textarea"
                />
              </div>
            </div>

            {error && (
              <p
                className="text-destructive text-sm"
                data-ocid="order.error_state"
              >
                {error}
              </p>
            )}

            <div className="flex gap-3 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                className="flex-1"
                data-ocid="order.cancel_button"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={loading || !deliveryType || cartItems.length === 0}
                className="flex-1 bg-primary text-primary-foreground"
                data-ocid="order.submit_button"
              >
                {loading ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : null}
                {loading ? "Placing Order..." : "Place Order"}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
