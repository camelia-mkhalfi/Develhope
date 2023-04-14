import React from "react"
import { Welcome } from "./welcome";


export class InteractiveWelcome extends React.Component{

    state={
        name:'',
      }

      handleName = (event) => {
        const name = event.target.value;
        console.log(name);
        this.setState({name: name});
      }

    render(){
        return(
          <div>
          <Welcome name={this.state.name}/>
          <input placeholder="input space" value = {this.state.name} onChange={this.handleName}/>
          </div>
        )
    }
}