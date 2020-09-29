import React, { Component } from 'react';
// import Signup from '../Signup/Signup';
import Index from '../Signup/index.js';
// import Index from '../Signup/index2.js';
// import Login from '../Login/Login';
import './css/home.css';
// import { connect } from 'react-redux';
// import {userSignupRequest} from '../../redux/actions/signupActions.js';

class Home extends Component {

    constructor(props){
        super(props)
    }
    
    render() {

        const { userSignupRequest} = this.props;

        return (
            <div>
                {/* <h1>Home Page</h1> */}
                {/* <div className="row mt-3">
                    <div className="col-1"></div>
                    <div className="col-5">
                        <h2 className="text-danger">Register</h2>
                         <Signup userSignupRequest={userSignupRequest} /> 
                        <Signup />
                    </div>
                    <div className="col-5">
                        <h2 className="text-danger">Login</h2>
                        <Login email='bharti@gmail.com' password='12345678' />
                    </div>
                    <div className="col-1"></div>
                </div> */}
                <div className="row mt-53">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <h2 className="text-danger">My Form</h2>
                        <Index />
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
        );
    }
}

// Home.propTypes = {
//     userSignupRequest: React.PropTypes.func.isRequired
// }


// const mapStateToProps = state => {
//     return {
//         email: state.email,
//         password: state.password
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         email: () => dispatch({ type: "email", value: 'bharti@gmail.com' }),
//         password: () => dispatch({ type: "password", value: '12345678' })
//     };
// };


// export default connect(mapStateToProps, mapDispatchToProps)(Home);

// export default connect(null,{userSignupRequest} )(Home);
export default Home;