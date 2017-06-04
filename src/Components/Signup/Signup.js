import React, { Component } from 'react';
import {Link} from "react-router-dom"

class Signup extends React.Component{
    constructor(props) {
        super(props);
        this.state = {email: "", linkedin: ""}
    }
    

    signingUp = (e) => {

        e.preventDefault();
        console.log(this.state.email)
        console.log(this.state.linkedin)
    }

    handleChange = (e) => {
        
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        
        return(
            <div>
                <form onSubmit={this.signingUp}>
                    <label>Email</label>
                    <input
                    type="text"
                    className="email"
                    name="email"
                    onChange={this.handleChange}
                    value={this.state.email}
                    />
                    <label>LinkedIn</label>
                    
                    <input
                    type="text"
                    className="linkedin"
                    name="linkedin"
                    onChange={this.handleChange}
                    value={this.state.linkedin}
                    />

                    <input
                    type="submit"
                    className="submit-button"
                    />
                </form>

            </div>
        )
    }
}

export default Signup