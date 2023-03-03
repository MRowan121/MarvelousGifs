import React, { Component } from "react";
import './Form.css'
import { Link } from "react-router-dom";
import { MdOutlineSearch } from "react-icons/md";

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

    clearInputs = () => {
        this.setState({ userSelection:'' })
    }

    render() {
        const options = this.props.names.map((name, index) => {
            return (
                <option key={index}>{name}</option>
            )
        })

        return (
            <form className="form">
                <input 
                    type="search" 
                    className="search-field"
                    list="names" 
                    placeholder="Search..." 
                    onChange={this.handleChange}
                    required
                />
                    <datalist id="names">
                        {options}
                    </datalist>
                <Link to={`/character/${this.state.userSelection}`} className="btn-link">
                    <button type='submit' className="search-btn" onClick={this.clearInputs}>
                        <MdOutlineSearch />
                    </button>
                </Link>
            </form>
        )
    }
}

export default Form;