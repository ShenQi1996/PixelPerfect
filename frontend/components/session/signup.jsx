import React from "react"
import { Link } from 'react-router-dom';

class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            email: "",
            password: "",
            eError: false,
            pError: false,
        },

            this.handleSubmit = this.handleSubmit.bind(this)
        this.demoSubmit = this.demoSubmit.bind(this)

    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }
    componentDidMount() {
        this.props.clearErrors()
    }

    handleSubmit(e) {
        e.preventDefault()
        if (this.passwordError() == false && this.emailError() !== false) {
            this.setState({ pError: false })
            this.props.clearErrors()
        } else if (this.passwordError() !== false && this.emailError() == false) {
            this.setState({ eError: false })
            this.props.clearErrors()
        } else if (this.passwordError() == false && this.emailError() == false) {
            this.setState({ eError: false })
            this.setState({ pError: false })
            this.props.createNewUser(this.state)
        }
    }


    handleError() {
        const { errors } = this.props
        return (
            <ul>
                {errors.map((error, idx) => (
                    <li key={idx}>{error}</li>
                ))}
            </ul>
        )
    }

    demoSubmit(e) {
        e.preventDefault()
        const demoUser = {
            username: "test0",
            email: "test0@gmail.com",
            password: "123456789"
        }
        this.props.createNewUser(demoUser)
    }


    emailError() {
        if (this.state.email.includes('.com')) {
            return false;
        }
        this.setState({ eError: true });
    }

    passwordError() {
        if (this.state.password.length >= 8) {
            return false;
        }
        this.setState({ pError: true });
    }

    render() {
        return (
            <div className="LS_form_container">
                <div className="errors">{this.handleError()}</div>
                <form className="LS_form">
                    <h2>Sign Up</h2>
                    {/* <div classNam="look"><p>or</p></div> */}
                    <label>Email
                        <input className="LS_Input" type="text" value={this.state.email} onChange={this.handleInput("email")} />
                    </label>
                    {this.state.eError ? <p className="errors">Please enter a valid email address</p> : null}
                    <label>Username
                        <input className="LS_Input" type="text" value={this.state.username} onChange={this.handleInput("username")} />
                    </label>
                    <label>Password
                        <input className="LS_Input" type="password" value={this.state.password} placeholder="(minimum 8 characters)" onChange={this.handleInput("password")} />
                    </label>
                    {this.state.pError ? <p className="errors">Your password must be at least 8 characters long</p> : null}
                    {/* <button className="LS_button" onClick={this.demoSubmit}>Demo Sign Up</button> */}
                    <button className="LS_button" onClick={this.handleSubmit}>Sign Up</button>
                    <div class="bottom_test"><p>Aleady have an account? <Link className="link_with_no_underLine" style={{ color: '#1167cf' }} to="/login">Log in</Link> </p></div>
                </form>
            </div>
        )
    }
}

export default Signup