import React from "react";
import "./RightSidebar.css";
import ShowMore from "./ShowMore";
import PeopleCardHome from "./PeopleCardHome";

function RightSidebar() {
  return (
    <aside className="r-sidebar d-flex flex-column pt-3 d-none d-lg-block">
      <section className="card mb-3 p-3 asideCard">
        <h5 className="mt-3 fs-6 fw-semibold"> Add to your feed </h5>
        <PeopleCardHome nResults={3} />
        <ShowMore />
      </section>
    </aside>
  );
}

export default RightSidebar;
