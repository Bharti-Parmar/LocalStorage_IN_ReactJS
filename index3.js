import { remove, truncate } from 'lodash';
import React, { Component } from 'react';
// import { ReactReduxContext } from 'react-redux';
import './css/Validation.css';
import RegisterData from '../RegisteredData/RegisterData';

class Index extends Component {

    constructor(props){
        super(props)
        this.state = {
            username: '',
            email: '',
            contact: '',
            address: '',
            usernameErr: '',
            emailErr: '',
            contactErr: '',  
            data: [],
            view: false,
        }
    }
   
    onChangeUsername = event => {
        localStorage.setItem('username', event.target.value);
        this.setState({ username: event.target.value });
    };

    onChangeEmail = event => {
        localStorage.setItem('email', event.target.value);
        this.setState({ email: event.target.value });
    };

    onChangeContact = event => {
        localStorage.setItem('contact', event.target.value);
        this.setState({ contact: event.target.value });
    };

    onChangeAddress = event => {
        localStorage.setItem('address', event.target.value);
        this.setState({ address: event.target.value });
    };

    // onKeyUpUsername = (event) => {
    //     let username = event.target.value;
    //     if (username !== "") {
    //         if (username.match(/^[a-zA-Z ]*$/)) {
    //             return false;
    //         }
    //         else {
    //             return true;
    //         }
    //     }
    //     else
    //         return true;
    // }

    // onKeyUpEmail = (email) => {
    //     if (typeof (email) == "undefined" || email == null) {
    //         return true
    //     }
    //     if (email.length > 0) {
    //         if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    //             return (true)
    //         }
    //         return (false)
    //     }
    //     return true; 
    // }

    // onKeyUpContact = (contact) => {
    //     var allowedChars = "0123456789";

    //     for (var idx = 0; idx < contact.length; idx++) {
    //         if (idx === 0) {
    //             if (allowedChars.indexOf(contact.charAt(idx)) === -1) {
    //                 return false;
    //             }
    //         }
    //     }

    //     return true;
    // }

    onEdit = () => {  
        this.setState({
            username: localStorage.getItem('username'),
            email: localStorage.getItem('email'),
            contact: localStorage.getItem('contact'),
            address: localStorage.getItem('address'),
        });
    };


    onDelete = () => {

        localStorage.clear();   // Clear All local storage value's
        this.setState({
            username: localStorage.getItem('username'),
            email: localStorage.getItem('email'),
            contact: localStorage.getItem('contact'),
            address: localStorage.getItem('address'),
            view:false
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        // const formValid = this.isValidate();
        // if (formValid === true) {
            this.setState({
                username: '',
                email: '',
                contact: '',
                address: '',
                view:true,
            })
        // }
    }

    render() {
        return (
            <div>
                <div className="card mx-auto mt-4 p-3">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input type="text" className="form-control" value={this.state.username} onChange={this.onChangeUsername} id="username" placeholder="Enter Username" name="username" pattern='[A-Za-z ]*' />
                            <span className="text-danger">{this.state.usernameErr}</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" className="form-control" value={this.state.email} onChange={this.onChangeEmail} id="email" placeholder="Enter email" name="email"  pattern='[a-zA-z0-9.]{2,}@[a-zA-z]+\.[a-zA-z]+' />
                            <span className="text-danger">{this.state.emailErr}</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="contact">Contact:</label>
                            <input type="tel" className="form-control" value={this.state.contact} onChange={this.onChangeContact} id="contact" placeholder="Enter contact" name="contact" pattern='[0-9]{10}' />
                            <span className="text-danger">{this.state.contactErr}</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address:</label>
                            <textarea type="address" className="form-control" value={this.state.address} onChange={this.onChangeAddress} id="address" placeholder="Enter address" name="address" maxLength="200"  />
                        </div>
                        <button type="submit" className="btn btn-success mr-2">Submit</button>
                        {/* <button type="reset" className="btn btn-warning ml-2" onClick={this.onReset}>Reset</button> */}
                    </form>
                </div>
                <div>
                {
                    this.state.view ? 
                        <RegisterData username={localStorage.getItem('username')} email={localStorage.getItem('email')} contact={localStorage.getItem('contact')} address={localStorage.getItem('address')} 
                                      onUpdate={this.onEdit} onDelete={this.onDelete} />
                    : null
                 }
                    
                </div>
            </div>
        );
    }
}


export default Index;