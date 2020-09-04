import React from "react";
import {Link} from "react-router-dom";

function PageNotFound() {
  return (
    <div>
      <h1>Page not found</h1>please go somewhere that actually exists{" "}
      <Link to="/">Go home</Link>
    </div>
  );
}

export default PageNotFound;
