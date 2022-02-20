import React, { useState } from "react";
import { Link } from "react-router-dom";

//Styles
import { Wrapper, Content } from "./Form.styles";

const Form = () => {
     const [state, setState] = useState({
          name: "",
          description: "",
          size: "",
     });

     const handleInputChange = event => {
          const { name, value } = event.target;
          setState(prevState => ({
               ...prevState,
               [name]: value
          }));
     };

     return (
          <Wrapper>
               <Content>
                    <h1>Add New Property</h1>
                    <form>
                         <label>Property Name</label>
                         <input type='text' name="name" placeholder="Dean's House" onChange={handleInputChange} />
                         <label>Description</label>
                         <textarea type='text' name="description" rows='10' cols='50' placeholder="The house has 2 rooms and a kitchen." onChange={handleInputChange} />
                         <label>Size</label>
                         <input type='text' name="size" placeholder="25000 sq ft" onChange={handleInputChange} />
                    </form>
                    <div className="buttons">
                         <Link to='/'>Back</Link>
                         <Link
                              className="btn btn-primary"
                              to={{
                                   pathname: "/",
                                   state
                              }}
                         >
                              Add
                         </Link>
                    </div>
               </Content>
          </Wrapper>
     );
}

export default Form;