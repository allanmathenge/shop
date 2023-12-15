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
        <h4>{title}</h4>
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
          <Link to={`${id}`}>
            <h4
              style={{
                color: "maroon",
                border: "1px solid lightblue",
                padding: "4px",
                marginLeft: "15px",
                boxShadow: "0 1px 10px rgba(0, 0, 0, 0.08)",
              }}
            >
              View item
            </h4>
          </Link>
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
    </article>
  );
};

export default CartItem;
