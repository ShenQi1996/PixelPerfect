import React from "react";
import { Link } from 'react-router-dom';
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            email: "",
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this)
        this.demoSubmit = this.demoSubmit.bind(this)
    }

    handleInput(type){
        return e => {
            this.setState({[type]: e.target.value})
        }
    }


    componentDidMount(){
        this.props.clearErrors()
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.loginUser(this.state)
    }
    
    demoSubmit(e){
        e.preventDefault()
        const demoUser ={
            email: "tester@gmail.com",
            password: "123456789"
        }
        this.props.loginUser(demoUser)
    }


    handleError(){
        const {errors} = this.props
        return(
            <ul>
                {errors.map((error, idx) => (
                    <li key={idx}>{error}</li> 
                ))}
            </ul>
        )
    }


    render(){
        return(
            <div className="LS_form_container">
                <div className="errors">{this.handleError()}</div>
                <form className="LS_form">
                <h2>Log in to PixelPerfect</h2>
                    <label>Email:
                        <input className="LS_Input" type="text" value={this.state.email} onChange={this.handleInput("email")} />
                    </label>
                    <label>Password:
                        <input className="LS_Input" type="password" value={this.state.password} onChange={this.handleInput("password")} />
                    </label>
                    <button className="LS_button" onClick={this.demoSubmit}> Demo User Login</button>
                    <button className="LS_button" onClick={this.handleSubmit}>Log In</button>
                    <div className="bottom_test"><p>Don't have an account? <Link className="link_with_no_underLine" style={{ color: '#1167cf'}} to="/signup">Sign Up</Link></p></div>
                </form>
            </div>
        )
    }
}

export default Login