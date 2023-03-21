import featuredProperties from "../../data/featuredProperties";
import "./FeaturedProperties.css"

const FeaturedProperties = () => {
  return (
    <div className="f-properties__container">
      {featuredProperties.map((item, index) => (
        <div className="f-property__item" key={index}>
          <img
            src={item.imgUrl}
            alt="featured property"
            className="f-property__Img"
          />
          <span className="f-property__Name">{item.featuredName}</span>
          <span className="f-property__City">{item.featuredCity}</span>
          <span className="f-property__Price">{item.featuredPrice}</span>
          <div className="f-property__Rating">
            <button>{item.featuredRatingNumber}</button>
            <span>{item.featuredRatingTitle}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProperties;
