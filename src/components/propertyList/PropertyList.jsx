import "./PropertyList.css";
import propertyListItems from "../../data/propertyListItems";

function PropertyList() {
  return (
    <div className="property__list-container">
      {propertyListItems.map((item, index) => (
        <div className="property__list-item" key={index + 1}>
          <img
            src={item.imgUrl}
            alt="property item"
            className="property__list-img"
          />
          <div className="property__list-title">
            <h1>{item.featuredTitle}</h1>
            <h2>{item.featuredSubtitle}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PropertyList;
