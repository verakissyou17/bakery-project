import HomeHeader from "../components/HomeHeader";
import HomeMain from "../components/HomeMain";
import Footer from "../components/Footer";
import { useProducts } from "../contexts/useProducts";

function Home() {
  const {
    products,
    cart,
    addToCart,
    quantities,
    setQuantities,
    totalQuantity,
  } = useProducts();
  return (
    <>
      <HomeHeader totalQuantity={totalQuantity} />
      <HomeMain
        products={products}
        quantities={quantities}
        setQuantities={setQuantities}
        cart={cart}
        addToCart={addToCart}
      />
      <Footer />
    </>
  );
}

export default Home;
