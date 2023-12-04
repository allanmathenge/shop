import { ThumbsUp, ThumbsDown, TrashCan } from "../icons";
import { increase, decrease, removeItem } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={image} alt={title} />

      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
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
          dispatch(removeItem(id));
        }}
      >
        <TrashCan />
      </button>
      <hr />
    </article>
  );
};

export default CartItem;
