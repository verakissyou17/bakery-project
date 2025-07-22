import {Link} from 'react-router-dom';
import { useProducts } from "../contexts/useProducts";

function CheckoutHeader() {
    const {totalQuantity} = useProducts();
  return (
    <header className="checkout-header">
      <div className="header-content">
        <div className="checkout-header-left-section">
          <Link to="/home">
            <h2 className="logo">Riviana Dolce</h2>
            <h3 className="mobile-logo">Riviana Dolce</h3>
          </Link>
        </div>

        <div className="checkout-header-middle-section">
          Products 
          ({totalQuantity}
          )
        </div>
      </div>
    </header>
  );
}

export default CheckoutHeader;
