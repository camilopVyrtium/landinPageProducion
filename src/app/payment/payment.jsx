"use client";
import { useState, useRef, useEffect } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";
import products from "../api/data/product";
import { useSearchParams } from "next/navigation";
const Payment = ({ userToken }) => {
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();
  const toast = useRef(null);

  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("stripe"); // Estado para seleccionar Hotmart o Stripe
  const [formData, setFormData] = useState({ nameCard: "" });

  const searchParams = useSearchParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const code = searchParams.get("code");

    if (!code) {
      router.push("/404");
      return;
    }

    const foundProduct = products.find((p) => p.nomenclatura === code);

    if (!foundProduct) {
      router.push("/404");
      return;
    }

    setProduct(foundProduct);
  }, [searchParams, router]);

  const postData = async (url, data) => {
    const res = await fetch(`/api/${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return res.json();
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleStripePayment = async (e) => {
    e.preventDefault();
    if (!formData.nameCard.trim()) {
      console.log("Por favor, ingresa el nombre del titular de la tarjeta");
      return;
    }
    if (!stripe || !elements) return;

    try {
      setLoading(true);
      const cardNumberElement = elements.getElement(CardNumberElement);
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardNumberElement,
        billing_details: { name: formData.nameCard },
      });

      if (error) {
        // toast.current.show({
        //   severity: "error",
        //   summary: "Error",
        //   detail: error.message,
        // });
        console.log("error", error);
        return;
      }

      const transactionData = {
        payment_method_id: paymentMethod.id,
        amount: product.precio,
      };
      const response = await postData("payment", transactionData);

      if (response.requires_action) {
        const { error: confirmError, paymentIntent } =
          await stripe.confirmCardPayment(
            response.payment_intent_client_secret
          );
        if (confirmError) {
          // toast.current.show({
          //   severity: "error",
          //   summary: "Error",
          //   detail: confirmError.message,
          // });
          setLoading(false);
          return;
        }

        const finalResponse = await postData("payment/stripe/confirm", {
          payment_intent_id: paymentIntent.id,
        });

        if (finalResponse.success) {
          // toast.current.show({
          //   severity: "success",
          //   summary: "Éxito",
          //   detail: "Pago realizado correctamente",
          // });
          console.log("pago realizado");
          // setTimeout(() => {
          //   router.push("/app/payment/result");
          // }, 1000);
        } else {
          // toast.current.show({
          //   severity: "error",
          //   summary: "Error",
          //   detail: "Hubo un problema al confirmar el pago",
          // });
          console.log("Hubo un problema al confirmar el pago");
        }
      } else {
        if (response.statusCode == 505) {
          // toast.current.show({
          //   severity: "error",
          //   summary: response.error,
          //   detail: response.message,
          // });

          console.log("response.message", response.message);
        } else {
          // toast.current.show({
          //   severity: "success",
          //   summary: "Éxito",
          //   detail: "Pago realizado correctamente",
          // });
          console.log("pago realizado");
          setTimeout(() => {
            router.push(`/app/payment/result?success=true`);
          }, 500);
        }
      }
    } catch (error) {
      // toast.current.show({
      //   severity: "error",
      //   summary: "Error",
      //   detail: error.message,
      // });
      console.log("error", error.message);
    } finally {
      setLoading(false);
    }
  };
  const stripeInputStyle = {
    style: {
      base: {
        color: "white",
        backgroundColor: "transparent",
        fontSize: "18px",
        "::placeholder": {
          color: "#A0A0A0",
        },
        border: "1px solid white",
        borderRadius: "8px",
        padding: "10px",
      },
      invalid: {
        color: "#FF5252",
      },
    },
  };

  const handleHotmartPayment = () => {
    window.location.href = "https://pay.hotmart.com/example"; // Reemplaza con tu URL de pago de Hotmart
  };

  function formatearClave(clave) {
    return clave.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  }
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white py-20">
      {/* <Toast ref={toast} /> */}
      <div className="flex justify-center mb-4">
        <img src="/Logo.svg" alt="vyrtium" className="h-20" />
      </div>

      <div className="flex flex-col md:flex-row gap-4 w-full">
        <div className="w-full md:w-1/2 px-10">
          <div className="text-gray2 p-8 rounded-lg w-full shadow-lg border border-blue2">
            <h2 className="text-xl font-bold mb-4">Detalles del producto</h2>

            {product &&
              Object.entries(product).map(([key, value]) => (
                <p key={key} className="mb-2">
                  <strong>{formatearClave(key)}:</strong>{" "}
                  {key === "precio" ? `$${value}` : value}
                </p>
              ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 px-10">
          <div className="text-gray2 p-8 rounded-lg w-full shadow-lg border border-blue2">
            <h2 className="text-xl font-bold mb-4">Registra tu pago</h2>

            <p className="text-lg mb-4 leading-none">
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            </p>

            {paymentMethod === "stripe" && (
              <form onSubmit={handleStripePayment} className="space-y-4">
                <label className="block text-gray2 text-lg mb-1">
                  Nombre de la tarjeta
                </label>
                <input
                  id="nameCard"
                  name="nameCard"
                  value={formData.nameCard}
                  onChange={handleChange}
                  className="w-full mb-2 text-[#000] border border-blue2 rounded p-2"
                />

                <label className="block text-gray2 text-lg mb-1">
                  Número de la tarjeta
                </label>
                <div className="p-2 text-white rounded border border-blue2">
                  <CardNumberElement
                    options={{
                      style: {
                        base: {
                          color: "#000",
                          fontSize: "16px",
                          "::placeholder": {
                            color: "#c3c3ce",
                          },
                        },
                        invalid: {
                          color: "#ff4d4f",
                        },
                      },
                    }}
                  />
                </div>

                <div className="flex space-x-2">
                  <div className="w-1/2">
                    <label className="block text-gray2 text-lg mb-1">
                      Fecha de vencimiento
                    </label>
                    <div className="p-2 text-white rounded border border-blue2">
                      <CardExpiryElement
                        options={{
                          style: {
                            base: {
                              color: "#000",
                              fontSize: "16px",
                              "::placeholder": {
                                color: "#c3c3ce",
                              },
                            },
                            invalid: {
                              color: "#ff4d4f",
                            },
                          },
                        }}
                      />
                    </div>
                  </div>
                  <div className="w-1/2">
                    <label className="block text-gray2 text-lg mb-1">
                      Código CVC
                    </label>
                    <div className="p-2 text-white rounded border border-blue2">
                      <CardCvcElement
                        options={{
                          style: {
                            base: {
                              color: "#000",
                              fontSize: "16px",
                              "::placeholder": {
                                color: "#c3c3ce",
                              },
                            },
                            invalid: {
                              color: "#ff4d4f",
                            },
                          },
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-center items-center">
                  <button
                    type="submit"
                    disabled={!stripe || loading || !product?.precio}
                    className="pt-2 mt-2 2xl:text-2xl 3xl:text-3xl font-bold bg-red1 text-yellow4 min-h-[36px] font-bold py-1 px-4 rounded-tl-lg rounded-tr-lg rounded-br-lg inline-block hover:bg-red2"
                  >
                    {loading ? "Procesando..." : "Confirmar"}
                  </button>
                </div>
                <div className="flex justify-center items-center">
                  <span className="text-3xl font-bold">
                    Total ${product?.precio}
                  </span>
                </div>
              </form>
            )}

            {paymentMethod === "hotmart" && (
              <button
                onClick={handleHotmartPayment}
                className="w-full bg-yellow-500 text-white font-bold py-2 rounded hover:bg-yellow-600 transition"
              >
                Pagar con Hotmart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
