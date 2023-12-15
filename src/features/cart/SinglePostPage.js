import { useSelector } from "react-redux";
import { selectItemById } from "./cartSlice";
import { AddCart } from "../../assets/icons";
import TimeAgo from "./TimeAgo";
import { useDispatch } from "react-redux";
import { addToCart } from "../cart/cartSlice";
import CartNavbar from "./CartNavbar";

import { useParams } from "react-router-dom";

const SinglePostPage = ({ price }) => {
  //Retrieving itemId from url

  const dispatch = useDispatch();
  const { id: pId } = useParams();
  const product = useSelector((state) => selectItemById(state, parseInt(pId)));

  if (!product) {
    return (
      <section>
        <h2>Item Not Found!</h2>
      </section>
    );
  }

  return (
    <article className="page">
      <CartNavbar />
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} />
      <h4>${product.price}</h4>
      <div className="page-shop">
        <h4>
          <TimeAgo timestamp={product.date} />
        </h4>
        <button
          className="amount-btn"
          onClick={() => {
            dispatch(addToCart({ pId }));
          }}
        >
          <AddCart />
        </button>
      </div>
    </article>
  );
};

export default SinglePostPage;
