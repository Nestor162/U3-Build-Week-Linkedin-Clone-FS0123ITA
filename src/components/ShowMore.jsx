import React from "react";
import { ChevronCompactDown } from "react-bootstrap-icons";

function ShowMore() {
  return (
    <div className="show-more text-center text-secondary fw-semibold mb-2">
      <span>Show More </span>
      <ChevronCompactDown size={20} />
    </div>
  );
}

export default ShowMore;
