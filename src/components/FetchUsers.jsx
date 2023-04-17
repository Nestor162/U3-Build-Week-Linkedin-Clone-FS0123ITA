import React, { useEffect, useState } from "react";
import PeopleCard from "./PeopleCard";

function FetchUsers({ nResults }) {
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
          return <PeopleCard key={user._id} name={user.name} description={user.title} pic={user.image} />;
        })}
    </>
  );
}

export default FetchUsers;
