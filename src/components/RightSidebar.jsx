import React from "react";
import "./RightSidebar.css";
import ShowMore from "./ShowMore";
import GroupCard from "./GroupCard";
import FetchUsers from "./FetchUsers";

function RightSidebar() {
  return (
    <aside className="r-sidebar d-flex flex-column mt-4 d-none d-lg-block">
      <section className="card mb-3 p-3">
        <h5 className="mt-3 fs-6 fw-semibold">People also viewed</h5>
        <FetchUsers nResults={5} />
        <ShowMore />
      </section>

      <section className="card mb-3 p-3">
        <h5 className="mb-3 mt-3 fs-6 fw-semibold"> People you may know</h5>
        <FetchUsers nResults={4} />
        <ShowMore />
      </section>

      <section className="card mb-3 p-3">
        <h5 className="mb-3 mt-3 fs-6 fw-semibold"> You might like</h5>
        <GroupCard
          name={"React Developers"}
          description={"400.900 members"}
          pic="https://unavatar.io/google/react.dev"
        />
        <GroupCard name={"NodeJs"} description={"320.200 members"} pic="https://unavatar.io/google/nodejs.org" />
        <ShowMore />
      </section>
    </aside>
  );
}

export default RightSidebar;
