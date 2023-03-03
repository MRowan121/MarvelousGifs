import React from "react";
import './InfoDisplay.css'
import Form from "../Form/Form";

const InfoDisplay = ({ selection, characterList }) => {
    return (
        <section className="info-display">
            {selection === '' ?
                <div className='text-container'>
                    <h2>DISCOVER GIFS OF YOUR FAVORITE CHARACTERS</h2>
                    <Form names={characterList} />
                </div>
            :
                <div className="text-container">
                    <h1>{selection}</h1>
                </div>
            }
        </section>
    )
}

export default InfoDisplay;