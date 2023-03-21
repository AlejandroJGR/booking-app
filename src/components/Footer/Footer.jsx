import React from "react";
import "./Footer.css";
import footerData from "../../data/footerData";

const Footer = () => {
  let columns = [];
  for (let i = 0; i < 5; i++) {
    columns.push(
      <ul className="footer__list">
        {footerData.map((item, index) => (
          <li className="footer__list-item" key={index + 1}>
            {item.item}
          </li>
        ))}
      </ul>
    );
  }
  return (
    <div className="footer__container">
      <div className="footer__lists">{columns}</div>
      <div className="footer__bottom-text">Made with 💙 by dev.alejandrojgr. All rights reserved.</div>
    </div>
  );
};

export default Footer;
