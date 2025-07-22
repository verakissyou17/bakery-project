import OrderSummary from "./CheckoutOrder";
import PaymentSummary from "./CkeckoutPaymment";
import { useProducts } from "../contexts/useProducts";
import { useOrders } from "../contexts/useOrders";

function CheckoutMain() {
  const {
    cart,
    setCart,
    totalQuantity,
    matchingProducts,
    updateCartItemQuantity,
    selectedDeliveryOptionId,
    handleSelectedOptionId,
  } = useProducts();

  const { addOrder } = useOrders();

  return (
    <main className="checkout-main">
      <h1 className="page-title">Review your order</h1>

      <div className="checkout-grid">
        <div className="order-summary">
          <OrderSummary
            cart={cart}
            matchingProducts={matchingProducts}
            updateCartItemQuantity={updateCartItemQuantity}
            selectedDeliveryOptionId={selectedDeliveryOptionId}
            handleSelectedOptionId={handleSelectedOptionId}
          />
        </div>

        <div className="payment-summary">
          <PaymentSummary
            totalQuantity={totalQuantity}
            cart={cart}
            matchingProducts={matchingProducts}
            updateCartItemQuantity={updateCartItemQuantity}
            selectedDeliveryOptionId={selectedDeliveryOptionId}
            addOrder={addOrder}
            setCart={setCart}
          />
        </div>
      </div>
    </main>
  );
}

export default CheckoutMain;
