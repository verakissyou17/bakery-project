import { Link } from "react-router-dom";
import { useOrders } from "../contexts/useOrders";
import { formatPrice } from "../utils/formatPrice";
import dayjs from "dayjs";

function OrdersMain() {
  const { matchingOrders } = useOrders();

  return (
    <main className="orders-main">
      <div className="orders-page-title">Your Orders</div>
      <div className="orders-grid">
        {matchingOrders.map((matchingOrder) => {
          return (
            <div
              className="order-container"
              key={matchingOrder.id}
            >
              <div className="order-header">
                <div className="order-header-left-section">
                  <div className="order-date">
                    <div className="order-header-label">Order Placed:</div>
                    <div>
                      {dayjs(matchingOrder.orderTime).format("ddd,  MMMM D")}
                    </div>
                  </div>
                  <div className="order-total">
                    <div className="order-header-label">Total:</div>
                    <div>${formatPrice(matchingOrder.total)}</div>
                  </div>
                </div>

                <div className="order-header-right-section">
                  <div className="order-header-label">Order ID:</div>
                  <div>{matchingOrder.id}</div>
                </div>
              </div>

              <div className="order-details-grid">
                {matchingOrder.items.map((item, index) => (
                  <div
                    className="order-product"
                    key={item.id}
                  >
                    <div className="orders-product-image-container">
                      <img
                        className="orders-product-image"
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        width={250}
                        height={250}
                      />
                    </div>
                    <div className="orders-product-details">
                      <div className="orders-product-name">{item.name}</div>
                      <div className="orders-product-delivery-date">
                        Arriving on:{" "}
                        {dayjs(
                          matchingOrder.products[index].estimatedDeliveryTime
                        ).format("ddd, MMMM D")}
                      </div>
                      <div className="orders-product-quantity">
                        Quantity: {item.quantity}
                      </div>
                      <Link to={`/home/${item.name}`} className="buy-again-button" >
                        <img
                          className="buy-again-icon"
                          src="/bakery-project/images/icons/buy-again.webp"
                          alt="Buy again"
                          loading="lazy"

                        />
                        <span className="buy-again-message">Buy it again</span>
                      </Link>
                    </div>
                  </div>
                ))}

                {matchingOrder.deliveryOption === "2" && (
                  <div className="product-actions">
                    <Link to={`/tracking/${matchingOrder.id}`}>
                      <button className="track-package-button button-secondary">
                        Track package
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default OrdersMain;
