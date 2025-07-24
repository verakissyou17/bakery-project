import { Link, useParams } from "react-router-dom";
import { useOrders } from "../contexts/useOrders";
import dayjs from "dayjs";

function TrackingMain() {
  const { matchingOrders } = useOrders();
  const { orderId } = useParams();

  const matchingOrder = matchingOrders.filter((order) => order.id === orderId);

  return (
    <main className="tracking-main">
      {matchingOrder.map((order, i) => {
        const orderTime = dayjs(order.orderTime);
        const deliveryTime = dayjs(order.products[i].estimatedDeliveryTime);
        const diff = deliveryTime.diff(orderTime, "hours");
        const elapsedTime = dayjs().diff(orderTime, "hour");
        const percent = Math.min((elapsedTime / diff) * 100, 100);
        return (
          <div
            key={order.id}
            className="order-tracking"
          >
            <Link
              className="back-to-orders-link link-primary"
              to="/orders"
            >
              Toate comenzile
            </Link>
            {order.items.map((item, index) => {
              return (
                <div
                  key={item.name}
                  className="tracking-product"
                >
                  <div className="tracking-product-details">
                    <div className="tracking-delivery-date">
                      Data sosire: {" "}
                      {dayjs(order.products[i].estimatedDeliveryTime).format(
                        "ddd, MMMM D"
                      )}
                    </div>

                    <h1 className="product-info">{item.name}</h1>

                    <div className="product-info">
                      Cantitate: {item.quantity}
                    </div>
                  </div>

                  <img
                    className="tracking-product-image"
                    src={item.image}
                    alt={item.name}
                    width={250}
                    height={250}
                    loading={index === 0 ? undefined : "lazy"}
                    fetchPriority={index === 0 ? "high" : undefined}
                  />
                </div>
              );
            })}
            <div className="progress-labels-container">
              {percent <= 35 ? (
                <div className="progress-label preparing">
                  Preparare {percent.toFixed(2)} %
                </div>
              ) : null}
              {percent > 35 && percent <= 75 ? (
                <div className="progress-label shipped">
                  Preluat curier {percent.toFixed(2)} %
                </div>
              ) : null}
              {percent > 75 ? (
                <div className="progress-label delivered">
                  Livrat {percent.toFixed(2)} %
                </div>
              ) : null}
            </div>
            <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{ width: `${percent}%` }}
              ></div>
            </div>
          </div>
        );
      })}
    </main>
  );
}

export default TrackingMain;
