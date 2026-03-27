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
import { CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";

const TIME_SLOTS = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
  "9:00 PM",
];

export function ReservationModal() {
  const { isReservationOpen, closeReservation } = useCart();
  const { actor } = useActor();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [partySize, setPartySize] = useState("2");
  const [requests, setRequests] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor) return;
    setLoading(true);
    setError("");
    try {
      const reservation = {
        customerName: name,
        phoneNumber: phone,
        date,
        timeSlot,
        partySize: BigInt(partySize),
        specialRequests: requests,
      };
      await actor.submitReservation(reservation);
      setSuccess(true);
    } catch {
      setError("Failed to submit reservation. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    closeReservation();
    setTimeout(() => {
      setSuccess(false);
      setError("");
      setName("");
      setPhone("");
      setDate("");
      setTimeSlot("");
      setPartySize("2");
      setRequests("");
    }, 300);
  };

  return (
    <Dialog open={isReservationOpen} onOpenChange={handleClose}>
      <DialogContent
        className="max-w-lg max-h-[90vh] overflow-y-auto bg-card"
        data-ocid="reservation.dialog"
      >
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-foreground">
            Reserve a Table
          </DialogTitle>
        </DialogHeader>

        {success ? (
          <div
            className="text-center py-10"
            data-ocid="reservation.success_state"
          >
            <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="font-serif text-xl font-semibold mb-2">
              Reservation Confirmed!
            </h3>
            <p className="text-muted-foreground">
              We look forward to seeing you. A confirmation will be sent to your
              phone.
            </p>
            <Button
              onClick={handleClose}
              className="mt-6 bg-primary text-primary-foreground"
            >
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="res-name">Full Name *</Label>
                <Input
                  id="res-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                  data-ocid="reservation.input"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="res-phone">Phone Number *</Label>
                <Input
                  id="res-phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 XXXXX XXXXX"
                  required
                  data-ocid="reservation.input"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="res-date">Date *</Label>
                <Input
                  id="res-date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  min={new Date().toISOString().split("T")[0]}
                  data-ocid="reservation.input"
                />
              </div>
              <div className="space-y-1">
                <Label>Party Size *</Label>
                <Select value={partySize} onValueChange={setPartySize}>
                  <SelectTrigger data-ocid="reservation.select">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                      <SelectItem key={n} value={String(n)}>
                        {n} {n === 1 ? "person" : "people"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-1">
              <Label>Time Slot *</Label>
              <Select value={timeSlot} onValueChange={setTimeSlot} required>
                <SelectTrigger data-ocid="reservation.select">
                  <SelectValue placeholder="Select a time" />
                </SelectTrigger>
                <SelectContent>
                  {TIME_SLOTS.map((t) => (
                    <SelectItem key={t} value={t}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1">
              <Label htmlFor="res-requests">Special Requests</Label>
              <Textarea
                id="res-requests"
                value={requests}
                onChange={(e) => setRequests(e.target.value)}
                placeholder="Dietary requirements, occasion, seating preferences..."
                rows={3}
                data-ocid="reservation.textarea"
              />
            </div>

            {error && (
              <p
                className="text-destructive text-sm"
                data-ocid="reservation.error_state"
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
                data-ocid="reservation.cancel_button"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={loading || !timeSlot || !date}
                className="flex-1 bg-secondary text-secondary-foreground"
                data-ocid="reservation.submit_button"
              >
                {loading ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : null}
                {loading ? "Reserving..." : "Confirm Reservation"}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
