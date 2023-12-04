import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";

import { useDispatch, useSelector } from "react-redux";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import { useEffect } from "react";

function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading ...</h1>
      </div>
    );
  }

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;