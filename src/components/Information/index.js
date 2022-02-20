import React from "react";
import { Link } from "react-router-dom";

import { Content } from "./Information.styles";

import Delete from '../../images/delete.png'

const Information = ({ name, description, size }) => {
     return (
          <Content>
               <h3>{name}</h3>
               <p>{description}</p>
               <span>{size}</span>
               <Link to={{
                    pathname:'/',
                    name:'',
                    description:'',
                    size:''
               }}>
                    <div className='delete' title="Delete Property">
                         <img title="Delete Property" alt="Delete" src={Delete} />
                    </div>
               </Link>
          </Content>
     );
}

export default Information;