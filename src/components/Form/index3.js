import React from "react";

//Styles
import { Wrapper, Content } from "./Form.styles";

//Components
import Button from "../Button";

const Form = () => {
     return (
          <Wrapper>
               <Content>
                    <h1>Add New Property</h1>
                    <form>
                         <label>Property Name</label>
                         <input type='text' placeholder="Bobby's House" />
                         <label>Description</label>
                         <textarea type='text' rows='10' cols='50' placeholder="The house has 2 rooms and a kitchen." />
                         <label>Size</label>
                         <input type='text' placeholder="25000 sq ft" />
                    </form>
                    <div className="buttons">
                         <Button text='Back' url='/' /> <Button text='Submit' url='/' />
                    </div>
               </Content>
          </Wrapper>
     );
}

export default Form;