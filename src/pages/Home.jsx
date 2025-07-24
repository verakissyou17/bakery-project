import Header from "../components/Header";
import HomeMain from "../components/HomeMain";
import Footer from "../components/Footer";
import { useProducts } from "../contexts/useProducts";
import FeaturedProduct from "../components/FeaturedProduct";

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
      <FeaturedProduct />
      <Header totalQuantity={totalQuantity} />
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
