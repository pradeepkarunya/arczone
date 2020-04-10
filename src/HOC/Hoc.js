import React from 'react';
import './Hoc.css';


export default function Hoc(props) {
    return (
        <>
          <div className="hocClass">
          {props.children}  
          </div>
        </>
    )
}
