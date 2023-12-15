import { useSelector } from "react-redux";
import { selectItemById } from "./cartSlice";
import { AddCart } from "../../assets/icons";
import TimeAgo from "./TimeAgo";
import { useDispatch } from "react-redux";
import { addToCart } from "../cart/cartSlice";
import CartNavbar from "./CartNavbar";

import { useParams } from "react-router-dom";

const SinglePostPage = () => {
  //Retrieving itemId from url

  const dispatch = useDispatch();
  const { id } = useParams();
  const item = useSelector((state) => selectItemById(state, parseInt(id)));

  if (!item) {
    return (
      <section>
        <h2>Item Not Found!</h2>
      </section>
    );
  }

  return (
    <article className="page">
      <CartNavbar />
      <h3>{item.title}</h3>
      <img src={item.image} alt={item.title} />
      <h4>${item.price}</h4>
      <div className="page-shop">
        <h4>
          <TimeAgo timestamp={item.date} />
        </h4>
        <button
          className="amount-btn"
          onClick={() => {
            dispatch(addToCart({ id }));
          }}
        >
          <AddCart />
        </button>
      </div>
    </article>
  );
};

export default SinglePostPage;
