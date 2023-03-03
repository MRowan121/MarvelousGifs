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
      <section className="bottom-container">
        <div className='character-list'>
            {nameDisplay}
        </div>
      </section>
    )
}

export default NameDisplay;