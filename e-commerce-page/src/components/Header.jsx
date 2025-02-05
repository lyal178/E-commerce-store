import { Link } from "react-router-dom";
import "../styles.css";
const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <nav className="header-nav">
          <Link to="/" className="header-link">
            Home
          </Link>
          <h1 className="header-title">My Store</h1>
          <Link to="/cart" className="header-link">
            Cart
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
