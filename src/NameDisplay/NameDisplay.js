import React from "react";
import './NameDisplay.css'
import { Link } from "react-router-dom";
import Form from "../Form/Form";

const NameDisplay = ({ characterList, handleCallback }) => {
    
    const nameDisplay = characterList.map((name, index) => {
        return (
          <Link to={`/${name}`} key={index} className={name}>
            <p className='underline'>{name}</p>
          </Link>
        )
      })
    
    return (
      <div>
        <section className="info-display">
          <div className='text-container'>
            <h1>DISCOVER GIFS OF YOUR FAVORITE CHARACTERS</h1>
            <Form names={characterList} handleCallback={handleCallback} />
          </div>
        </section>
        <section className="bottom-container">
          <div className='character-list'>
            {nameDisplay}
          </div>
        </section>
      </div>
    )
}

export default NameDisplay;