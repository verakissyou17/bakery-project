import { useProducts } from "../contexts/useProducts";
import { formatPrice } from "../utils/formatPrice";

function HomeMain() {
   const { products, setQuantities, quantities, addToCart} = useProducts();

  function incrementQuantity(productId) {
    setQuantities((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  }

  function decrementQuantity(productId) {
    setQuantities((prev) => {
      const currentQty = prev[productId] || 0;
      if (currentQty <= 0) return prev;
      return {
        ...prev,
        [productId]: currentQty - 1,
      };
    });
  }
  return (
    <main className="main">
      <div className="products-container">
        {products.map((product) => {
          const productQty = quantities[product.id] || 0;
          return (
            <div
              className="product-container"
              key={product.id}
            >
              <div className="product-image-container">
                <img
                  className="product-image"
                  src={product.image}
                  alt={product.name}
                />
              </div>
              <section className="product-details">
                <div className="product-name">
                  <h1>{product.name}</h1>
                </div>

                <div className="product-price">
                  ${formatPrice(product.priceCents)}
                </div>

                <div className="home-cart-container">
                  <div className="quantity-container primary-btn">
                    <button name="decrement-quantity" onClick={() => decrementQuantity(product.id)}>
                      <img
                        src="/bakery-project/images/icons/decrement-quantity.svg"
                        alt="decrement icon"
                        aria-labelledby="decrement-quantity"
                      />
                    </button>
                    <span className="quantity">{productQty}</span>
                    <button name="increment-quantity" onClick={() => incrementQuantity(product.id)}>
                      <img
                        src="/bakery-project/images/icons/increment-quantity.svg"
                        alt="increment icon"
                        aria-labelledby="increment-quantity"
                      />
                    </button>
                  </div>

                  <button
                    className="add-to-cart-btn primary-btn"
                    onClick={() => addToCart(product.id, productQty)}
                  >
                    Add To Cart
                  </button>
                </div>

                <div className="added-to-cart">
                  <img
                    src="/bakery-project/images/icons/checkmark.png"
                    alt="checkmark-icon"
                  />
                  Added
                </div>
              </section>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default HomeMain;
