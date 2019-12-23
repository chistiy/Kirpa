import React from "react";
import UserCard from "./UserCard";

export default function UserList(props) {
  let i = 0;
  return (
    <div id="user-list">
      {props.users.map(user => {
        i++;
        return <UserCard user={user} key={i} />;
      })}
    </div>
  );
}
