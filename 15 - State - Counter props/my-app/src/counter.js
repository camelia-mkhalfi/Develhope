import React from "react"

export class Counter extends React.Component{
  state={
    count: this.props.countValue,
    interval: this.props.intervalValue,
    increment: this.props.incrementValue
  }
    constructor(props) {
        super(props);
        setInterval(() => {
          this.setState((state) => { 
            return {
              count: state.count + this.state.increment,
            }
          })
        }, this.state.interval);
      }
    
  
    render(){
        return(
            <h1>Count: {this.state.count}</h1>
        )
    }
}