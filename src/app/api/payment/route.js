import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_STRIPE_PRIVATE_KEY, {
  apiVersion: "2022-11-15", // asegúrate de usar la versión adecuada
});

export async function POST(request) {
  try {
    const { payment_method_id, amount } = await request.json();

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // convertir a centavos
      currency: "usd",
      payment_method: payment_method_id,
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: "never",
      },
      confirm: true,
    });

    if (
      paymentIntent.status === "requires_action" &&
      paymentIntent.next_action?.type === "use_stripe_sdk"
    ) {
      return NextResponse.json(
        {
          requires_action: true,
          payment_intent_client_secret: paymentIntent.client_secret,
        },
        { status: 200 }
      );
    } else if (paymentIntent.status === "succeeded") {
      return NextResponse.json(
        {
          success: true,
          date_end: null,
        },
        { status: 202 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "El pago no fue procesado correctamente",
      },
      { status: 400 }
    );
  } catch (error) {
    console.error("Stripe payment error:", error);

    let message = "Ha ocurrido un error con el pago";
    if (error.code === "card_declined") message = "El pago ha sido rechazado";
    else if (error.code === "expired_card")
      message = "La tarjeta ha expirado, comuníquese con su entidad bancaria";
    else if (error.code === "incorrect_cvc")
      message = "El código CVC es incorrecto";
    else if (error.code === "processing_error")
      message = "Error de procesamiento, inténtelo de nuevo.";
    else if (error.code === "incorrect_number")
      message = "Número de tarjeta incorrecto";

    return NextResponse.json({ error: error.code, message }, { status: 500 });
  }
}
