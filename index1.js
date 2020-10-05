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
            // data: [],
            view: false,
        }
    }
   
    onChangeUsername = event => {
        localStorage.setItem('username', event.target.value);
        this.setState({ username: event.target.value });
        return this.onKeyUpUsername(event);
    };

    onChangeEmail = event => {
        localStorage.setItem('email', event.target.value);
        this.setState({ email: event.target.value });
        return this.onKeyUpEmail(event);
    };

    onChangeContact = event => {
        localStorage.setItem('contact', event.target.value);
        this.setState({ contact: event.target.value });
        return this.onKeyUpContact(event);
    };

    onChangeAddress = event => {
        localStorage.setItem('address', event.target.value);
        this.setState({ address: event.target.value });
    };

    onKeyUpUsername = (event) => {
        let username = event.target.value;
        // let usernameErr = "";

        //when username is null
        if(username == "") {
            // usernameErr = 'Enter Username';
            return false;
        }
        
        //if username not valid
        if (!username.match(/^[a-zA-Z ]*$/)) {
            alert('Invalid Username. Enter Characters only');
            // usernameErr = 'Invalid Username. Enter Characters only';
            return false;
        }
        
        // this.setState({
        //     usernameErr: usernameErr,
        // })

        return true;
    
    }

    onKeyUpEmail = (event) => {
        let email = event.target.email;
        // let emailErr = "";
        
        // if email is null
        if (email == null) {
            // emailErr = 'Please Enter Email!';
            return false;
        }

        // if email format is invalid
        if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            alert('This is not a valid email format. Please enter valid Email!');
            // emailErr = 'This is not a valid email format. Please enter valid Email!';
            return false;
        }
        
        // this.setState({
        //     emailErr: emailErr,
        // })

        return true; 
    }

    onKeyUpContact = (event) => {
        var allowedChars = "0123456789";
        let contact = event.target.value;
        let contactErr = "";
        
        if (contact == null) {
            // contactErr = 'Please Enter Email!';
            return false;
        }

        for (var idx = 0; idx < contact.length; idx++) {
            if(idx >= 10){
                alert('Enter 10 number of your contact');
                // contactErr = 'Enter 10 number of your contact';
                return false;
            }
            if (idx === 0) {
                if (allowedChars.indexOf(contact.charAt(idx)) === -1) {
                    alert('Please Enter Valid contact!');
                    // contactErr = 'Please Enter Valid contact!';
                    return false;
                }
            }
        }

        // this.setState({
        //     contactErr: contactErr,
        // })
        
        return true;
    }


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
                            <input type="text" className="form-control" value={this.state.username} onChange={this.onChangeUsername} id="username" placeholder="Enter Username" name="username" />
                            <span className="text-danger">{this.state.usernameErr}</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" className="form-control" value={this.state.email} onChange={this.onChangeEmail} id="email" placeholder="Enter email" name="email" />
                            <span className="text-danger">{this.state.emailErr}</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="contact">Contact:</label>
                            <input type="tel" className="form-control" value={this.state.contact} onChange={this.onChangeContact} id="contact" placeholder="Enter contact" name="contact"    />
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