import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "../components/CheckoutForm";

// Cette ligne permet de vous connecter à votre compte Stripe en fournissant votre clef publique
const stripePromise = loadStripe(
  "pk_test_51R3xqBGPg4QVswmgOEK5o021zJE5klbdzepe0eL5YQ4GRMRn3ePlQhSQxT08N7e2a5tKqDa2T6fD0DtLoWk3n05K004lDhLmeF"
);
// console.log({ stripePromise });

const Payment = ({ infoPayment }) => {
  // console.log(infoPayment);
  const amountToPay = infoPayment.price * 100;
  // console.log(amountToPay);

  const options = {
    // Type de transaction
    mode: "payment",
    // Montant de la transaction
    amount: amountToPay,
    // Devise de la transaction
    currency: "usd",
    // On peut customiser l'apparence ici
    appearance: {
      /*...*/
    },
  };
  return (
    // Le composant Elements doit contenir toute notre logique de paiement
    // On lui donner la preuve que nous sommes connectés et les options de paiement
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm infoPayment={infoPayment} />
    </Elements>
  );
};

export default Payment;
