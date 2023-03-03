import React, { Component } from "react";
import './Form.css'
import { Link } from "react-router-dom";
import { MdOutlineSearch } from "react-icons/md";
import swal from 'sweetalert'


class Form extends Component {
    constructor() {
        super()
        this.state ={
            userSelection: '',
            error: '',
        }
    }

    handleChange = (e) => {
        const selectedCharacter = this.props.names.find(name => name === e.target.value)
        this.setState({ userSelection: selectedCharacter === undefined ? '' : selectedCharacter})
    }

    handleSubmit = (e) => {
        if(this.state.userSelection === '') {
            this.setState({ error: "Input not found"})
            swal('Character Not Found', 'Please try again!', 'error');
        }
    }

    render() {
        const options = this.props.names.map((name, index) => {
            return (
                <option key={index}>{name}</option>
            )
        })

        const searchValidation = this.state.userSelection ? `/character/${this.state.userSelection}` :'/'

        return (
            <form className="form" onChange={this.handleChange}>
                <input 
                    type="search" 
                    className="search-field"
                    list="names" 
                    placeholder="Search..." 
                    autoComplete="off"
                    required
                />
                    <datalist id="names">
                        {options}
                    </datalist>
                <Link to={searchValidation} className="btn-link" tabIndex={-1}>
                <button type='submit' className="search-btn" onClick={this.handleSubmit}>
                    <MdOutlineSearch />
                </button>
            </Link> 
            </form>
        )
    }
}

export default Form;