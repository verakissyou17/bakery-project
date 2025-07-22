import OrdersHeader from "../components/OrdersHeader";
import OrdersMain from "../components/OrdersMain";
import Footer from "../components/Footer";
import { useProducts } from "../contexts/useProducts";
import { useOrders } from "../contexts/useOrders";

function Orders() {
  const { totalQuantity} = useProducts();
  const { matchingOrders} = useOrders();
  return (
    <>
      <OrdersHeader totalQuantity={totalQuantity} />
      <OrdersMain  matchingOrders={matchingOrders} />
      <Footer />
    </>
  )
}

export default Orders
