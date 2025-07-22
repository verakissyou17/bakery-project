import { useProducts } from "../contexts/useProducts";
import { useOrders } from "../contexts/useOrders";
import { formatPrice } from "../utils/formatPrice";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { getDeliveryOptionById } from "../utils/getDeliveryOption";

function PaymentSummary() {
  const {
    totalQuantity,
    matchingProducts,
    selectedDeliveryOptionId,
    cart,
    setCart,
  } = useProducts();

  const { addOrder } = useOrders();
  const navigate = useNavigate();

    const selectedDeliveryOption = getDeliveryOptionById(
    selectedDeliveryOptionId
  );

  const itemsTotalCents = matchingProducts.reduce((sum, product) => {
    return sum + product.priceCents * product.quantity;
  }, 0);

  const shippingTotalCents = selectedDeliveryOption?.priceCents || 0;

  const subtotalCents = itemsTotalCents + shippingTotalCents;


  function handlePlaceOrder() {
    const orderId = crypto.randomUUID();
    if (cart.length === 0) return;

    try {
      const deliveryDays = selectedDeliveryOption?.deliveryDays;
      const order = {
        id: orderId,
        orderTime: dayjs().toISOString(),
        products: cart.map((cartItem) => ({
          productId: cartItem.productId,
          quantity: cartItem.quantity,
          estimatedDeliveryTime: dayjs()
            .add(Number(deliveryDays), "day")
            .toISOString(),
        })),
        total: subtotalCents,
        deliveryOption: selectedDeliveryOptionId,
      };

      addOrder(order);
      setCart([]);
      localStorage.removeItem("cart");
      navigate("/orders");
    } catch (err) {
      console.error("Unexpected error. Try again later.", err);
    }
  }

  return (
    <>
      <div className="payment-summary-title">Order Summary</div>
      <div className="payment-summary-row">
        <div>Items ({totalQuantity}):</div>
        <div className="payment-summary-money">
          {" "}
          ${formatPrice(itemsTotalCents)}
        </div>
      </div>

      <div className="payment-summary-row">
        <div>Shipping:</div>
        <div className="payment-summary-money">
          ${formatPrice(shippingTotalCents)}
        </div>
      </div>

      <div className="payment-summary-row subtotal-row">
        <div>Total + shipping:</div>
        <div className="payment-summary-money">
          {" "}
          ${formatPrice(subtotalCents)}
        </div>
      </div>

      <div className="payment-summary-row total-row">
        <div>Order total:</div>
        <div className="payment-summary-money">
          ${formatPrice(subtotalCents)}
        </div>
      </div>

      <button
        onClick={handlePlaceOrder}
        className="place-order-button button-primary"
      >
        Place your order
      </button>
    </>
  );
}

export default PaymentSummary;
