import React, { Component } from 'react';
import RegisterData from '../RegisteredData/RegData';

class index2 extends Component {
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
            myData: [],
            updateID: -1
            // view: false,
        }
    }


    onChangeUsername = event => {
        this.setState({ username: event.target.value });
    };

    onChangeEmail = event => {
        this.setState({ email: event.target.value });
    };

    onChangeContact = event => {
        this.setState({ contact: event.target.value });
    };

    onChangeAddress = event => {
        this.setState({ address: event.target.value });
    };

    onChangeUpdateID = event => {
        this.setState({ updateID: event.target.value });
    }

    isValidate = () => {
        let usernameErr = "";
        let emailErr = "";
        let contactErr = "";
        let formValid = true;

// username validation
        if (this.state.username !== "") {
            var pattern = new RegExp(/^[a-zA-Z ]*$/);
            // console.log(pattern.test(this.state.username));
            if(pattern.test(this.state.username) == false){
                formValid = false;
                usernameErr = "Please enter Characters only.";
            }
        }

// email validation
        if(this.state.email !== "") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (pattern.test(this.state.email) == false) { 
                formValid = false;
                emailErr = "Please enter correct email address!"
                // alert("Please enter valid email address.") ;
            }
        }

// contact validation
        if (this.state.contact == false) {
            formValid = false;
            contactErr = "Please enter valid contact";
        }

        this.setState({
            usernameErr: usernameErr,
            emailErr: emailErr,
            contactErr: contactErr
        })

        return formValid;
    };


    onEdit = (index) => {
        let nData = this.state.myData;   
        this.setState({
            updateID: index,
            username: nData[index].username,
            email: nData[index].email,
            contact: nData[index].contact,
            address: nData[index].address,
        })
    }


    onDelete = (index) => {
        let nData = this.state.myData;
        delete nData[index];
        this.setState({
            myData: nData
        })
    }

    onReset = () => {
        this.setState({
            username: '',
            email: '',
            contact: '',
            address: '',
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const formValid = this.isValidate();
        if (formValid === true) {
            let nData = this.state.myData;
            let data = {
                username: this.state.username,
                email: this.state.email,
                contact: this.state.contact,
                address: this.state.address
            };

            if(this.state.updateID == -1){
                nData.push(data);
            }else{
                if(nData[this.state.updateID]){
                    nData[this.state.updateID] = data;
                }
            }
            this.setState({
                myData: nData,
                updateID: -1,
                username: '',
                email: '',
                contact: '',
                address: '',
            })
    
        }
    }

    render() {
        return (
            <div>
                <div className="card mx-auto mt-4 p-3">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input type="text" className="form-control" value={this.state.username} onChange={this.onChangeUsername} id="username" placeholder="Enter Username" name="username"  />
                            <span className="text-danger">{this.state.usernameErr}</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" className="form-control" value={this.state.email} onChange={this.onChangeEmail} id="email" placeholder="Enter email" name="email" />
                            <span className="text-danger">{this.state.emailErr}</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="contact">Contact:</label>
                            <input type="tel" className="form-control" value={this.state.contact} onChange={this.onChangeContact} id="contact" placeholder="Enter contact" name="contact"  pattern="[0-9]{10}"  />
                            <span className="text-danger">{this.state.contactErr}</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address:</label>
                            <textarea type="address" className="form-control" value={this.state.address} onChange={this.onChangeAddress} id="address" placeholder="Enter address" name="address" maxLength="200"  />
                        </div>
                        <button type="submit" className="btn btn-success mr-2">Submit</button>
                        <button type="reset" className="btn btn-warning ml-2" onClick={this.onReset}>Reset</button>
                    </form>
                </div>
                <div>
                {
                    this.state.myData.length > 0 ? 
                        <RegisterData myData={this.state.myData} onUpdate={this.onEdit} onDelete={this.onDelete}  />
                    : null
                 }
                    
                </div>
            </div>
        );
    }
}

export default index2;