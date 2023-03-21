import "./List.css";
// import Footer from "../../components/Footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

function List() {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  return (
    <div>
      <Navbar />
      <Header type="List" />
      <div className="list__container">
        <div className="list__wrapper">
          <div className="list__search">
            <h1 className="list__search-title">Search</h1>
            <div className="list__search-item">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="list__search-item">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "dd/MM/yyyy"
              )} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="list__search-item">
              <label>Options</label>
              <div className="list__search-options">
                {/* Start Option */}
                <div className="list__search-option_item">
                  <span className="list__search-option_text">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="list__serch-option_input" />
                </div>
                {/* Start Option */}
                <div className="list__search-option_item">
                  <span className="list__search-option_text">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="list__serch-option_input" />
                </div>
                {/* Start Option */}
                <div className="list__search-option_item">
                  <span className="list__search-option_text">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="list__serch-option_input"
                    placeholder={options.adult}
                  />
                </div>
                {/* Start Option */}
                <div className="list__search-option_item">
                  <span className="list__search-option_text">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="list__serch-option_input"
                    placeholder={options.children}
                  />
                </div>
                {/* Start Option */}
                <div className="list__search-option_item">
                  <span className="list__search-option_text">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="list__serch-option_input"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="list__result">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default List;
