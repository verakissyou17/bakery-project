import OrderSummary from "./OrderSummary";
import PaymentSummary from "./PaymentSummary";
import { useProducts } from "../contexts/useProducts";
import { useOrders } from "../contexts/useOrders";
import { CheckoutMainStyled } from "../styles/CheckoutMain.styled";

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
    <CheckoutMainStyled>
      <h1 className="page-title">Cos de cumparaturi</h1>

      <div className="checkout-grid">
        <OrderSummary
          matchingProducts={matchingProducts}
          updateCartItemQuantity={updateCartItemQuantity}
          selectedDeliveryOptionId={selectedDeliveryOptionId}
        />

        {cart.length > 0 && (
          <PaymentSummary
            totalQuantity={totalQuantity}
            matchingProducts={matchingProducts}
            selectedDeliveryOptionId={selectedDeliveryOptionId}
            handleSelectedOptionId={handleSelectedOptionId}
            cart={cart}
            setCart={setCart}
            addOrder={addOrder}
          />
        )}
      </div>
    </CheckoutMainStyled>
  );
}

export default CheckoutMain;
