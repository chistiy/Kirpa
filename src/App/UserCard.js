import React from "react";
import UserAvatar from "./UserAvatar";

export default function UserCard({ user }) {
  return (
    <div className="card">
      <UserAvatar width="500px" height="500px" src={user.picture.large} />
      <p>
        {user.name.title} {user.name.first} {user.name.last}
      </p>
      <p>{user.gender}</p>
      <p>
        {user.location.country} {user.location.city} {user.location.street.name}
        {user.location.street.number}
      </p>
      <p>{user.email}</p>
      <p>{user.dob.date}</p>
      <p>{user.dob.age}</p>
      <p>{user.phone}</p>
    </div>
  );
}
