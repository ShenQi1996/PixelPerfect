import React from "react"


class Signup extends React.Component{
    constructor(props){
        super(props)
        this.state = {
           username: "",
            email: "",
            firstname: "",
            lastname: "",
            password: "",
            aboutMe: ""
        },

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(type){
        return(e) =>{
            this.setState({[type]: e.target.value})
        }
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.createNewUser(this.state)
            .then(() => this.props.history.push("/")); 
            // need to change this later 
    }

    render(){
        return (
            <div>
                <h1>Sign Up</h1>
                <form >
                    <label>Username
                        <input type="text" value={this.state.username} onChange={this.handleInput("username")} />
                    </label>
                    <label>Email
                        <input type="text" value={this.state.email} onChange={this.handleInput("email")} />
                    </label>
                    <label>Lastname:
                        <input type="text" value={this.state.lastname} onChange={this.handleInput("lastname")} />
                    </label>
                    <label>Firstname:
                        <input type="text" value={this.state.firstname} onChange={this.handleInput("firstname")} />
                    </label>
                    <label>Password
                        <input type="password" value={this.state.password} onChange={this.handleInput("password")} />
                    </label>
                    <label>AboutMe:
                        <textarea  cols="30" rows="10"   value={this.state.aboutMe} onChange={this.handleInput("aboutMe")}></textarea>
                    </label>
                    <button onClick={this.handleSubmit}>Sign Up</button>
                </form>
            </div>
        )
    }
}

export default Signup