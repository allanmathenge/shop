import { AddCart } from "../../assets/icons";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { count } = useSelector((store) => store.cart);

  return (
    <div>
      <nav>
        <div className="nav-center">
          <h3>Discover your style!</h3>
          <div className="nav-container">
            <AddCart />
            <div className="amount-container">
              <p className="total-amount">{count.toString()}</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
