import "./Hotel.css";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import MailList from "../../components/MailsList/MailList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleLeft,
  faCircleRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function Hotel() {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const images = [
    {
      src: "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      src: "https://images.pexels.com/photos/244133/pexels-photo-244133.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      src: "https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      src: "https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      src: "https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      src: "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const handleOpen = (key) => {
    setSlideNumber(key);
    setOpen(true);
  };
  const handleMove = (direction) =>{
    let newSlideNumber;
    if( direction ===  "l"){
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
    }else{
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
    }

    setSlideNumber(newSlideNumber)
  }

  return (
    <div>
      <Navbar />
      <Header type="List" />
      <div className="hotel__container">
        {open && (
          <div className="hotel__slider">
            <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
            <FontAwesomeIcon icon={faCircleLeft} className="arrow" onClick={()=>handleMove("l")}/>
            <div className="hotel__slider-wrapper">
              <img
                src={images[slideNumber].src}
                alt="hotel"
                className="slider__image"
              />
            </div>
            <FontAwesomeIcon icon={faCircleRight} className="arrow" onClick={()=>handleMove("r")}/>
          </div>
        )}
        <div className="hotel__wrapper">
          <button className="book-button">Reserve or Book NOW!</button>
          <h1 className="hotel__title">Grand Hotel</h1>
          <div className="hotel__address">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotel__distance">
            Excellent location - 500m from center
          </span>
          <span className="hotel__price-highlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotel__images">
            {images.map((image, key) => (
              <div className="hotel__img-wrapper">
                <img
                  onClick={() => handleOpen(key)}
                  className="hotel__img"
                  src={image.src}
                  alt="hotel"
                  key={key}
                />
              </div>
            ))}
          </div>
          <div className="hotel__details">
            <div className="hotel__details-text">
              <h1 className="hotel__details-title">
                Stay in the heart of Krakow
              </h1>
              <p className="hotel__details-description">
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </p>
            </div>
            <div className="hotel__details-price">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <br />
        <Footer />
      </div>
    </div>
  );
}

export default Hotel;
