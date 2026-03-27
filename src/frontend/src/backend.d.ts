import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Reservation {
    customerName: string;
    date: string;
    specialRequests: string;
    partySize: bigint;
    phoneNumber: string;
    timeSlot: string;
}
export type ReservationId = bigint;
export interface Order {
    customerName: string;
    deliveryType: string;
    notes: string;
    items: Array<[string, bigint]>;
    phoneNumber: string;
}
export type OrderId = bigint;
export interface backendInterface {
    getAllOrders(): Promise<Array<Order>>;
    getAllReservations(): Promise<Array<Reservation>>;
    getOrder(orderId: OrderId): Promise<Order>;
    getReservation(reservationId: ReservationId): Promise<Reservation>;
    submitOrder(order: Order): Promise<OrderId>;
    submitReservation(reservation: Reservation): Promise<ReservationId>;
}
