import Map "mo:core/Map";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";
import Text "mo:core/Text";
import Nat "mo:core/Nat";

actor {
  type Order = {
    customerName : Text;
    phoneNumber : Text;
    deliveryType : Text;
    items : [(Text, Nat)];
    notes : Text;
  };

  type Reservation = {
    customerName : Text;
    phoneNumber : Text;
    date : Text;
    timeSlot : Text;
    partySize : Nat;
    specialRequests : Text;
  };

  module Reservation {
    public func compare(reservation1 : Reservation, reservation2 : Reservation) : Order.Order {
      Text.compare(reservation1.date, reservation2.date);
    };
  };

  type OrderId = Nat;
  type ReservationId = Nat;

  let orders = Map.empty<OrderId, Order>();
  let reservations = Map.empty<ReservationId, Reservation>();

  var nextOrderId = 0;
  var nextReservationId = 0;

  func getOrderInternal(orderId : OrderId) : Order {
    switch (orders.get(orderId)) {
      case (null) { Runtime.trap("Order does not exist") };
      case (?order) { order };
    };
  };

  func getReservationInternal(reservationId : ReservationId) : Reservation {
    switch (reservations.get(reservationId)) {
      case (null) { Runtime.trap("Reservation does not exist") };
      case (?reservation) { reservation };
    };
  };

  public shared ({ caller }) func submitOrder(order : Order) : async OrderId {
    let orderId = nextOrderId;
    nextOrderId += 1;
    orders.add(orderId, order);
    orderId;
  };

  public query ({ caller }) func getOrder(orderId : OrderId) : async Order {
    getOrderInternal(orderId);
  };

  public query ({ caller }) func getAllOrders() : async [Order] {
    orders.values().toArray();
  };

  public shared ({ caller }) func submitReservation(reservation : Reservation) : async ReservationId {
    let reservationId = nextReservationId;
    nextReservationId += 1;
    reservations.add(reservationId, reservation);
    reservationId;
  };

  public query ({ caller }) func getReservation(reservationId : ReservationId) : async Reservation {
    getReservationInternal(reservationId);
  };

  public query ({ caller }) func getAllReservations() : async [Reservation] {
    reservations.values().toArray().sort();
  };
};
