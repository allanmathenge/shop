import { ThumbsUp, AddCart, ThumbsDown } from "../../assets/icons";
import { addToCart, increase, decrease } from "../cart/cartSlice";
import { useDispatch } from "react-redux";
import TimeAgo from "../cart/TimeAgo";
import { Link } from "react-router-dom";

const CartItem = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
  date,
}) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={image} alt={title} />

      <div>
        <Link to={`${id}`}>
          <h4>{title}</h4>
        </Link>
        <div className="price-date">
          <h4 className="item-price">${price}</h4>
          <TimeAgo timestamp={date} />
        </div>
        <div className="inc-dec">
          <button
            className="amount-btn"
            onClick={() => {
              dispatch(increase({ id }));
            }}
          >
            Like
            <ThumbsUp />
          </button>
          <p className="amount-rate">{rating.count}</p>
          <button
            className="amount-btn"
            onClick={() => {
              dispatch(decrease({ id }));
            }}
          >
            Dislike
            <ThumbsDown />
          </button>
          <p className="rate">Rate {rating.rate}</p>
        </div>
      </div>

      <button
        className="amount-btn"
        onClick={() => {
          dispatch(addToCart({ id }));
        }}
      >
        <AddCart />
      </button>
      <hr />
    </article>
  );
};

export default CartItem;
