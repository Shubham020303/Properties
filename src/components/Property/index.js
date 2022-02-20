import React from "react";

//Components
import Background from "../Background";
import Information from "../Information";

const Property = ({ name, desc, size }) => {

     return (
          <div>
               {(() => {
                    if ((name != '' && name != undefined) || (desc != '' && desc != undefined) || (size != '' && size != undefined)) {
                         return (
                              <Background category='New'>
                                   <Information
                                        name={name}
                                        description={desc}
                                        size={size}
                                   />
                              </Background>
                         );
                    }
                    return (
                         <Background>
                              <h1>No Properties</h1>
                         </Background>
                    );
               })()}
          </div>
     );
}

export default Property;