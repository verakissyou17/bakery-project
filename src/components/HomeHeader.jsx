import {Link} from 'react-router-dom';
import { useProducts } from "../contexts/useProducts";

function HomeHeader() {
  const {totalQuantity} = useProducts();

  return (
    <header className="header">
      <div className="header-left-section">
        <Link to="/home" className="header-link">
          <h1 className="logo">Riviana Dolce</h1>
          <h3 className="mobile-logo">Riviana Dolce</h3>
        </Link>
      </div>

      <div className="header-middle-section">
        <input className="search-bar" type="text" placeholder="Search" />

        <button className="search-button" name="search-button">
          <img
            className="search-icon"
            src="./src/images/icons/search-icon.png"
            aria-labelledby="search-button"
            alt="search-button"
          />
        </button>
      </div>

      <div className="header-right-section">
        <Link className="orders-link header-link" to="/orders">
          <span className="returns-text">Returns</span>
          <span className="orders-text">& Orders</span>
        </Link>

        <Link className="cart-link header-link" to="/checkout" name="cart-link">
          <img
            className="cart-icon"
            src="./src/images/icons/cart-icon.png"
            alt="cart-icon"
            aria-labelledby="cart-link"
          />
          <div
            className="cart-quantity"
            aria-labelledby="cart-link"
          >
           {totalQuantity}
          </div>
          <div className="cart-text" aria-labelledby="cart-link">
            Cart
          </div>
        </Link>
      </div>
    </header>
  );
}

export default HomeHeader;
