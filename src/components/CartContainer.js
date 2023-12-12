import CartItem from "./CartItem";
import CartNavbar from "./CartNavbar";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, getCartItems } from "../features/cart/cartSlice";
import { useEffect } from "react";

const CartContainer = () => {
  const { cartItems, isLoading, total, amount } = useSelector(
    (store) => store.cart
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="loader">
        <div className="loading"></div>
      </div>
    );
  }

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your shopping cart</h2>
          <h4 className="empty">is empty!</h4>
        </header>
      </section>
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
        <button className="btn clear-btn" onClick={() => dispatch(clearCart())}>
          Clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
