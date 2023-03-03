import React, { Component } from "react";
import './Form.css'
import { Link } from "react-router-dom";

class Form extends Component {
    constructor() {
        super()
        this.state ={
            userSelection: ''
        }
    }

    handleChange = (e) => {
        const selectedCharacter = this.props.names.find(name => name === e.target.value)
        this.setState({ userSelection: selectedCharacter === undefined ? '' : selectedCharacter})
    }

    handleSubmit = (e) => {
        this.props.handleCallback(this.state.userSelection)
    }

    render() {
        const options = this.props.names.map((name, index) => {
            return (
                <option key={index}>{name}</option>
            )
        })

        return (
            <form className="search-field">
                <input 
                    type="search" 
                    list="names" 
                    placeholder="Search..." 
                    onChange={this.handleChange}
                    required
                 />
                <datalist id="names">
                    {options}
                </datalist>
                <Link to={`/character/${this.state.userSelection}`}>
                    <button 
                        type='submit'
                        onClick={this.handleSubmit}
                        >
                        Submit
                    </button>
                </Link>
            </form>
        )
    }
}

export default Form;