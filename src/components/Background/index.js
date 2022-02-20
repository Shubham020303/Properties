import React from "react";

//Styles
import { Wrapper, Content, Info } from "./Background.styles";

const Background = ({ category, children }) => {
     return (
          <Wrapper>
               <h2>{category}</h2>
               <Content>
                    <Info>
                         {children}
                    </Info>
               </Content>
          </Wrapper>
     );
}

export default Background;