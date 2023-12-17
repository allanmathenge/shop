import CartItem from "./CartItem";
import CartNavbar from "./CartNavbar";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../modal/modalSlice";

const CartContainer = () => {
  const { cartItems, isLoading, total } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  if (isLoading) {
    return (
      <div className="loader">
        <div className="loading"></div>
      </div>
    );
  }

  return (
    <section className="cart">
      <CartNavbar />
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button
          className="btn clear-btn"
          onClick={() => {
            dispatch(openModal());
          }}
        >
          Clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
