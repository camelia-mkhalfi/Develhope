import React from "react"

export class Welcome extends React.Component{
    render(){
        return(
            <div>
            <h4>Welcome, {this.props.name} </h4>
            <p>Your age is {this.props.age}</p>
            </div>
        )
    }
}

Welcome.defaultProps = {
    name: "Name empty"
};