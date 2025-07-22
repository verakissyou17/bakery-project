import TrackingHeader  from "../components/TrackingHeader";
import TrackingMain from "../components/TrackingMain";
import Footer from "../components/Footer";
import { useProducts } from "../contexts/useProducts";
import { useOrders } from "../contexts/useOrders";

function Tracking() {
    const { totalQuantity} = useProducts();
  const { matchingOrders} = useOrders();
  return (
    <>
    <TrackingHeader totalQuantity={totalQuantity} />
    <TrackingMain matchingOrders={matchingOrders}/>
    <Footer />
    </>
  )
}

export default Tracking
