import { Link } from "react-router-dom";
import { useProducts } from "../contexts/useProducts";
import {
  HeaderStyled,
  LogoStyled,
  MobileLogoStyled,
} from "../styles/Header.styled";

function Header() {
  const { totalQuantity } = useProducts();

  return (
    <HeaderStyled>
      <div className="header-left-section">
        <Link
          to="/home"
          className="header-link"
        >
          <LogoStyled>Riviana Dolce</LogoStyled>
          <MobileLogoStyled>
            Riviana Dolce
          </MobileLogoStyled>
        </Link>
      </div>

      <div className="header-middle-section">
        <input
          className="search-bar"
          type="text"
          placeholder="Cauta..."
        />

        <button
          className="search-button"
          name="search-button"
        >
          <img
            className="search-icon"
            src="/bakery-project/images/icons/search-icon.svg"
            aria-labelledby="search-button"
            alt="search-button"
            width={24}
            height={24}
          />
        </button>
      </div>

      <div className="header-right-section">
        <Link
          className="orders-link header-link"
          to="/orders"
        >
          <span className="returns-text">Retururi</span>
          <br />
          <span className="orders-text">& Comenzi</span>
        </Link>

        <Link
          className="cart-link header-link"
          to="/checkout"
          name="cart-link"
        >
          <img
            className="cart-icon"
            src="/bakery-project/images/icons/cart-icon.webp"
            alt="cart-icon"
            aria-labelledby="cart-link"
            width={60}
            height={40}
          />
          <div
            className="cart-quantity"
            aria-labelledby="cart-link"
          >
            {totalQuantity}
          </div>
          <div
            className="cart-text"
            aria-labelledby="cart-link"
          >
            Cart
          </div>
        </Link>
      </div>
    </HeaderStyled>
  );
}

export default Header;
