import React from "react";

//Components
import Property from "./Property";
import Button from "./Button";

const Home = props => {
     const { name, description, size } = (props.location && props.location.state) || {};
     return(
          <>
               <Button text='+ Add Property' url='/addproperty' />
               <Property name={name} desc={description} size={size} />
          </>
     );
}

export default Home;