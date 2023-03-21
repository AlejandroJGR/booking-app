import {
  faBed,
  faCalendarDays,
  faCar,
  faMountainCity,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { useState } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]:
          operation === "increase" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };
  return (
    <div className="header">
      <div
        className={
          type === "List" ? "header__container list__mode" : "header__container"
        }
      >
        <div className="header__list">
          <div className="header__list-item active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="header__list-item">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="header__list-item">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>
          <div className="header__list-item">
            <FontAwesomeIcon icon={faMountainCity} />
            <span>Attractions</span>
          </div>
          <div className="header__list-item">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
          </div>
        </div>
        {type !== "List" && (
          <>
            <h1 className="header__title">
              A lifetime of discounts? It's Genius
            </h1>
            <p className="header__desc">
              Get rewarded for your travels - unlock instant savings of 10% or
              more with a free alebooking account
            </p>
            <button className="header__button"> Sign In / Register</button>
            <div className="header__search">
              <div className="header__search-item">
                <FontAwesomeIcon icon={faBed} className="header__icon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="header__search-input"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="header__search-item">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="header__icon"
                />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="header__search-text"
                >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="header__searcht-text__date-picker"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="header__search-item">
                <FontAwesomeIcon icon={faPerson} className="header__icon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="header__search-text"
                >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                {/* Room options */}
                {openOptions && (
                  <div className="header__options">
                    <div className="option__item">
                      <span className="option__item-text">Adult</span>
                      <div className="option__counter">
                        <button
                          className="option__counter-button"
                          onClick={() => handleOption("adult", "decrease")}
                          disabled={options.adult <= 1}
                        >
                          -
                        </button>
                        <span className="option__counter-number">
                          {options.adult}
                        </span>
                        <button
                          className="option__counter-button"
                          onClick={() => handleOption("adult", "increase")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    {/* children option */}
                    <div className="option__item">
                      <span className="option__item-text">Children</span>
                      <div className="option__counter">
                        <button
                          className="option__counter-button"
                          onClick={() => handleOption("children", "decrease")}
                          disabled={options.children <= 0}
                        >
                          -
                        </button>
                        <span className="option__counter-number">
                          {options.children}
                        </span>
                        <button
                          className="option__counter-button"
                          onClick={() => handleOption("children", "increase")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    {/* Room option */}
                    <div className="option__item">
                      <span className="option__item-text">Room</span>
                      <div className="option__counter">
                        <button
                          className="option__counter-button"
                          onClick={() => handleOption("room", "decrease")}
                          disabled={options.room <= 1}
                        >
                          -
                        </button>
                        <span className="option__counter-number">
                          {options.room}
                        </span>
                        <button
                          className="option__counter-button"
                          onClick={() => handleOption("room", "increase")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="header__search-item">
                <button className="header__button" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>{" "}
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
