import React from "react";
import { Link } from "react-router-dom";

//Style
import { Wrapper, Content } from "./Header.styles";

const Header = () => (
     <Wrapper>
          <Content>
               <h1>
                    <Link to='/'>
                         Properties
                    </Link>
               </h1>
          </Content>
     </Wrapper>
)

export default Header;