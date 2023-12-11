import { CartIcon } from "../assets/icons";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);

  return (
    <div>
      <nav>
        <div className="nav-center">
          <h3>Welcome. Discover your style!</h3>
          <div className="nav-container">
            <CartIcon />
            <div className="amount-container">
              <p className="total-amount">{amount.toString()}</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
