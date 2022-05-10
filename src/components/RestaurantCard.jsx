import Rating from "./Rating";

const RestaurantCard = (props) => {
  const { index, name, img, cost, rating, cuisines, description } = props;
  return (
    <li key={index}>
      <img src={img} alt={name} />
      <div className="resto-info">
        <div className="resto-name">{name}</div>
        <Rating rating={rating} />
        <div className="cost">{cost}</div>
        <div className="cuisines">{cuisines.join(", ")}</div>
        <div className="description">{description}</div>
      </div>
    </li>
  );
}

export default RestaurantCard;