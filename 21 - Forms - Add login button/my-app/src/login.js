import React from "react"

export class Login extends React.Component{

  state={
    name:'',
    password:'',
    button: false,
  }

  handleInput = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  }

  onLogin = () => {
      this.setState({button: true}); 
  }

  render(){
    return(
      <div>
        <h3>State: {this.state.button.toString()}</h3>
        <input value={this.state.name} placeholder="input space" name="name" onChange={this.handleInput} />
        <input value={this.state.password} placeholder="password" type="password" name="password" onChange={this.handleInput} />
        <button disabled={!this.state.name || !this.state.password} onClick={this.onLogin}>Login</button>
      </div>
    )
  }
}
