import { RES_LOGO } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, sla } = resData?.info;
  return (
    <div className="res-card">
      <img className="res-logo" src={RES_LOGO + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h4>{avgRating}</h4>
      <h4>{sla.deliveryTime} Mins</h4>
      <p>{cuisines.join(", ")}</p>
    </div>
  );
};

export default RestaurantCard;
