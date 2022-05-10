import RestaurantCard from "./RestaurantCard";

const RestaurantList = (props) => {
  const restaurants = props.restaurants
  return (
    <ul className="restaurant-list">
      {
        restaurants.map(
          (restaurant, index) => {
            return (
              <RestaurantCard
                key={index}
                name={restaurant.name}
                img={restaurant.image}
                cuisines={restaurant.cuisines}
                cost={restaurant.cost}
                rating={restaurant.rating}
                description={restaurant.description}
              />
            )
          }
        )
      }
    </ul>
  );
}

export default RestaurantList;