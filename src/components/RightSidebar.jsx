import React from "react";
import "./RightSidebar.css";
import PeopleCard from "./PeopleCard";
import ShowMore from "./ShowMore";

function RightSidebar() {
  return (
    <aside className="r-sidebar d-flex flex-column mt-4">
      <section className="card mb-3 p-3">
        <h5 className="mt-3 fs-6 fw-semibold">People also viewed</h5>
        <PeopleCard
          name={"Margherita Dellucci"}
          description={"Senior Web Developer"}
          pic="https://unavatar.io/margherita"
        />
        <PeopleCard
          name={"Ramiro Beneventi"}
          description={"Co-Founder of Lorem Ipsum Inc"}
          pic="https://unavatar.io/ramiro"
        />
        <PeopleCard
          name={"Espedito Angelo"}
          description={"Junior Full-Stack Developer"}
          pic="https://unavatar.io/angelo"
        />
        <PeopleCard
          name={"Daria Bucchos"}
          description={"Recruiter at Example Company."}
          pic="https://unavatar.io/daria"
        />
        <ShowMore />
      </section>

      <section className="card mb-3 p-3">
        <h5 className="mb-3 mt-3 fs-6 fw-semibold"> People you may know</h5>
        <PeopleCard name={"Noemi Pisano"} description={"Junior Front-end developer"} pic="https://unavatar.io/noemi" />
        <PeopleCard name={"Fosco Marcelo"} description={"Senior Back-end dev"} pic="https://unavatar.io/fosco" />
        <PeopleCard name={"Ilario Capon"} description={"UI/UX Designer"} pic="https://unavatar.io/Ilario" />
        <ShowMore />
        <PeopleCard name={"Valerio Dellucci"} description={"Java developer"} pic="https://unavatar.io/Valerio" />
        <ShowMore />
        <PeopleCard
          name={"Ermenegildo Palermo"}
          description={"Senior mobile developer"}
          pic="https://unavatar.io/Palermo"
        />
        <ShowMore />
      </section>

      <section className="card mb-3 p-3">
        <h5 className="mb-3 mt-3 fs-6 fw-semibold"> You might like</h5>
        <PeopleCard
          name={"React Developers"}
          description={"400.900 members"}
          pic="https://unavatar.io/google/react.dev"
        />
        <PeopleCard name={"NodeJs"} description={"320.200 members"} pic="https://unavatar.io/google/nodejs.org" />
        <ShowMore />
      </section>
    </aside>
  );
}

export default RightSidebar;
