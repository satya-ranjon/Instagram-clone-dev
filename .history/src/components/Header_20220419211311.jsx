import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-regular-svg-icons";
import { faTintSlash } from "@fortawesome/free-solid-svg-icons";

export default function Hader() {
  return (
    <div>
      <FontAwesomeIcon icon={faTintSlash} />{" "}
      <FontAwesomeIcon icon="fa-brands fa-instagram" />
      <FontAwesomeIcon icon="fa-brands fa-twitter" />
    </div>
  );
}
