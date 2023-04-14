import React from "react"

export class Welcome extends React.Component{
    render(){
        return(
            <div>
            <p>Welcome, <strong>{this.props.name}</strong> </p>
            <p>Your age is <strong>{this.props.age}</strong></p>
            </div>
        )
    }
}