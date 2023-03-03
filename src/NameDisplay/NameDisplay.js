import React from "react";
import './NameDisplay.css'
import { Link } from "react-router-dom";

const NameDisplay = ({ characters }) => {
    
    const nameDisplay = characters.map((name, index) => {
        return (
          <Link to={`/character/${name}`} key={index}>
            <p className='underline'>{name}</p>
          </Link>
        )
      })
    
    return (
        <div className='character-list'>
            {nameDisplay}
        </div>
    )
}

export default NameDisplay;