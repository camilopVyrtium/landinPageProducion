"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Payment from "./payment";
import { Suspense } from "react";
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY); // Usa la clave pública

export default function PaymentPage() {
  return (
    <Elements stripe={stripePromise}>
      <Suspense fallback={<div>Cargando...</div>}>
        <Payment />
      </Suspense>
    </Elements>
  );
}
