import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserForm = props => {
     const [state, setState] = useState({
          username: "",
          email: "",
          city: "",
          phone: ""
     });

     const handleInputChange = event => {
          const { name, value } = event.target;
          setState(prevState => ({
               ...prevState,
               [name]: value
          }));
     };

     return (
          <div>
               <h1>Registration Form</h1>
               <form className="register-form">
                         <label>Username</label>
                         <input
                              type="text"
                              placeholder="Enter username"
                              name="username"
                              onChange={handleInputChange}
                         />

                         <label>Email</label>
                         <input
                              type="email"
                              placeholder="Enter email"
                              name="email"
                              onChange={handleInputChange}
                         />


                         <label>City</label>
                         <input
                              type="text"
                              placeholder="Enter city"
                              name="city"
                              onChange={handleInputChange}
                         />


                         <label>Phone</label>
                         <input
                              type="text"
                              placeholder="Enter phone"
                              name="phone"
                              onChange={handleInputChange}
                         />


                    <Link
                         className="btn btn-primary"
                         to={{
                              pathname: "/details",
                              state
                         }}
                    >
                         Register
                    </Link>
               </form>
          </div>
     );
};

export default UserForm;
