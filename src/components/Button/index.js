import React from "react";
import { Link } from "react-router-dom";

//Styles
import { Container, Info } from "./Button.styles";

const Button = ({ text, url }) => {
     return (
          <Container>
               <Info>
                    <Link to={{
                         pathname: `${url}`,
                    }}>
                         {text}
                    </Link>
               </Info>
          </Container>
     );
}

export default Button;