import React from "react";
import { NavLink } from "react-router-dom";

const Details = props => {
  const { username, email, city, phone } =
    (props.location && props.location.state) || {};
    console.log(props.location);
  return (
    <div>
      <NavLink to="/">
        Go Back
      </NavLink>
      <div className="form-details">
        <div>
          <strong>Username:</strong> {username}
        </div>
        <div>
          <strong>Email:</strong> {email}
        </div>
        <div>
          <strong>City:</strong> {city}
        </div>
        <div>
          <strong>Phone:</strong> {phone}
        </div>
      </div>
    </div>
  );
};

export default Details;
