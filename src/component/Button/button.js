import React from "react";
import "./button.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Button() {
  return (
    <button>
      <FontAwesomeIcon icon={faEnvelope} /> <span>Email</span>
    </button>
  );
}

export default Button;
