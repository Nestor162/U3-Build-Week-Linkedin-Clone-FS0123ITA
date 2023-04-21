import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Check2, PlusLg } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_FOLLOW, SET_FOLLOW } from "../redux/actions";

function PeopleCard({ nResults }) {
  const dispatch = useDispatch();

  const following = useSelector(state => state.following.following);
  const followingIds = following.map(following => following._id);

  const handleFollow = post => {
    dispatch({ type: SET_FOLLOW, payload: post });
  };
  const handleUnFollow = post => {
    dispatch({ type: REMOVE_FOLLOW, payload: post });
  };

  const [userList, setUserList] = useState([]);
  const API_KEY = process.env.REACT_APP_API_KEY;
  const FetchUsers = async () => {
    try {
      let resp = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
        headers: { Authorization: `Bearer ${API_KEY}`, "Content-Type": "application/json" }
      });
      if (resp.ok) {
        let users = await resp.json();
        let shuffledUsers = users.sort(() => {
          return Math.random() - 0.5;
        });
        setUserList(shuffledUsers);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {userList.length > 0 &&
        userList.slice(0, nResults).map(user => {
          return (
            <div className="mb-2">
              <Row className="g-0">
                <Col xs={4} style={{ maxWidth: "fit-content" }} className="pt-3 ps-3">
                  <img
                    src={user.image}
                    className="img-fluid rounded-circle"
                    alt={`Profile of ${user.name}`}
                    width="48"
                    height="48"
                  />
                </Col>
                <Col xs={8}>
                  <div className="card-body">
                    <h5 className="card-title fw-semibold fs-6 mb-1">{user.name}</h5>
                    <p className="card-text lh-1">{user.bio}</p>
                    {!followingIds.includes(user._id) ? (
                      <span
                        className="follow-btn py-2 pe-3 ps-2 rounded"
                        style={{ color: "#0a66c2" }}
                        onClick={() => {
                          handleFollow(user);
                        }}
                      >
                        <PlusLg /> <span className="pb-1 align-middle fs-6 fw-semibold">Follow</span>
                      </span>
                    ) : (
                      <>
                        <span
                          className="following-btn py-2 pe-3 ps-2 rounded"
                          style={{ color: "#5e5e5e" }}
                          onClick={() => {
                            handleUnFollow(user);
                          }}
                        >
                          <Check2 /> <span className="pb-1 align-middle fs-6 fw-semibold">Following</span>
                        </span>
                      </>
                    )}
                  </div>
                </Col>
              </Row>
              <hr />
            </div>
          );
        })}
    </>
  );
}

export default PeopleCard;
