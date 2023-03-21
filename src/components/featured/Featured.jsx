import "./Featured.css";
import featuredItem from "../../data/featuredItems";

const Featured = () => {
  return (
    <div className="featured__container">
      {featuredItem.map((item, index) => (
        <div className="featured__item" key={index + 1}>
          <img
            src={item.imgUrl}
            alt="featured"
            className="featured__img"
          />
          <div className="featured__title">
            <h1>{item.featuredTitle}</h1>
            <h2>{item.featuredSubtitle}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Featured;
