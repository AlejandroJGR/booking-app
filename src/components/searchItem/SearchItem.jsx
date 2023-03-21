import React from "react";
import "./SearchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem__container">
      <img
        src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="hotel"
        className="searchItem__img"
      />
      <div className="searchItem__description">
        <h1 className="searchItem__desc-title">Tower Street Apartments</h1>
        <span className="searchItem__desc-distance">500m from center</span>
        <span className="searchItem__desc-taxiOption">Free airport taxi</span>
        <span className="searchItem__desc-subtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="searchItem__desc-features">
          Entire studio + 1 bathroom + 21m² 1 full bed
        </span>
        <span className="searchItem__desc-cancelOption">Free cancellation</span>
        <span className="searchItem__desc-cancelOption__subtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="searchItem__details">
        <div className="searchItem__rating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="searchItem__details-text">
          <span className="searchItem__details-price">$123</span>
          <span className="seachItem__details-taxOption">
            Includes taxes and fees
          </span>
          <button className="seachItem__details-checkButton">
            See availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
