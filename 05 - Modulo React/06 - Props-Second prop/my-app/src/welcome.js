import React from "react"

export class Welcome extends React.Component{
    render(){
        return(
            <div>
            <h1>Welcome, {this.props.name} </h1>
            <h2>Your age is {this.props.age}</h2>
            </div>
        )
    }
}

Welcome.defaultProps = {
    name: "Name empty"
};