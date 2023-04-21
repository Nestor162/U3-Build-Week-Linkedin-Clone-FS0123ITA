import React from "react";
import { Badge } from "react-bootstrap";
import { X } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_FAVORITE } from "../redux/actions";

function FavoritesSidebar() {
  const favoriteList = useSelector(state => state.favorites.favorites);
  const dispatch = useDispatch();

  return (
    <aside className="r-sidebar d-flex flex-column pt-3">
      <section className="card mb-3 p-3 asideCard">
        <h5 className="mt-3 fs-6 fw-semibold">Jobs marked as favorites</h5>
        {console.log(favoriteList)}
        {favoriteList &&
          favoriteList.map(favJob => {
            return (
              <>
                <div key={favJob._id} className="m-2">
                  <div className="d-flex justify-content-between">
                    <h5>{favJob.title}</h5>
                    <X
                      size={30}
                      className="close-icon"
                      onClick={() => {
                        dispatch({ type: REMOVE_FAVORITE, payload: favJob });
                      }}
                    />
                  </div>
                  <p className="text-secondary mb-2">{favJob.company_name}</p>
                  <small className="text-muted d-block mb-2">
                    {new Date(favJob.publication_date).toLocaleString()}
                  </small>

                  <Badge className="me-2">{favJob.category}</Badge>
                  <Badge className="me-2">{favJob.salary}</Badge>
                  <Badge className="me-2">{favJob.job_type}</Badge>
                  <Badge className="me-2">{favJob.candidate_required_location}</Badge>
                </div>
                <hr />
              </>
            );
          })}
      </section>
    </aside>
  );
}

export default FavoritesSidebar;
