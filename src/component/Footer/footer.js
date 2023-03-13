import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareTwitter,
  faSquareInstagram,
  faLinkedin,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <FontAwesomeIcon className="socialMediaIcon" icon={faSquareFacebook} />
      <FontAwesomeIcon className="socialMediaIcon" icon={faSquareTwitter} />
      <FontAwesomeIcon className="socialMediaIcon" icon={faSquareInstagram} />
      <FontAwesomeIcon className="socialMediaIcon" icon={faLinkedin} />
      <FontAwesomeIcon className="socialMediaIcon" icon={faSquareGithub} />
    </div>
  );
}
export default Footer;
