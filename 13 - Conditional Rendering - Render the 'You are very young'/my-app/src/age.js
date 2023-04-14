import React from "react"

export class Age extends React.Component{
    render(){
        return(
            <p  style={{ display: 'inline' }}><strong>{this.props.age}</strong></p>
        )
    }
}