import { useSelector } from "react-redux";
import { selectItemById } from "./cartSlice";
import TimeAgo from "./TimeAgo";

import { useParams } from "react-router-dom";

const SinglePostPage = () => {
  //Retrieving itemId from url

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
      <h2>{item.title}</h2>
      <img src={item.image} width="100px" alt={item.title} />
      <h4>${item.price}</h4>
      <h4>
        <TimeAgo timestamp={item.date} />
      </h4>
    </article>
  );
};

export default SinglePostPage;
