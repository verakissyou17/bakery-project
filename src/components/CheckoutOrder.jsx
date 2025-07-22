import { useProducts } from "../contexts/useProducts";
import dayjs from "dayjs";
import { formatPrice } from "../utils/formatPrice";
import { deliveryOptions } from "../data/deliveryOptions";

function OrderSummary() {
  const {
    cart,
    matchingProducts,
    updateCartItemQuantity,
    selectedDeliveryOptionId,
    handleSelectedOptionId
  } = useProducts();

  function handleQuantityChange(productId, newQuantity) {
    updateCartItemQuantity(productId, newQuantity);
  }

  function handleDelete(productId) {
    updateCartItemQuantity(productId, 0);
  }

  return (
    <>
      {matchingProducts.map((matchingProduct) =>
        matchingProduct.quantity > 0 ? (
          <div
            key={matchingProduct.id}
            className="cart-item-container"
          >
            {deliveryOptions.map((option) =>
              option.id === selectedDeliveryOptionId ? (
                <div
                  key={option.id}
                  className="delivery-date"
                >
                  {dayjs()
                    .add(Number(option.deliveryDays), "day")
                    .format("ddd, MMMM D")}
                </div>
              ) : null
            )}
            <div className="cart-item-details-grid">
              <img
                className="checkout-product-image"
                src={matchingProduct.image}
                alt={matchingProduct.name}
              />
              <div className="cart-item-details">
                <div className="checkout-product-name">
                  {matchingProduct.name}
                </div>
                <div className="checkout-product-price">
                  ${formatPrice(matchingProduct.priceCents)}
                </div>
                <div className="home-cart-container">
                  <div className="quantity-container primary-btn">
                    <button
                      onClick={() =>
                        handleQuantityChange(
                          matchingProduct.id,
                          matchingProduct.quantity - 1
                        )
                      }
                    >
                      <img
                        src="./src/images/icons/decrement-quantity.svg"
                        alt="decrement icon"
                      />
                    </button>
                    <span className="quantity">{matchingProduct.quantity}</span>

                    <button
                      onClick={() =>
                        handleQuantityChange(
                          matchingProduct.id,
                          matchingProduct.quantity + 1
                        )
                      }
                    >
                      <img
                        src="./src/images/icons/increment-quantity.svg"
                        alt="increment icon"
                      />
                    </button>
                  </div>

                  <button
                    className="delete-btn primary-btn"
                    onClick={() =>
                      handleDelete(matchingProduct.id, matchingProduct.quantity)
                    }
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : null
      )}

      {cart.length > 0 ? (
        <form className="delivery-options">
          <h1 className="delivery-options-title">Choose a delivery option:</h1>
          {deliveryOptions.map((option) => (
            <label
              key={option.id}
              className="delivery-option"
            >
              {option.id === "1" ? "Pick-up" : "Delivery"}
              <input
                type="radio"
                name="delivery"
                checked={selectedDeliveryOptionId === option.id}
                onChange={() => handleSelectedOptionId(option.id)}
              />
              <div>
                <div className="delivery-option-date">
                  {dayjs()
                    .add(Number(option.deliveryDays), "day")
                    .format("ddd, MMMM D")}
                </div>
                <div className="delivery-option-price">
                  ${(option.priceCents / 100).toFixed(2)}
                </div>
              </div>
            </label>
          ))}
        </form>
      ) : null}
    </>
  );
}

export default OrderSummary;
